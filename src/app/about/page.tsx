"use client";

import { motion } from "framer-motion";
import { TeamSection } from "@/components/sections/team-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Shield, Zap, Target, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality", description: "We don't cut corners. We write clean, tested, and maintainable code." },
  { icon: Zap, title: "Speed", description: "Agile processes and a modern tech stack allow us to move faster than the competition." },
  { icon: Target, title: "Clarity", description: "Clear communication and strict adherence to timelines and budgets." },
  { icon: Users, title: "Ownership", description: "We think like product owners, ensuring every decision benefits your long-term goals." },
];

export default function AboutPage() {
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
            <motion.h1 variants={fadeUp}>We are Nexlify.</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              Founded with a mission to bridge the gap between complex engineering and business goals. 
              We build high-performance software for companies that are ready to scale. No fluff, no middlemen, just pure technical excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-8">
              <h2 className="text-4xl">Our Origin Story</h2>
              <p className="text-lg text-muted-foreground">
                Nexlify started as a small team of senior engineers who were frustrated with the slow pace and communication gaps of traditional agencies. 
                We wanted to build an agency that worked as fast as a startup but with the precision of an enterprise team.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the last 4 years, we've helped 50+ clients launch complex platforms, scale their infrastructure, and automate business processes 
                that were previously holding them back.
              </p>
            </motion.div>
            <div className="aspect-square rounded-3xl gradient-bg opacity-10 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide every line of code we write.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp}>
                  <Card className="p-8 h-full space-y-4 hover:border-accent-blue/50 transition-colors">
                    <v.icon className="text-accent-blue" size={32} />
                    <h4 className="text-xl font-bold">{v.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <TeamSection />

      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="p-16 rounded-3xl bg-secondary border border-border space-y-8"
          >
            <h2 className="text-4xl">Ready to build?</h2>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
