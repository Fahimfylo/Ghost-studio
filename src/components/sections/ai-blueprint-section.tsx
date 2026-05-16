"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BrainCircuit, Rocket, Database, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { generateProjectBlueprint, type ProjectBlueprintGeneratorOutput } from "@/ai/flows/project-blueprint-generator";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function AIBlueprintSection() {
  const [projectIdea, setProjectIdea] = React.useState("");
  const [requirements, setRequirements] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [blueprint, setBlueprint] = React.useState<ProjectBlueprintGeneratorOutput | null>(null);

  const handleGenerate = async () => {
    if (!projectIdea || !requirements) return;
    setLoading(true);
    try {
      const result = await generateProjectBlueprint({ projectIdea, requirements });
      setBlueprint(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-12"
        >
          <div className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-purple">
              <Sparkles size={14} /> AI-POWERED BLUEPRINT
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4">
              Get an Architect's Perspective
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground mt-4">
              Describe your project idea and requirements, and our AI will suggest an optimal 
              database architecture and feature roadmap for you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} className="space-y-6">
              <Card className="p-8 border-border bg-secondary/30 space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-semibold">Project Idea</label>
                  <Input 
                    placeholder="e.g. A multi-tenant SaaS for real-estate management" 
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-semibold">Technical Requirements</label>
                  <Textarea 
                    placeholder="e.g. Needs to handle 10k concurrent users, require offline support, and HIPAA compliance..." 
                    className="min-h-[120px]"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                  />
                </div>
                <Button 
                  variant="primary" 
                  className="w-full" 
                  size="lg" 
                  onClick={handleGenerate}
                  disabled={loading || !projectIdea || !requirements}
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Requirements...</>
                  ) : (
                    <><BrainCircuit className="mr-2 h-4 w-4" /> Generate Technical Blueprint</>
                  )}
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <AnimatePresence mode="wait">
                {blueprint ? (
                  <motion.div
                    key="blueprint"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <Card className="p-8 border-accent-purple/30 bg-accent-purple/5 space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent-purple font-bold uppercase text-xs tracking-wider">
                          <Database size={16} /> Recommended Architecture
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/90 bg-background/50 p-4 rounded-lg border border-border">
                          {blueprint.databaseArchitecture}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-accent-purple font-bold uppercase text-xs tracking-wider">
                          <Rocket size={16} /> Core Feature Roadmap
                        </div>
                        <div className="grid gap-4">
                          {blueprint.featureRoadmap.map((feature, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-accent-purple/30 transition-colors">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-purple/10 text-accent-purple flex items-center justify-center font-bold text-sm">
                                {i + 1}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold mb-1">{feature.name}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    className="h-full min-h-[400px] border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-center p-12 text-muted-foreground"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                      <Rocket size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground/50 mb-2">Ready to Launch?</h4>
                    <p className="max-w-xs text-sm">Fill in your idea and requirements to generate a tailor-made technical blueprint.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
