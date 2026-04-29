import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Activity, Network, UserPlus, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { lifecycleStages } from "@/data/lifecycle-stages";
import heroBg from "@/assets/hero-bg.png";
import robotImg from "@/assets/robot.png";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 1.5 } },
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const CountUpStat = ({ target, label, suffix }: { target: number; label: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.ceil(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="py-12 md:py-16 px-4 md:px-8 text-center flex flex-col items-center justify-center">
      <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{count}{suffix}</span>
      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
};

const CircularRing = ({ label, percentage, delay }: { label: string; percentage: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="7"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.8, delay, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px hsl(var(--secondary) / 0.6))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-bold text-base md:text-lg text-secondary"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.4 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <span className="text-xs text-center font-mono uppercase tracking-wider text-white/50 max-w-[90px] leading-tight">{label}</span>
    </div>
  );
};

const navSections = [
  {
    href: "/expertise",
    label: "Core Expertise",
    title: "AI Integration, Digital Transformation & HR Systems Architecture",
    desc: "Three focus areas that cover the full technical and organizational spectrum of modern HR transformation.",
    icon: <BrainCircuit className="w-6 h-6" />,
    accent: "hsl(var(--secondary))",
  },
  {
    href: "/lifecycle",
    label: "HR Lifecycle",
    title: "Hire to Retire — End-to-End Transformation",
    desc: "Seven interconnected stages of the employee journey, each with transformation plays, tools, and outcome metrics.",
    icon: <UserPlus className="w-6 h-6" />,
    accent: "#60a5fa",
  },
  {
    href: "/approach",
    label: "The Approach",
    title: "A Four-Phase Methodology Built for Adoption",
    desc: "Diagnose, Design, Deliver, Embed. The framework that turns technology investments into lasting organizational change.",
    icon: <Network className="w-6 h-6" />,
    accent: "#34d399",
  },
  {
    href: "/about",
    label: "About",
    title: "20+ Years. 50+ Projects. One Clear Direction.",
    desc: "The background, career journey, and guiding philosophy behind the advisory practice.",
    icon: <Activity className="w-6 h-6" />,
    accent: "#f472b6",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 z-10" />
          <img src={heroBg} alt="Abstract background" className="w-full h-full object-cover object-center opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER_CONTAINER}>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-secondary" />
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">Digital Transformation Advisor</span>
              </motion.div>

              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                Connecting People,<br />
                Process, and Technology<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">with AI.</span>
              </motion.h1>

              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-foreground/70 max-w-xl mb-12 leading-relaxed">
                I help organizations bridge the gap between IT infrastructure and human capital, deploying AI and intelligent systems to transform how companies recruit, perform, and grow.
              </motion.p>

              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4">
                <Link href="/about#contact">
                  <Button size="lg" className="rounded-none font-semibold text-base h-14 px-8">
                    Discuss Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/approach">
                  <Button variant="outline" size="lg" className="rounded-none font-semibold text-base h-14 px-8 border-foreground/20 bg-background/50 backdrop-blur-sm">
                    View Methodology
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Robot image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:flex items-end justify-center relative"
            >
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-secondary scale-75 translate-y-10" />
              <img
                src={robotImg}
                alt="AI-powered HR technology"
                className="relative z-10 w-full max-w-sm xl:max-w-md object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px hsl(var(--secondary) / 0.25))" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE PROP STATS */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            <CountUpStat target={20} label="Years Experience" suffix="+" />
            <CountUpStat target={50} label="Projects Globally" suffix="+" />
            <CountUpStat target={32} label="Cost Reduction" suffix="%" />
            <CountUpStat target={15} label="AI Implementations" suffix="+" />
          </div>
        </div>
      </section>

      {/* HR TRANSFORMATION IMPACT SECTION */}
      <section className="py-24 md:py-32 bg-foreground text-background border-b border-background/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-secondary">The Data</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-background max-w-2xl">
                Where Digital Transformation Delivers Real Results
              </h2>
              <p className="text-background/50 max-w-sm md:text-right text-sm font-mono">
                Based on 20+ years of global HR transformation engagements across 50+ projects.
              </p>
            </div>
          </div>

          {/* Circular Ring Gauges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="border border-background/10 p-8 md:p-10 bg-background/5"
          >
            <div className="mb-10">
              <h3 className="text-lg font-bold text-background tracking-tight">HR Process Automation Potential</h3>
              <p className="text-background/40 text-sm mt-1 font-mono">Digitization impact by function — based on 50+ global transformation projects</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
              <CircularRing label="Payroll & Benefits" percentage={87} delay={0.1} />
              <CircularRing label="Recruitment Screening" percentage={82} delay={0.2} />
              <CircularRing label="Employee Onboarding" percentage={76} delay={0.3} />
              <CircularRing label="Performance Reporting" percentage={71} delay={0.4} />
              <CircularRing label="L&D Administration" percentage={68} delay={0.5} />
              <CircularRing label="HR Analytics" percentage={64} delay={0.6} />
            </div>
          </motion.div>

          {/* Impact Ticker Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-background/10 border border-background/10"
          >
            {[
              { value: "↓ 40%", label: "Average reduction in time-to-hire after ATS + AI implementation" },
              { value: "↑ 3×", label: "Increase in HR self-service adoption after digital onboarding overhaul" },
              { value: "↓ 28%", label: "HR operational cost reduction achieved in enterprise transformation programs" },
            ].map((item, i) => (
              <div key={i} className="p-8 flex flex-col gap-2">
                <span className="text-4xl font-bold text-secondary">{item.value}</span>
                <span className="text-background/50 text-sm leading-relaxed font-mono">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NAVIGATION TEASER — links to all 4 pages */}
      <section className="py-24 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Explore</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
              Everything you need to know.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {navSections.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
              >
                <Link href={s.href}>
                  <div className="group border border-border p-10 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                        style={{ borderColor: s.accent, color: s.accent }}
                      >
                        {s.icon}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{s.label}</span>
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-secondary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <div className="flex items-center gap-2 mt-6 text-xs font-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE STRIP — quick links to all 7 stages */}
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
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">HR Lifecycle</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">The full employee journey — stage by stage.</h2>
              <Link href="/lifecycle">
                <Button variant="outline" size="sm" className="rounded-none font-semibold shrink-0">
                  View All Stages <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border z-0" />
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 relative z-10">
              {lifecycleStages.map((item, i) => {
                const StageIcon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.7 }}
                  >
                    <Link href={`/lifecycle/${item.slug}`}>
                      <div className="flex flex-col group cursor-pointer">
                        <div
                          className="flex items-center justify-center w-20 h-20 rounded-none bg-background border-2 mb-4 shadow-sm group-hover:text-background transition-colors relative"
                          style={{ borderColor: item.accentColor, color: item.accentColor }}
                        >
                          <StageIcon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground mb-1">{item.stage}</span>
                        <h3 className="font-bold text-sm text-foreground group-hover:text-secondary transition-colors">{item.title}</h3>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-secondary text-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Ready to modernize your HR infrastructure?
            </h2>
            <p className="text-xl text-foreground/80 mb-12 font-medium">
              Schedule a discovery call to discuss your organization's digital transformation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/about#contact">
                <Button size="lg" variant="default" className="rounded-none h-16 px-10 text-lg shadow-xl hover:shadow-2xl transition-all">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-none h-16 px-10 text-lg border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent transition-all">
                  Learn About Abdul <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
