"use client";

import { SKILLS } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Monitor, Server, Database, BarChart2, Cloud, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  BarChart: BarChart2,
  Cloud,
  Shield,
};

export default function Skills() {
  const skillCategories = Object.entries(SKILLS);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Technical Skills</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Technologies & tools
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              A comprehensive toolkit built over 3 years of production experience across frontend, backend, data, and cloud.
            </p>
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([key, category], index) => {
            const Icon = iconMap[category.icon] || Monitor;
            return (
              <FadeInUp key={key} delay={index * 0.1}>
                <Card className="p-6 h-full hover:border-accent/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    Core technologies in this domain, focused on production-grade implementations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-lg bg-surface-light text-text-secondary border border-border/50 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

