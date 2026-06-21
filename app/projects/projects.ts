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
    slug: "justgroup",
    title: "the Just Group",
    location: "National Rollout",
    vertical: "Retail",
    summary: "15 years and 1,000+ locations across seven fashion brands — Peter Alexander, Just Jeans, Jay Jays, Jacqui E, Portmans, Dotti and Smiggle.",
    scope: "Collaboration across 7 fashion brands and 1,000+ locations over 15 years — Peter Alexander, Just Jeans, Jay Jays, Jacqui E, Portmans, Dotti and Smiggle.",
    challenge: "Providing a personalised, boutique-level service for over a decade to one of Australia's largest retail groups.",
    solution: "Consistently demonstrating a commitment to personalised service and the ability to jump through fiery hoops for the curly projects.",
    outcome: "A long-term partnership where Hallmarc remains a foremost choice for shopfitting, thanks to cost-effective and top-notch outcomes.",
    images: [
      B + "92823011-ee59-48ab-9263-cba58e20374a/03.jpg",
      B + "5e0a6332-da18-421e-bf4c-9bf3506a87d9/10.jpg",
      B + "33cf91b0-774f-4155-8c68-4bfb5d52a51d/11.jpg",
      B + "7b6b00ef-07c9-4ee3-aaa0-c3b767334e65/20.jpg",
      B + "4c6b1fc7-92a9-47f6-a5a1-447b36a7cb4c/24.jpg",
      B + "63c99a24-eb77-42ba-8d00-9074e56b397a/28.jpg",
    ],
  },
  {
    slug: "city-beach",
    title: "City Beach",
    location: "Ballina Fair, NSW",
    vertical: "Retail",
    summary: "A 400m² fitout for the iconic Australian surf retailer, delivered on time through mid-stream design changes.",
    scope: "400m² retail fitout for an iconic Australian surf retailer.",
    challenge: "Handling significant client-side changes to both the design and off-site manufacturing requirements mid-stream.",
    solution: "We managed the entire project coordination burden, overseeing production adjustments to shield the client from the complexity.",
    outcome: "Delivered on time to an impressed client — a store that captures Australia's youth culture through high-impact design and a community-focused space.",
    images: [
      B + "c62578dc-a8f4-400e-9484-bf7ba440e715/City+Beach+%281%29.JPG",
      B + "f6e1a422-befe-4963-bdab-a54a3933f9d7/City+Beach+%2812%29.JPG",
      B + "a0d8c8cf-7dc8-4e7f-bf95-ee019f10828c/City+Beach+%2813%29.JPG",
      B + "57a783c3-1a22-41a0-9a65-6f7cb44ffa87/City+Beach+%2843%29+%281%29.JPG",
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
  {
    slug: "honeybirdette",
    title: "Honey Birdette",
    location: "Rundle Mall, Adelaide",
    vertical: "Retail",
    summary: "A 63m² boudoir-inspired boutique with bespoke joinery and crafted mood lighting.",
    scope: "Honey Birdette's boutique on Rundle Mall in Adelaide called for a fitout that matched the brand's playful, sensual identity — highly detailed fixtures, finishes and fittings designed to create an immersive retail experience. Custom joinery and crafted mood lighting were essential to display luxury lingerie and accessories in a way that encouraged customers to stay and explore.",
    challenge: "The design intent was bold and atmospheric, drawing inspiration from the boudoir. Achieving it meant integrating lush decor, refined lighting and tailored display elements within a compact 63m² footprint — balancing high-end detailing with practical retail functionality without compromising durability or flow.",
    solution: "Hallmarc approached the fitout with meticulous attention to staging and coordination. We delivered custom joinery aligned with the delicate, sculptural design language, integrating crafted mood lighting to enhance product displays and ambiance, and coordinating trades for seamless transitions between installation stages.",
    outcome: "An unapologetically sensual and engaging retail environment that reflects the Honey Birdette brand — thoughtfully crafted detailing, dynamic lighting and bespoke joinery that invite customers to linger longer and explore with confidence.",
    images: [
      B + "d55a2ab7-16e3-45a3-b69f-7cbcfd35b15e/0E9A9949.jpg",
      B + "97aa2685-04d0-4b90-9d84-6e5f91a03d44/0E9A0113.jpg",
      B + "666f5875-7718-4a8f-977c-3caf3d42b9e7/0E9A0315.jpg",
      B + "f37a3925-9d9e-49d8-a530-e5feceb220e0/0E9A0378.jpg",
      B + "b96937a1-27d0-4bd3-b085-b384a29866b8/0E9A0089.jpg",
    ],
  },
  {
    slug: "lovisa",
    title: "Lovisa",
    location: "Runaway Bay, Queensland",
    vertical: "Retail",
    summary: "A jewellery store fitout delivered ahead of schedule — setting the precedent for future rollouts.",
    scope: "The Lovisa store in Runaway Bay presented a unique retail challenge: how to make a space housing thousands of small, shiny fashion accessories feel inviting, confident and easy to explore. Hallmarc delivered the fitout — lighting, joinery and finishes — to elevate the shopping experience in a way that reflected the global jewellery brand's stylish identity.",
    challenge: "Jewellery and accessory retailers demand environments that balance visual intrigue with clarity and flow. The challenge for Lovisa was to showcase product abundance without sacrificing spatial comfort or brand presence — all while meeting timelines and setting the stage for future stores.",
    solution: "Hallmarc combined lighting strategy, custom joinery and high-quality finishes to shape a space that felt both social and confident. Careful coordination between service trades and design intent guided sightlines, enhanced product visibility and delivered consistency in materiality and brand language. The project was delivered ahead of schedule.",
    outcome: "An inviting retail environment that elevates the customer experience while clearly expressing the brand's identity. The integration of lighting and joinery showcased thousands of products without overwhelming the space — leading to further rollouts for the brand.",
    images: [
      B + "5026ab50-04b4-49f0-9af9-4b543303cf27/Lovisa+%2816%29.JPG",
      B + "1730855739508-U8HC7ZT07I9VMR0EXMU6/Lovisa+GOLD+COAST.JPG",
      B + "062aea6a-f098-4e2b-896f-3bb6fe4ccefa/Lovisa+%283%29.JPG",
      B + "718e29de-386c-4f12-92a6-e809a9d9d53b/Lovisa+%2811%29.JPG",
      B + "d17ecb2f-0d01-4991-b2c0-0be6d50af45d/Lovisa+%2821%29.JPG",
    ],
  },
  {
    slug: "industrie",
    title: "Industrie",
    location: "Moggill Rd, Indooroopilly QLD",
    vertical: "Retail",
    summary: "A contemporary fashion fitout delivered with minimal disruption inside a live retail centre.",
    scope: "Industrie enlisted Hallmarc to deliver a fitout aligned with the fashion brand's modern aesthetic and customer-experience goals — custom joinery, interior installations, lighting and finishes designed to reflect the label's contemporary identity and optimise retail flow.",
    challenge: "Industrie's retail environment demanded a balance between bold visual appeal and functional clarity. With high product turnover and a focus on fashion presentation, the space needed to feel inviting and easy to navigate while expressing the brand's distinct design language — all delivered within a live retail centre.",
    solution: "Hallmarc coordinated joinery, lighting and interior trades to deliver a cohesive result. Custom joinery was manufactured to enhance product display and circulation, while finishes and lighting elevated brand perception. The project was staged to align with the broader centre's logistics, ensuring minimal disruption and programmed handovers.",
    outcome: "A confident, well-resolved environment that reflects the brand's contemporary fashion focus. Thoughtful detailing and coordinated lighting enhance product visibility and customer engagement — a visually compelling, fully functional store that supports both brand identity and operational flow.",
    images: [
      B + "1730855444207-TC5JDKT3KDQKLBU2EMZJ/INDUSTRIE+INDOOROOPILLY+2.jpg",
      B + "1a2b9242-ca0b-45a0-b194-7040c4351c30/Pic+10.jpg",
      B + "405b95d1-d460-499e-ba4d-4fb18cd1182e/Pic+13.jpg",
      B + "e4f4e549-9163-4b42-afd5-f5b10665dca3/Pic+16.jpg",
      B + "62c5ce9a-a0a8-44b6-b469-7457f742bb11/Pic+6.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
