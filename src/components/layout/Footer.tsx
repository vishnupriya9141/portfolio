
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

const CONNECT_LINKS = [
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, external: true },
  { label: "GitHub", href: SITE_CONFIG.github, external: true },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, external: false },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  // Resume is an absolute route instead of a hash scroll target
  { label: "Resume", href: "/resume" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-text-secondary max-w-xs">
              {SITE_CONFIG.role} based in {SITE_CONFIG.location}. Building enterprise software that matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-3 text-text-secondary">Connect</h4>
            <div className="flex flex-col gap-2">
              {CONNECT_LINKS.map(({ label, href, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4, color: "#6366F1" }}
                  transition={{ duration: 0.15 }}
                  className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2 w-fit text-sm"
                >
                  {label} <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-3 text-text-secondary">Navigation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary">
              {NAV_LINKS.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 3, color: "#6366F1" }}
                  transition={{ duration: 0.15 }}
                  className="hover:text-text-primary transition-colors w-fit"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-text-secondary">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Designed & Developed by {SITE_CONFIG.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
