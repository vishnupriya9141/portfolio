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

export default function Carousel({
  items,
  columns,
  gap = 16,
  smColumns,
  mdColumns,
}: CarouselProps) {
  const [index, setIndex] = useState(0);

  // Measure THIS instead of the outer wrapper
  const viewportRef = useRef<HTMLDivElement>(null);

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

    if (viewportRef.current) {
      ro.observe(viewportRef.current);
    }

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
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:text-accent"
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
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:text-accent"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

      {/* viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          animate={{ x: -offset }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
          }}
          className="flex"
          style={{ gap }}
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