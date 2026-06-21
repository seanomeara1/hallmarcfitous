import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  enquiryType: "Retail" | "Commercial" | "Hospitality" | "Partner" | "General";
  projectDescription?: string;
  source: "website" | "meta" | "linkedin";
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

async function upsertAttioContact(lead: LeadPayload) {
  const apiKey = process.env.ATTIO_API_KEY;
  if (!apiKey) throw new Error("ATTIO_API_KEY not set");

  const fullName = `${lead.firstName} ${lead.lastName ?? ""}`.trim();
  const attributes: Record<string, unknown> = {
    name: [{ first_name: lead.firstName, last_name: lead.lastName ?? "", full_name: fullName }],
    email_addresses: [lead.email],
    ...(lead.phone && { phone_numbers: [normalizeAuPhone(lead.phone)] }),
  };

  // Upsert person record
  const personRes = await fetch(
    "https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses",
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { values: attributes } }),
    },
  );

  if (!personRes.ok) {
    const err = await personRes.text();
    throw new Error(`Attio upsert failed: ${err}`);
  }

  const person = await personRes.json();
  const recordId = person?.data?.id?.record_id;

  // Add note with enquiry details
  if (recordId) {
    const noteBody = [
      `Name: ${fullName}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : "",
      `Enquiry Type: ${lead.enquiryType}`,
      `Source: ${lead.source}`,
      lead.utmCampaign ? `Campaign: ${lead.utmCampaign}` : "",
      lead.projectDescription ? `\nProject details:\n${lead.projectDescription}` : "",
    ].filter(Boolean).join("\n");

    await fetch("https://api.attio.com/v2/notes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          parent_object: "people",
          parent_record_id: recordId,
          title: `Website enquiry — ${lead.enquiryType}`,
          format: "plaintext",
          content: noteBody,
        },
      }),
    });
  }

  return recordId;
}

async function sendEmails(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // soft fail — don't block response

  const to = (process.env.NOTIFICATION_EMAIL_TO ?? "marcus@hallmarcfitouts.com.au").split(",");
  const from = process.env.NOTIFICATION_EMAIL_FROM ?? "noreply@hallmarcfitouts.com.au";

  // Internal notification
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject: `New ${lead.enquiryType} enquiry — ${lead.firstName} ${lead.lastName ?? ""}`.trim(),
      html: `
        <p><strong>Name:</strong> ${lead.firstName} ${lead.lastName ?? ""}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone ?? "—"}</p>
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
      subject: "Thanks for reaching out — Hallmarc National Fitouts",
      html: `
        <p>Hi ${lead.firstName},</p>
        <p>Thanks for getting in touch. We've received your enquiry and a member of our team will be in touch within one business day.</p>
        <p>In the meantime, you can reach us directly at <a href="mailto:hello@hallmarcfitouts.com.au">hello@hallmarcfitouts.com.au</a>.</p>
        <p>— The Hallmarc team</p>
        <p style="color:#888;font-size:12px;">Hallmarc National Fitouts · hallmarcfitouts.com.au<br>Licensed in VIC, QLD, SA, ACT and WA.</p>
      `,
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const lead = (await request.json()) as LeadPayload;

    if (!lead.firstName || !lead.email || !lead.enquiryType) {
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
