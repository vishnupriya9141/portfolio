
import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import Carousel from "@/components/ui/Carousel";
import { GraduationCap, BadgeCheck, ExternalLink, Calendar } from "lucide-react";

function CertCard({ cert }: { cert: typeof CERTIFICATIONS[0] }) {
  return (
    <motion.a
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer h-full"
    >
      <div className="relative rounded-xl border border-border bg-surface p-5 h-full hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group overflow-hidden">
        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-accent/10 blur-xl group-hover:bg-accent/20 transition-colors" />
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <BadgeCheck className="w-4 h-4" />
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-text-secondary group-hover:text-accent transition-colors mt-1" />
        </div>
        <h4 className="text-sm font-semibold leading-snug mb-1 group-hover:text-accent transition-colors">
          {cert.title}
        </h4>
        <p className="text-xs text-accent font-medium mb-2">{cert.issuer}</p>
        <div className="flex items-center gap-1 text-xs text-text-secondary">
          <Calendar className="w-3 h-3" />
          {cert.date}
        </div>
      </div>
    </motion.a>
  );
}

export default function Education() {
  const certCards = CERTIFICATIONS.map((cert) => <CertCard key={cert.id} cert={cert} />);

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

        {/* ── Degrees ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Degrees
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 h-full hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 shrink-0 ml-2">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-1">
                    {edu.degree} in {edu.field}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-text-secondary mt-2">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Certifications carousel ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" />
            Certifications
            <span className="ml-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-semibold tabular-nums">
              {CERTIFICATIONS.length}
            </span>
          </h3>
          <Carousel items={certCards} columns={2} smColumns={1} gap={16} />
        </motion.div>
      </div>
    </section>
  );
}
