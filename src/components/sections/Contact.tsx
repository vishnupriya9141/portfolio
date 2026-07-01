"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Copy, Check, Download } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    toast({
      title: "Email copied",
      description: `${SITE_CONFIG.email} copied to clipboard`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s connect
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Interested in collaborating on enterprise software, discussing architecture, or exploring opportunities? Reach out.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeInUp delay={0.1}>
            <Card className="p-6 hover:border-accent/30 transition-colors group">
              <div className="text-accent mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-text-secondary mb-4">
                {SITE_CONFIG.email}
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={copyEmail}>
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button size="sm" asChild>
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    Send Email
                  </a>
                </Button>
              </div>
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <Card className="p-6 hover:border-accent/30 transition-colors group">
              <div className="text-accent mb-4 text-lg font-bold">in</div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-text-secondary mb-4">
                Connect professionally
              </p>
              <Button size="sm" variant="outline" asChild>
                <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <Card className="p-6 hover:border-accent/30 transition-colors group">
              <div className="text-accent mb-4 text-lg font-bold">GH</div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-text-secondary mb-4">
                Check out my code
              </p>
              <Button size="sm" variant="outline" asChild>
                <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.4} className="mt-12">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-accent/20 text-center">
            <h3 className="text-2xl font-semibold mb-4">Open to opportunities</h3>
            <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
              I&apos;m currently exploring senior frontend and full-stack opportunities where I can contribute to building high-impact enterprise applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href={SITE_CONFIG.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${SITE_CONFIG.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </Card>
        </FadeInUp>
      </div>
    </section>
  );
}
