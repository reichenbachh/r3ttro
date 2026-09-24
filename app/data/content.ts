type Product = {
  name: string;
  /** One line on what the product is, not on what I did to it. */
  blurb: string;
  /** Optimised screenshot in public/work. Regenerate with the sips command in the README. */
  image: string;
  /** Set to the live URL to make the card clickable. Null renders it as a static card. */
  url: string | null;
};

/** Live products I've contributed to. Cards open in a new tab once a url is set. */
export const PRODUCTS: Product[] = [
  {
    name: "Banana Gun",
    blurb:
      "DeFi trading platform on Solana: transfers, token sniping and liquidity management.",
    image: "/work/bananagun.jpg",
    url: "https://bananagun.io/",
  },
  {
    name: "Manual",
    blurb:
      "Men's health e-commerce: licensed treatment, subscriptions and ongoing care.",
    image: "/work/manual.jpg",
    url: "https://www.manual.co/",
  },
  {
    name: "POOLCORP",
    blurb:
      "Distribution platform for the world's largest wholesaler of pool supplies.",
    image: "/work/poolcorp.jpg",
    url: "https://www.poolcorp.com/",
  },
  {
    name: "Social Kit",
    blurb:
      "Social media management with an agent that writes in an organisation's own voice.",
    image: "/work/socialkit.jpg",
    url: "https://www.getsocialkit.com/",
  },
];

type Highlight = {
  text: string;
  /** Client the work was delivered for, on agency-side roles. */
  client?: string;
  clientLocation?: string;
};

type Role = {
  company: string;
  /** Parent agency or group, where the company sits inside one. */
  parent?: string | null;
  role: string;
  start: string;
  end: string;
  location: string;
  arrangement: string;
  highlights: Highlight[];
  stack: string[];
};

/** Roles in reverse chronological order: most recent first. */
export const EXPERIENCE: Role[] = [
  {
    company: "EarlyNode",
    parent: "ReactSquad Dev Agency",
    role: "Software Engineer",
    start: "03 / 2023",
    end: "present",
    location: "Berlin",
    arrangement: "Full-time, Remote",
    highlights: [
      {
        client: "Private client",
        text: "Built a proof of concept for a multi-tenant AI web app: it turned an organisation's existing data into knowledge graphs, then ran simulations and tests against that context to surface business intelligence.",
      },
      {
        client: "Social Kit",
        clientLocation: "Germany",
        text: "Built Social Kit's autonomous content agent, which learns an organisation's profile and the logged-in user's voice, plus the Chrome extensions and custom UI libraries that let marketing teams run every social account from one place.",
      },
      {
        client: "Banana Gun",
        clientLocation: "United States",
        text: "Took Banana Gun to a market-ready product: integrated DeFi and Solana APIs, then shipped crypto transfers, token sniping and liquidity management.",
      },
      {
        client: "POOLCORP",
        clientLocation: "United States",
        text: "Modernised POOLCORP's entire stack across every department: closed security issues, cut build times, reworked the UI and built internal tooling.",
      },
      {
        client: "Manual.co",
        clientLocation: "Brazil / UK",
        text: "Worked across Manual.co, a men's health e-commerce platform: modernised the stack, built internal tooling and new UIs, refined workflows, set a new testing doctrine, and shipped campaign work including Black Friday promos.",
      },
    ],
    stack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Redux",
      "Next.js",
      "Remix",
      "Node.js",
      "Prisma",
      "Postgres",
      "Tailwind",
      "Docker",
      "AWS",
      "Vercel",
      "Fly.io",
      "OpenAI API",
      "Claude API",
      "Clerk",
      "PostHog",
      "Resend",
    ],
  },
  {
    company: "DI-ON.solutions",
    parent: null,
    role: "Lead Software Engineer",
    start: "03 / 2022",
    end: "02 / 2023",
    location: "Germany",
    arrangement: "Full-time, Remote",
    highlights: [
      { text: "Built a tablet app for field technicians that streamlined reports, error logging, installations and maintenance." },
      { text: "Reworked logistics workflows, lifting efficiency, accuracy and the quality of customer service." },
      { text: "Optimised state management for large datasets and complex multi-step forms." },
      { text: "Built an in-house form-to-PDF generator that took manual data handling out of the loop." },
    ],
    stack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Redux",
      "GraphQL",
      "AWS AppSync",
      "AWS Cognito",
      "AWS Lambda",
      "AWS S3",
      "Sentry",
      "Flipper",
    ],
  },
  {
    company: "Nubian VR",
    parent: null,
    role: "Lead Full Stack Software Engineer",
    start: "02 / 2022",
    end: "07 / 2022",
    location: "Accra, Ghana",
    arrangement: "Remote",
    highlights: [
      { text: "Built an online learning platform that teaches kids about technology through video games, interactive rather than instructional." },
      { text: "Integrated Unity WebGL games into the browser so the whole experience ran without a download." },
      { text: "Built dashboards for schools to manage students and track performance." },
      { text: "Streamlined the analytics layer, giving educators clearer progress tracking and insight." },
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Redux Saga",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "Caasco",
    parent: null,
    role: "Software Engineer",
    start: "05 / 2021",
    end: "12 / 2021",
    location: "London, England",
    arrangement: "Contract, Remote",
    highlights: [
      { text: "Helped build an enterprise-grade airline compensation platform that turns delay and cancellation claims into something a passenger can actually complete." },
      { text: "Wrote the core business logic automating compensation workflows end to end." },
      { text: "Built a messaging microservice handling email, SMS and the rest of the customer communications." },
    ],
    stack: [
      "React",
      "Redux Toolkit",
      "Redux Saga",
      "Node.js",
      "AWS Lambda",
      "Twilio",
      "Tailwind",
      "Jest",
      "Cypress",
      "Riteway",
    ],
  },
  {
    company: "Black Labs",
    parent: null,
    role: "Software Engineer",
    start: "03 / 2019",
    end: "02 / 2021",
    location: "Accra, Ghana",
    arrangement: "Full-time, Remote",
    highlights: [
      { text: "Built an admin portal and mobile app that streamlined logistics for packages and large consignments." },
      { text: "Developed a real-time analytics dashboard tracking payments, shipments and transport progress." },
      { text: "Shipped a consumer mobile app pitched at everyday users with straightforward logistics needs." },
    ],
    stack: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Saga",
      "Node.js",
      "Firebase",
      "Google Maps API",
      "Tailwind",
      "Jest",
      "Riteway",
    ],
  },
];

export const HERO_STATS = [
  { value: "7 yrs", label: "shipping software" },
  { value: "3 platforms", label: "web, mobile, backend" },
  { value: "4 continents", label: "Africa, Europe, N. and S. America" },
] as const;

export const PRINCIPLES = [
  {
    index: "01",
    title: "Establish the goal",
    body: "Every project answers to something different: time to market, a research question, a proof of concept. I get that straight first, because it decides every trade-off that comes after it.",
  },
  {
    index: "02",
    title: "Start dead simple",
    body: "Make the core functionality work before anything else. No fluff, no abstraction invented ahead of the problem it solves. Complexity has to earn its place.",
  },
  {
    index: "03",
    title: "Iterate, test, own",
    body: "Ship it, take the feedback, sharpen it. I own features end to end, testing included, until the experience is polished rather than merely finished.",
  },
] as const;

export const POSTS = [
  {
    date: "Jun 2026",
    title: "The Abstraction Trap",
    description:
      "When every layer hides the one below it, you stop being an engineer and become a configuration specialist. Here's why I think leaky abstractions are a feature.",
  },
  {
    date: "Apr 2026",
    title: "Why I Read Compiler Internals",
    description:
      "You don't need to write a compiler to benefit from understanding one. A walk through what reading LLVM taught me about software I write every day.",
  },
  {
    date: "Feb 2026",
    title: "Slow Thinking in a Fast Industry",
    description:
      "The best engineers I know share one habit: they slow down before they speed up. On deliberate thinking as a competitive advantage.",
  },
  {
    date: "Nov 2025",
    title: "On Being a Generalist",
    description:
      "Specialisation is rewarded loudly. Breadth is rewarded quietly, and compoundingly. A defence of the polymath engineer in an age of hyper-specialisation.",
  },
  {
    date: "Sep 2025",
    title: "What Databases Taught Me About Life",
    description:
      "Consistency, availability, partition tolerance: the CAP theorem applies far beyond distributed systems if you're willing to look.",
  },
] as const;

export const CALENDLY_URL = "https://calendly.com/georgeansong7/30min";

export const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: "georgeansong7@gmail.com",
    href: "mailto:georgeansong7@gmail.com",
    cta: "write →",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com",
    href: "https://www.linkedin.com/",
    cta: "connect →",
  },
  {
    label: "CALL",
    value: "Book a 30 min call",
    href: CALENDLY_URL,
    cta: "book →",
  },
] as const;
