
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  ClipboardList,
  Wrench,
  Target,
  User,
} from "lucide-react";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];
  const prevProject = PROJECTS[index - 1];
  const nextProject = PROJECTS[index + 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  if (!project) return <NotFound />;

  const cardAnim = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.45, delay },
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero strip */}
      <div className="relative pt-24 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-secondary/5 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <FadeInUp>
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition-colors group"
            >
              <motion.span
                className="inline-flex"
                whileHover={{ x: -3 }}
                transition={{ duration: 0.15 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              Back to projects
            </button>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {project.industry}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-surface-light text-text-secondary border border-border">
                {project.role}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pb-24">
        <div className="space-y-6">

          {/* Context */}
          <motion.div {...cardAnim(0)}>
            <Card className="p-8 hover:border-accent/20 transition-colors">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-accent" />
                Project Context
              </h2>
              <p className="text-text-secondary leading-relaxed">{project.context}</p>
            </Card>
          </motion.div>

          {/* Responsibilities */}
          <motion.div {...cardAnim(0.08)}>
            <Card className="p-8 hover:border-accent/20 transition-colors">
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <User className="w-5 h-5 text-accent" />
                My Responsibilities
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Technologies */}
          <motion.div {...cardAnim(0.16)}>
            <Card className="p-8 hover:border-accent/20 transition-colors">
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-accent" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    whileHover={{ scale: 1.08, color: "#6366F1" }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-surface-light text-text-secondary border border-border/50 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div {...cardAnim(0.24)}>
            <Card className="p-8 hover:border-accent/20 transition-colors">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.35 }}
                    className="grid md:grid-cols-2 gap-3 md:gap-4"
                  >
                    <div className="bg-surface-light rounded-lg p-3 md:p-4 border border-border/50">
                      <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 block">Challenge</span>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.challenge}</p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-3 md:p-4 border border-accent/20">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Solution</span>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Outcomes */}
          <motion.div {...cardAnim(0.32)}>
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-accent/20">
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-accent" />
                Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcomes?.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Prev / Next navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-border"
        >
          {prevProject ? (
            <motion.button
              whileHover={{ x: -3 }}
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs text-text-secondary mb-0.5">Previous</div>
                <div className="font-medium text-text-primary group-hover:text-accent transition-colors">{prevProject.title}</div>
              </div>
            </motion.button>
          ) : (
            <div />
          )}

          <Button variant="outline" size="sm" onClick={handleBackToProjects}>
            All projects
          </Button>

          {nextProject ? (
            <motion.button
              whileHover={{ x: 3 }}
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group text-right"
            >
              <div className="text-right">
                <div className="text-xs text-text-secondary mb-0.5">Next</div>
                <div className="font-medium text-text-primary group-hover:text-accent transition-colors">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <div />
          )}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
