import type { FaqItem } from "@/components/FAQ";

export interface LocationProof {
  slug: string;
  title: string;
  where: string;
  blurb: string;
}

export interface Vertical {
  title: string;
  body: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  licensed: boolean;
  heroImage: string;
  heroAlt: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  verticals: Vertical[];
  proof: LocationProof[];
  faqs: FaqItem[];
}

const COVERAGE_LICENSED =
  "We hold building licences across VIC, QLD, SA, ACT and WA and deliver nationally, senior-managed from a single point of contact.";
const COVERAGE_SERVICED =
  "We deliver here through our national delivery model, senior-managed from a single point of contact, with licensed trades coordinated on the ground.";

export const LOCATIONS: Location[] = [
  {
    slug: "gold-coast",
    city: "Gold Coast",
    state: "QLD",
    licensed: true,
    heroImage: "/images/eveleigh.png",
    heroAlt: "Hallmarc commercial fitout, The Eveleigh display suite, Broadbeach Gold Coast",
    title: "Fitouts Gold Coast — Retail, Commercial & Hospitality | Hallmarc National Fitouts",
    metaDescription:
      "Gold Coast fitout company for retail, commercial and hospitality projects. In-house joinery, senior-led delivery, licensed builders. Based in Arundel. Talk to Hallmarc.",
    h1: "Fitouts on the Gold Coast",
    intro: [
      "The Gold Coast is home. Our head office and joinery workshop are in Arundel, which means Gold Coast projects get the shortest lines, the most hands-on oversight and joinery manufactured a few minutes from site. From Broadbeach to Robina to Southport, we deliver retail, commercial and hospitality fitouts concept to completion.",
      "Being local is a delivery advantage, not just a postcode. We know the certifiers, the trades and the centre requirements, and our senior project managers are on your site rather than managing it from another state. " + COVERAGE_LICENSED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship stores, centre fitouts and brand-compliant rollouts across the Gold Coast's major retail precincts, delivered on brand spec with in-house joinery." },
      { title: "Commercial", body: "Developer display suites, corporate workplaces and base-building fitouts. The Eveleigh sales suite in Broadbeach was delivered in 4.5 weeks." },
      { title: "Hospitality", body: "Restaurants, bars, cafes and venues with full back-of-house capability, from commercial kitchens to 3-phase power and exhaust." },
    ],
    proof: [
      { slug: "eveleigh", title: "The Eveleigh", where: "Broadbeach", blurb: "Developer display suite delivered in 4.5 weeks." },
      { slug: "lovisa", title: "Lovisa", where: "Runaway Bay", blurb: "Brand-compliant retail fitout." },
    ],
    faqs: [
      { q: "Do you have a Gold Coast office?", a: "Yes. Our head office and in-house joinery workshop are in Arundel on the Gold Coast, so local projects get senior oversight on site and joinery made close to the job." },
      { q: "What does a fitout cost on the Gold Coast?", a: "Every fitout is bespoke, so we scope and quote each project rather than publishing a rate. Cost is driven by size, finishes, services (especially hospitality back-of-house), site access and centre requirements. We give you a detailed, itemised quote after understanding the brief." },
      { q: "How long does a Gold Coast fitout take?", a: "It depends on scope and approvals, but as a benchmark we delivered the Eveleigh display suite in Broadbeach in 4.5 weeks. We give a realistic programme up front and manage it to handover." },
      { q: "Do you handle council approvals and certification?", a: "Yes. As part of concept-to-completion delivery we coordinate design documentation, certification and compliance so you have a single point of accountability." },
    ],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    state: "QLD",
    licensed: true,
    heroImage: "/images/nudie1.jpg",
    heroAlt: "Hallmarc retail fitout, Nudie Jeans, James Street Brisbane",
    title: "Commercial, Retail & Hospitality Fitouts Brisbane | Hallmarc National Fitouts",
    metaDescription:
      "Brisbane fitout company delivering retail, commercial and hospitality projects with in-house joinery and senior-led project management. Licensed builders. Talk to Hallmarc.",
    h1: "Fitouts in Brisbane",
    intro: [
      "Brisbane is one of our busiest markets, and it's an easy reach from our Gold Coast base. We've delivered across the city and greater Brisbane, from James Street retail to CBD head offices to the Ipswich precinct, covering retail, commercial and hospitality fitouts end to end.",
      "You get a senior project manager as your single point of contact and joinery manufactured in-house rather than subbed out. " + COVERAGE_LICENSED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship and precinct stores across Brisbane's retail strips and centres, delivered to brand standards, including work for Nudie Jeans, DISSH and Industrie." },
      { title: "Commercial", body: "Corporate workplaces, head offices and base-building fitouts, including the DISSH head office in the Brisbane CBD." },
      { title: "Hospitality", body: "QSR, cafes, bars and venues with full back-of-house delivery, including Zambrero in the Nicholas Street Precinct, Ipswich." },
    ],
    proof: [
      { slug: "nudie-jeans", title: "Nudie Jeans", where: "James St", blurb: "Retail fitout in Brisbane's premium retail strip." },
      { slug: "dissh", title: "DISSH", where: "CBD head office", blurb: "Corporate head office fitout, George St." },
      { slug: "industrie", title: "Industrie", where: "Indooroopilly", blurb: "Retail store fitout." },
    ],
    faqs: [
      { q: "Do you deliver fitouts across greater Brisbane?", a: "Yes. We deliver across Brisbane and surrounds, from the CBD to Indooroopilly to Ipswich, covering retail, commercial and hospitality. We're licensed in QLD and manage every project with a senior PM on the ground." },
      { q: "How much does a commercial fitout cost in Brisbane?", a: "We don't publish rates because every fitout is custom. Cost depends on size, finishes, mechanical and electrical services, site access and building requirements. We provide a detailed quote once we understand your brief and space." },
      { q: "Can you do a retail rollout across multiple Brisbane sites?", a: "Yes. Multi-site rollouts are a core strength. With in-house joinery and a single accountable team, we deliver consistent brand fitouts across multiple locations on programme." },
      { q: "Do you manage hospitality back-of-house in Brisbane?", a: "Yes. We handle commercial kitchens, 3-phase power, exhaust, hydraulics and grease traps as part of end-to-end hospitality delivery." },
    ],
  },
  {
    slug: "sydney",
    city: "Sydney",
    state: "NSW",
    licensed: false,
    heroImage: "/images/stylerunner_hero.jpg",
    heroAlt: "Hallmarc retail fitout, Stylerunner, New South Wales",
    title: "Retail, Commercial & Hospitality Fitouts Sydney | Hallmarc National Fitouts",
    metaDescription:
      "Sydney and NSW fitout delivery for retail, commercial and hospitality. In-house joinery, senior-led project management, national multi-site rollouts. Talk to Hallmarc.",
    h1: "Fitouts in Sydney",
    intro: [
      "We deliver retail, commercial and hospitality fitouts across Sydney and New South Wales, from single flagship stores to national rollout programs run out of NSW. Our clients here include Stylerunner, City Beach, RSL NSW and TAB.",
      "Distance is never an excuse for a junior on site. Every NSW project is led by a senior project manager as your single point of contact, backed by in-house joinery. " + COVERAGE_SERVICED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship stores and multi-site retail rollouts across Sydney and regional NSW, including work for Stylerunner and City Beach." },
      { title: "Commercial", body: "Corporate workplaces, display suites and base-building fitouts, senior-managed concept to completion." },
      { title: "Hospitality", body: "Clubs, pubs, bars and venues with full back-of-house capability, including delivery for RSL NSW and TAB." },
    ],
    proof: [
      { slug: "stylerunner", title: "Stylerunner", where: "Kotara, NSW", blurb: "Retail flagship fitout." },
      { slug: "city-beach", title: "City Beach", where: "Ballina, NSW", blurb: "Retail store fitout." },
    ],
    faqs: [
      { q: "Do you deliver fitouts in Sydney if you're based in Queensland?", a: "Yes. National delivery is core to how we work. NSW projects are senior-managed from a single point of contact with licensed trades coordinated on the ground, and we already deliver for clients like Stylerunner, City Beach, RSL NSW and TAB." },
      { q: "What does a fitout cost in Sydney?", a: "We scope and quote every project rather than publishing a rate, because fitouts are bespoke. Cost is driven by size, finishes, services, site access and building requirements. You get a detailed quote after we understand the brief." },
      { q: "Can you run a national rollout from Sydney?", a: "Yes. Multi-site and national rollouts are a core capability. In-house joinery and one accountable team keep brand delivery consistent across every site and state." },
      { q: "Do you deliver club and pub fitouts in NSW?", a: "Yes. We have deep hospitality experience including RSL NSW and TAB, covering front-of-house and complex back-of-house." },
    ],
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    state: "VIC",
    licensed: true,
    heroImage: "/images/terminus.jpg",
    heroAlt: "Hallmarc hospitality fitout, Terminus Hotel, Victoria",
    title: "Retail, Commercial & Hospitality Fitouts Melbourne | Hallmarc National Fitouts",
    metaDescription:
      "Melbourne and Victoria fitout delivery for retail, commercial and hospitality. Licensed builders, in-house joinery, senior-led project management. Talk to Hallmarc.",
    h1: "Fitouts in Melbourne",
    intro: [
      "We deliver retail, commercial and hospitality fitouts across Melbourne and Victoria, from brand rollouts for national retailers to full hospitality venues. We're licensed to build in Victoria and manage every project with a senior lead on site.",
      "Many of our national retail clients are headquartered in Melbourne, so we're used to working directly with head-office teams and brand guidelines. " + COVERAGE_LICENSED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship stores and national rollouts across Melbourne and Victoria, delivered to head-office brand standards with in-house joinery." },
      { title: "Commercial", body: "Corporate workplaces, display suites and base-building fitouts, senior-managed end to end." },
      { title: "Hospitality", body: "Pubs, hotels, bars and venues with full back-of-house delivery, including the Terminus Hotel in regional Victoria." },
    ],
    proof: [
      { slug: "terminus", title: "Terminus Hotel", where: "Yarrawonga, VIC", blurb: "Hospitality venue fitout." },
      { slug: "justgroup", title: "The Just Group", where: "National rollout", blurb: "Multi-site retail rollout for Melbourne-based brands." },
    ],
    faqs: [
      { q: "Are you licensed to build in Victoria?", a: "Yes. We hold building licences in VIC (alongside QLD, SA, ACT and WA) and deliver Melbourne and regional Victorian projects with a senior project manager on the ground." },
      { q: "How much does a fitout cost in Melbourne?", a: "Every fitout is bespoke, so we quote each project rather than publishing rates. Cost depends on size, finishes, services, site access and building requirements. We give you a detailed, itemised quote." },
      { q: "Do you work with head-office brand teams?", a: "Yes. Many national retailers we deliver for are Melbourne-based, so we work directly from brand guidelines and head-office specs with senior PM oversight on every site." },
      { q: "Can you deliver hospitality venues in Victoria?", a: "Yes. We deliver pubs, hotels, bars and venues with full back-of-house, including the Terminus Hotel in Yarrawonga." },
    ],
  },
  {
    slug: "adelaide",
    city: "Adelaide",
    state: "SA",
    licensed: true,
    heroImage: "/images/retail_xo.jpg",
    heroAlt: "Hallmarc retail fitout, South Australia",
    title: "Retail, Commercial & Hospitality Fitouts Adelaide | Hallmarc National Fitouts",
    metaDescription:
      "Adelaide and South Australia fitout delivery for retail, commercial and hospitality. Licensed builders, in-house joinery, senior-led delivery. Talk to Hallmarc.",
    h1: "Fitouts in Adelaide",
    intro: [
      "We deliver retail, commercial and hospitality fitouts across Adelaide and South Australia, including work in Rundle Mall, Adelaide's premier retail precinct. We're licensed to build in SA and run every project with a senior point of contact.",
      "In-house joinery and one accountable team mean consistent, on-brand delivery whether it's a single Adelaide store or part of a national rollout. " + COVERAGE_LICENSED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship and precinct stores across Adelaide, including Honey Birdette in Rundle Mall, delivered to brand spec." },
      { title: "Commercial", body: "Corporate workplaces, display suites and base-building fitouts, senior-managed concept to completion." },
      { title: "Hospitality", body: "Restaurants, bars, cafes and venues with full back-of-house capability." },
    ],
    proof: [
      { slug: "honeybirdette", title: "Honey Birdette", where: "Rundle Mall, Adelaide", blurb: "Retail fitout in Adelaide's premier mall." },
    ],
    faqs: [
      { q: "Are you licensed to build in South Australia?", a: "Yes. We hold building licences in SA (alongside QLD, VIC, ACT and WA) and deliver Adelaide projects with a senior project manager on site." },
      { q: "Have you delivered retail fitouts in Adelaide?", a: "Yes, including Honey Birdette in Rundle Mall, Adelaide's premier retail precinct. We deliver flagship and precinct stores to brand standards." },
      { q: "What does a fitout cost in Adelaide?", a: "We quote each project rather than publishing rates, because every fitout is custom. Cost is driven by size, finishes, services, site access and building requirements. You get a detailed quote after we understand the brief." },
      { q: "Can you deliver a single Adelaide store or a rollout?", a: "Both. From one Adelaide store to a national multi-site program, in-house joinery and a single accountable team keep delivery consistent." },
    ],
  },
  {
    slug: "perth",
    city: "Perth",
    state: "WA",
    licensed: true,
    heroImage: "/images/dissh1.jpg",
    heroAlt: "Hallmarc commercial fitout, Western Australia",
    title: "Retail, Commercial & Hospitality Fitouts Perth | Hallmarc National Fitouts",
    metaDescription:
      "Perth and Western Australia fitout delivery for retail, commercial and hospitality. Licensed builders, in-house joinery, senior-led national delivery. Talk to Hallmarc.",
    h1: "Fitouts in Perth",
    intro: [
      "We deliver retail, commercial and hospitality fitouts in Perth and across Western Australia. We're licensed to build in WA, and our national delivery model means Perth projects get the same senior-led management and in-house joinery quality as anywhere else in the country.",
      "One accountable point of contact runs your project end to end, so distance never means a drop in oversight or quality. " + COVERAGE_LICENSED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship stores and national brand rollouts delivered to Perth on brand spec, with joinery manufactured in-house." },
      { title: "Commercial", body: "Corporate workplaces, display suites and base-building fitouts, senior-managed concept to completion." },
      { title: "Hospitality", body: "Restaurants, bars, cafes and venues with full back-of-house capability." },
    ],
    proof: [
      { slug: "justgroup", title: "The Just Group", where: "National rollout", blurb: "Multi-site retail rollout delivered nationally." },
      { slug: "lovisa", title: "Lovisa", where: "National brand", blurb: "Brand-compliant retail delivery." },
    ],
    faqs: [
      { q: "Are you licensed to build in Western Australia?", a: "Yes. We hold building licences in WA (alongside QLD, VIC, SA and ACT) and deliver Perth projects through our national delivery model with a senior project manager accountable end to end." },
      { q: "How do you deliver quality in Perth from the east coast?", a: "One senior point of contact runs the whole project, in-house joinery is manufactured to the same standard for every site, and licensed trades are coordinated on the ground. National retailers rely on us for exactly this consistency." },
      { q: "What does a fitout cost in Perth?", a: "We scope and quote every project rather than publishing rates. Cost depends on size, finishes, services, site access and building requirements. You get a detailed quote after we understand your brief." },
      { q: "Can you deliver a national rollout that includes Perth?", a: "Yes. National, multi-site rollouts are a core capability, keeping brand delivery consistent across every state including WA." },
    ],
  },
  {
    slug: "darwin",
    city: "Darwin",
    state: "NT",
    licensed: false,
    heroImage: "/images/zambrero.jpg",
    heroAlt: "Hallmarc hospitality fitout, Northern Territory",
    title: "Retail, Commercial & Hospitality Fitouts Darwin | Hallmarc National Fitouts",
    metaDescription:
      "Darwin and Northern Territory fitout delivery for retail, commercial and hospitality. In-house joinery, senior-led national delivery, multi-site rollouts. Talk to Hallmarc.",
    h1: "Fitouts in Darwin",
    intro: [
      "We deliver retail, commercial and hospitality fitouts in Darwin and the Northern Territory through our national delivery model. Remote and regional delivery is something we plan for: senior-led management, in-house joinery and coordinated local trades keep quality and programme on track.",
      "One accountable point of contact runs the project from concept to completion, so a Darwin site is managed with the same rigour as one on our doorstep. " + COVERAGE_SERVICED,
    ],
    verticals: [
      { title: "Retail", body: "Flagship stores and national brand rollouts delivered to Darwin on brand spec, with joinery manufactured in-house." },
      { title: "Commercial", body: "Corporate workplaces, display suites and base-building fitouts, senior-managed concept to completion." },
      { title: "Hospitality", body: "Restaurants, bars, cafes and venues with full back-of-house capability, including commercial kitchens and services." },
    ],
    proof: [
      { slug: "justgroup", title: "The Just Group", where: "National rollout", blurb: "Multi-site retail rollout delivered nationally." },
      { slug: "zambrero", title: "Zambrero", where: "QSR", blurb: "Hospitality QSR delivery with full back-of-house." },
    ],
    faqs: [
      { q: "Do you deliver fitouts in Darwin?", a: "Yes. We deliver Darwin and Northern Territory projects through our national delivery model, senior-managed from a single point of contact with local trades coordinated on the ground." },
      { q: "How do you manage remote delivery to the NT?", a: "We plan logistics, procurement and programme up front, manufacture joinery in-house for consistency, and keep one senior PM accountable end to end so remote sites don't mean reduced oversight." },
      { q: "What does a fitout cost in Darwin?", a: "We scope and quote each project rather than publishing rates. Cost depends on size, finishes, services, logistics, site access and building requirements. You get a detailed quote after we understand the brief." },
      { q: "Can you deliver hospitality back-of-house in Darwin?", a: "Yes. We deliver full back-of-house including commercial kitchens, 3-phase power, exhaust and hydraulics as part of end-to-end hospitality delivery." },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
