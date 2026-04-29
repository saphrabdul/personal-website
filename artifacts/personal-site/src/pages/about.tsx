import { motion } from "framer-motion";
import { LineChart, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutOffice from "@/assets/about-office.png";

const timeline = [
  { year: "2004–2010", role: "IT Systems Architect", detail: "Enterprise ERP and HR systems implementation across manufacturing and financial services clients in the Middle East and South Asia." },
  { year: "2010–2016", role: "HR Technology Lead", detail: "Led SAP SuccessFactors and Workday deployments for large-scale organizations, bridging IT delivery with HR function requirements." },
  { year: "2016–2020", role: "Digital Transformation Consultant", detail: "Moved into strategic advisory, supporting HR functions with digital roadmaps, AI pilots, and workforce analytics programmes." },
  { year: "2020–Present", role: "Independent Advisor", detail: "Advising global organizations on end-to-end HR transformation — from strategy through technology selection to adoption." },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* PAGE HERO */}
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">The Advisor</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">Abdul Haseeb Shaik</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Digital Transformation & HR Technology Advisor with 20+ years of experience and 50+ global projects delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BIO + IMAGE */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="space-y-6 text-muted-foreground mb-12 text-lg">
                <p>
                  With over 20 years spanning IT architecture and HR application delivery, Abdul brings a rare dual perspective: the technical precision to build enterprise systems and the domain depth to transform how organizations manage their people.
                </p>
                <p>
                  Across 50+ global projects, he has helped organizations reimagine their HR functions — implementing AI-powered recruitment, intelligent analytics, and end-to-end digital transformation strategies that deliver measurable results.
                </p>
                <p>
                  Working across industries including financial services, manufacturing, healthcare, and government, Abdul's approach is defined by one principle: transformation only counts if people actually use it differently.
                </p>
              </div>
              <div className="font-mono text-sm uppercase tracking-wider text-foreground font-bold space-y-2">
                <p>— 20+ Years in HR Technology & IT</p>
                <p>— 50+ Projects Delivered Globally</p>
                <p>— Hire to Retire Specialist</p>
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] bg-muted relative"
              >
                <img
                  src={aboutOffice}
                  alt="Consultant at work"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary p-8 hidden md:flex flex-col justify-end text-foreground shadow-2xl">
                  <LineChart className="w-12 h-12 mb-auto opacity-50" />
                  <p className="font-bold text-2xl tracking-tight leading-tight">Data-driven.<br />Human-centric.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
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
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Career Journey</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">20 years. One clear direction.</h2>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="flex gap-8 py-8 border-b border-border last:border-0"
              >
                <div className="w-32 flex-shrink-0">
                  <span className="font-mono text-xs text-muted-foreground">{t.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-2">{t.role}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-32 bg-secondary text-foreground text-center relative overflow-hidden">
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
              <a href="mailto:saphr.abdul@gmail.com?subject=Consultation%20Request%20—%20HR%20Digital%20Transformation&body=Hi%20Abdul%2C%0A%0AI%27d%20like%20to%20schedule%20a%20discovery%20call%20to%20discuss%20our%20HR%20transformation%20roadmap.%0A%0AOrganization%3A%20%0AKey%20challenge%3A%20%0APreferred%20time%3A%20%0A%0AThank%20you">
                <Button size="lg" variant="default" className="rounded-none h-16 px-10 text-lg shadow-xl hover:shadow-2xl transition-all">
                  Book a Consultation
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "mailto:saphr.abdul@gmail.com"}
                className="rounded-none h-16 px-10 text-lg border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent transition-all"
              >
                saphr.abdul@gmail.com <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
