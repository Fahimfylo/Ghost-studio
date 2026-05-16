"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/constants/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12 text-center max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeUp}>Our Expertise.</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground">
              Deeply technical solutions for modern business challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="scroll-mt-32"
            >
              <Card className="p-8 lg:p-12 overflow-hidden relative border-border hover:border-accent-blue/30 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <service.icon size={32} />
                      </div>
                      <h2 className="text-3xl lg:text-4xl">{service.name}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">What it includes:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-2xl p-8 space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((t) => (
                          <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Timeline</h4>
                        <p className="font-semibold">{service.timeline}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Starting From</h4>
                        <p className="font-semibold text-accent-blue">{service.startingFrom}</p>
                      </div>
                    </div>

                    <Button variant="primary" className="w-full" size="lg" asChild>
                      <Link href="/contact">Enquire about this service</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
