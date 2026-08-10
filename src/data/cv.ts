/** CV — verbatim from hayden-slaughter-cv-v2.html (the latest). */

export interface CvRole {
  period: string;
  meta: string[];
  role: string;
  org?: string;
  blurb?: string;
  bullets?: string[];
  feature?: boolean;
}

export const cv = {
  kicker: 'HEAD OF PRODUCT · ZERO-TO-ONE PRODUCT LEADERSHIP · AI-NATIVE',
  name: 'Hayden Slaughter',
  contact: {
    location: 'Brighton, UK',
    email: 'hello@haydenslaughter.co.uk',
    linkedin: {
      label: 'linkedin.com/in/hayden-slaughter-83094957',
      href: 'https://www.linkedin.com/in/hayden-slaughter-83094957/',
    },
    site: { label: 'haydenslaughter.co.uk', href: 'https://www.haydenslaughter.co.uk/' },
  },
  summary:
    'I build products and teams people love. I do my best work in the zero-to-one mess as both a leader and hands-on builder. The first product hire in my last two roles at early-stage startups, building the product function, research practice and team from nothing. I started in UX, grew into product leadership. Now building with and for AI daily, having shipped two AI products of my own, both public.',

  experience: [
    {
      period: 'Jan 2026 – present',
      meta: ['Energy software', 'First product hire', '~12 people, pre-product-market fit'],
      role: 'Head of Product & Design',
      org: 'Powernaut',
      blurb:
        'I joined Powernaut on a three-day-a-week UX contract, and within a month I was running the product function and advising on a business pivot. Embedded new ways of working that deliver real customer value, and led the strategy the investors backed.',
      bullets: [
        'Argued for a market bet, built the research to test it, then talked the company out of it when the evidence showed it was too small to build a venture-scale company on. Re-pointed the business before it burnt runway there.',
        'Designed and ran a 26-interview research programme across nine countries in five weeks, against an investor deadline, and wrote the strategy the company now runs on. The investors backed it, and product, marketing, business development and a forward-deployed engineering initiative all derive from it.',
        'Built the product strategy from the new business strategy whilst still delivering day to day, working with the commercial, marketing and proposition teams to shape ICP, qualification and pricing.',
        'Rebuilt how the team decides what to build and ships. Short problem briefs in place of heavy requirements docs, one merged product-engineering team and an AI-native design system that holds quality without a designer in every cycle. Each cycle now ships customer-visible value that the entire team owns.',
        'From research I identified three missing platform insight layers and shipped all three. Health monitoring customers check daily, visibility of platform actions that cuts support load, and surfaced value that helps with retention and renewals. A customer described it as "something we’ve not had before".',
      ],
    },
    {
      period: 'Jan 2025 – Dec 2025',
      meta: ['Documented at instagram.com/oldflintcottage'],
      role: 'Career break',
      org: 'Rebuilding a 300-year-old cottage',
      blurb:
        "My partner and I bought a 300 year old cottage in the Sussex countryside and rebuilt it from total disrepair into our home, living on site in a shepherd's hut for 15 months and doing the work ourselves.",
    },
    {
      period: 'Jun 2021 – Dec 2024',
      meta: ['EV charging scale-up', 'Reported to the founder'],
      role: 'Head of Product & Design',
      org: 'Indra Renewable Technologies',
      blurb:
        'I joined on a three-week UX brief and left three and a half years later running everything customer-facing. Four products built and run, two native mobile apps and two web platforms, with the product function, research practice and team of seven behind them all built from nothing. One of them became the number-one-rated charging app in the UK.',
      bullets: [
        "Traced a sales decline to its real cause. Field research showed the installers fitting our chargers hated the experience and were quietly recommending a competitor. Made the case to the C-suite, won the mandate, and built the installer app. Commissioning went from hours to minutes, the app hit 4.6 stars, and it carried us over a quarterly sales target and reopened closed sales channels. The findings also drove a redesign of the charger's internal build.",
        'Took the customer app from a low two-star launch to 4.2 and the number-one rated UK domestic charging app. In this market the rating sells the hardware.',
        "Hired a researcher as one of my first moves and built a practice that ran hundreds of sessions. I carried the customer's voice into C-suite meetings on a regular cadence, so every product decision had evidence behind it.",
        'Re-engineered the operations platform the business ran on. Page loads went from 58 seconds to 1, core search from 5 seconds to under 1, scaled across 130,000+ commissioned chargers.',
        "Built and ran the software and research behind the world's largest vehicle-to-home trial, 200+ homes, publicly documented.",
        'Held the team steady and shipping through the company’s acquisition and the leadership churn that followed, then worked with the incoming CEO and CTO to define the product strategy for what came next. The product and team were a real part of what made the company worth buying.',
      ],
    },
    {
      period: '2012 – 2021',
      meta: ['Clients including JP Morgan, Virgin Holidays, EDF Energy, RSA, Nuffield Health and the NHS'],
      role: 'Contract UX & Product Consultant',
      bullets: [
        "Shaped Virgin Holidays' digital strategy and built the capability of its in-house design team.",
        "Designed a mobile app for EDF's new domestic energy offering, to take on the sector's startups that were gaining traction.",
        "Reframed JP Morgan's internal-tool overhaul mid-flight and sold the new direction to senior stakeholders, saving around 24 working days per user per year.",
        'Delivered a public-participation platform for the NHS, aligning four partner organisations behind one narrative.',
      ],
    },
  ] as CvRole[],

  aiProducts: [
    {
      name: 'Olive',
      status: 'LIVE ON TESTFLIGHT',
      kind: 'Premium iOS cooking app',
      body: "Plans the week's meals around your taste and diet, writes the shopping list and walks you through the cooking. Built solo, entirely with AI. Quantities always come from structured data, never the model, so it can never put a wrong measurement in a recipe.",
    },
    {
      name: 'Pip',
      status: 'LIVE',
      kind: 'Local-first Mac AI assistant',
      body: 'Thinks with you, not for you. A genuine MCP client built from scratch, model-agnostic by architecture, with cost-aware routing and agentic guardrails. Its documentation system keeps a stateless AI agent coherent across sessions.',
    },
  ],

  skills: [
    'Product strategy',
    'Systems thinking',
    'Zero-to-one (0-1)',
    'Product discovery & user research',
    'Team building & leadership',
    'Stakeholder alignment',
    'AI-native product development',
    'Agentic systems & guardrails',
    'Human-in-the-loop design',
    'Design systems',
    'Prototyping & front-end fluency',
  ],

  education: [
    { degree: 'MSc Human-Computer Interaction', place: 'University of Sussex' },
    { degree: 'BA (Hons) Computer Games Design, First Class', place: 'Sheffield Hallam University' },
  ],

  outsideWork:
    'Ten years competing at international level in ultimate frisbee, including for Great Britain. Most recently won the World Masters Club Championships.',
};
