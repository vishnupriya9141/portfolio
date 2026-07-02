
import { motion } from "framer-motion";
import { SKILLS } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Monitor, Server, Database, BarChart2, Cloud, Shield } from "lucide-react";
import SkillsBackground from "@/components/sections/SkillsBackground";

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
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <SkillsBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([key, category], index) => {
            const Icon = iconMap[category.icon] || Monitor;
            return (
              <FadeInUp key={key} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
                  <Card className="p-6 h-full hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="p-2 rounded-lg bg-accent/10 text-accent"
                        whileHover={{ rotate: -8, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      Core technologies in this domain, focused on production-grade implementations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.07, color: "#6366F1" }}
                          className="px-3 py-1.5 text-xs rounded-lg bg-surface-light text-text-secondary border border-border/50 hover:border-accent/30 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
