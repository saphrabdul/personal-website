import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Wrench, TrendingUp, Lightbulb, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lifecycleStages, getStageBySlug } from "@/data/lifecycle-stages";
import NotFound from "@/pages/not-found";
import { useState, useEffect, useRef } from "react";

const RollingMetric = ({ value, accentColor, delay }: { value: string; accentColor: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [count, setCount] = useState(0);

  const match = value.match(/^(↓\s*|↑\s*)?(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    if (!isInView || target === 0) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, isFloat]);

  return (
    <div ref={ref} className="flex items-baseline gap-0.5 flex-wrap">
      {prefix && (
        <span className="text-2xl font-bold mr-0.5" style={{ color: accentColor }}>{prefix.trim()}&nbsp;</span>
      )}
      <span className="text-3xl font-bold tabular-nums" style={{ color: accentColor }}>
        {isFloat ? count.toFixed(1) : count}
      </span>
      <span className="text-3xl font-bold" style={{ color: accentColor }}>{suffix}</span>
    </div>
  );
};

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function LifecycleStagePage() {
  const params = useParams<{ slug: string }>();
  const stage = getStageBySlug(params.slug ?? "");

  if (!stage) return <NotFound />;

  const currentIndex = lifecycleStages.findIndex((s) => s.slug === stage.slug);
  const prevStage = currentIndex > 0 ? lifecycleStages[currentIndex - 1] : null;
  const nextStage = currentIndex < lifecycleStages.length - 1 ? lifecycleStages[currentIndex + 1] : null;
  const Icon = stage.icon;

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, ${stage.accentColor}, transparent 60%)`,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-background/40 mb-12"
          >
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#lifecycle" className="hover:text-secondary transition-colors">HR Lifecycle</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">{stage.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-6">
                <span
                  className="font-mono text-5xl font-bold leading-none"
                  style={{ color: stage.accentColor, opacity: 0.25 }}
                >
                  {stage.stage}
                </span>
                <div className="h-px flex-1 opacity-10 bg-background" />
              </motion.div>

              <motion.div
                variants={FADE_UP}
                className="inline-flex items-center justify-center w-14 h-14 border-2 mb-6"
                style={{ borderColor: stage.accentColor, color: stage.accentColor }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>

              <motion.h1
                variants={FADE_UP}
                className="text-4xl md:text-6xl font-bold tracking-tight text-background leading-tight mb-6"
              >
                {stage.title}
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="text-lg md:text-xl text-background/60 leading-relaxed max-w-xl"
              >
                {stage.tagline}
              </motion.p>
            </motion.div>

            {/* Stage progress indicator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="space-y-2">
                {lifecycleStages.map((s, i) => {
                  const StageIcon = s.icon;
                  const isActive = s.slug === stage.slug;
                  const isPast = i < currentIndex;
                  return (
                    <Link key={s.slug} href={`/lifecycle/${s.slug}`}>
                      <div
                        className={`flex items-center gap-4 px-4 py-3 border transition-all cursor-pointer group ${
                          isActive
                            ? "border-background/20 bg-background/10"
                            : "border-transparent hover:border-background/10 hover:bg-background/5"
                        }`}
                      >
                        <div
                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 border"
                          style={{
                            borderColor: isActive ? stage.accentColor : isPast ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                            color: isActive ? stage.accentColor : isPast ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                          }}
                        >
                          <StageIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-mono ${isActive ? "text-background/40" : "text-background/20"}`}>{s.stage}</div>
                          <div className={`text-sm font-semibold truncate ${isActive ? "text-background" : "text-background/40"}`}>{s.title}</div>
                        </div>
                        {isActive && (
                          <div className="w-1 h-8 flex-shrink-0" style={{ backgroundColor: stage.accentColor }} />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS BAR */}
      <section className="border-b border-border bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {stage.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="px-6 py-8 flex flex-col gap-2"
              >
                <RollingMetric value={m.value} accentColor={stage.accentColor} delay={i * 0.08} />
                <span className="text-sm text-muted-foreground font-mono leading-snug">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE + OVERVIEW */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6" style={{ backgroundColor: stage.accentColor }}></div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">The Challenge</span>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">{stage.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6" style={{ backgroundColor: stage.accentColor }}></div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">My Approach</span>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">{stage.overview}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 md:py-28 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5" style={{ color: stage.accentColor }} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Process Methodology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              How I transform {stage.title.toLowerCase()}
            </h2>
          </motion.div>

          <div className="space-y-0">
            {stage.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="flex gap-6 md:gap-10 py-8 border-b border-border last:border-0 group"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-sm font-bold font-mono border-2 flex-shrink-0"
                    style={{ borderColor: stage.accentColor, color: stage.accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < stage.processSteps.length - 1 && (
                    <div className="w-px flex-1 mt-4 bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO COLUMN: TOOLS + PRINCIPLES */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-5 h-5" style={{ color: stage.accentColor }} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Technology & Platforms
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stage.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex items-center gap-3 px-4 py-3 border border-border bg-muted/20 hover:border-border/80 transition-colors"
                  >
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: stage.accentColor }}
                    />
                    <span className="text-sm font-medium text-foreground/80">{tool}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-5 font-mono">
                Platform selection is always tailored to your organization's scale, budget, and existing ecosystem.
              </p>
            </motion.div>

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-5 h-5" style={{ color: stage.accentColor }} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Guiding Principles
                </span>
              </div>
              <div className="space-y-6">
                {stage.principles.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.7 }}
                    className="border-l-2 pl-5 py-1"
                    style={{ borderColor: i === 0 ? stage.accentColor : "hsl(var(--border))" }}
                  >
                    <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ALL STAGES STRIP */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              All Lifecycle Stages
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {lifecycleStages.map((s) => {
              const SIcon = s.icon;
              const isActive = s.slug === stage.slug;
              return (
                <Link key={s.slug} href={`/lifecycle/${s.slug}`}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex flex-col items-center gap-2 p-4 border text-center cursor-pointer transition-all ${
                      isActive
                        ? "border-secondary bg-secondary/5"
                        : "border-border hover:border-border/60 bg-background hover:bg-muted/20"
                    }`}
                  >
                    <SIcon className={`w-5 h-5 ${isActive ? "text-secondary" : "text-muted-foreground"}`} />
                    <span className={`text-xs font-mono ${isActive ? "text-secondary" : "text-muted-foreground"}`}>{s.stage}</span>
                    <span className={`text-xs font-semibold leading-tight ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <section className="bg-background border-b border-border">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {prevStage ? (
            <Link href={`/lifecycle/${prevStage.slug}`}>
              <div className="flex items-center gap-6 p-8 md:p-10 group cursor-pointer hover:bg-muted/20 transition-colors">
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Previous Stage</div>
                  <div className="font-bold text-foreground group-hover:text-secondary transition-colors">{prevStage.title}</div>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextStage ? (
            <Link href={`/lifecycle/${nextStage.slug}`}>
              <div className="flex items-center justify-end gap-6 p-8 md:p-10 group cursor-pointer hover:bg-muted/20 transition-colors">
                <div className="text-right">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Next Stage</div>
                  <div className="font-bold text-foreground group-hover:text-secondary transition-colors">{nextStage.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: stage.accentColor }}></div>
              <span className="font-mono text-sm font-bold uppercase tracking-widest" style={{ color: stage.accentColor }}>
                Ready to transform your {stage.title}?
              </span>
              <div className="h-px w-8" style={{ backgroundColor: stage.accentColor }}></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 max-w-2xl mx-auto">
              Let's fix this together — with no consultant-speak and no wasted time.
            </h2>
            <p className="text-background/50 mb-10 max-w-xl mx-auto">
              Tell me where you are and I will tell you exactly what to do about it — and how long it will take.
            </p>
            <a href="mailto:saphr.abdul@gmail.com">
              <Button size="lg" className="rounded-none h-14 px-10 font-semibold text-base">
                Start the conversation <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
