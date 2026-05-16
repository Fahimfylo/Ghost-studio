"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-24"
        >
          <div className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              OUR WORK
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4">
              Projects We're Proud Of
            </motion.h2>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id} 
                variants={fadeUp}
                className={cn(
                  "flex flex-col gap-12 items-center",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Mockup Placeholder */}
                <div className={cn(
                  "w-full lg:w-1/2 aspect-video rounded-2xl bg-gradient-to-br flex items-center justify-center p-8",
                  project.color
                )}>
                  <div className="w-full h-full bg-background/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl flex items-center justify-center">
                    <span className="text-xl font-bold opacity-20">{project.name} UI</span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <Badge variant="accent">{project.category}</Badge>
                  <h3 className="text-3xl md:text-4xl">{project.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground/60">Success Metrics</p>
                    <ul className="space-y-2">
                      {project.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          <span className="text-foreground/80">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="mt-4" asChild>
                    <Link href="/projects">View Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
