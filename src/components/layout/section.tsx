import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizes = {
    default: "max-w-6xl",
    narrow: "max-w-3xl",
    wide: "max-w-7xl",
  };
  
  return (
    <div className={cn("mx-auto px-6 md:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

