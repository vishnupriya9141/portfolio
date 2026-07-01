"use client";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PROJECTS } from "@/data/content";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  ClipboardList,
  Wrench,
  Target,
  FolderOpen,
  User
} from "lucide-react";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleBackToProjects = () => {
    sessionStorage.setItem("scrollToProjects", "true");
    window.location.href = "/";
  };

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeInUp>
              <button
                onClick={handleBackToProjects}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to projects
              </button>
          </FadeInUp>

          <FadeInUp>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </FadeInUp>

          <StaggerChildren staggerDelay={0.1}>
            {/* Project Overview */}
            <StaggerItem>
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <FolderOpen className="w-5 h-5 text-accent" />
                  Project Overview
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-text-secondary mb-1">Project Title</h3>
                    <p className="font-medium">{project.title}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-text-secondary mb-1">Industry</h3>
                    <p className="font-medium">{project.industry}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-text-secondary mb-1">Role</h3>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>

            {/* Project Context */}
            <StaggerItem>
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <ClipboardList className="w-5 h-5 text-accent" />
                  Project Context
                </h2>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {project.context}
                </p>
              </Card>
            </StaggerItem>

            {/* Responsibilities */}
            <StaggerItem>
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <User className="w-5 h-5 text-accent" />
                  My Responsibilities
                </h2>
                <ul className="space-y-3">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>

            {/* Technologies Used */}
            <StaggerItem>
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-accent" />
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-surface-light text-text-secondary border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>

            {/* Challenges & Solutions */}
            <StaggerItem>
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium mb-2">Challenge {idx + 1}</h3>
                      <p className="text-text-secondary text-sm mb-3">{item.challenge}</p>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs text-accent font-medium uppercase tracking-wider">Solution</span>
                          <p className="text-text-secondary text-sm">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </StaggerItem>

            {/* Outcomes */}
            <StaggerItem>
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-accent/20">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Outcomes
                </h2>
                <ul className="space-y-3">
                  {project.outcomes?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-primary">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          </StaggerChildren>

          <FadeInUp delay={0.3} className="mt-12">
            <div className="flex justify-center">
              <Button size="lg" variant="outline" asChild>
                   <Button
                     onClick={handleBackToProjects}
                   >
                     <ArrowLeft className="mr-2 h-4 w-4" />
                     Back to all projects
                   </Button>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}