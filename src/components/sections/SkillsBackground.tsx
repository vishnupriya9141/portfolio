import { useCallback } from "react";
import type p5Type from "p5";
import P5Canvas from "@/components/ui/P5Canvas";

export default function SkillsBackground() {
  const sketch = useCallback((p: p5Type, container: HTMLDivElement) => {
    interface Orb {
      x: number;
      y: number;
      r: number;
      speed: number;
      offset: number;
      hue: number;
    }

    const orbs: Orb[] = [];

    p.setup = () => {
      const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
      canvas.style("display", "block");
      p.colorMode(p.HSB, 360, 100, 100, 100);
      p.noStroke();

      for (let i = 0; i < 6; i++) {
        orbs.push({
          x: p.random(p.width),
          y: p.random(p.height),
          r: p.random(60, 140),
          speed: p.random(0.3, 0.7),
          offset: p.random(p.TWO_PI),
          hue: i % 2 === 0 ? 245 : 220,
        });
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    };

    p.draw = () => {
      p.clear();
      const t = p.frameCount * 0.022;

      for (const orb of orbs) {
        const x = orb.x + Math.sin(t * orb.speed + orb.offset) * 30;
        const y = orb.y + Math.cos(t * orb.speed * 0.7 + orb.offset) * 20;

        p.fill(orb.hue, 60, 90, 6);
        p.ellipse(x, y, orb.r * 2.5);

        p.fill(orb.hue, 70, 95, 4);
        p.ellipse(x, y, orb.r * 1.5);
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
