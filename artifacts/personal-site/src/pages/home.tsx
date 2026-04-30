import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Activity, Network, UserPlus, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { lifecycleStages } from "@/data/lifecycle-stages";
import heroTech from "@/assets/hero-tech2.png";

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
      <section className="relative flex items-start pt-20 pb-12 overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={STAGGER_CONTAINER} className="lg:col-span-5">
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-foreground leading-[1.15] mb-8">
                Connecting People, Process,<br />
                and Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">with AI.</span>
              </motion.h1>

              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-xl md:text-2xl text-foreground/70 max-w-xl mb-12 leading-relaxed">
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

            {/* Hero Tech Image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:flex items-center justify-center relative lg:col-span-7"
            >
              <img
                src={heroTech}
                alt="HR Technology"
                className="w-full max-w-[480px] object-contain drop-shadow-xl"
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

      {/* CTA SECTION */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
            <p className="text-xl text-background/70 mb-12 font-medium">
              Schedule a discovery call to discuss your organization's digital transformation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/about#contact">
                <Button size="lg" className="rounded-none h-16 px-10 text-lg bg-secondary text-foreground hover:bg-secondary/90 shadow-xl hover:shadow-2xl transition-all">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-none h-16 px-10 text-lg border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent transition-all">
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
