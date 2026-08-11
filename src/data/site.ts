/**
 * Settled site copy — the single source for both the plain document pages
 * and the OS windows. Verbatim from the portfolio briefs and CV v2.
 * Voice: first person, British English, no em dashes, no colons in body copy.
 */

export const site = {
  name: 'Hayden Slaughter',
  role: 'Product builder & leader',
  location: 'Brighton, UK',
  email: 'hello@haydenslaughter.co.uk',
  phone: '07817 368519',
  tagline:
    'Portfolio of Hayden Slaughter, a zero-to-one product builder in Brighton who turns the early-stage mess into products people love.',
  links: {
    email: 'mailto:hello@haydenslaughter.co.uk',
    phone: 'tel:+447817368519',
    linkedin: 'https://www.linkedin.com/in/hayden-slaughter-83094957/',
    github: 'https://github.com/haydenslaughter',
  },
} as const;

export const nav = [
  { label: 'CV', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  eyebrow: 'product builder · ai-native · brighton',
  statement:
    'I build products and teams and turn the zero-to-one mess into things people love.',
  sub: 'A zero-to-one specialist who came up through design and front-end, building AI-native today.',
};

export const intro = [
  "I build products, and the teams that build them. I do my best work in the early stages, when it's unclear, unshaped, and we're building from scratch. I take that ambiguity and turn it into something real, a product people love, and a team that owns where it's going.",
  "I learnt my craft through UX design, grew into product, and these days build AI-native. It's the most alive and energised I've felt about work in years. The tools change often, but the collaborative and open way I work doesn't.",
];

export const howIWork = {
  statement: 'Put the structure in once, so the team runs without me in the room.',
  detail:
    "A company's operating model. A startup's product function. An app's data model. An AI agent's docs. Same move, different scale.",
  scales: [
    "A company's operating model",
    "A startup's product function",
    "An app's data model",
    "An AI agent's docs",
  ],
};

export const fit = [
  "I do my best work when it's ambiguous, there's a lot to build, and things need to move fast. A new product, a new team, a new bet inside a larger organisation. When there's a real problem worth solving and the room to improve it, I turn it into something that works.",
  "I'm less useful when things are slow and settled, where every decision needs three sign-offs. It's not about size. Plenty of big companies move fast on the right problem, and plenty of small ones never get going. It's the shape of the problem that matters, not the logo.",
  'I take ownership of the hard problems and help steer the team to the best possible outcome. I want, nay need, to build, and I do that best as part of a high-performing team.',
  "If that sounds like you, let's talk.",
];

export const journey =
  "Before all this, I spent years as a contract UX and product lead across finance, insurance, housing, the public sector and energy. I built the UK's first online multi-car insurance product, set up a public-participation platform for the NHS, and helped a bank rethink an internal tool. Different industries, but the same job every time. Walk into something unshaped and leave it clearer, more useful, and owned by the people who carry it on.";

export const builtWithAI = {
  lead: 'Two very different AI products, both shipped, both live.',
  products: [
    {
      name: 'Olive',
      status: 'Live on TestFlight',
      kind: 'Premium iOS cooking app',
      cta: { label: 'Try it on TestFlight', href: '#' },
      body: "Olive takes a cookbook page, a screenshot, an Instagram reel, and turns it into one clean, consistent recipe you can cook straight from. No life story, no scattered notes, no sticky cookbook pages. Just simple, enjoyable cooking. I designed and built it on my own, entirely with AI. It runs on-device first to stay fast and cheap, with guardrails so it can never put the wrong quantity in a recipe.",
    },
    {
      name: 'Pip',
      status: 'Live',
      kind: 'Local-first Mac AI assistant',
      cta: { label: 'Download', href: '#' },
      body: "Pip is a desktop assistant that thinks with you, not for you. Somewhere you write and keep your own notes, shaping them with the help of AI rather than having them written for you. I designed and built it on my own, entirely with AI. Your notes, memory and keys live on your machine, not a server, and it's model-agnostic. Under the hood it's a real agent, talking to your tools through an MCP client I built from scratch.",
    },
  ],
};
