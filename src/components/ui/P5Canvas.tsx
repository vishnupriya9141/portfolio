import { useEffect, useRef } from "react";
import type p5Type from "p5";

type SketchFn = (p: p5Type, container: HTMLDivElement) => void;

interface P5CanvasProps {
  sketch: SketchFn;
  className?: string;
}

export default function P5Canvas({ sketch, className }: P5CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let p5Instance: p5Type | null = null;

    import("p5").then((mod) => {
      const p5 = mod.default;
      p5Instance = new p5((p: p5Type) => sketch(p, container), container);
    });

    return () => {
      p5Instance?.remove();
    };
  }, [sketch]);

  return <div ref={containerRef} className={className} />;
}
