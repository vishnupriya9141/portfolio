import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with clsx, letting later classes override earlier ones
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
