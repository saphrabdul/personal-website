import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import servicesAbstract from "@/assets/approach-digital.png";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    desc: "Before recommending anything, I map the current state — processes, systems, people, and pain points — to understand exactly where value is being lost and why.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Working with your stakeholders, I co-design a future state that is technically achievable, organizationally realistic, and commercially justified — not just theoretically elegant.",
  },
  {
    number: "03",
    title: "Deliver",
    desc: "I work alongside your implementation teams to ensure the design becomes reality — with the right governance, change management, and quality controls at every stage.",
  },
  {
    number: "04",
    title: "Embed",
    desc: "Transformation only works if it sticks. I build adoption plans, training frameworks, and measurement systems that make new ways of working the default, not the exception.",
  },
];

const principles = [
  {
    title: "Stakeholder alignment before technology selection",
    desc: "The biggest HR transformation failures happen when technology is chosen before people have agreed on what problem they are solving. I start with alignment, not a vendor demo.",
  },
  {
    title: "Vendor selection & technology roadmapping",
    desc: "Selecting the right platform for your organization requires understanding your current architecture, your growth trajectory, and your people's capacity to change — not just a features checklist.",
  },
  {
    title: "Data hygiene & migration strategy",
    desc: "Bad data in, bad outcomes out. Every transformation project I lead begins with an honest assessment of data quality and a realistic plan to clean it before it moves.",
  },
  {
    title: "Change management & adoption training",
    desc: "Technology is the easy part. Getting 5,000 employees to use it differently is where most programs fail. I build change programmes that are proportionate, practical, and measurable.",
  },
];

export default function ApproachPage() {
  return (
    <div className="w-full">
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">The Approach</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl mb-6">
              Technology is the easy part. Adoption is where transformation happens.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Many organizations buy sophisticated HR software only to use 20% of its capabilities. The methodology here bridges IT and HR to make intelligent tools actually serve the people using them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE + OVERVIEW */}
      <section className="py-24 bg-foreground text-background border-b border-background/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/2] border border-background/20 p-2"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={servicesAbstract}
                  alt="Digital Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div>
              <div className="space-y-6 text-background/70 mb-12">
                <p className="text-lg">
                  My methodology bridges the traditional divide between IT (who owns the infrastructure) and HR (who owns the human experience), ensuring that intelligent tools like AI actually serve the people using them.
                </p>
                <p>
                  With 20+ years across both disciplines, I speak both languages — and translate between them to drive transformation that lasts beyond the project close.
                </p>
              </div>
              <ul className="space-y-4">
                {principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-background/90">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP METHODOLOGY */}
      <section className="py-24 bg-background border-b border-border">
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
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Methodology</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Four phases. No shortcuts.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="border border-border p-8 bg-muted/20 hover:border-secondary/30 transition-colors"
              >
                <span className="font-mono text-4xl font-bold text-secondary/20 mb-4 block">{s.number}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES DEEP-DIVE */}
      <section className="py-24 bg-muted/20 border-b border-border">
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
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Guiding Principles</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground max-w-2xl">What separates transformation from implementation.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="border-l-2 border-secondary pl-6 py-2"
              >
                <h4 className="font-bold text-foreground mb-3">{p.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-background mb-2">Want to see this applied to your organization?</h2>
            <p className="text-background/50 font-mono text-sm">Let's start with a no-obligation discovery call.</p>
          </div>
          <Link href="/about#contact">
            <Button size="lg" className="rounded-none h-14 px-8 font-semibold shrink-0">
              Book a Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
