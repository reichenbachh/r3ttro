import { useEffect, useRef } from "react";

type Node = {
  /** Origin, which the node drifts around rather than travels from. */
  ox: number;
  oy: number;
  x: number;
  y: number;
  phase: number;
  r: number;
};

type Edge = { a: number; b: number };

/** A light travelling one edge. `t` starts negative so packets stagger their entrance. */
type Packet = { a: number; b: number; t: number; speed: number };

const ACCENT = "232, 255, 0";
const DRIFT = 3.5;

/**
 * Field of nodes with lights running between them, drawn on canvas.
 * Decorative only: it sits behind the hero and never takes pointer events.
 */
export function NodeField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let packets: Packet[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;
    let running = true;

    const spawn = (): Packet => {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      const flip = Math.random() < 0.5;
      return {
        a: flip ? edge.b : edge.a,
        b: flip ? edge.a : edge.b,
        t: -Math.random() * 1.2,
        speed: 0.16 + Math.random() * 0.2,
      };
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        Math.min(48, Math.max(14, (width * height) / 15000)),
      );

      nodes = Array.from({ length: count }, () => {
        // Weighted right: the hero copy occupies the left of the same box.
        const x = width * (0.14 + 0.86 * Math.pow(Math.random(), 0.7));
        const y = height * (0.04 + 0.92 * Math.random());
        return {
          ox: x,
          oy: y,
          x,
          y,
          phase: Math.random() * Math.PI * 2,
          r: 1.1 + Math.random() * 1.5,
        };
      });

      // Connect nearest pairs first, capping degree so the mesh stays open.
      const reach = Math.min(width, height) * 0.46;
      const pairs: { a: number; b: number; d: number }[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].ox - nodes[j].ox, nodes[i].oy - nodes[j].oy);
          if (d < reach) pairs.push({ a: i, b: j, d });
        }
      }
      pairs.sort((p, q) => p.d - q.d);

      const degree = new Array(nodes.length).fill(0);
      edges = [];
      for (const p of pairs) {
        if (degree[p.a] >= 3 || degree[p.b] >= 3) continue;
        edges.push({ a: p.a, b: p.b });
        degree[p.a] += 1;
        degree[p.b] += 1;
      }

      packets = edges.length
        ? Array.from({ length: Math.max(3, Math.round(edges.length / 7)) }, spawn)
        : [];
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x = n.ox + Math.sin(now / 3600 + n.phase) * DRIFT;
        n.y = n.oy + Math.cos(now / 4400 + n.phase) * DRIFT;
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.085)";
      ctx.beginPath();
      for (const e of edges) {
        ctx.moveTo(nodes[e.a].x, nodes[e.a].y);
        ctx.lineTo(nodes[e.b].x, nodes[e.b].y);
      }
      ctx.stroke();

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.28)";
        ctx.fill();
      }

      for (const p of packets) {
        if (p.t < 0 || p.t > 1) continue;
        const a = nodes[p.a];
        const b = nodes[p.b];
        // Ease so the light slows as it arrives.
        const e = p.t < 0.5 ? 2 * p.t * p.t : 1 - Math.pow(-2 * p.t + 2, 2) / 2;
        const x = a.x + (b.x - a.x) * e;
        const y = a.y + (b.y - a.y) * e;
        const fade = Math.min(1, Math.min(p.t, 1 - p.t) / 0.18);

        const tail = Math.max(0, e - 0.16);
        const tx = a.x + (b.x - a.x) * tail;
        const ty = a.y + (b.y - a.y) * tail;
        const trail = ctx.createLinearGradient(tx, ty, x, y);
        trail.addColorStop(0, `rgba(${ACCENT}, 0)`);
        trail.addColorStop(1, `rgba(${ACCENT}, ${0.5 * fade})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 7);
        glow.addColorStop(0, `rgba(${ACCENT}, ${0.5 * fade})`);
        glow.addColorStop(1, `rgba(${ACCENT}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${ACCENT}, ${0.95 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (let i = 0; i < packets.length; i++) {
        packets[i].t += packets[i].speed * dt;
        if (packets[i].t > 1) packets[i] = spawn();
      }
      draw(now);
      if (running) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    build();
    if (reduced) draw(0);
    else start();

    const resize = new ResizeObserver(() => {
      build();
      draw(performance.now());
    });
    resize.observe(canvas);

    // Idle when scrolled past or the tab is in the background.
    const seen = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    seen.observe(canvas);

    const onVisibility = () =>
      document.hidden ? stop() : seen.takeRecords().length === 0 && start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      resize.disconnect();
      seen.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        maskImage:
          "radial-gradient(115% 95% at 76% 42%, #000 0%, rgba(0,0,0,.82) 38%, transparent 74%)",
        WebkitMaskImage:
          "radial-gradient(115% 95% at 76% 42%, #000 0%, rgba(0,0,0,.82) 38%, transparent 74%)",
      }}
    />
  );
}
