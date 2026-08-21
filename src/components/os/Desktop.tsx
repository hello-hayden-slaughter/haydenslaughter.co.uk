/** @jsxImportSource preact */
import { useEffect, useRef, useState } from 'preact/hooks';
import { APPS, SECTIONS, type AppDef } from './apps';

/**
 * Three responsive modes, per the design's getMode().
 * phone < 640 · tablet < 1100 · desktop >= 1100
 */
export type Mode = 'phone' | 'tablet' | 'desktop';

interface WinState {
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  min: boolean;
}

type DragState =
  | { id: string; mode: 'move'; sx: number; sy: number; ox: number; oy: number }
  | { id: string; mode: 'resize'; sx: number; sy: number; ow: number; oh: number }
  | null;

interface IconLayout {
  pos: Record<string, { x: number; y: number }>;
  labels: { text: string; x: number; y: number }[];
}

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

const byId = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);

const readMode = (): Mode => {
  const w = window.innerWidth;
  return w < 640 ? 'phone' : w < 1100 ? 'tablet' : 'desktop';
};

/** Four corner clusters, ported from the design's computeIconLayout(). */
function computeIconLayout(): IconLayout {
  const W = window.innerWidth;
  const H = window.innerHeight;
  return {
    pos: {
      welcome: { x: 24, y: 66 },
      readme: { x: 122, y: 66 },
      cv: { x: 24, y: 172 },
      journey: { x: 122, y: 172 },
      how: { x: 24, y: 278 },
      work: { x: W - 236, y: 66 },
      ai: { x: W - 138, y: 66 },
      olive: { x: W - 236, y: 172 },
      pip: { x: W - 138, y: 172 },
      browser: { x: 24, y: H - 264 },
      chat: { x: 122, y: H - 264 },
      hello: { x: 220, y: H - 264 },
      sol: { x: W - 336, y: H - 370 },
      mines: { x: W - 238, y: H - 370 },
      fris: { x: W - 336, y: H - 264 },
      climb: { x: W - 238, y: H - 264 },
    },
    labels: [
      { text: 'DOCUMENTS', x: 28, y: 44 },
      { text: 'SHIPPED WORK', x: W - 232, y: 44 },
      { text: 'ELSEWHERE', x: 28, y: H - 288 },
      { text: 'PROCRASTINATION', x: W - 332, y: H - 394 },
    ],
  };
}

function clampRect(rect: AppDef['rect']) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(rect.w, vw - 20);
  const h = Math.min(rect.h, vh - 60);
  const x = clamp(rect.x, 4, Math.max(4, vw - w - 8));
  const y = clamp(rect.y, 4, Math.max(4, vh - h - 48));
  return { x, y, w, h };
}

function fmtClock(d: Date) {
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

export default function Desktop() {
  const [wins, setWins] = useState<Record<string, WinState>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [launcher, setLauncher] = useState(false);
  const [clock, setClock] = useState('');
  const [dragging, setDragging] = useState(false);
  // Start as 'desktop' so the first paint matches the pre-hydration shell, then
  // correct on mount. Windows only carry an inline rect in desktop mode.
  const [mode, setMode] = useState<Mode>('desktop');
  const [layout, setLayout] = useState<IconLayout | null>(null);
  const zRef = useRef(10);
  const dragRef = useRef<DragState>(null);

  const isDesktop = mode === 'desktop';
  const isMobile = !isDesktop;

  const nextZ = () => (zRef.current += 1);

  const openApp = (app: AppDef) => {
    if (app.href) {
      window.location.href = app.href;
      return;
    }
    setWins((prev) => {
      const existing = prev[app.id];
      if (existing) {
        return { ...prev, [app.id]: { ...existing, min: false, z: nextZ() } };
      }
      const { x, y, w, h } = clampRect(app.rect);
      return { ...prev, [app.id]: { x, y, w, h, z: nextZ(), min: false } };
    });
    setFocused(app.id);
    setLauncher(false);
  };

  const focus = (id: string) => {
    setWins((prev) => (prev[id] ? { ...prev, [id]: { ...prev[id], z: nextZ() } } : prev));
    setFocused(id);
  };

  const close = (id: string) => {
    setWins((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setFocused((f) => (f === id ? null : f));
  };

  /** On phone/tablet there is no minimise. The control closes instead. */
  const minimize = (id: string) => {
    if (isMobile) {
      close(id);
      return;
    }
    setWins((prev) => (prev[id] ? { ...prev, [id]: { ...prev[id], min: true } } : prev));
    setFocused((f) => (f === id ? null : f));
  };

  const closeAll = () => {
    setWins({});
    setFocused(null);
    setLauncher(false);
  };

  const taskClick = (id: string) => {
    const w = wins[id];
    if (!w) return;
    if (w.min || focused !== id) {
      setWins((prev) => ({ ...prev, [id]: { ...prev[id], min: false, z: nextZ() } }));
      setFocused(id);
    } else {
      minimize(id);
    }
  };

  const startDrag = (e: PointerEvent, id: string, dragMode: 'move' | 'resize') => {
    if (!isDesktop) return;
    e.preventDefault();
    focus(id);
    const w = wins[id];
    if (!w) return;
    dragRef.current =
      dragMode === 'move'
        ? { id, mode: dragMode, sx: e.clientX, sy: e.clientY, ox: w.x, oy: w.y }
        : { id, mode: dragMode, sx: e.clientX, sy: e.clientY, ow: w.w, oh: w.h };
    setDragging(true);
    try {
      (e.currentTarget as Element).setPointerCapture(e.pointerId);
    } catch {
      /* setPointerCapture unsupported — window listeners still handle the drag */
    }
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = e.clientX - d.sx;
      const dy = e.clientY - d.sy;
      setWins((prev) => {
        const w = prev[d.id];
        if (!w) return prev;
        if (d.mode === 'move') {
          const nx = clamp(d.ox + dx, -w.w + 90, window.innerWidth - 90);
          const ny = clamp(d.oy + dy, 0, window.innerHeight - 70);
          return { ...prev, [d.id]: { ...w, x: nx, y: ny } };
        }
        const nw = Math.max(220, Math.min(d.ow + dx, window.innerWidth - w.x - 6));
        const nh = Math.max(140, Math.min(d.oh + dy, window.innerHeight - w.y - 46));
        return { ...prev, [d.id]: { ...w, w: nw, h: nh } };
      });
    };
    const onUp = () => {
      if (dragRef.current) {
        dragRef.current = null;
        setDragging(false);
      }
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  useEffect(() => {
    const sync = () => {
      setMode(readMode());
      setLayout(computeIconLayout());
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  useEffect(() => {
    const tick = () => setClock(fmtClock(new Date()));
    tick();
    const iv = window.setInterval(tick, 15000);
    return () => window.clearInterval(iv);
  }, []);

  const openList = Object.entries(wins);
  const iconStyle = (id: string) => {
    if (!isDesktop || !layout) return undefined;
    const p = layout.pos[id];
    return p ? `position:absolute;left:${p.x}px;top:${p.y}px;width:96px` : undefined;
  };

  const renderIcon = (app: AppDef) => (
    <button
      key={app.id}
      class="os-icon"
      type="button"
      style={iconStyle(app.id)}
      onClick={() => openApp(app)}
    >
      <span class="os-icon__art">{app.icon}</span>
      <span class="os-icon__label">{app.iconLabel ?? app.title}</span>
    </button>
  );

  return (
    <div
      class={`os-root os-root--${mode}${dragging ? ' os-root--dragging' : ''}`}
      onPointerDown={() => launcher && setLauncher(false)}
    >
      {/* Status bar — phone/tablet only */}
      <div class="os-statusbar" aria-hidden="true">
        <span class="os-statusbar__signal">
          <i style="height:4px" />
          <i style="height:7px" />
          <i style="height:10px" />
          <i class="os-statusbar__signal--off" style="height:13px" />
        </span>
        <span class="os-statusbar__label">SLGHTR</span>
        <span class="os-statusbar__spacer" />
        <span class="os-statusbar__label">{clock || '··:··'}</span>
        <span class="os-statusbar__battery">
          <i />
        </span>
      </div>

      {/* Wallpaper */}
      <div class="os-wallpaper">
        <span>
          <span class="os-wallpaper__title">SLAUGHTER OS</span>
          <span class="os-wallpaper__sub">ZERO-TO-ONE MESS → THINGS PEOPLE LOVE</span>
        </span>
      </div>

      {/* Desktop cluster labels — desktop mode only */}
      {isDesktop &&
        layout?.labels.map((l) => (
          <span key={l.text} class="os-cluster" style={`left:${l.x}px;top:${l.y}px`}>
            {l.text}
          </span>
        ))}

      {/* Icons — absolutely placed on desktop, a grid on phone/tablet */}
      <div class="os-icons">
        {SECTIONS.map((section) => (
          <>
            <span class="os-seclabel" key={section}>
              {section}
            </span>
            {APPS.filter((a) => a.section === section).map(renderIcon)}
          </>
        ))}
      </div>

      {/* Windows */}
      {openList.map(([id, w]) => {
        const app = byId(id);
        if (!app || w.min) return null;
        return (
          <div
            key={id}
            class="os-win"
            style={
              isDesktop
                ? `left:${w.x}px;top:${w.y}px;width:${w.w}px;height:${w.h}px;z-index:${w.z}`
                : `z-index:${w.z}`
            }
            onPointerDown={() => focus(id)}
          >
            <div class="os-win__bar" onPointerDown={(e) => startDrag(e as PointerEvent, id, 'move')}>
              <span class="os-win__title">{app.title}</span>
              <span class="os-win__controls">
                <button
                  class="os-win__btn"
                  type="button"
                  aria-label={isMobile ? 'Close' : 'Minimise'}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => minimize(id)}
                >
                  {isMobile ? 'X' : '_'}
                </button>
                {!isMobile && (
                  <button
                    class="os-win__btn"
                    type="button"
                    aria-label="Close"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => close(id)}
                  >
                    X
                  </button>
                )}
              </span>
            </div>
            <div class="os-win__menubar">
              {(app.menus ?? ['FILE', 'HELP']).map((m) => (
                <button class="os-win__menu" type="button">
                  {m}
                </button>
              ))}
            </div>
            <div class="os-win__body">
              {app.content ?? (
                <p class="os-win__empty">This app is coming soon — it's on the roadmap.</p>
              )}
            </div>
            {isDesktop && (
              <div
                class="os-win__resize"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  startDrag(e as PointerEvent, id, 'resize');
                }}
              />
            )}
          </div>
        );
      })}

      {/* Launcher — desktop mode only */}
      {launcher && isDesktop && (
        <div class="os-launcher" onPointerDown={(e) => e.stopPropagation()}>
          <div class="os-launcher__rail">
            <span>SLAUGHTER OS</span>
          </div>
          <div class="os-launcher__list">
            {SECTIONS.map((section) => (
              <>
                <p class="os-launcher__sec">{section}</p>
                {APPS.filter((a) => a.section === section).map((app) => (
                  <button class="os-launcher__item" type="button" onClick={() => openApp(app)}>
                    <span class="os-launcher__swatch" style={`background:${app.color}`} />
                    {app.iconLabel ?? app.title}
                  </button>
                ))}
              </>
            ))}
            <hr class="os-launcher__rule" />
            <a
              class="os-launcher__item"
              href="https://github.com/haydenslaughter"
              target="_blank"
              rel="noopener"
            >
              <span class="os-launcher__swatch" style="background:var(--ink)" />
              GitHub ↗
            </a>
            <a
              class="os-launcher__item"
              href="https://www.linkedin.com/in/haydenslaughter"
              target="_blank"
              rel="noopener"
            >
              <span class="os-launcher__swatch" style="background:var(--navy)" />
              LinkedIn ↗
            </a>
            <button class="os-launcher__item" type="button" onClick={() => window.location.reload()}>
              <span class="os-launcher__swatch" style="background:var(--ink)" />
              Restart…
            </button>
          </div>
        </div>
      )}

      {/* Taskbar — desktop mode only */}
      <div class="os-taskbar">
        <button
          class="os-start"
          type="button"
          aria-expanded={launcher}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setLauncher((v) => !v)}
        >
          <span class="os-start__logo" />
          MENU
        </button>
        <div class="os-tasklist">
          {openList.map(([id]) => {
            const app = byId(id);
            if (!app) return null;
            return (
              <button
                key={id}
                class={`os-task${focused === id && !wins[id].min ? ' os-task--active' : ''}`}
                type="button"
                onClick={() => taskClick(id)}
              >
                {app.iconLabel ?? app.title}
              </button>
            );
          })}
        </div>
        <span class="os-clock">{clock || '··:··'}</span>
      </div>

      {/* Dock — phone/tablet only */}
      <div class="os-dock">
        <button class="os-dockbtn" type="button" onClick={closeAll}>
          <span class="os-dockbtn__tile os-dockbtn__tile--home">⌂</span>
          <span class="os-dockbtn__label">HOME</span>
        </button>
        <button
          class="os-dockbtn"
          type="button"
          onClick={() => {
            const a = byId('readme');
            if (a) openApp(a);
          }}
        >
          <span class="os-dockbtn__tile os-dockbtn__tile--txt">TXT</span>
          <span class="os-dockbtn__label">ABOUT.ME</span>
        </button>
        <button
          class="os-dockbtn"
          type="button"
          onClick={() => {
            const a = byId('cv');
            if (a) openApp(a);
          }}
        >
          <span class="os-dockbtn__tile os-dockbtn__tile--cv">cv</span>
          <span class="os-dockbtn__label">NORMAL.CV</span>
        </button>
        <a class="os-dockbtn" href="mailto:hello@haydenslaughter.co.uk">
          <span class="os-dockbtn__tile os-dockbtn__tile--hello">@</span>
          <span class="os-dockbtn__label">HELLO</span>
        </a>
      </div>

      {/* Boot overlay (CSS auto-dismisses; hidden under reduced-motion) */}
      <div class="os-boot" aria-hidden="true">
        SLAUGHTER OS v0.1
        <br />
        booting…
      </div>
    </div>
  );
}
