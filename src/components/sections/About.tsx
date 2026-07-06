
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Monitor, Server, Cloud, BarChart, Shield, GraduationCap } from "lucide-react";

const CARDS = [
  {
    icon: Monitor,
    title: "Frontend Architecture",
    description: "Designing scalable component systems and frontend architectures that serve thousands of users with consistent performance and developer experience.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Building robust APIs and microservices with NestJS and FastAPI, handling millions of requests with reliability and security.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Deploying and managing cloud-native applications on Azure with CI/CD pipelines, monitoring, and scalable infrastructure.",
  },
  {
    icon: BarChart,
    title: "Data Visualization",
    description: "Creating compelling data stories with D3.js, Highcharts, and custom visualizations that drive business decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Implementing RBAC, OIDC, and zero-trust patterns to protect sensitive enterprise data and ensure compliance.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Pursuing M.Tech in Cloud Computing from BITS Pilani, continuously expanding knowledge in distributed systems and cloud architecture.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">About</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering with purpose
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed">
              {SITE_CONFIG.name} — {SITE_CONFIG.role} at {SITE_CONFIG.currentCompany} with 3 years of production experience building enterprise software that matters.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <FadeInUp key={card.title} delay={0.1 + index * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
                <Card className="p-6 h-full hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group">
                  <motion.div
                    className="text-accent mb-4 inline-block"
                    whileHover={{ rotate: -8, scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <card.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </Card>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.3} className="mt-16">
          <Card className="p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-accent/20">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Building enterprise-grade applications at Mu Sigma with a focus on scalable, high-performance solutions that drive business value. Experienced in full-stack development across analytics, supply chain, healthcare, inventory, and cloud platforms. Currently pursuing an M.Tech in Cloud Computing from BITS Pilani.
              </p>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.domains.map((domain, i) => (
                  <motion.span
                    key={domain}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(99,102,241,0.15)" }}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 cursor-default"
                  >
                    {domain}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        </FadeInUp>
      </div>
    </section>
  );
}
