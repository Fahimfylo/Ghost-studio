"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-purple/15 rounded-full blur-[140px]" 
        />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl"
        >
          <motion.h1 variants={fadeUp} className="leading-tight mb-6">
            We Build Software<br />
            <span className="gradient-text">That Scales.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-10 max-w-2xl">
            From MVP to enterprise infrastructure. Full-stack development, 
            SaaS platforms, AI integration — delivered with precision.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-20">
            <Button variant="primary" size="lg" className="group" asChild>
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/50">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold font-headline mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Trusted by teams at</span>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-40 grayscale">
              <span className="text-2xl font-bold">TECHFLOW</span>
              <span className="text-2xl font-bold">LOGICORE</span>
              <span className="text-2xl font-bold">SHIPSMART</span>
              <span className="text-2xl font-bold">FINBLOC</span>
              <span className="text-2xl font-bold">DATASTREAM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
