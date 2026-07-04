
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { StaggerChildren, StaggerItem, FadeInUp, MagneticHover } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
import profileImage from "@/assets/profile/image.png";
import HeroBackground from "@/components/sections/HeroBackground";
import { cn } from "@/lib/utils";

export default function Hero() {
  const navigate = useNavigate();
  const parts = SITE_CONFIG.name.split(" ");
  const lastName = parts.pop() ?? "";
  const firstName = parts.join(" ");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <StaggerChildren staggerDelay={0.1}>
              <StaggerItem>
                <motion.p className="text-accent font-medium mb-4 text-sm tracking-widest uppercase">
                  {SITE_CONFIG.role}
                </motion.p>
              </StaggerItem>

              <StaggerItem>
                <motion.h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="block">{firstName}</span>
                  <span className="block bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                    {lastName}
                  </span>
                </motion.h1>
              </StaggerItem>

              <StaggerItem>
                <motion.p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-xl leading-relaxed">
                  {SITE_CONFIG.tagline}
                </motion.p>
              </StaggerItem>

              <StaggerItem>
                <motion.div className="flex flex-wrap gap-3 mb-10">
                  {SITE_CONFIG.domains.map((domain, i) => (
                    <motion.span
                      key={domain}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.08, borderColor: "#6366F1", color: "#6366F1" }}
                      className="px-3 py-1.5 text-xs rounded-full border border-border bg-surface-light/50 text-text-secondary cursor-default transition-colors"
                    >
                      {domain}
                    </motion.span>
                  ))}
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4">
                  <MagneticHover strength={0.25}>
                    <Button size="lg" asChild>
                      <a href={SITE_CONFIG.resumeUrl} download={SITE_CONFIG.resumeFileName}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </MagneticHover>
                  <MagneticHover strength={0.25}>
                    <Button variant="outline" size="lg" asChild>
                      <button
                        onClick={() => {
                          navigate("/", { state: { scrollToProjects: true } });
                        }}
                        className="inline-flex items-center gap-1"
                      >
                        View Projects
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </button>
                    </Button>
                  </MagneticHover>
                </div>
              </StaggerItem>

              <StaggerItem>
                <motion.div className="flex flex-wrap items-center gap-6 mt-10">
                  {[
                    { label: "LinkedIn", href: SITE_CONFIG.linkedin, Icon: LinkedinIcon, external: true },
                    { label: "GitHub", href: SITE_CONFIG.github, Icon: GithubIcon, external: true },
                    { label: "Email", href: `mailto:${SITE_CONFIG.email}`, Icon: Mail, external: false },
                  ].map(({ label, href, Icon, external }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -2 }}
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>

          <FadeInUp delay={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Rotating conic glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3"
                style={{
                  background: "conic-gradient(from 0deg, #6366F1, #3B82F6, transparent, #6366F1)",
                  opacity: 0.25,
                  borderRadius: "1rem",
                }}
              />
              {/* Floating orbs */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 blur-xl"
              />
              <motion.div
                animate={{ y: [8, -8, 8], x: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-secondary/20 blur-xl"
              />
              <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border/50 bg-surface-light">
                <img
                  src={profileImage}
                  alt={`${SITE_CONFIG.name} profile`}
                  onLoad={() => setImageLoaded(true)}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-700",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                  }}
                />
              </div>
            </motion.div>
          </FadeInUp>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
