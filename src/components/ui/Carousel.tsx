import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  columns: number;
  gap?: number;
  smColumns?: number;
  mdColumns?: number;
}

// Breakpoints: >=1024 lg, >=768 md, >=640 sm, else xs
function useResponsiveColumns(lg: number, md?: number, sm = 1) {
  const [cols, setCols] = useState(sm);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;

      if (w >= 1024) setCols(lg);
      else if (w >= 768) setCols(md ?? lg);
      else if (w >= 640) setCols(sm);
      else setCols(Math.min(sm, md ?? lg));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [lg, md, sm]);

  return cols;
}

export default function Carousel({
  items,
  columns,
  gap = 16,
  smColumns,
  mdColumns,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const captureSet = useRef(false);

  const [cardWidth, setCardWidth] = useState(0);
  const activeCols = useResponsiveColumns(columns, mdColumns, smColumns);

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.clientWidth;
    setCardWidth((width - gap * (activeCols - 1)) / activeCols);
  }, [activeCols, gap]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    setIndex(0);
  }, [activeCols]);

  const needsScroll = items.length > activeCols;
  const maxIndex = Math.max(0, items.length - activeCols);
  const clamp = (v: number) => Math.max(0, Math.min(v, maxIndex));

  const prev = () => setIndex((i) => clamp(i - 1));
  const next = () => setIndex((i) => clamp(i + 1));
  const offset = index * (cardWidth + gap);

  // Ignore pointer gestures that started on interactive elements (buttons, links, inputs)
  const isInteractiveTarget = (target: EventTarget | null) => {
    if (!target || !(target instanceof HTMLElement)) return false;
    return target.closest("button, a, [role=\"button\"], input, select, textarea");
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if (isInteractiveTarget(e.target)) return;
    pointerStart.current = { x: e.clientX, y: e.clientY };
    try {
      viewportRef.current?.setPointerCapture(e.pointerId);
      captureSet.current = true;
    } catch {
      captureSet.current = false;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerStart.current || !needsScroll) return;
    const dx = e.clientX - pointerStart.current.x;
    const dy = e.clientY - pointerStart.current.y;
    pointerStart.current = null;

    // Only trigger swipe if horizontal movement is dominant and exceeds threshold
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > cardWidth * 0.2) {
      if (dx > 0) prev();
      else next();
    }
    if (captureSet.current) {
      viewportRef.current?.releasePointerCapture(e.pointerId);
      captureSet.current = false;
    }
  };

  const handleLostPointerCapture = () => {
    pointerStart.current = null;
    captureSet.current = false;
  };

  return (
    <div className="relative">
      {needsScroll && (
        <>
          <AnimatePresence>
            {index > 0 && (
              <motion.button
                key="prev"
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                onClick={prev}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-8 md:h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:text-accent"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {index < maxIndex && (
              <motion.button
                key="next"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                onClick={next}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-8 md:h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:text-accent"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

      {/* touchAction: pan-y preserves vertical scrolling while allowing horizontal swipe */}
      <div
        ref={viewportRef}
        className="overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        <motion.div
          animate={{ x: -offset }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
          }}
          className="flex"
          style={{ gap }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onLostPointerCapture={handleLostPointerCapture}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                width: `${cardWidth}px`,
                flexShrink: 0,
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {needsScroll && (
        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}>
              <motion.div
                animate={{
                  width: i === index ? 20 : 6,
                  opacity: i === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.2 }}
                className="h-1.5 rounded-full bg-accent"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
