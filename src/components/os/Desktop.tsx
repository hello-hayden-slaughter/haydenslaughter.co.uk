/** @jsxImportSource preact */
import { useEffect, useRef, useState } from 'preact/hooks';
import type { JSX } from 'preact';
import { APPS, SECTIONS, type AppDef } from './apps';

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

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

const byId = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);

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
  const zRef = useRef(10);
  const dragRef = useRef<DragState>(null);

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

  const minimize = (id: string) => {
    setWins((prev) => (prev[id] ? { ...prev, [id]: { ...prev[id], min: true } } : prev));
    setFocused((f) => (f === id ? null : f));
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

  const startDrag = (e: PointerEvent, id: string, mode: 'move' | 'resize') => {
    e.preventDefault();
    focus(id);
    const w = wins[id];
    if (!w) return;
    dragRef.current =
      mode === 'move'
        ? { id, mode, sx: e.clientX, sy: e.clientY, ox: w.x, oy: w.y }
        : { id, mode, sx: e.clientX, sy: e.clientY, ow: w.w, oh: w.h };
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
    const tick = () => setClock(fmtClock(new Date()));
    tick();
    const iv = window.setInterval(tick, 15000);
    return () => window.clearInterval(iv);
  }, []);

  const openList = Object.entries(wins);

  return (
    <div
      class={`os-root${dragging ? ' os-root--dragging' : ''}`}
      onPointerDown={() => launcher && setLauncher(false)}
    >
      {/* Wallpaper */}
      <div class="os-wallpaper">
        <span>
          <span class="os-wallpaper__title">SLAUGHTER OS</span>
          <span class="os-wallpaper__sub">ZERO-TO-ONE MESS → THINGS PEOPLE LOVE</span>
        </span>
      </div>

      {/* Desktop icons — one tidy column per section */}
      <div class="os-icons">
        {SECTIONS.map((section) => (
          <div class="os-iconcol" key={section}>
            <span class="os-seclabel">{section}</span>
            {APPS.filter((a) => a.section === section).map((app) => (
              <button class="os-icon" type="button" onClick={() => openApp(app)}>
                <span
                  class={`os-icon__tile${app.rounded ? ' os-icon__tile--round' : ''}`}
                  style={`background:${app.color}`}
                />
                <span class="os-icon__label">{app.iconLabel ?? app.title}</span>
              </button>
            ))}
          </div>
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
            style={`left:${w.x}px;top:${w.y}px;width:${w.w}px;height:${w.h}px;z-index:${w.z}`}
            onPointerDown={() => focus(id)}
          >
            <div class="os-win__bar" onPointerDown={(e) => startDrag(e as PointerEvent, id, 'move')}>
              <span class="os-win__title">{app.title}</span>
              <span class="os-win__controls">
                <button
                  class="os-win__btn"
                  type="button"
                  aria-label="Minimise"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => minimize(id)}
                >
                  _
                </button>
                <button
                  class="os-win__btn"
                  type="button"
                  aria-label="Close"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => close(id)}
                >
                  X
                </button>
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
            <div
              class="os-win__resize"
              onPointerDown={(e) => {
                e.stopPropagation();
                startDrag(e as PointerEvent, id, 'resize');
              }}
            />
          </div>
        );
      })}

      {/* Launcher */}
      {launcher && (
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

      {/* Taskbar */}
      <div class="os-taskbar">
        <button
          class="os-start"
          type="button"
          aria-expanded={launcher}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setLauncher((v) => !v)}
        >
          <span class="os-start__logo" />
          START
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

      {/* Boot overlay (CSS auto-dismisses; hidden under reduced-motion) */}
      <div class="os-boot" aria-hidden="true">
        SLAUGHTER OS v0.1
        <br />
        booting…
      </div>
    </div>
  );
}
