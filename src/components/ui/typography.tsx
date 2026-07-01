import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function Heading({ children, as = "h2", className }: HeadingProps) {
  const Tag = as;
  const sizes = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-semibold tracking-tight",
    h4: "text-xl md:text-2xl font-semibold tracking-tight",
  };
  
  return (
    <Tag className={cn(sizes[as], className)}>
      {children}
    </Tag>
  );
}

interface TextProps {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Text({ children, as = "p", size = "md", className }: TextProps) {
  const Tag = as;
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  
  return (
    <Tag className={cn("text-text-secondary leading-relaxed", sizes[size], className)}>
      {children}
    </Tag>
  );
}

