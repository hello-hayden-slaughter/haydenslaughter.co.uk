/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';

export interface AppDef {
  id: string;
  /** Window title-bar label. */
  title: string;
  /** Desktop-icon label (defaults to title). */
  iconLabel?: string;
  section: 'DOCUMENTS' | 'SHIPPED WORK' | 'ELSEWHERE' | 'GAMES';
  /** Accent colour for the (placeholder) desktop icon tile. */
  color: string;
  /** Optional rounded icon (apps rather than documents). */
  rounded?: boolean;
  /** Cascade spawn rect (from the design's CASCADE map). */
  rect: { x: number; y: number; w: number; h: number };
  /** mailto/href apps open a link instead of a window. */
  href?: string;
  menus?: string[];
  content?: ComponentChildren;
}

// Cascade positions + window list ported from the design script (CASCADE/TITLES).
export const APPS: AppDef[] = [
  {
    id: 'welcome',
    title: 'WELCOME.TXT',
    iconLabel: 'WELCOME',
    section: 'DOCUMENTS',
    color: 'var(--yellow)',
    rect: { x: 430, y: 100, w: 470, h: 300 },
    content: (
      <>
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;color:var(--red)">
          YOU'VE LANDED ON SLAUGHTER OS
        </p>
        <p style="margin:0 0 12px;font-size:13.5px;line-height:1.7">
          This is a portfolio that behaves like a desktop. <strong>Click any icon</strong> to open
          it, drag windows by their title bars, resize them from the bottom-right corner.
        </p>
        <p style="margin:0;font-size:13.5px;line-height:1.7">
          In a hurry? <strong>NORMAL.CV</strong> is the plain version. No desktop required.
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
    content: (
      <>
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;color:var(--red)">
          PRODUCT BUILDER · AI-NATIVE · BRIGHTON
        </p>
        <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;font-weight:700;font-family:var(--font-os)">
          I build products and teams and turn the zero-to-one mess into things people love.
        </h1>
        <p style="margin:0 0 16px;font-size:13.5px;line-height:1.7;color:var(--grey-4)">
          A zero-to-one specialist who came up through design and front-end, building AI-native
          today.
        </p>
        <hr style="border:none;border-top:1px dotted var(--grey-2);margin:14px 0" />
        <p style="margin:0 0 12px;font-size:13.5px;line-height:1.75">
          I build products, and the teams that build them. I do my best work in the early stages,
          when it's unclear, unshaped, and we're building from scratch. I take that ambiguity and
          turn it into something real, a product people love, and a team that owns where it's going.
        </p>
        <p style="margin:0;font-size:13.5px;line-height:1.75">
          I learnt my craft through UX design, grew into product, and these days build AI-native.
          It's the most alive and energised I've felt about work in years. The tools change often,
          but the collaborative and open way I work doesn't.
        </p>
      </>
    ),
  },
  {
    id: 'cv',
    title: 'NORMAL.CV — THE NO-NONSENSE VERSION',
    iconLabel: 'NORMAL.CV',
    section: 'DOCUMENTS',
    color: 'var(--white)',
    rect: { x: 240, y: 40, w: 660, h: 620 },
    content: (
      <div style="font-family:Helvetica,'Helvetica Neue',sans-serif;color:#222">
        <h2 style="margin:0 0 2px;font-size:22px;font-weight:700;letter-spacing:-0.01em;font-family:inherit">
          Hayden Slaughter
        </h2>
        <p style="margin:0 0 4px;font-size:13px;color:#444">
          Product Builder · AI-native · Brighton, UK
        </p>
        <p style="margin:0 0 20px;font-size:12px;color:#666">
          hello@haydenslaughter.co.uk
        </p>
        <p style="margin:0 0 22px;font-size:13px;line-height:1.6">
          Zero-to-one product specialist. I take ambiguous early-stage problems and turn them into
          shipped products and teams that own where they're going. Came up through UX design and
          front-end; build AI-native today.
        </p>
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#999">
          EXPERIENCE
        </p>
        <div style="margin-bottom:16px">
          <p style="margin:0 0 2px;font-size:13.5px;font-weight:700">
            First Product Hire — early-stage energy software{' '}
            <span style="font-weight:400;color:#888">· current</span>
          </p>
          <ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px;line-height:1.65;color:#333">
            <li>Defined the product role from scratch; wrote the strategy the company now runs on.</li>
            <li>
              Ran 26 customer interviews across 9 countries in 5 weeks against an investor deadline;
              killed my own market bet when the evidence said so.
            </li>
            <li>Built the team's operating model and an AI-driven design system.</li>
          </ul>
        </div>
        <div style="margin-bottom:16px">
          <p style="margin:0 0 2px;font-size:13.5px;font-weight:700">
            Product Lead — Indra (EV charging){' '}
            <span style="font-weight:400;color:#888">· 3 years</span>
          </p>
          <ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px;line-height:1.65;color:#333">
            <li>
              Joined on a three-week design contract; ended up running everything customer-facing
              and building the product function.
            </li>
            <li>
              Traced declining sales to installer pain; redesigned commissioning from hours to
              minutes, turning installers from critics to advocates.
            </li>
            <li>
              Took the customer app from two stars to 4.2 and #1 in the UK; built the software
              behind the world's largest vehicle-to-home trial (200+ homes).
            </li>
          </ul>
        </div>
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#999">
          INDEPENDENT PRODUCTS
        </p>
        <p style="margin:0 0 6px;font-size:12.5px;line-height:1.6">
          <strong>Olive</strong> — iOS app that turns cookbook pages, screenshots and reels into
          clean recipes. Designed and built solo, entirely with AI. On TestFlight.
        </p>
        <p style="margin:0;font-size:12.5px;line-height:1.6">
          <strong>Pip</strong> — desktop AI assistant that thinks with you, not for you.
          Model-agnostic, local-first, custom MCP client. Built solo.
        </p>
      </div>
    ),
  },
  {
    id: 'how',
    title: 'HOW I WORK',
    section: 'DOCUMENTS',
    color: 'var(--paper)',
    rect: { x: 300, y: 90, w: 560, h: 560 },
    content: (
      <>
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;color:var(--red)">
          OPERATING PRINCIPLES
        </p>
        <p style="margin:0 0 12px;font-size:13.5px;line-height:1.7">
          Start with the sharpest version of the problem, in the open, with the team. Build the
          smallest real thing that tests the biggest risk. Kill bets fast when the evidence says so.
        </p>
        <p style="margin:0;font-size:13.5px;line-height:1.7">
          More detail arrives here soon.
        </p>
      </>
    ),
  },
  {
    id: 'journey',
    title: 'JOURNEY.LOG',
    section: 'DOCUMENTS',
    color: 'var(--paper)',
    rect: { x: 420, y: 170, w: 480, h: 260 },
  },
  {
    id: 'work',
    title: 'C:\\THE WORK',
    iconLabel: 'THE WORK',
    section: 'SHIPPED WORK',
    color: 'var(--yellow)',
    rect: { x: 830, y: 90, w: 500, h: 220 },
  },
  {
    id: 'ai',
    title: 'SHIPPED.EXE',
    section: 'SHIPPED WORK',
    color: 'var(--red)',
    rect: { x: 440, y: 60, w: 520, h: 560 },
  },
  {
    id: 'olive',
    title: 'OLIVE.APP',
    section: 'SHIPPED WORK',
    color: 'var(--mint)',
    rounded: true,
    rect: { x: 540, y: 15, w: 390, h: 760 },
  },
  {
    id: 'pip',
    title: 'PIP.APP',
    section: 'SHIPPED WORK',
    color: 'var(--ink)',
    rounded: true,
    rect: { x: 300, y: 90, w: 720, h: 480 },
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
