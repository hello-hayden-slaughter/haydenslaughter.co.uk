/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';
import { intro, howIWork, journey, fit, builtWithAI, site } from '../../data/site';
import { cv } from '../../data/cv';
import { caseStudies } from '../../data/caseStudies';

export interface AppDef {
  id: string;
  title: string;
  iconLabel?: string;
  section: 'DOCUMENTS' | 'SHIPPED WORK' | 'ELSEWHERE' | 'GAMES';
  color: string;
  rounded?: boolean;
  rect: { x: number; y: number; w: number; h: number };
  href?: string;
  menus?: string[];
  content?: ComponentChildren;
}

const eyebrow = (text: string) => (
  <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;color:var(--red)">
    {text}
  </p>
);

const CvWindow = () => (
  <div>
    {eyebrow(cv.kicker)}
    <h1 style="margin:0 0 4px;font-size:22px;line-height:1.15;font-weight:700;font-family:var(--font-os)">
      {cv.name}
    </h1>
    <p style="margin:0 0 14px;font-size:12px;color:var(--grey-3)">
      {cv.contact.location} · <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a> ·{' '}
      <a href={cv.contact.linkedin.href} target="_blank" rel="noopener">
        LinkedIn
      </a>
    </p>
    <p style="margin:0 0 18px;font-size:13.5px;line-height:1.7">{cv.summary}</p>
    {cv.experience.map((role) => (
      <div style="margin:0 0 16px">
        <p style="margin:0;font-size:14px;font-weight:700">
          {role.role}
          {role.org ? ` · ${role.org}` : ''}{' '}
          <span style="font-weight:400;color:var(--grey-2)">· {role.period}</span>
        </p>
        {role.blurb && (
          <p style="margin:6px 0 0;font-size:13px;line-height:1.6">{role.blurb}</p>
        )}
        {role.bullets && (
          <ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px;line-height:1.6;color:var(--grey-4)">
            {role.bullets.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
    <p style="margin:18px 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;color:var(--grey-2)">
      SKILLS
    </p>
    <p style="margin:0 0 14px;font-size:12.5px;line-height:1.8">{cv.skills.join(' · ')}</p>
    <p style="margin:0;font-size:12.5px;line-height:1.6">
      <strong>Education.</strong> {cv.education.map((e) => `${e.degree}, ${e.place}`).join('. ')}.
    </p>
    <p style="margin:10px 0 0;font-size:12.5px;line-height:1.6">
      <strong>Outside work.</strong> {cv.outsideWork}
    </p>
  </div>
);

const WorkWindow = () => (
  <div>
    {eyebrow('C:\\THE WORK — 2 ITEMS')}
    <p style="margin:0 0 16px;font-size:13.5px;line-height:1.7">
      Two places I walked into something unshaped and left it clearer, more useful, and owned by the
      team. Open the full story in its own document.
    </p>
    {caseStudies.map((cs) => (
      <div style="margin:0 0 14px;border:2px solid var(--ink);padding:14px 16px;box-shadow:3px 3px 0 rgba(22,19,14,0.85)">
        <p style="margin:0;font-size:15px;font-weight:700">{cs.name}</p>
        <p style="margin:2px 0 0;font-size:11px;color:var(--grey-2)">
          {cs.kind} · {cs.period}
        </p>
        <p style="margin:8px 0 0;font-size:12.5px;line-height:1.6;color:var(--grey-4)">
          {cs.summary}
        </p>
        <p style="margin:10px 0 0;font-size:11px;color:var(--grey-3)">{cs.tags.join(' · ')}</p>
        <p style="margin:10px 0 0">
          <a href={`/portfolio/${cs.slug}`} style="font-size:12.5px;font-weight:700">
            Read the full story →
          </a>
        </p>
      </div>
    ))}
  </div>
);

const ShippedWindow = () => (
  <div>
    {eyebrow('BUILT WITH AI')}
    <p style="margin:0 0 16px;font-size:13.5px;line-height:1.7;font-weight:700">
      {builtWithAI.lead}
    </p>
    {builtWithAI.products.map((p) => (
      <div style="margin:0 0 14px">
        <p style="margin:0;font-size:14px;font-weight:700">
          {p.name} <span style="font-weight:400;color:var(--grey-2)">· {p.kind}</span>
        </p>
        <p style="margin:6px 0 0;font-size:13px;line-height:1.65">{p.body}</p>
      </div>
    ))}
  </div>
);

const AboutWindow = () => (
  <div>
    {eyebrow('PRODUCT BUILDER · AI-NATIVE · BRIGHTON')}
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;font-weight:700;font-family:var(--font-os)">
      I build products and teams and turn the zero-to-one mess into things people love.
    </h1>
    {intro.map((p) => (
      <p style="margin:0 0 14px;font-size:13.5px;line-height:1.75">{p}</p>
    ))}
    <p style="margin:0;font-size:13px">
      <a href="/">Open the CV →</a> &nbsp; <a href="/portfolio">See the work →</a>
    </p>
  </div>
);

const HowWindow = () => (
  <div>
    {eyebrow('OPERATING PRINCIPLE')}
    <h1 style="margin:0 0 14px;font-size:20px;line-height:1.3;font-weight:700;font-family:var(--font-os)">
      {howIWork.statement}
    </h1>
    <p style="margin:0 0 16px;font-size:13.5px;line-height:1.7">{howIWork.detail}</p>
    <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.8">
      {howIWork.scales.map((s) => (
        <li>{s}</li>
      ))}
    </ul>
  </div>
);

const FitJourneyWindow = () => (
  <div>
    {eyebrow('FIT, HONESTLY')}
    {fit.map((p) => (
      <p style="margin:0 0 12px;font-size:13.5px;line-height:1.7">{p}</p>
    ))}
    <hr style="border:none;border-top:1px dotted var(--grey-2);margin:16px 0" />
    {eyebrow('THE JOURNEY')}
    <p style="margin:0;font-size:13px;line-height:1.7;color:var(--grey-4)">{journey}</p>
    <p style="margin:14px 0 0;font-size:13px">
      <a href={site.links.email}>Say hello →</a>
    </p>
  </div>
);

// Cascade positions + window list ported from the design script (CASCADE/TITLES).
export const APPS: AppDef[] = [
  {
    id: 'welcome',
    title: 'WELCOME.TXT',
    iconLabel: 'WELCOME',
    section: 'DOCUMENTS',
    color: 'var(--yellow)',
    rect: { x: 430, y: 100, w: 470, h: 320 },
    content: (
      <>
        {eyebrow("YOU'VE LANDED ON SLAUGHTER OS")}
        <p style="margin:0 0 12px;font-size:13.5px;line-height:1.7">
          This is a portfolio that behaves like a desktop. <strong>Click any icon</strong> to open
          it, drag windows by their title bars, resize them from the bottom-right corner.
        </p>
        <p style="margin:0;font-size:13.5px;line-height:1.7">
          In a hurry? <strong>NORMAL.CV</strong> is the plain version, or{' '}
          <a href="/">the plain site</a> has it all without the desktop.
        </p>
      </>
    ),
  },
  {
    id: 'readme',
    title: 'ABOUT.ME',
    iconLabel: 'ABOUT.ME',
    section: 'DOCUMENTS',
    color: 'var(--paper)',
    rect: { x: 150, y: 60, w: 560, h: 470 },
    content: <AboutWindow />,
  },
  {
    id: 'cv',
    title: 'NORMAL.CV — THE NO-NONSENSE VERSION',
    iconLabel: 'NORMAL.CV',
    section: 'DOCUMENTS',
    color: 'var(--white)',
    menus: ['FILE', 'HELP'],
    rect: { x: 240, y: 40, w: 660, h: 640 },
    content: <CvWindow />,
  },
  {
    id: 'how',
    title: 'HOW I WORK',
    section: 'DOCUMENTS',
    color: 'var(--paper)',
    rect: { x: 300, y: 90, w: 520, h: 420 },
    content: <HowWindow />,
  },
  {
    id: 'journey',
    title: 'JOURNEY.LOG',
    section: 'DOCUMENTS',
    color: 'var(--paper)',
    rect: { x: 420, y: 120, w: 560, h: 460 },
    content: <FitJourneyWindow />,
  },
  {
    id: 'work',
    title: 'C:\\THE WORK',
    iconLabel: 'THE WORK',
    section: 'SHIPPED WORK',
    color: 'var(--yellow)',
    rect: { x: 300, y: 70, w: 560, h: 560 },
    content: <WorkWindow />,
  },
  {
    id: 'ai',
    title: 'SHIPPED.EXE',
    section: 'SHIPPED WORK',
    color: 'var(--red)',
    rect: { x: 440, y: 60, w: 520, h: 500 },
    content: <ShippedWindow />,
  },
  {
    id: 'olive',
    title: 'OLIVE.APP',
    section: 'SHIPPED WORK',
    color: 'var(--mint)',
    rounded: true,
    rect: { x: 540, y: 40, w: 420, h: 300 },
    content: (
      <>
        {eyebrow('OLIVE · LIVE ON TESTFLIGHT')}
        <p style="margin:0;font-size:13.5px;line-height:1.7">{builtWithAI.products[0].body}</p>
        <p style="margin:14px 0 0;font-size:12.5px;color:var(--grey-2)">
          The full Olive story is coming to this desktop soon.
        </p>
      </>
    ),
  },
  {
    id: 'pip',
    title: 'PIP.APP',
    section: 'SHIPPED WORK',
    color: 'var(--ink)',
    rounded: true,
    rect: { x: 300, y: 90, w: 460, h: 320 },
    content: (
      <>
        {eyebrow('PIP · LIVE')}
        <p style="margin:0;font-size:13.5px;line-height:1.7">{builtWithAI.products[1].body}</p>
        <p style="margin:14px 0 0;font-size:12.5px;color:var(--grey-2)">
          The full Pip story is coming to this desktop soon.
        </p>
      </>
    ),
  },
  {
    id: 'browser',
    title: 'NAVIGATOR',
    section: 'ELSEWHERE',
    color: '#7CC7E8',
    rounded: true,
    rect: { x: 360, y: 80, w: 640, h: 460 },
  },
  {
    id: 'chat',
    title: 'HAYDEN.CHAT',
    iconLabel: 'ASK HAYDEN',
    section: 'ELSEWHERE',
    color: 'var(--paper)',
    rounded: true,
    rect: { x: 640, y: 80, w: 400, h: 540 },
  },
  {
    id: 'hello',
    title: 'SAY HELLO',
    iconLabel: 'SAY HELLO',
    section: 'ELSEWHERE',
    color: 'var(--paper)',
    href: 'mailto:hello@haydenslaughter.co.uk',
    rect: { x: 0, y: 0, w: 0, h: 0 },
  },
  {
    id: 'sol',
    title: 'SOLITAIRE.EXE',
    iconLabel: 'SOLITAIRE',
    section: 'GAMES',
    color: '#2E5427',
    rect: { x: 130, y: 70, w: 410, h: 500 },
  },
  {
    id: 'mines',
    title: 'MINES.EXE',
    section: 'GAMES',
    color: 'var(--grey-1)',
    rect: { x: 470, y: 110, w: 310, h: 480 },
  },
  {
    id: 'fris',
    title: 'FRISBEE.EXE',
    section: 'GAMES',
    color: '#7CC7E8',
    rect: { x: 250, y: 120, w: 480, h: 440 },
  },
  {
    id: 'climb',
    title: 'CLIMB.EXE',
    section: 'GAMES',
    color: 'var(--grey-2)',
    rect: { x: 700, y: 60, w: 360, h: 540 },
  },
];

export const SECTIONS: AppDef['section'][] = [
  'DOCUMENTS',
  'SHIPPED WORK',
  'ELSEWHERE',
  'GAMES',
];
