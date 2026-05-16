"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const filters = ["All", "SaaS", "E-Commerce", "Enterprise", "Healthcare"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(activeFilter));

  return (
    <div className="pt-32">
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12 text-center max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeUp}>Our Portfolio.</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground">
              A curated selection of technical projects we've delivered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12 border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
            <Filter size={18} className="text-muted-foreground shrink-0" />
            <div className="flex items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                    activeFilter === f 
                      ? "bg-accent-blue border-accent-blue text-white" 
                      : "bg-background border-border text-muted-foreground hover:border-accent-blue"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden border-border hover:border-accent-blue/30 bg-background transition-all">
                    <div className={cn("aspect-video bg-gradient-to-br p-8 transition-transform group-hover:scale-[1.02]", project.color)}>
                      <div className="w-full h-full bg-background/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl flex items-center justify-center text-xl font-bold opacity-30">
                        {project.name}
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <Badge variant="accent">{project.category}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full group" asChild>
                        <Link href={`/projects#`}>
                          View Case Study 
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
