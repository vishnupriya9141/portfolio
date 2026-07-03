
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { AWARDS, STATS } from "@/data/content";
import { Trophy, Users, Rocket, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import Carousel from "@/components/ui/Carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Users,
  Rocket,
  Globe,
};

function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(target);

  const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9]/g, "").replace(".", "");
  const isNumeric = !isNaN(numeric) && target.replace(/[^0-9.+]/g, "").length > 0;

  // Animate from 0 to the target value over 30 frames once the element enters the viewport
  // Supports plain integers and floats; preserves any trailing suffix like "+" or "%"
  useEffect(() => {
    if (!inView || !isNumeric) return;
    let frame = 0;
    const steps = 30;
    const inc = numeric / steps;
    let current = 0;
    const id = setInterval(() => {
      frame++;
      current += inc;
      const val = frame >= steps ? numeric : current;
      setDisplay(Number.isInteger(numeric) ? `${Math.round(val)}${suffix}` : `${val.toFixed(1)}${suffix}`);
      if (frame >= steps) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, isNumeric, numeric, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function Awards() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1 = next (bottom-right in), -1 = prev (bottom-left in)

  const openLightbox = (i: number) => { setDirection(1); setLightboxIndex(i); };
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => { setDirection(-1); setLightboxIndex((i) => (i !== null ? (i - 1 + AWARDS.length) % AWARDS.length : null)); };
  const goNext = () => { setDirection(1); setLightboxIndex((i) => (i !== null ? (i + 1) % AWARDS.length : null)); };

  // AnimatePresence custom={direction} is used to spin the image slide-in direction
  // based on whether the user clicked prev (bottom-left) or next (bottom-right)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  const awardCards = AWARDS.map((award, i) => (
    <AwardCard key={award.id} award={award} onClick={() => openLightbox(i)} />
  ));

  const current = lightboxIndex !== null ? AWARDS[lightboxIndex] : null;

  return (
    <section id="awards" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16 text-center">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Awards & Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Recognition for excellence
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Corporate Spot Awards recognizing exceptional contributions to enterprise software development and team leadership.
            </p>
          </div>
        </FadeInUp>

        {/* Stats grid */}
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16">
            {STATS.map((stat) => {
              const Icon = iconMap[stat.icon] || Trophy;
              return (
                <StaggerItem key={stat.label}>
                  <motion.div transition={{ duration: 0.2 }}>
                     <Card className="p-6 text-center hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300">
                      <motion.div
                        animate={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                        className="inline-block"
                      >
                        <Icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                      </motion.div>
                      <div className="text-2xl font-bold mb-1">
                        <CountUp target={stat.value} />
                      </div>
                      <div className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</div>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>

        {/* Awards carousel */}
        <FadeInUp delay={0.2}>
          <Carousel items={awardCards} columns={4} mdColumns={2} smColumns={1} gap={16} />
        </FadeInUp>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
        <DialogContent className="max-w-2xl overflow-hidden p-0">
          {current && (
            <div className="relative">
              {/* Header */}
              <div className="px-6 pt-6 pb-3">
                <DialogHeader>
                  <DialogTitle className="pr-8">{current.title}</DialogTitle>
                  <DialogDescription className="flex items-center justify-between">
                    <span>{current.date}</span>
                    <span className="text-xs tabular-nums">{(lightboxIndex ?? 0) + 1} / {AWARDS.length}</span>
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Animated content */}
              <div className="overflow-hidden px-6">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={lightboxIndex}
                    custom={direction}
                    initial={{ opacity: 0, y: 60, x: direction > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -40, x: direction > 0 ? -40 : 40 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4 pb-4"
                  >
                    <div className="rounded-lg border border-border bg-surface-light p-4 flex items-center justify-center">
                      <img
                        src={current.imageUrl}
                        alt={current.title}
                        className="max-w-full max-h-[52vh] object-contain"
                      />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom bar with dot indicators */}
              <div className="px-6 pb-5 pt-1 border-t border-border flex items-center justify-center gap-1.5">
                {AWARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > (lightboxIndex ?? 0) ? 1 : -1); setLightboxIndex(i); }}
                    className="cursor-pointer"
                  >
                    <motion.div
                      animate={{ width: i === lightboxIndex ? 16 : 6, opacity: i === lightboxIndex ? 1 : 0.3 }}
                      transition={{ duration: 0.2 }}
                      className="h-1.5 rounded-full bg-accent"
                    />
                  </button>
                ))}
              </div>

              {/* Prev arrow — bottom-left corner */}
              <motion.button
                whileHover={{ scale: 1.1, x: -2, y: 2 }}
                whileTap={{ scale: 0.92 }}
                onClick={goPrev}
                className="absolute bottom-4 left-4 text-text-secondary hover:text-accent transition-colors cursor-pointer group"
                title="Previous award"
              >
                <div className="w-8 h-8 rounded-full border border-border bg-background group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center transition-all shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </motion.button>

              {/* Next arrow — bottom-right corner */}
              <motion.button
                whileHover={{ scale: 1.1, x: 2, y: 2 }}
                whileTap={{ scale: 0.92 }}
                onClick={goNext}
                className="absolute bottom-4 right-4 text-text-secondary hover:text-accent transition-colors cursor-pointer group"
                title="Next award"
              >
                <div className="w-8 h-8 rounded-full border border-border bg-background group-hover:border-accent/50 group-hover:bg-accent/5 flex items-center justify-center transition-all shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function AwardCard({ award, onClick }: { award: typeof AWARDS[0]; onClick: () => void }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="cursor-pointer h-full"
    >
      <Card className="p-4 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group h-full flex flex-col">
        <div className="aspect-square rounded-lg bg-surface-light border border-border overflow-hidden mb-3 flex items-center justify-center">
          <img
            src={award.imageUrl}
            alt={award.title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-semibold mb-1 line-clamp-2">{award.title}</h3>
          <p className="text-xs text-text-secondary">{award.date}</p>
        </div>
      </Card>
    </motion.div>
  );
}
