
import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Copy, Check, Briefcase } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const LINKS = [
  {
    key: "email",
    label: "Email",
    sub: SITE_CONFIG.email,
    icon: <Mail className="w-6 h-6" />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    sub: "Connect professionally",
    icon: <span className="text-lg font-bold">in</span>,
  },
  {
    key: "github",
    label: "GitHub",
    sub: "Check out my code",
    icon: <GithubIcon className="w-6 h-6" />,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    toast({ title: "Email copied", description: `${SITE_CONFIG.email} copied to clipboard` });
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
          {LINKS.map(({ key, label, sub, icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group h-full flex flex-col">
                <motion.div
                  className="text-accent mb-4"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{label}</h3>
                <p className="text-sm text-text-secondary mb-4 flex-grow">{sub}</p>

                {key === "email" && (
                  <div className="flex gap-2">
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline" onClick={copyEmail}>
                        <motion.span
                          key={copied ? "check" : "copy"}
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.15 }}
                          className="inline-flex items-center"
                        >
                          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                          {copied ? "Copied" : "Copy"}
                        </motion.span>
                      </Button>
                    </motion.div>
                    <Button size="sm" asChild>
                      <a href={`mailto:${SITE_CONFIG.email}`}>Send Email</a>
                    </Button>
                  </div>
                )}

                {key === "linkedin" && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                )}

                {key === "github" && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}

        </div>

        {/* Open to Opportunities — full-width row below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{ y: -5 }}
          className="mt-6"
        >
            <Card className="p-6 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group border-accent/20 bg-accent/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <motion.div
                  className="text-accent shrink-0"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative inline-flex">
                    <Briefcase className="w-6 h-6" />
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500"
                    />
                  </div>
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-1">Open to Opportunities</h3>
                  <p className="text-sm text-text-secondary">
                    Actively seeking full-stack, frontend engineering, and web development opportunities.
                  </p>
                </div>
                <Button size="sm" className="shrink-0" asChild>
                  <a href={`mailto:${SITE_CONFIG.email}?subject=Opportunity for ${SITE_CONFIG.name}`}>
                    Get in Touch
                  </a>
                </Button>
              </div>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}
