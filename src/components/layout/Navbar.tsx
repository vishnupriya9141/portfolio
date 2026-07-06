
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/data/content";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuId = "mobile-menu";

  // Scroll progress for the slim top bar
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const { toggleTheme, resolvedTheme } = useTheme();

  // Highlight the nav link that matches the section currently in the viewport
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveSection(visible.length > 0 ? visible[0].target.id : "");
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu automatically when the user scrolls
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.button
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-lg font-semibold tracking-tight hover:text-accent transition-colors cursor-pointer"
          >
            {SITE_CONFIG.name}
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "relative text-sm transition-colors cursor-pointer py-1",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.name}
                  <AnimatePresence>
                    {(hovered === item.name || isActive) && (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                      />
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            <MotionLink
              to="/resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
            >
              Resume
            </MotionLink>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-text-secondary hover:text-text-primary cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAVIGATION.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.05, duration: 0.3, ease: "easeOut" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-sm text-text-secondary hover:text-text-primary py-2.5 cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAVIGATION.length * 0.04 + 0.1, duration: 0.3, ease: "easeOut" }}
                className="pt-3 border-t border-border"
              >
                <MotionLink
                  to="/resume"
                  whileTap={{ scale: 0.97 }}
                  className="block text-sm bg-accent hover:bg-accent/90 text-white px-4 py-2.5 rounded-md mt-2 text-center transition-colors cursor-pointer"
                >
                  Resume
                </MotionLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
      />
    </motion.nav>
  );
}
