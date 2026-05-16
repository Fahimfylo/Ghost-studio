"use client";

import { ContactFormSection } from "@/components/sections/contact-form-section";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most MVPs take 8–12 weeks from discovery to launch. Enterprise platforms and custom ERPs can range from 4 to 8 months depending on complexity."
  },
  {
    question: "How do you handle project management?",
    answer: "We use agile methodology with 1-week or 2-week sprints. You'll have access to a dedicated Slack channel, weekly demo calls, and visibility into our GitHub progress."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer maintenance retainers that include security updates, performance monitoring, and continuous feature development."
  },
  {
    question: "Can you work with our existing dev team?",
    answer: "Absolutely. We often act as a force multiplier for existing teams, handling specific architectural challenges or building out new product verticals."
  }
];

export default function ContactPage() {
  return (
    <div className="pt-32">
      <ContactFormSection />

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <motion.div variants={fadeUp} className="space-y-8">
              <h2 className="text-4xl">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our technical process and partnership model.
              </p>
              
              <div className="aspect-video bg-muted rounded-2xl border flex items-center justify-center overflow-hidden">
                <p className="text-muted-foreground italic">Google Maps Embed Placeholder</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border px-4 hover:bg-background/50 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg py-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
