"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Card } from "@/components/ui/card";

export function WhyUs() {
  return (
    <section className="py-24">
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
              WHY NEXLIFY
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4">
              Built Different.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Card className="p-10 h-full border-border bg-accent-blue/5 border-accent-blue/20">
                <h3 className="text-3xl mb-6">Direct communication.</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No account managers, no middlemen. You talk directly to the engineers building your product. 
                  This ensures clarity, speed, and technical accuracy from day one.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-10 h-full border-border bg-secondary/50">
                <Zap className="text-accent-blue mb-6" size={32} />
                <h4 className="mb-4">Modern tech stack.</h4>
                <p className="text-muted-foreground">We use the tools that win. Next.js, Node.js, and Cloud-native infrastructure.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-10 h-full border-border bg-secondary/50">
                <Target className="text-accent-purple mb-6" size={32} />
                <h4 className="mb-4">Delivered on time.</h4>
                <p className="text-muted-foreground">We value your business timelines as much as you do. Sprints are strict, demos are weekly.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-10 h-full border-border bg-secondary/50">
                <Shield className="text-accent-blue mb-6" size={32} />
                <h4 className="mb-4">Security-first.</h4>
                <p className="text-muted-foreground">Privacy and security aren't features, they are the foundation of everything we ship.</p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-3">
              <Card className="p-10 h-full border-border bg-accent-purple/5 border-accent-purple/20 flex flex-col md:flex-row items-center gap-8">
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl">Quality without compromise.</h3>
                  <p className="text-muted-foreground">We write tests. We document everything. We don't ship broken code.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-border">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm">Unit Tested</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-border">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm">E2E Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-border">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm">Full Documentation</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
