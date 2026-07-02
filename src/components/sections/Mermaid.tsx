
import { useEffect, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mermaid: any;
    
    const loadMermaid = async () => {
      try {
        const mermaidModule = await import("mermaid");
        mermaid = mermaidModule.default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            darkMode: true,
            background: "#111827",
            primaryColor: "#6366F1",
            primaryTextColor: "#fff",
            primaryBorderColor: "#6366F1",
            lineColor: "#6366F1",
            secondaryColor: "#1F2937",
            tertiaryColor: "#0B0F19",
            fontFamily: "Inter, system-ui, sans-serif",
          },
        });
        
        if (ref.current) {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          ref.current.innerHTML = `<div id="${id}">${chart}</div>`;
          await mermaid.run({
            nodes: [document.getElementById(id)!],
          });
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Mermaid render error:", error);
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-sm text-text-secondary p-4 bg-surface rounded-lg overflow-x-auto"><code>${chart.replace(/</g, "&lt;")}</code></pre>`;
        }
      }
    };

    loadMermaid();
  }, [chart]);

  if (!isLoaded) {
    return <div ref={ref} className="flex items-center justify-center p-8" />;
  }

  return <div ref={ref} className="overflow-x-auto" />;
}
