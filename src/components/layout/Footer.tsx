"use client";

import { SITE_CONFIG } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-text-secondary max-w-xs">
              {SITE_CONFIG.role} based in {SITE_CONFIG.location}. Building enterprise software that matters.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-secondary">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                Email <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-secondary">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary">
              <a href="#home" className="hover:text-text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-text-primary transition-colors">About</a>
              <a href="#experience" className="hover:text-text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
              <a href="#awards" className="hover:text-text-primary transition-colors">Awards</a>
              <a href="#skills" className="hover:text-text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
              <a href="/resume" className="hover:text-text-primary transition-colors">Resume</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Designed & Developed by {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
