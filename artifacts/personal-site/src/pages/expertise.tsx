import { motion } from "framer-motion";
import { BrainCircuit, Network, Activity, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

const ExpertiseCard = ({ icon, title, desc, bullets, delay }: { icon: React.ReactNode; title: string; desc: string; bullets: string[]; delay: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="bg-muted/40 p-10 border border-border hover:border-secondary/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 relative flex flex-col h-full"
    >
      <div>{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
      <div className="mt-auto pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
        >
          {isExpanded ? "Show less" : "Key capabilities"}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default function ExpertisePage() {
  return (
    <div className="w-full">
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Core Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
              Architecting the future of human capital operations.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Strategic consulting tailored for enterprise organizations looking to leverage the next generation of HR technology — from AI integration to full digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE CARDS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
            <ExpertiseCard
              icon={<BrainCircuit className="w-8 h-8 text-secondary mb-6" />}
              title="AI Integration for HR"
              desc="Deploying predictive analytics, conversational AI, and automated screening workflows to optimize recruitment and performance management."
              bullets={["Predictive workforce analytics", "AI-powered candidate screening", "Chatbot HR helpdesk", "Automated compliance monitoring"]}
              delay={0}
            />
            <ExpertiseCard
              icon={<Network className="w-8 h-8 text-secondary mb-6" />}
              title="Digital Transformation"
              desc="End-to-end strategic planning to move legacy HR operations into cloud-native, integrated, and agile ecosystems."
              bullets={["HR tech stack assessment", "Cloud migration roadmaps", "Change management programs", "ROI measurement frameworks"]}
              delay={0.1}
            />
            <ExpertiseCard
              icon={<Activity className="w-8 h-8 text-secondary mb-6" />}
              title="HR Systems Architecture"
              desc="Bridging the gap between IT and HR to select, architect, and implement Workday, SAP, or modern composable HR stacks."
              bullets={["Workday / SAP SuccessFactors", "System integration & APIs", "Data migration & governance", "Custom reporting dashboards"]}
              delay={0.2}
            />
          </div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-border pt-16"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Industries Served</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Financial Services", "Healthcare & Life Sciences", "Manufacturing", "Retail & FMCG", "Technology", "Government & Public Sector", "Energy & Utilities", "Professional Services"].map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border border-border px-5 py-4 text-sm font-medium text-foreground/70 hover:border-secondary/40 hover:text-foreground transition-colors"
                >
                  {ind}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-background mb-2">Ready to discuss your transformation?</h2>
            <p className="text-background/50 font-mono text-sm">Tell me where you are — I'll tell you how to move forward.</p>
          </div>
          <Link href="/about#contact">
            <Button size="lg" className="rounded-none h-14 px-8 font-semibold shrink-0">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
