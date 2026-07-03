 
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/content";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Carousel from "@/components/ui/Carousel";

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <Link to={`/projects/${project.slug}`} className="block h-full cursor-pointer">
      <motion.div
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="h-full"
      >
        <Card className="p-6 md:p-8 h-full hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group cursor-pointer">
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-surface-light text-text-secondary border border-border">
                {project.industry}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-surface border border-border/50 text-text-secondary"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-xs rounded-md bg-surface text-text-secondary">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            <div className="flex items-center text-accent text-sm font-medium mt-auto">
              View case study
              <motion.span
                className="inline-flex ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  const useCarousel = PROJECTS.length > 4;

  const carouselItems = PROJECTS.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Projects</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Featured work <span className="text-text-secondary">({PROJECTS.length})</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Enterprise applications delivering measurable business impact across logistics, supply chain, healthcare, and inventory management.
            </p>
          </div>
        </FadeInUp>

        {useCarousel ? (
          <Carousel items={carouselItems} columns={2} mdColumns={2} smColumns={1} gap={24} />
        ) : (
          <StaggerChildren staggerDelay={0.15}>
            {/* items-stretch makes every grid cell fill the row height */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {PROJECTS.map((project) => (
                <StaggerItem key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
