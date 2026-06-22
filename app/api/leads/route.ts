import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  enquiryType: "Retail" | "Commercial" | "Hospitality" | "Partner" | "General";
  projectDescription?: string;
  source: "website" | "popup" | "meta" | "linkedin";
  callbackRequested?: boolean;
  utmCampaign?: string;
  utmMedium?: string;
  utmSource?: string;
}

function normalizeAuPhone(raw: string): string {
  const d = raw.replace(/[^\d+]/g, "");
  if (d.startsWith("+")) return d;
  if (d.startsWith("0")) return "+61" + d.slice(1);
  if (d.startsWith("61")) return "+" + d;
  return "+61" + d;
}

async function createCallbackTask(apiKey: string, recordId: string, lead: LeadPayload) {
  // Due within 4 business hours of the request.
  const deadline = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();
  const contact = lead.phone ? normalizeAuPhone(lead.phone) : lead.email;
  const res = await fetch("https://api.attio.com/v2/tasks", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        content: `Callback requested via website popup. Call ${contact} within 4 business hours.`,
        format: "plaintext",
        deadline_at: deadline,
        is_completed: false,
        linked_records: [{ target_object: "people", target_record_id: recordId }],
        assignees: [],
      },
    }),
  });
  if (!res.ok) {
    // Don't fail the whole lead if tasks scope is missing — the note still records it.
    console.error("[/api/leads] Attio task failed:", await res.text());
  }
}

async function upsertAttioContact(lead: LeadPayload) {
  const apiKey = process.env.ATTIO_API_KEY;
  if (!apiKey) throw new Error("ATTIO_API_KEY not set");

  const fullName = `${lead.firstName ?? ""} ${lead.lastName ?? ""}`.trim();
  const attributes: Record<string, unknown> = {
    email_addresses: [lead.email],
    ...(fullName && {
      name: [{ first_name: lead.firstName ?? "", last_name: lead.lastName ?? "", full_name: fullName }],
    }),
    ...(lead.phone && { phone_numbers: [normalizeAuPhone(lead.phone)] }),
  };

  // Upsert person record (matched on email).
  const personRes = await fetch(
    "https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses",
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ data: { values: attributes } }),
    },
  );

  if (!personRes.ok) {
    const err = await personRes.text();
    throw new Error(`Attio upsert failed: ${err}`);
  }

  const person = await personRes.json();
  const recordId = person?.data?.id?.record_id;
  if (!recordId) return recordId;

  // Add a note with the details captured so far.
  const noteBody = [
    fullName ? `Name: ${fullName}` : "",
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : "",
    `Enquiry Type: ${lead.enquiryType}`,
    `Source: ${lead.source}`,
    lead.callbackRequested ? "Callback requested: YES — within 4 business hours" : "",
    lead.utmCampaign ? `Campaign: ${lead.utmCampaign}` : "",
    lead.projectDescription ? `\nProject details:\n${lead.projectDescription}` : "",
  ].filter(Boolean).join("\n");

  const noteTitle = lead.source === "popup"
    ? (lead.callbackRequested ? "Website popup - callback requested" : "Website popup - email captured")
    : `Website enquiry - ${lead.enquiryType}`;

  await fetch("https://api.attio.com/v2/notes", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        parent_object: "people",
        parent_record_id: recordId,
        title: noteTitle,
        format: "plaintext",
        content: noteBody,
      },
    }),
  });

  // Create a follow-up task when a callback is requested.
  if (lead.callbackRequested) {
    await createCallbackTask(apiKey, recordId, lead);
  }

  return recordId;
}

async function sendEmails(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // soft fail - don't block response

  // Popup email-only captures don't trigger the full email flow until they're a real enquiry.
  if (lead.source === "popup" && !lead.callbackRequested) return;

  const to = (process.env.NOTIFICATION_EMAIL_TO ?? "marcus@hallmarcfitouts.com.au").split(",");
  const from = process.env.NOTIFICATION_EMAIL_FROM ?? "noreply@hallmarcfitouts.com.au";
  const name = `${lead.firstName ?? ""} ${lead.lastName ?? ""}`.trim();
  const greeting = lead.firstName ? lead.firstName : "there";

  // Internal notification
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject: lead.callbackRequested
        ? `CALLBACK requested - ${name || lead.email}`
        : `New ${lead.enquiryType} enquiry - ${name || lead.email}`,
      html: `
        ${lead.callbackRequested ? `<p><strong>⏰ Callback requested — within 4 business hours</strong></p>` : ""}
        <p><strong>Name:</strong> ${name || " - "}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone ?? " - "}</p>
        <p><strong>Enquiry type:</strong> ${lead.enquiryType}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        ${lead.projectDescription ? `<p><strong>Project details:</strong><br>${lead.projectDescription.replace(/\n/g, "<br>")}</p>` : ""}
        ${lead.utmCampaign ? `<p><strong>Campaign:</strong> ${lead.utmCampaign}</p>` : ""}
      `,
    }),
  });

  // Acknowledgement to submitter
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [lead.email],
      subject: "Thanks for reaching out - Hallmarc National Fitouts",
      html: `
        <p>Hi ${greeting},</p>
        <p>Thanks for getting in touch. ${lead.callbackRequested
          ? "We've received your callback request and a member of our team will call you within 4 business hours."
          : "We've received your enquiry and a member of our team will be in touch within one business day."}</p>
        <p>In the meantime, you can reach us directly at <a href="mailto:hello@hallmarcfitouts.com.au">hello@hallmarcfitouts.com.au</a>.</p>
        <p>The Hallmarc team</p>
        <p style="color:#888;font-size:12px;">Hallmarc National Fitouts · hallmarcfitouts.com.au<br>Licensed in VIC, QLD, SA, ACT and WA.</p>
      `,
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const lead = (await request.json()) as LeadPayload;

    if (!lead.email || !lead.enquiryType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [attioResult] = await Promise.allSettled([
      upsertAttioContact(lead),
      sendEmails(lead),
    ]);

    if (attioResult.status === "rejected") {
      console.error("[/api/leads] Attio failed:", attioResult.reason);
      return NextResponse.json(
        { success: false, error: String(attioResult.reason) },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/leads]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
