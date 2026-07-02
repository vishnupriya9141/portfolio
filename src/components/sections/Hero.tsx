
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { StaggerChildren, StaggerItem, FadeInUp, MagneticHover } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ArrowUpRight } from "lucide-react";
import profileImage from "@/assets/profile/image.png";
import HeroBackground from "@/components/sections/HeroBackground";

export default function Hero() {
  const parts = SITE_CONFIG.name.split(" ");
  const lastName = parts.pop() ?? "";
  const firstName = parts.join(" ");

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
                      <a href={SITE_CONFIG.resumeUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </MagneticHover>
                  <MagneticHover strength={0.25}>
                    <Button variant="outline" size="lg" asChild>
                      <button
                        onClick={() => {
                          sessionStorage.setItem("scrollToProjects", "true");
                          window.location.href = "/";
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
                    { label: "LinkedIn", href: SITE_CONFIG.linkedin, external: true },
                    { label: "GitHub", href: SITE_CONFIG.github, external: true },
                    { label: "Email", href: `mailto:${SITE_CONFIG.email}`, external: false },
                  ].map(({ label, href, external }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 3 }}
                      className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                      {label} <ArrowUpRight className="w-3 h-3" />
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
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/20 blur-xl"
              />
              <motion.div
                animate={{ y: [8, -8, 8], x: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-accent-secondary/20 blur-xl"
              />
              <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border/50 bg-surface-light">
                <img
                  src={profileImage}
                  alt={`${SITE_CONFIG.name} profile`}
                  className="w-full h-full object-cover"
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
