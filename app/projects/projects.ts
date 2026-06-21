export interface Project {
  slug: string;
  title: string;
  location: string;
  vertical: "Retail" | "Commercial" | "Hospitality";
  summary: string;
  scope: string;
  challenge: string;
  solution: string;
  outcome: string;
  images: string[];
  video?: string; // YouTube/Vimeo embed URL
}

const B = "https://images.squarespace-cdn.com/content/v1/67280211d7c97448975a8636/";

export const PROJECTS: Project[] = [
  {
    slug: "stylerunner",
    title: "Stylerunner",
    location: "Kotara, NSW",
    vertical: "Retail",
    summary: "A 105m² premium retail fitout for the Accent Group, delivered defect-free and on time.",
    scope: "105m² premium retail fitout for the Accent Group.",
    challenge: "Creating a high-interaction space where technical lighting and custom joinery make product ranges shine to drive revenue.",
    solution: "We leveraged our long-term partnership with Accent Group to execute a precision build focused on seamless fashion-functionality integration.",
    outcome: "A 100% defect-free handover by the due date — positioning Hallmarc to complete multiple ongoing projects with the parent group.",
    images: [
      B + "802b00f4-e4d0-4fbb-a776-52b90ed30fa0/style+runner+TESS+LEHMAN-7.jpg",
      B + "383780d2-e6c8-4ae7-83e5-b5871e4f6ce2/style+runner+TESS+LEHMAN-14.jpg",
      B + "d3553e17-c9e6-4682-83b0-233b23a9e458/style+runner+TESS+LEHMAN-31.jpg",
      B + "f7960c33-2989-4e7d-8ee6-0400a604d56e/style+runner+TESS+LEHMAN-38.jpg",
      B + "61256280-41c3-4404-849c-710be4902b79/style+runner+TESS+LEHMAN-45.jpg",
    ],
  },
  {
    slug: "nudie-jeans",
    title: "Nudie Jeans",
    location: "James St, Brisbane",
    vertical: "Retail",
    summary: "A 40m² hyper-sustainable specialty store — featured in INDESIGNLIVE and longlisted for the 2024 Dezeen Awards.",
    scope: "40m² specialty retail store focused on hyper-sustainability.",
    challenge: "Meeting a complex brief aligned with the brand's commitment to lifetime garment repair and environmental responsibility.",
    solution: "We sourced and installed specialty sustainable materials through clear communication and artisanal problem-solving.",
    outcome: "Global-stage results — the fitout was featured in INDESIGNLIVE and longlisted for the 2024 Dezeen Awards for sustainable interiors.",
    images: [
      B + "bf574f93-05ef-431b-9e7f-cdf56442efbf/X%2BO+001.jpg",
      B + "d598519d-cc23-4bb0-8db6-24276ab7bca2/X%2BO+028.jpg",
      B + "f83ea72f-3e30-48b3-ac81-19b2e36f361f/X%2BO+002.jpg",
      B + "aabf7d1f-3123-4dbe-a176-a2dc1d723225/X%2BO+017.jpg",
      B + "62a2c671-9079-4619-b2d7-2dde22233250/X%2BO+020.jpg",
      B + "8be81593-2971-46b1-bd47-98bd6f716daf/X%2BO+072.jpg",
    ],
  },
  {
    slug: "dissh",
    title: "DISSH Boutiques",
    location: "Head Office, Level 28, George St, Brisbane",
    vertical: "Commercial",
    summary: "A 1,000m² head office fitout for DISSH in Brisbane — delivered two weeks early and under budget.",
    scope: "Project management, on-site supervision, off-site manufacture.",
    challenge: "DISSH is a female-founded Australian fashion brand. They needed their 1,000m² new-build head office in Brisbane to reflect the brand's essence: sustainably minded, thoughtfully designed, and laidback in style.",
    solution: "Working to the architectural design and specifications, the Hallmarc team seamlessly pivoted to accommodate design changes — re-quoting swiftly and securing council approvals while maintaining the schedule. We delivered two weeks early and under budget.",
    outcome: "An immersive space brimming with light, texture and elegance — a space that makes employees want to stay, and where they feel inspired to do their best work.",
    images: [
      B + "41b48cfb-2cbe-4211-9a0d-d657c1e952e3/Pro+Pics+%2829%29.jpg",
      B + "b8c7bcce-7d82-46cc-806f-2320733663c1/Pro+Pics+%284%29.jpg",
      B + "4e198f87-3687-4073-af09-64c9e79b7eb2/Pro+Pics+%289%29.jpg",
      B + "ebfb9cb2-45c3-40d1-a7de-0e3ce0689313/Pro+Pics+%2813%29.jpg",
      B + "0a030da4-c01a-40e2-8c70-578f48d7e863/Pro+Pics+%2815%29.jpg",
      B + "a43b70c5-45b7-401e-9546-4663153ecc9c/Pro+Pics+%2834%29.jpg",
    ],
  },
  {
    slug: "eveleigh",
    title: "the Eveleigh",
    location: "Display Suite, Broadbeach",
    vertical: "Commercial",
    summary: "A complex commercial display suite delivered within a fixed 4.5-week program.",
    scope: "Project management, trade coordination, program management, delivery.",
    challenge: "Deliver a complex commercial display environment within a fixed 4.5-week program, coordinating all trades and maintaining design integrity.",
    solution: "Our senior-led team managed trades, program constraints and the client's design vision within a fixed timeframe.",
    outcome: "Display suite delivered on time, on budget, and to the standard the developer required to launch to market.",
    images: [B + "7a70533b-860f-451d-b467-e00f791a072b/eveleigh.png"],
  },
  {
    slug: "zambrero",
    title: "Zambrero",
    location: "Nicholas Street Precinct, Ipswich",
    vertical: "Hospitality",
    summary: "An ongoing national QSR rollout, delivered with consistent quality across diverse locations.",
    scope: "Continuous partnership supporting a significant national store rollout across QSR chain Zambrero.",
    challenge: "Maintaining extreme quality consistency and craftsmanship while scaling rapidly across diverse national locations.",
    solution: "Since installing our first Zambrero site in 2021, our senior team has provided a level of calmness and concise communication to navigate the high-pressure rollout schedule.",
    outcome: "Hallmarc is recognised as a standout in the pack for attention to detail and top-tier finishes that drive brand growth.",
    images: [
      B + "e4997f0f-52f1-4027-9a11-e219142d256c/Zambreros+10.JPG",
      B + "ca387d73-9db9-4f55-8d25-3ca79bb0f85a/Zambreros+2.JPG",
      B + "a8774e4a-6949-48b2-b7e8-89a3cc7d90bf/Zambreros+15.JPG",
      B + "10dca568-2ae2-4d7d-b9aa-b6855a2c2468/Zambreros+5.JPG",
      B + "64be0c1d-4d95-41ee-a39b-911ab09be16b/Zambreros+6.JPG",
    ],
  },
  {
    slug: "terminus",
    title: "Terminus Hotel",
    location: "Yarrawonga, Victoria",
    vertical: "Hospitality",
    summary: "A historic hotel restoration — structural works, concrete cutting and bespoke joinery within a heritage framework.",
    scope: "Comprehensive project management across structural restoration and custom architectural elements for the historic Terminus Hotel.",
    challenge: "Delivering major structural works — including restumping and new structural supports — while integrating precise concrete cutting, feature archways and detailed joinery within an existing heritage framework.",
    solution: "Hallmarc oversaw the majority of the build, coordinating structural reinforcement and managing complex concrete modifications. Custom internal cabinetry was delivered alongside bespoke timber-finished windows and doors, crafted to align with the hotel's architectural character.",
    outcome: "A structurally revitalised, design-led hospitality space that balances durability with craftsmanship — reflecting both its historic foundations and a refined contemporary finish.",
    images: [
      B + "62131a31-d8e8-4921-a990-112a74769d7d/terminus.png",
      B + "eecd9447-35c7-4135-869e-9bc82829af83/terminus02.jpeg",
      B + "8b9490bd-c2d6-4c2b-bd2b-13af6577873e/terminus03.jpeg",
      B + "82817544-ab43-4ab5-a8f4-04624a8a06a6/terminus04.jpeg",
      B + "42a1f2f0-a4fc-4232-9314-1188d193c333/terminus05.jpeg",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
