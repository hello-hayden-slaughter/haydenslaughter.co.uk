/**
 * Case studies — the two anchors. Content + images transcribed from the latest
 * portfolio piece (hayden-slaughter-portfolio.html). Indra is named and
 * image-led; Powernaut is the current employer, anonymised and text-led
 * (no photos, no live-strategy specifics beyond what the source surfaces).
 * Voice preserved (no em dashes, no colons in body copy).
 */

export interface Img {
  src: string;
  alt: string;
  /** cover = cropped to fill (default in grids); contain = whole image, letterboxed; natural = intrinsic aspect. */
  fit?: 'cover' | 'contain' | 'natural';
  /** Cell background (used behind contained diagrams). */
  bg?: string;
}
export interface Quote {
  text: string;
  attrib?: string;
  note?: string;
}
export interface Figure {
  /**
   * band = full-width fixed-height cover strip (hero).
   * grid = equal-height cover images side by side in one bordered box.
   * frame = image shown whole on a padded light background (diagrams, screens, portraits).
   * photo-quote = a cover photo beside a pull-quote in one bordered box.
   */
  layout: 'band' | 'grid' | 'frame' | 'photo-quote';
  imgs: Img[];
  /** grid-template-columns for grid / photo-quote layouts. */
  cols?: string;
  caption?: string;
  quote?: Quote;
}
export interface Beat {
  title: string;
  subhead: string;
  body: string[];
  figures?: Figure[];
  quote?: Quote;
  /** Mint stat bar segments, e.g. ["4.6 stars", "hours to minutes", "critics to advocates"]. */
  stat?: string[];
}
export interface DepthItem {
  title: string;
  body: string;
  /** Optional 4:3 cover image, rendered as a card with the text below. */
  image?: Img;
}
export interface CaseStudy {
  slug: string;
  name: string;
  kind: string;
  period: string;
  roleTitle: string;
  oneLiner: string;
  standfirst: string;
  summary: string;
  tags: string[];
  hero?: Img;
  cardImage?: string;
  whatIBuilt: string[];
  beats: Beat[];
  depthHeading?: string;
  depth?: DepthItem[];
}

const img = (n: string, alt: string, fit?: Img['fit'], bg?: string): Img => ({
  src: `/portfolio/img/${n}`,
  alt,
  ...(fit ? { fit } : {}),
  ...(bg ? { bg } : {}),
});

const indra: CaseStudy = {
  slug: 'indra',
  name: 'Indra Renewable Technologies',
  kind: 'EV charging scale-up',
  period: '2021 – 2024',
  roleTitle: 'Head of Product & Design',
  oneLiner: `I joined on a three-week UX brief and left three and a half years later running everything customer-facing.`,
  standfirst: `Four products built and run, two native mobile apps and two web platforms, with the product function, research practice and team of seven behind them all built from nothing.`,
  summary: `A three-week brief turned into three years running everything customer-facing. I found a problem quietly costing us sales, and fixed it end to end.`,
  tags: ['#1-rated app', 'hours to minutes', "world's largest V2H trial"],
  hero: img('indra-1.jpg', 'The Indra customer app screens'),
  cardImage: '/portfolio/img/indra-1.jpg',
  whatIBuilt: [
    'The number-one-rated domestic charging app in the UK',
    'An installer app that cut commissioning from hours to minutes and turned fitters from critics to advocates',
    'An operations platform running a fleet of 130,000+ chargers, 98% faster than what it replaced',
    'A product function, a research practice and a team of seven, built from nothing',
  ],
  beats: [
    {
      title: 'How it started',
      subhead: `I was brought in for a contained piece of UX work. It turned out to be the start of building the whole product function.`,
      body: [
        `A UI designer at an agency asked me to come and work with her on a charging app. She had the visual design, and she wanted me for the UX. On paper it was small and self-contained, a few weeks of work on a fixed fee, with someone else building the back end.`,
        `It did not stay small. Through the kickoff sessions and early explorations it became clear that the questions that mattered, what the product should be and who it was really for, had not been answered yet. So I started answering them. I ran workshops with the founder, worked out what we were actually building, and shaped it from there.`,
        `The short contract turned into a rolling one, and before long I was embedded in the team and running the app.`,
      ],
      figures: [
        {
          layout: 'grid',
          cols: '1fr 1fr',
          imgs: [
            img('indra-2.jpg', 'The kick-off FigJam board'),
            img('indra-3.jpg', 'The mental-model work'),
          ],
          caption: `The kick-off board and the mental-model work. Working out what we were actually building, and for whom.`,
        },
      ],
    },
    {
      title: 'The leak nobody had traced',
      subhead: `Customers ask their installer what to buy. Ours were answering with a competitor's name.`,
      body: [
        `At Indra, sales were in decline and targets were consistently being missed. Installers were unhappy with our product, but no one could put a finger on exactly why. I formed a small team to investigate and understand what was happening.`,
        `What we uncovered was uncomfortable. The installers who fit our chargers, the tradespeople on the tools every day, hated fitting ours. They were complicated, fiddly and took an excessive amount of time to commission. So when a customer asked for a recommendation, they pointed them at a competitor that was easier and quicker to put on the wall. The people we relied on to fit and promote our product were quietly sending business elsewhere, and nobody had traced it back.`,
      ],
      figures: [
        {
          layout: 'photo-quote',
          cols: '0.55fr 1fr',
          imgs: [img('indra-4.jpg', 'An installer fitting an Indra charger')],
          quote: {
            text: `Indra are the most complex to commission due to the connectivity.`,
            attrib: 'Installer, field research',
            note: `What the research kept hearing, in the trade's own words.`,
          },
        },
      ],
    },
    {
      title: 'Making the case upstairs',
      subhead: `I took it to the C-suite and made installer pain the company's problem to fix.`,
      body: [
        `Findings like these are awkward for a hardware company, and the warning was coming from the design side of the house rather than engineering. So I framed it commercially, lost sales and a damaged reputation, and put it in front of the leadership team. We came out with the nod, the team and the remit to build the solution.`,
      ],
      figures: [
        {
          layout: 'frame',
          imgs: [img('indra-5.jpg', 'The installer commissioning journey, mapped end to end', 'natural')],
          caption: `The commissioning journey, mapped end to end. Part of the evidence that carried the case.`,
        },
      ],
    },
    {
      title: 'Building the fix, and changing the hardware',
      subhead: `The leak closed. The findings kept travelling, into the hardware itself and the charger that came after.`,
      body: [
        `I spent days on the road following and speaking to installers, observing them in the real world on real jobs. We took what we learnt and designed a solution around how they actually work. Commissioning a charger went from hours to minutes, and installers went from critics to advocates. The people who had been quietly steering customers elsewhere now had a reason to recommend us instead. The app carried us over a quarterly sales target and reopened sales channels we had lost.`,
        `The research also highlighted a long-standing problem with the physical product, which we fed back to the hardware team. This led to a major change in the internal build of the existing product, and shaped how we would architect the next one.`,
        `Getting a hardware company to change its physical product off the back of a front-end team's research is not a normal thing to be able to do. It happened because I made the commercial cost of not doing it impossible to ignore.`,
      ],
      figures: [
        {
          layout: 'grid',
          cols: '0.75fr 1fr',
          imgs: [
            img('indra-6.jpg', 'Installers fitting a charger on site'),
            img('indra-7.jpg', 'On site with installers at the chargers'),
          ],
          caption: `On the road and on site. Real jobs, real installers, and the research that reshaped the product.`,
        },
      ],
      stat: ['4.6 stars, installer app', 'hours to minutes to commission', 'fitters from critics to advocates'],
    },
    {
      title: 'The best-rated app in the UK',
      subhead: `Nobody buys a charger without checking its app score first. That made the rating a sales number, and it was mine to move.`,
      body: [
        `Alongside the installer work I owned the customer app, the thing people use every day to control their charger. It is the part of the product customers live with long after the installer's van has left. I built it into the number one rated UK charging app, holding an average 4.2 rating across the App Store and Google Play, and kept it there.`,
        `The work was recognised beyond the app store ratings. In 2024 the customer facing app won the Best Use of Technology & Trends award at the Herefordshire & Worcestershire Chamber of Commerce Business Awards.`,
      ],
      figures: [
        {
          layout: 'frame',
          imgs: [img('indra-8.jpg', 'The customer app home, charging and boost screens', 'natural')],
          caption: `The customer app. Charging status, scheduling and cost, simple enough to check at a glance.`,
        },
        {
          layout: 'frame',
          imgs: [img('indra-9.jpg', 'Collecting the award with the team', 'natural')],
          caption: `Best Use of Technology & Trends, Herefordshire & Worcestershire Chamber of Commerce Business Awards 2024, collected with the team.`,
        },
      ],
    },
    {
      title: 'The team and the function I built around it',
      subhead: `None of this existed when I arrived. I built the product function, the research practice, the team, and the office we worked in.`,
      body: [
        `Hiring a researcher was one of my first moves. Together we built a practice that ran hundreds of sessions, and none of it sat in a drawer. I took what customers were saying into the C-suite, month in, month out, so the whole business could hear its users, and every product decision had that behind it.`,
        `The team was seven people, and not seven tidy direct reports. It was a blend of an external design agency, an app-development agency, a contract agile coach, and full-time people I hired myself. I stood up a satellite office from scratch, furniture, desks, chairs, computers, the lot. One of the back-end engineers asked to move onto the team because of the work we were doing. I put the structure in once, so everything the team built after it had a foundation underneath.`,
      ],
      figures: [
        {
          layout: 'grid',
          cols: '1fr 1fr',
          imgs: [
            img('indra-10.jpg', 'The discover, define, build process the function ran on', 'contain', '#F4F7F6'),
            img('indra-11.jpg', 'The numbers the function kept producing'),
          ],
          caption: `The process the function ran on, and the numbers it kept producing.`,
        },
      ],
    },
    {
      title: 'Holding it together through the sale',
      subhead: `The company changed hands, the top churned. My team kept shipping.`,
      body: [
        `The back half of my time there was turbulent. The company was acquired by a major energy group, the founder who had started it all left, and the leadership above me kept changing.`,
        `My job through that was to hold my own team steady. I kept the pressure and the politics away from them, held morale and momentum through a leadership vacuum, and kept the product going out the door while the ground moved underneath us. The product and the team I had built were part of what made the company worth buying. Once the new leadership was in, I was in the room with the incoming CEO and CTO, helping shape the product strategy for what came next.`,
      ],
      figures: [
        {
          layout: 'frame',
          imgs: [img('indra-12.jpg', 'The team together', 'natural')],
          caption: `The team that kept shipping.`,
        },
      ],
    },
  ],
  depthHeading: 'More of what I built at Indra',
  depth: [
    {
      title: 'The operations platform',
      body: `The tool the whole business ran on, support agents and installers alike, rebuilt around how those people actually worked and around customers who increasingly wanted to help themselves. Page loads went from 58 seconds to 1, a core search from around 5 seconds to under 1, with full test coverage on the critical path. It scaled to a fleet of more than 130,000 commissioned chargers.`,
      image: img('indra-13.jpg', 'DynaMO, the operations platform'),
    },
    {
      title: "The world's largest vehicle-to-home trial",
      body: `I built and ran the software and the research behind it, a cohort of committed early adopters using their car as a home battery, powering the house at peak times and recharging when energy is cheaper and greener. The vision was the founder's. The software that ran it was mine. Publicly documented by Indra, 200+ bidirectional chargers in UK homes.`,
      image: img('indra-14.jpg', "Bidirectional charging at the industry's biggest show"),
    },
    {
      title: 'The platform migration',
      body: `I co-ran moving thousands of customers off the third-party platform we had been renting onto our own, and made it scale and hold.`,
    },
    {
      title: "The charger's status lights",
      body: `A new charger arrived with a ring of lights that mostly existed because a competitor had one. The team fondly called it unicorn vomit. I turned it into a language, a standard set of light sequences that tell you what the charger is actually doing, animated properly and signed off across the business, built inside real firmware constraints.`,
    },
  ],
};

const powernaut: CaseStudy = {
  slug: 'powernaut',
  name: 'Powernaut',
  kind: 'Energy software',
  period: 'Current role',
  roleTitle: 'Head of Product & Design',
  oneLiner: `I narrowed a company chasing every market to the one it could win.`,
  standfirst: `I joined Powernaut on a three-day-a-week UX contract and within a month I was running the product function and advising on a business pivot. Embedded new ways of working that deliver real customer value and led the strategy the investors backed.`,
  summary: `First product hire. I took a company chasing every market and narrowed it to one it could win, and built the product function to make it real.`,
  tags: ['26 interviews, 9 countries', 'one strategy the business runs on', 'investor-backed direction'],
  whatIBuilt: [
    "A 26-interview research programme across nine countries that produced the company's new direction",
    'The product strategy, one shape the whole business works from',
    'An operating model where one merged team ships customer-visible value every cycle',
    'An AI-native design system that holds quality without a designer in every cycle',
    'Three missing platform insight layers, shipped, one now a selling point in live demos',
  ],
  beats: [
    {
      title: 'The way in',
      subhead: `The job was delivery capacity. The role it turned into did not exist before I arrived.`,
      body: [
        `I came in to take design work off a team that had too much of it. There was no product team and no plan for one. Within a couple of weeks they asked me to go to five days. A few weeks after that we agreed an equity share, and I took on design and product.`,
        `The questions that mattered, what we should build and why, had no owner, so I started answering them. A few months in the founder handed the rest over, and I have run product since.`,
      ],
    },
    {
      title: 'The first product call',
      subhead: `Five customers, two directions, one small team. My first call was where to focus our efforts.`,
      body: [
        `The team were drowning in work and fighting on multiple fronts. Two of our customers were paying and growing. The other three were pilots, asking for features we had no realistic way of building, with no promise of ever turning into rollouts. With the team we had we could not serve both.`,
        `The numbers said the same thing about the pilots. Fewer than one in fifty of the end customers we needed were signing up, fewer than half the sites were profitable, customer service was killing us, and the rollout target the work was meant to unlock was out of reach.`,
        `So I chose. We doubled down on the two that were pulling us forward and finished the other three's pilots properly, final reports, forecast against realised savings and happy customers. We left that market with our reputation and relationships intact. It allowed a stretched team to focus on the one place we had traction, and it set up everything that followed.`,
      ],
    },
    {
      title: 'Validating it, and hitting the ceiling',
      subhead: `I argued us onto that market. Then my own research talked the company back out of betting everything on it.`,
      body: [
        `A market you have chosen is still a guess, so I built the research to test the bet properly. It came back against me. The market was consolidating, the bigger players were building their own tools in house, and the pool of right-sized customers left over was too small to carry a venture-scale company.`,
        `So I made the case against the direction I had sold weeks earlier. Not to abandon the market, the customers we had there stayed and mattered, but to stop treating it as the only bet. We re-pointed the effort before it burnt runway, and turned the same research engine onto the bigger question of where this company could actually win.`,
      ],
    },
    {
      title: 'Finding the direction',
      subhead: `The company needed a direction it could defend to investors. I built the programme that went and found it.`,
      body: [
        `I pulled together a working group, the founders and the heads of marketing and procurement in it, and stood up a five-week research programme against an investor deadline. I wrote the discussion guides and ran the interviews, 540 outreach messages narrowed to 26 conversations across nine countries.`,
        `The standing rule was that interest is not demand, so every conversation got pushed to what someone would actually pay for and when. The rule held even when it flattered us. A buyer told us they would buy it tomorrow, and it still counted as one signal, not proof, because their own plans pointed the other way.`,
        `What came back was a thesis. The tools this industry runs on were built for a few large assets, coordinated by people on calls and in spreadsheets. As assets get smaller, which is the space we operate in, the coordination work stays the same size. So below a certain point the overhead eats the value and the work does not get done.`,
        `The thesis, and the customer it defines, became the company strategy. I wrote it, the founders made their adjustments and took it to the investors, who had been pushing for a clearer direction. They backed it.`,
      ],
      quote: { text: `Interest is not demand.`, note: `The rule that ran the whole programme.` },
    },
    {
      title: 'The product strategy, in one shape',
      subhead: `Strategy at company altitude does not tell a team what to build on Monday. This is the layer that does, and it is mine.`,
      body: [
        `Underneath the company strategy I built the product strategy, and I reduced it to a single shape. One shared layer of data, the three stages of the operation it serves, and the insight on top that makes the whole thing legible. In our customers' worlds those stages run separately, every handover is manual, and the numbers degrade at each boundary. The shape is what joins them back up.`,
        `One object doing four jobs. My test for it is blunt. If you cannot sketch it in thirty seconds with a marker, it is not doing its job. And it gives the whole company something to say no with.`,
        `It did not stay a product artefact. Marketing writes positioning and messaging from the shape. Business development picks which customers to chase off the back of it, and I work that edge with them weekly, who is in, who is out, what we should charge. A forward-deployed engineering initiative rolled out from the same picture. The whole business runs from one page, and that page is the strategy.`,
      ],
    },
    {
      title: 'The work customers point at',
      subhead: `Strategy earns its keep when it ships. Alongside all of it, the team kept putting work in front of customers.`,
      body: [
        `None of the strategy work meant the product stood still. The research had shown three insight layers missing from the platform, so we built all three. Health monitoring gives customers a live read on how their sites are performing. They check it daily, and it became a selling point in demos. Visibility of platform actions lets customers find answers on their own, and the support load dropped with it. The third surfaces the value the platform has created, something real to stand on at renewal.`,
        `One customer liked a demo enough to tell us to quote them on our own website. When we asked why they had chosen us, the answer was the visibility and control.`,
      ],
      quote: { text: `Something we've not had before.`, attrib: 'A Powernaut customer' },
    },
  ],
  depthHeading: 'More of what I built at Powernaut',
  depth: [
    {
      title: 'How the team decides and ships.',
      body: `None of it existed when I arrived, and it runs on one idea. Hand the team the problem, not the solution. Work starts from a short problem brief, and if the brief is long I have smuggled a solution into it. Product, engineering and delivery run as one team, and the bar at the far end is firm. Done means adopted, not deployed.`,
    },
    {
      title: 'An AI-woven way of working.',
      body: `AI runs through the day-to-day, the research, the design work and the routine operational load, so a small team moves like a bigger one. It is the medium I build in now, and the most energised I have felt about work in years.`,
    },
    {
      title: 'The AI-native design system.',
      body: `Design capacity was one external designer, about a day a week, and when we could not keep her I was not willing to lose the quality she brought. The design system is the answer, a single source of truth in the codebase with guardrails that keep AI-produced work on brand. It is why a team this size ships a coherent, considered product at the pace it does.`,
    },
    {
      title: 'AI inside the product.',
      body: `Most teams only answer the first AI question, how the team uses it to work. I owned the second, how it operates inside the platform. Customer first, visible, real product impact, and no slop, with agents inside the workflows rather than a chat bolted on top. The clearest bet was exposing the platform through an MCP server so agents can work directly against it. A light-touch build, but the pull from customers and the team was out of all proportion to its size.`,
    },
  ],
};

export const caseStudies: CaseStudy[] = [indra, powernaut];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
