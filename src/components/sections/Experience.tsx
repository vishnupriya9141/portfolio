"use client";

import { EXPERIENCE } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Building enterprise software since 2023
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              At Mu Sigma, I&apos;ve grown from building single features to leading architecture and delivery of mission-critical enterprise applications.
            </p>
          </div>
        </FadeInUp>

        <div className="space-y-8">
          {EXPERIENCE.map((company) => (
            <div key={company.company}>
              <FadeInUp>
                <h3 className="text-2xl font-semibold mb-6">{company.company}</h3>
              </FadeInUp>

              <div className="space-y-6 ml-0 md:ml-4 border-l-2 border-border pl-0 md:pl-8">
                {company.roles.map((role, roleIndex) => (
                  <FadeInUp key={role.title} delay={roleIndex * 0.1}>
                    <Card className="p-6 md:p-8 hover:border-accent/30 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <h4 className="text-xl font-semibold mb-1">{role.title}</h4>
                          <span className="text-sm text-text-secondary">{role.period}</span>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 w-fit">
                          {company.company}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Responsibilities</h5>
                          <ul className="space-y-2">
                            {role.responsibilities.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                                <span className="text-accent mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {role.technologies && (
                          <div>
                            <h5 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {role.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs rounded-md bg-surface-light text-text-secondary border border-border/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {role.impact && (
                          <div className="pt-4 border-t border-border">
                            <h5 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Business Impact</h5>
                            <p className="text-sm text-text-secondary leading-relaxed">{role.impact}</p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </FadeInUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

