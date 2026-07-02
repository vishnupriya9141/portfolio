import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  columns: number;       // columns on lg+ screens
  gap?: number;
  smColumns?: number;    // columns on sm screens (default 1)
  mdColumns?: number;    // columns on md screens (default same as columns)
}

function useResponsiveColumns(lg: number, md?: number, sm = 1) {
  const [cols, setCols] = useState(sm);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 1024) setCols(lg);
      else if (w >= 768) setCols(md ?? lg);
      else if (w >= 640) setCols(sm > 1 ? sm : Math.min(2, lg));
      else setCols(sm);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [lg, md, sm]);

  return cols;
}

export default function Carousel({ items, columns, gap = 16, smColumns, mdColumns }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const activeCols = useResponsiveColumns(columns, mdColumns, smColumns);

  const measure = useCallback(() => {
    if (!wrapperRef.current) return;
    const total = wrapperRef.current.offsetWidth;
    setCardWidth((total - gap * (activeCols - 1)) / activeCols);
  }, [activeCols, gap]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Reset index when column count changes so we never show an out-of-range slide
  useEffect(() => {
    setIndex(0);
  }, [activeCols]);

  const needsScroll = items.length > activeCols;
  const maxIndex = Math.max(0, items.length - activeCols);
  const clamp = (v: number) => Math.max(0, Math.min(v, maxIndex));
  const prev = () => setIndex((i) => clamp(i - 1));
  const next = () => setIndex((i) => clamp(i + 1));
  const offset = cardWidth > 0 ? index * (cardWidth + gap) : 0;

  return (
    <div ref={wrapperRef} className="relative px-2 sm:px-4">
      {/* Arrows — only when scrollable */}
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
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Track */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: needsScroll ? -offset : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className="flex"
          style={{ gap }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                width: cardWidth > 0 ? cardWidth : undefined,
                flex: cardWidth > 0 ? "none" : "1 1 0",
                minWidth: 0,
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots — only when scrollable */}
      {needsScroll && (
        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="cursor-pointer">
              <motion.div
                animate={{ width: i === index ? 20 : 6, opacity: i === index ? 1 : 0.35 }}
                transition={{ duration: 0.25 }}
                className="h-1.5 rounded-full bg-accent"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
