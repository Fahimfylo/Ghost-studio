import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
  tech: string[];
  timeline: string;
  startingFrom: string;
}
