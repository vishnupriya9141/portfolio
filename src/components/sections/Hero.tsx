"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { StaggerChildren, StaggerItem, FadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ArrowUpRight } from "lucide-react";
import profileImage from "@/assets/image.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <StaggerChildren staggerDelay={0.1}>
              <StaggerItem>
                <motion.p
                  className="text-accent font-medium mb-4 text-sm tracking-widest uppercase"
                >
                  {SITE_CONFIG.role}
                </motion.p>
              </StaggerItem>

              <StaggerItem>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                  {(() => {
                    const parts = SITE_CONFIG.name.split(" ");
                    const lastName = parts.pop();
                    const firstName = parts.join(" ");

                    return (
                      <>
                        <span className="block">{firstName}</span>
                        <span className="block">{lastName}</span>
                      </>
                    );
                  })()}
                </motion.h1>
              </StaggerItem>

              <StaggerItem>
                <motion.p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-xl leading-relaxed">
                  {SITE_CONFIG.tagline}
                </motion.p>
              </StaggerItem>

              <StaggerItem>
                <motion.div className="flex flex-wrap gap-3 mb-10">
                  {SITE_CONFIG.domains.map((domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1.5 text-xs rounded-full border border-border bg-surface-light/50 text-text-secondary"
                    >
                      {domain}
                    </span>
                  ))}
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href={SITE_CONFIG.resumeUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
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
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div className="flex flex-wrap items-center gap-6 mt-10">
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Email <ArrowUpRight className="w-3 h-3" />
                  </a>
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
              <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border/50 bg-surface-light">
  <img
    src={profileImage}
    alt={`${SITE_CONFIG.name} profile`}
    className="w-full h-full object-cover"
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