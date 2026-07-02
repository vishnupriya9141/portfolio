import { useCallback } from "react";
import type p5Type from "p5";
import P5Canvas from "@/components/ui/P5Canvas";

export default function HeroBackground() {
  const sketch = useCallback((p: p5Type, container: HTMLDivElement) => {
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const COUNT = 80;
    const CONNECT_DIST = 130;
    const MOUSE_REPEL = 100;

    p.setup = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      const canvas = p.createCanvas(w, h);
      canvas.style("display", "block");

      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: p.random(w),
          y: p.random(h),
          vx: p.random(-0.4, 0.4),
          vy: p.random(-0.4, 0.4),
          size: p.random(1.5, 3.5),
          opacity: p.random(0.3, 0.8),
        });
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    };

    p.draw = () => {
      p.clear();

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const particleColor = isDark ? [150, 150, 255] : [99, 102, 241];
      const lineColor = isDark ? [150, 150, 255] : [99, 102, 241];

      for (const pt of particles) {
        pt.x += pt.vx;
        pt.y += pt.vy;

        if (pt.x < 0 || pt.x > p.width) pt.vx *= -1;
        if (pt.y < 0 || pt.y > p.height) pt.vy *= -1;

        // Mouse repulsion
        const dx = pt.x - p.mouseX;
        const dy = pt.y - p.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL && dist > 0) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          pt.x += (dx / dist) * force * 2;
          pt.y += (dy / dist) * force * 2;
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 80;
            p.stroke(lineColor[0], lineColor[1], lineColor[2], alpha);
            p.strokeWeight(0.6);
            p.line(a.x, a.y, b.x, b.y);
          }
        }
      }

      // Draw particles
      p.noStroke();
      for (const pt of particles) {
        p.fill(particleColor[0], particleColor[1], particleColor[2], pt.opacity * 255);
        p.circle(pt.x, pt.y, pt.size * 2);
      }
    };
  }, []);

  return (
    <P5Canvas
      sketch={sketch}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
