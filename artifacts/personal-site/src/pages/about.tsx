import { motion } from "framer-motion";
import { LineChart, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import aboutOffice from "@/assets/hero-tech.png";
import abdulProfile from "@/assets/abdul-profile.png";

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
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-3 flex justify-center md:justify-start"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={abdulProfile}
                  alt="Abdul Haseeb Shaik"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-9"
            >
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
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] bg-[#050a18] relative"
              >
                <img
                  src={aboutOffice}
                  alt="Digital AI systems"
                  className="w-full h-full object-contain"
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

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-secondary" />
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-secondary">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to modernize your HR infrastructure?
              </h2>
              <p className="text-background/60 text-lg leading-relaxed mb-8">
                Whether you need to fix one stage or redesign the entire employee journey — send a message and I'll get back to you personally.
              </p>
              <ul className="space-y-3 text-background/70 text-sm">
                {[
                  "No obligation discovery call",
                  "Response within 24 hours",
                  "20+ years of HR transformation expertise",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-secondary/30 bg-secondary/10 p-10 flex flex-col items-center text-center gap-4">
        <CheckCircle2 className="w-12 h-12 text-secondary" />
        <h3 className="text-xl font-bold text-background">Message sent!</h3>
        <p className="text-background/60">Thank you for reaching out. I'll be in touch within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-secondary underline underline-offset-2 mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls = "w-full bg-background/5 border border-background/20 text-background placeholder:text-background/30 px-4 py-3 focus:outline-none focus:border-secondary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-background/40 mb-2">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-background/40 mb-2">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-background/40 mb-2">Company</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Organization name (optional)"
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-background/40 mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your HR transformation challenge..."
          required
          rows={5}
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        size="lg"
        className="w-full rounded-none h-14 font-semibold text-base disabled:opacity-60"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
        ) : (
          <>Send Message <ArrowRight className="ml-2 w-5 h-5" /></>
        )}
      </Button>

      <p className="text-xs text-background/30 text-center">Your information is kept strictly private.</p>
    </form>
  );
}
