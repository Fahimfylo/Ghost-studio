"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TEAM } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Link from "next/link";

export function TeamSection() {
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
              THE TEAM
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4">
              Small Team. Big Output.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={fadeUp}>
                <Card className="p-8 h-full bg-background border-border group hover:border-accent-blue/50 transition-all">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mb-6">
                    {member.initials}
                  </div>
                  <h4 className="text-xl mb-1">{member.name}</h4>
                  <p className="text-sm text-accent-blue font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center gap-4 border-t pt-6">
                    <Link href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                      <Github size={18} />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                      <Linkedin size={18} />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                      <Twitter size={18} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
