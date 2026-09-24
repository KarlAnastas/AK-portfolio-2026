import { useEffect, useRef } from "react";

// Interactive dot-grid background, ported from the prototype's startGrid().
// Reference: reactbits.dev/backgrounds/dot-grid
const GAP = 28;
const RADIUS = 2.2;
const PROXIMITY = 150;
const SHOCK_RADIUS = 260;
const SHOCK_STRENGTH = 4.5;
const MAX_SPEED = 3800;
const BASE = { light: [231, 231, 231], dark: [45, 42, 54] };
const ACTIVE = [236, 72, 153];

export function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -9999, y: -9999 };
    let dots = [];
    let raf = 0;
    let last = performance.now();

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.floor((w + GAP) / GAP);
      const rows = Math.floor((h + GAP) / GAP);
      const ox = (w - (cols - 1) * GAP) / 2;
      const oy = (h - (rows - 1) * GAP) / 2;
      dots = [];
      for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
          dots.push({ x: ox + j * GAP, y: oy + i * GAP, dx: 0, dy: 0, vx: 0, vy: 0 });
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onDown = (e) => {
      if (motion.matches) return;
      for (const d of dots) {
        const dx = d.x - e.clientX;
        const dy = d.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < SHOCK_RADIUS) {
          const f = (1 - dist / SHOCK_RADIUS) * SHOCK_STRENGTH * 60;
          const a = Math.atan2(dy, dx);
          d.vx += Math.cos(a) * f;
          d.vy += Math.sin(a) * f;
        }
      }
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      // Read the theme every frame so a toggle applies immediately.
      const b = document.documentElement.dataset.theme === "dark" ? BASE.dark : BASE.light;
      const still = motion.matches;
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (const d of dots) {
        d.vx += -d.dx * 190 * dt;
        d.vy += -d.dy * 190 * dt;
        d.vx *= 0.86;
        d.vy *= 0.86;
        d.dx += d.vx * dt * 6;
        d.dy += d.vy * dt * 6;
        const sp = Math.hypot(d.vx, d.vy);
        if (sp > MAX_SPEED) {
          d.vx *= MAX_SPEED / sp;
          d.vy *= MAX_SPEED / sp;
        }
        const cx = d.x + d.dx;
        const cy = d.y + d.dy;
        const dist = Math.hypot(cx - pointer.x, cy - pointer.y);
        const t = !still && dist < PROXIMITY ? 1 - dist / PROXIMITY : 0;
        ctx.beginPath();
        ctx.arc(cx, cy, RADIUS + t * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${Math.round(b[0] + (ACTIVE[0] - b[0]) * t)},${Math.round(
          b[1] + (ACTIVE[1] - b[1]) * t,
        )},${Math.round(b[2] + (ACTIVE[2] - b[2]) * t)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    build();
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
