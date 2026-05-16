"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-16"
        >
          <div className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
              WHAT WE DO
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 mb-6">
              End-to-End Software Solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              We handle the full lifecycle — from architecture to deployment. 
              Reliable code that drives business growth.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={fadeUp}>
                <Card className="p-8 h-full bg-background border-border hover:border-accent-blue/50 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <service.icon size={24} />
                    </div>
                    <h4 className="mb-4">{service.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="inline-flex items-center text-sm font-semibold text-accent-blue hover:translate-x-1 transition-transform"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
