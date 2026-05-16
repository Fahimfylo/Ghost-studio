"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function ProcessSection() {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-20"
        >
          <div className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              HOW WE WORK
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4">
              A Process Built for Clarity
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 relative z-10">
              {PROCESS_STEPS.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="space-y-6 group">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
