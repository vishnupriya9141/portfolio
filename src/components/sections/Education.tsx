"use client";

import { EDUCATION, CERTIFICATIONS } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Education</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Academic background
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Continuous learning through formal education and industry certifications.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeInUp delay={0.1}>
            <div>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Degrees
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <Card key={edu.id} className="p-6 hover:border-accent/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold">{edu.institution}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-1">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-xs text-text-secondary">{edu.period}</p>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <Card key={cert.id} className="p-6 hover:border-accent/30 transition-colors">
                    <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                    <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-text-secondary mb-3">{cert.date}</p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      View credential →
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

