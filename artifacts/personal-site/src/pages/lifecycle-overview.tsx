import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { lifecycleStages } from "@/data/lifecycle-stages";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/robot-hr.png";

export default function LifecycleOverviewPage() {
  return (
    <div className="w-full">
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-secondary" />
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Hire to Retire — End-to-End HR Transformation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
                Transforming every stage of the employee lifecycle.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Most HR transformations stall because they focus on one process in isolation. Real impact comes from redesigning the entire employee journey — from the first job posting to the final exit interview — as one connected, intelligent system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 flex items-center justify-center"
            >
              <img
                src={heroImg}
                alt="AI-Powered HR Lifecycle"
                className="w-full max-w-[420px] object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STAGE CARDS — full grid */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {lifecycleStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.7 }}
                >
                  <Link href={`/lifecycle/${stage.slug}`}>
                    <div className="group cursor-pointer border border-border p-8 hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300 bg-background h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-12 h-12 flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                          style={{ borderColor: stage.accentColor, color: stage.accentColor }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">{stage.stage}</span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{stage.tagline}</p>
                      <div className="flex items-center gap-2 mt-6 text-xs font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore stage <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Extra: placeholder for "All Stages" summary card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.56, duration: 0.7 }}
              className="border border-dashed border-secondary/30 p-8 flex flex-col justify-between bg-secondary/5"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you need to fix one broken stage or redesign the entire journey — the impact comes from connecting them all.
              </p>
              <Link href="/about#contact">
                <Button variant="secondary" size="sm" className="rounded-none font-semibold w-full">
                  Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Metrics</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">The numbers that matter across the lifecycle.</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { metric: "Time to Hire", desc: "How long it takes from a candidate's first interaction to an accepted offer — the clearest signal of how well your recruitment engine is running." },
              { metric: "Candidate Experience Score", desc: "How applicants feel about your process, whether they got the role or not. A poor experience damages your brand far beyond the individual hire." },
              { metric: "First-Year Turnover", desc: "Employees who leave within 12 months expose gaps in your hiring, onboarding, or culture — and cost you more than the original recruitment did." },
              { metric: "HR Self-Service Adoption", desc: "The percentage of routine HR tasks employees handle themselves. High adoption means less admin overhead and more time for strategic work." },
              { metric: "HR Cost per Employee", desc: "The true cost of running your HR function per head. Sustained reduction here is the most direct measure of successful digital transformation." },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="bg-background border border-border p-6"
              >
                <h4 className="font-bold text-sm text-foreground mb-2">{m.metric}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Ready to transform your HR lifecycle?</h2>
            <p className="text-muted-foreground font-mono text-sm">
              Whether you need to fix one broken stage or rebuild the entire employee journey.
            </p>
          </div>
          <Link href="/about#contact">
            <Button size="lg" className="rounded-none h-14 px-8 font-semibold shrink-0">
              Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
