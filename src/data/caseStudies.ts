/**
 * Case studies — the two anchors. Verbatim from the latest portfolio pieces
 * (indra-case-study.md, powernaut-case-study.html). Powernaut is the current
 * employer: named per CV v2, but no live-strategy specifics beyond what the
 * source case study already surfaces. Voice preserved (no em dashes/colons).
 */

export interface Beat {
  n: string;
  title: string;
  subhead: string;
  body: string[];
  quote?: { text: string; attrib: string };
  stat?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  kind: string;
  period: string;
  /** One-line hook shown at the top of the study. */
  oneLiner: string;
  /** Short standfirst under the hook. */
  lede: string;
  /** Card summary on the work index / home. */
  summary: string;
  tags: string[];
  outcomes: { value: string; label: string }[];
  beats: Beat[];
  depth: { title: string; body: string }[];
  throughLine: string;
}

const indra: CaseStudy = {
  slug: 'indra',
  name: 'Indra Renewable Technologies',
  kind: 'EV charging scale-up',
  period: '2021 – 2024',
  oneLiner:
    'A three-week brief turned into three years running everything customer-facing, and I found a problem quietly costing us sales and fixed it end to end.',
  lede: 'A short contract that grew into the product function, the research practice, the team, and an installer app that won back the tradespeople who had been sending our customers elsewhere.',
  summary:
    "Contract designer to product lead. A three-week brief turned into three years running everything customer-facing. I found a problem quietly costing us sales, and fixed it end to end.",
  tags: ['#1-rated app', 'hours to minutes', "world's largest V2H trial"],
  outcomes: [
    { value: '#1', label: 'The number-one-rated domestic charging app in the UK' },
    { value: 'hrs → min', label: 'Installer commissioning, fitters from critics to advocates' },
    { value: '130,000+', label: 'Chargers on the operations platform, running 98% faster' },
    { value: 'from nothing', label: 'A product function, research practice and team of seven' },
  ],
  beats: [
    {
      n: '01',
      title: 'How it started',
      subhead:
        'I was brought in for a contained piece of UX work. It turned out to be the start of building the whole product.',
      body: [
        'A UI designer at an agency asked me to come and work with her on a charging app. She had the visual design, and she wanted me for the UX. On paper it was small and self-contained, a few weeks of work on a fixed fee, with someone else building the back end.',
        'It did not stay that way for long. The more I got into it, the clearer it became that the questions that mattered, what the product should be and who it was really for, had not been answered yet. So I started answering them. I ran workshops with the founder, worked out what we were actually building, and shaped it from there.',
        'The short contract turned into a rolling one, and before long I was in-house and running the app.',
      ],
    },
    {
      n: '02',
      title: 'The leak nobody had traced',
      subhead:
        'Sales were falling and no one knew why. We found the answer by talking to the people fitting the product.',
      body: [
        'At Indra, sales were in decline and targets were consistently being missed. Installers were unhappy with our product, but no one could put a finger on exactly why. I formed a small team to investigate and understand what was happening.',
        'What we uncovered was uncomfortable. The installers who fit our chargers, the tradespeople on the tools every day, hated fitting ours. They were complicated, fiddly and took an excessive amount of time to commission. So when a customer asked for a recommendation, they pointed them at a competitor that was easier and quicker to put on the wall. The people we relied on to fit and promote our product were quietly sending business elsewhere, and nobody had traced it back.',
      ],
    },
    {
      n: '03',
      title: 'Making the case upstairs',
      subhead: "I took it to the C-suite and made installer pain the company's problem to fix.",
      body: [
        'I took the findings to the C-suite and made the case that installer pain was costing us sales and reputation. We got the nod to assemble the team and build the solution.',
      ],
    },
    {
      n: '04',
      title: 'Building the fix, and changing the hardware',
      subhead:
        'An installer app built around how they actually work. Commissioning went from hours to minutes, and the research reshaped the physical product.',
      body: [
        'I spent days on the road following and speaking to installers, observing them in the real world on real jobs. We took what we learnt and designed a solution around how they actually work. Commissioning a charger went from hours to minutes, and installers went from critics to advocates. The people who had been quietly steering customers elsewhere now had a reason to recommend us instead.',
        'The research also highlighted a long-standing problem with the physical product, which we fed back to the hardware team. This led to a major change in the internal build of the existing product, and shaped how we would architect the next one.',
        'Getting a hardware company to change its physical product off the back of a front-end team’s research is not a normal thing to be able to do. It happened because I made the commercial cost of not doing it impossible to ignore.',
      ],
      stat: '4.6 stars, installer app. Hours to minutes to commission. Fitters from critics to advocates.',
    },
    {
      n: '05',
      title: 'The best-rated app in the UK',
      subhead:
        'In this market the app rating decides whether people buy the charger. I built ours into the best-rated in the country.',
      body: [
        'Alongside the installer work I owned the customer app, the thing people use to control their charger. I built it into the number-one-rated domestic charging app in its UK field, and it holds a 4.2.',
        'In this market the rating does real work. People check it before they buy the charger, so the score in the store feeds straight into whether the hardware sells at all. Making it the best-rated app in the field was the point.',
      ],
    },
    {
      n: '06',
      title: 'The team and the function I built around it',
      subhead:
        'None of this existed when I arrived. I built the product function, the research practice, the team, and the office they worked in.',
      body: [
        'When I arrived there was no product function. By the end I had built one and grown into the role that named it, owning everything customer-facing and reporting to the founder.',
        'I hired a researcher as one of my first moves, and together we built a research practice that ran hundreds of sessions. The important part is that it did not sit in a drawer. I brought the customer’s voice into C-suite meetings on a regular cadence, so the whole business could hear what its users were actually saying, and every product decision had that behind it.',
        'The team was seven people, and not seven tidy direct reports. It was a blend I had to actually lead, an external design agency, an app-development agency, a contract agile coach, and full-time people I hired myself. I stood them up in a second office I built from an empty room, furniture and kit and all. One of the back-end engineers asked to move onto the team because of the work we were doing. She did not have to move, she chose to.',
      ],
    },
    {
      n: '07',
      title: 'Holding it together through the sale',
      subhead:
        'The company was acquired, the founder left and the top churned. I kept my team steady and shipping through it.',
      body: [
        'The back half of my time there was turbulent. The company was acquired by a major energy group, the founder who had started it all and who I reported to left, and the leadership above me churned.',
        'My job through that was to hold my own team steady. I kept the pressure and the politics away from them, held morale and momentum through a leadership vacuum, and kept the product shipping while the ground moved underneath us. The quiet part underneath it is that the product and the team I had built were a real part of what made the company worth buying. Once the new leadership was in, I was in the room with the incoming CEO and CTO, helping shape the product strategy for what came next.',
      ],
    },
  ],
  depth: [
    {
      title: 'The operations platform',
      body: 'The tool the whole business ran on, support agents and installers alike, rebuilt around how those people actually worked and around customers who increasingly wanted to help themselves. Page loads went from 58 seconds to 1, a core search from around 5 seconds to under 1, with full test coverage on the critical path. It scaled to a fleet of more than 130,000 commissioned chargers.',
    },
    {
      title: "The world's largest vehicle-to-home trial",
      body: 'I built and ran the software and the research behind it, a cohort of committed early adopters using their car as a home battery, powering the house at peak times and recharging when energy is cheaper and greener. Making that idea legible to an ordinary person was the hard part. The vision was the founder’s. The software that ran it was mine. Publicly documented by Indra, 200+ bidirectional chargers in UK homes.',
    },
    {
      title: "The charger's status lights",
      body: 'A new charger arrived with a ring of lights that mostly existed because a competitor had one. The team fondly called it "unicorn vomit". I turned it into a language, a standard set of light sequences that tell you what the charger is actually doing, animated properly and signed off across the business, built inside real firmware constraints.',
    },
  ],
  throughLine:
    'I did all of this with a team and the tools of the time. It is the clearest example I have of how I like to work. Find the real problem, make the case for it, and build the thing that moves the business, not just the thing I was asked for. I build the same way now, with AI in the mix. The tools have changed. The approach has not.',
};

const powernaut: CaseStudy = {
  slug: 'powernaut',
  name: 'Powernaut',
  kind: 'Early-stage energy software',
  period: 'Current role',
  oneLiner: 'I took a company chasing every market and narrowed it to one it could win.',
  lede: 'I came in as a contract designer and built the product function out of it. I made the first product call, led the company strategy the investors now back, and built the product strategy and the team beneath it.',
  summary:
    'First product hire. I took a company chasing every market and narrowed it to one it could win, and built the product function to make it real.',
  tags: ['26 interviews, 9 countries', 'one strategy the business runs on', 'investor-backed direction'],
  outcomes: [
    { value: '26', label: 'Interviews across 9 countries in 5 weeks, against an investor deadline' },
    { value: 'one shape', label: 'The company strategy, simple enough to sketch in 30 seconds' },
    { value: 'investor-backed', label: 'The direction the business now runs and raises on' },
  ],
  beats: [
    {
      n: '01',
      title: 'The way in',
      subhead:
        'I came in as a contract designer to add capacity. Within weeks it was five days, then Head of Design and Head of Product.',
      body: [
        'I was brought in as a UX designer, three days a week, to help with delivery capacity. Nothing more grand than that. There was no product function and no plan for one.',
        'It moved fast. After a couple of weeks they asked me to go to five days. A couple of weeks after that the conversation had changed again, to an equity share and taking on Head of Design and Head of Product. The role kept growing because the value did, not because anyone set out to hand it over.',
        'What pulled me in were the questions nobody was asking, about what we should build and why. I kept picking them up, and at some point the founder said the quiet part out loud, that product should be mine to own. I built the function from there.',
      ],
      quote: {
        text: 'I feel like this should be you.',
        attrib: 'The founder, handing over product.',
      },
    },
    {
      n: '02',
      title: 'The first product call',
      subhead:
        'A small team stretched across five customers pulling in opposite directions. My first call was to back one side and let the other go.',
      body: [
        'It was not that nothing was working. We had five customers. Two were on a platform we were actively building for, paying, growing and asking for more, the kind of pull you want. The other three were pilots pulling the other way. They wanted features we had no realistic way to build at our scale, and as pilots they came with no promise of ever turning into full rollouts. One small team could not serve both without doing both badly.',
        'So I made the call to choose. I backed the customers who were active, paying and asking to go deeper, and let go of the pilots that were soaking up real effort in a space that would not show value or traction any time soon. Walking away from live customers looks like losing ground. In practice it was the opposite. It put a stretched team on the one place we were genuinely winning, and it set everything that followed.',
      ],
    },
    {
      n: '03',
      title: 'Validating it, and hitting the ceiling',
      subhead:
        'The market we backed had a ceiling. Better to find that in research than in the numbers a year later.',
      body: [
        'Backing a market is a bet, so I set out to test it properly rather than assume. As we dug in, an uncomfortable thing surfaced. The market we had chosen might not be big enough on its own, and the options around it were thinner than we had hoped.',
        'That is why we went wider. I led a research programme, run by a working group I pulled together from across the business, the founders and the heads of marketing and procurement among them. We narrowed thousands of contacts to the right 26, across 9 countries, on discussion guides I wrote. The rule throughout was simple. Interest is not demand. A warm word proves nothing, so we pushed every conversation to a real purchasing signal, what someone would actually pay for and when.',
      ],
      quote: {
        text: 'Interest is not demand.',
        attrib: 'The rule that ran the whole programme. 26 conversations, 9 countries, every one pushed past a polite yes to a real signal.',
      },
    },
    {
      n: '04',
      title: 'The company strategy I led',
      subhead: 'I reduced the whole company to one shape, and the investors backed it as our direction.',
      body: [
        'Out of that work I led the organisational strategy, and I reduced it to a single shape. One shared layer of data, the markets it serves on top of it, and the insight that turns that data into value above them. One picture that is the product architecture, the go-to-market story, the business model and the anchor we hire and plan against. My test for it is blunt. If you cannot sketch it in 30 seconds with a marker, it is not doing its job.',
        'I held it firmly but not preciously. I was on calls with investors sanity-checking the direction, and when the founders stress-tested the shape I held the parts that mattered and gave ground on the detail where they were right. The investors, who had been pushing for a clearer direction, backed it as the company’s focus.',
        'That is not a claim, it is how the business now runs. Marketing takes its positioning, its messaging, the companies we go after and how we talk to them straight from it. Business development uses it to work out which customers to chase. A forward-deployed engineering initiative, now a real part of how we land and serve customers, came directly off the back of it. Commercial, marketing, sales and the fundraise are all working from the same page, and that page is the strategy.',
      ],
    },
    {
      n: '05',
      title: 'The product strategy I built off it',
      subhead:
        'The company strategy set the direction for the business. The product strategy made it real at the level of the product.',
      body: [
        'A direction the whole business can draw is a good place to start, but it works at the altitude of the company, which market and why. It does not tell you what to build on Monday. So once the company strategy had landed and the investors were behind it, I built the product strategy underneath it. A more granular layer, aligned to the product itself rather than the business as a whole.',
        'It takes the same shape the business decides from and turns it into themes and priorities, the what and the when, a sequence of things to build that each ladder back to the direction. That is what keeps the two honest with each other. One sets the direction. The other walks the path to it, and together they close the loop from a line on a whiteboard to the thing a customer uses.',
      ],
    },
    {
      n: '06',
      title: 'The work customers point at',
      subhead:
        'Strategy earns its keep when it ships. Alongside all of it, the team kept shipping work customers could see and use.',
      body: [
        'None of the strategy work meant the product stood still. Alongside it the team kept building, and the cycles now mapped to the direction rather than wandering off it. The result was work customers could see and use, not just architecture underneath.',
        'Two examples. A health-monitoring layer that gives customers a live read on how their sites are performing, and that became a genuine selling point in demos. And self-serve, so customers can find answers and do more on their own rather than coming to us for everything. Small, concrete things, shipped steadily, each one connected back to the strategy.',
      ],
    },
  ],
  depth: [
    {
      title: 'How the team decides and ships',
      body: 'None of the operating model existed when I arrived. Work now starts from a short problem brief, the problem and the why, so the team owns the how. I set up how we manage the backlog and the different shapes of work that move through it, so the right kind of thinking goes into the right kind of problem. And I built UX and UI into shaping the problem rather than painting over it at the end. The point is a team that owns the problem, not just the tasks.',
    },
    {
      title: 'The AI-native design system',
      body: 'A design system built to keep quality and consistency high without a designer sitting in every cycle. It means a small team ships a coherent, considered product far faster than its size would suggest.',
    },
  ],
  throughLine:
    'This is the same way I worked at Indra, present tense, with the headline moved. There it was influence and hard commercial outcomes. Here it is judgment, deciding what to build and why, and getting a whole business behind one direction. I build with AI woven through all of it now, the research, the design system, the day-to-day. The tools have moved on. The way I work has not. Find the real problem, make the case for it, and build the thing that moves the business, not just the thing I was asked for.',
};

export const caseStudies: CaseStudy[] = [powernaut, indra];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
