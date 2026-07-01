import { SITE_CONFIG } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <main className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </FadeInUp>

          <FadeInUp>
            <Card className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xl text-accent mb-2">{SITE_CONFIG.role}</p>
                <p className="text-text-secondary mb-6">{SITE_CONFIG.location}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-text-secondary hover:text-accent transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                  <span className="text-border">|</span>
                  <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                  <span className="text-border">|</span>
                  <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="space-y-12">
                {/* Professional Summary */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Professional Summary</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Full Stack Developer with 3+ years of production experience architecting and delivering enterprise analytics, supply chain, inventory management, logistics, healthcare, and cloud-native applications. Expert in React, TypeScript, NestJS, FastAPI, and Azure. Proven track record of building scalable systems that drive measurable business impact.
                  </p>
                </section>

                {/* Experience */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Experience</h2>
                  <div className="space-y-8">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">Mu Sigma</h3>
                        <span className="text-sm text-text-secondary">2022 - Present</span>
                      </div>
                      <p className="text-accent font-medium mb-3">Decision Scientist I → II → III</p>
                      <ul className="space-y-2 text-text-secondary">
                        <li>• Lead architecture and delivery of enterprise logistics and supply chain analytics platforms</li>
                        <li>• Design and implement scalable frontend systems serving 1000+ daily active users</li>
                        <li>• Mentor junior developers on React best practices, TypeScript patterns, and clean architecture</li>
                        <li>• Own end-to-end delivery of high-impact business applications reducing manual effort by 60%</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Technologies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Technologies</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Frontend</h3>
                      <p className="text-sm text-text-secondary">React, TypeScript, JavaScript, Tailwind CSS, Ant Design, Vite</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Backend</h3>
                      <p className="text-sm text-text-secondary">Node.js, NestJS, FastAPI, Python, REST APIs</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Data & Visualization</h3>
                      <p className="text-sm text-text-secondary">SQL, PySpark, Azure Databricks, Power BI, D3.js, Chart.js, HighCharts, Leaflet.js, Three.js</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Cloud & Security</h3>
                      <p className="text-sm text-text-secondary">Azure, Azure DevOps, CI/CD, Microsoft Entra ID, RBAC, OIDC, Selenium, SonarQube, Checkmarx</p>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">BITS Pilani</h3>
                        <span className="text-sm text-text-secondary">2023 - 2025</span>
                      </div>
                      <p className="text-accent">M.Tech in Cloud Computing (Pursuing)</p>
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">ANITS</h3>
                        <span className="text-sm text-text-secondary">2018 - 2022</span>
                      </div>
                      <p className="text-accent">B.Tech in Information Technology</p>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Certifications</h2>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Meta Front-End Developer</li>
                    <li>• IBM SQL for Data Science</li>
                  </ul>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-border flex justify-center">
                <Button size="lg" asChild>
                  <a href={SITE_CONFIG.resumeUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </a>
                </Button>
              </div>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}
