"use client";

import { useState } from "react";
import { AWARDS, STATS } from "@/data/content";
import { Trophy, Users, Rocket, Globe } from "lucide-react";
import { FadeInUp, StaggerChildren, StaggerItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Users,
  Rocket,
  Globe,
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <FadeInUp>
          <div className="mb-16 text-center">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">Awards & Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Recognition for excellence
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Corporate Spot Awards recognizing exceptional contributions to enterprise software development and team leadership.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {STATS.map((stat) => {
              const Icon = iconMap[stat.icon] || Trophy;
              return (
                <StaggerItem key={stat.label}>
                  <Card className="p-6 text-center hover:border-accent/30 transition-colors">
                    <Icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</div>
                  </Card>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerChildren>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {AWARDS.map((award) => (
              <StaggerItem key={award.id}>
                <AwardCard award={award} />
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}

function AwardCard({ award }: { award: typeof AWARDS[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="p-4 hover:border-accent/30 transition-all duration-300 cursor-pointer group h-full flex flex-col"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-square rounded-lg bg-surface-light border border-border overflow-hidden mb-3 flex items-center justify-center">
          <img
            src={award.imageUrl}
            alt={award.title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-semibold mb-1 line-clamp-2">{award.title}</h3>
          <p className="text-xs text-text-secondary">{award.date}</p>
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{award.title}</DialogTitle>
            <DialogDescription>{award.date}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface-light p-4 flex items-center justify-center">
              <img
                src={award.imageUrl}
                alt={award.title}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {award.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
