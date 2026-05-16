"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants/testimonials";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsTicker() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Trusted by founders and CTOs across industries.</p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Infinite Row */}
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
            <Card key={index} className="w-[350px] flex-shrink-0 p-8 flex flex-col justify-between border-border bg-secondary/50">
              <div>
                <Quote className="text-accent-blue/30 mb-6" size={32} />
                <p className="text-lg leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
