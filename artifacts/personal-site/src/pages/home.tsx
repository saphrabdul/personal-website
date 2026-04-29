import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Activity, LineChart, Network, CheckCircle2, UserPlus, Users, GraduationCap, Target, BadgeDollarSign, HeartHandshake, LogOut } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import aboutOffice from "@/assets/about-office.png";
import servicesAbstract from "@/assets/services-abstract.png";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1.5 } },
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 z-10"></div>
          <img 
            src={heroBg} 
            alt="Abstract background" 
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={STAGGER_CONTAINER}
            className="max-w-4xl"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-secondary"></div>
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
                Digital Transformation Advisor
              </span>
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-8"
            >
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                intelligent core
              </span><br/>
              of modern HR.
            </motion.h1>
            
            <motion.p 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-12 leading-relaxed"
            >
              I help organizations bridge the gap between IT infrastructure and human capital, deploying AI and intelligent systems to transform how companies recruit, perform, and grow.
            </motion.p>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="rounded-none font-semibold text-base h-14 px-8">
                Discuss Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-none font-semibold text-base h-14 px-8 border-foreground/20 bg-background/50 backdrop-blur-sm">
                View Methodology
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROP STATS */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {[
              { label: "Years Experience", value: "20+" },
              { label: "Projects Globally", value: "50+" },
              { label: "Cost Reduction", value: "32%" },
              { label: "AI Implementations", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="py-12 md:py-16 px-4 md:px-8 text-center flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE / SERVICES */}
      <section id="expertise" className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-secondary"></div>
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Core Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Architecting the future of human capital operations.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right">
              Strategic consulting tailored for enterprise organizations looking to leverage the next generation of HR technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-8 h-8 text-secondary mb-6" />,
                title: "AI Integration for HR",
                desc: "Deploying predictive analytics, conversational AI, and automated screening workflows to optimize recruitment and performance management."
              },
              {
                icon: <Network className="w-8 h-8 text-secondary mb-6" />,
                title: "Digital Transformation",
                desc: "End-to-end strategic planning to move legacy HR operations into cloud-native, integrated, and agile ecosystems."
              },
              {
                icon: <Activity className="w-8 h-8 text-secondary mb-6" />,
                title: "HR Systems Architecture",
                desc: "Bridging the gap between IT and HR to select, architect, and implement Workday, SAP, or modern composable HR stacks."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-muted/40 p-10 border border-border group hover:border-secondary/50 transition-colors"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE TO RETIRE */}
      <section id="hire-to-retire" className="py-24 md:py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-secondary"></div>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Hire to Retire — End-to-End HR Transformation
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
              Transforming every stage of the employee lifecycle.
            </h2>
            <p className="text-muted-foreground max-w-md md:text-right">
              Most HR transformations stall because they focus on one process in isolation. Real impact comes from redesigning the entire employee journey — from the first job posting to the final exit interview — as one connected, intelligent system.
            </p>
          </div>

          {/* Timeline connector */}
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6 relative z-10">
              {[
                {
                  icon: <UserPlus className="w-6 h-6" />,
                  stage: "01",
                  title: "Attract & Brand",
                  desc: "Your employer brand is your first HR product. I help organizations craft a digital talent attraction strategy — smart job architecture, AI-assisted sourcing, and a candidate experience that makes the right people want to work for you."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  stage: "02",
                  title: "Recruit & Select",
                  desc: "I redesign selection processes around speed and quality — not volume. Structured assessments, intelligent screening tools, and digital offer workflows that cut time-to-hire without cutting corners on who you bring in."
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  stage: "03",
                  title: "Onboard & Induct",
                  desc: "The contract signature should be the start of the experience, not the end of the process. I build digital onboarding systems that deliver everything a new hire needs — access, context, and connection — before they walk through the door."
                },
                {
                  icon: <Activity className="w-6 h-6" />,
                  stage: "04",
                  title: "Learn & Develop",
                  desc: "I connect learning systems to actual business outcomes. That means competency-mapped LMS platforms, AI-personalized development paths, and skills frameworks that show employees exactly how to grow — and show the business who is ready to lead."
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  stage: "05",
                  title: "Perform & Reward",
                  desc: "Annual reviews are a symptom of broken systems. I implement continuous performance frameworks with real-time goal tracking, meaningful feedback cycles, and compensation structures that reward the right behaviors — automatically and fairly."
                },
                {
                  icon: <HeartHandshake className="w-6 h-6" />,
                  stage: "06",
                  title: "Retain & Engage",
                  desc: "By the time someone hands in their notice, you have already lost. I use predictive workforce analytics and digital engagement strategies to spot disengagement early, plan succession proactively, and build cultures people choose to stay in."
                },
                {
                  icon: <LogOut className="w-6 h-6" />,
                  stage: "07",
                  title: "Offboard & Transition",
                  desc: "Every exit carries institutional knowledge. I design structured offboarding processes that capture that knowledge, protect the organization, and maintain relationships — so departures become assets, not losses."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-none bg-background border-2 border-secondary text-secondary mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground mb-1">{item.stage}</span>
                  <h3 className="font-bold text-base text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-secondary"></div>
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Key Metrics I Help You Move
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { metric: "Time to Hire", desc: "How long it takes from a candidate's first interaction to an accepted offer — the clearest signal of how well your recruitment engine is running." },
                { metric: "Candidate Experience Score", desc: "How applicants feel about your process, whether they got the role or not. A poor experience damages your brand far beyond the individual hire." },
                { metric: "First-Year Turnover", desc: "Employees who leave within 12 months expose gaps in your hiring, onboarding, or culture — and cost you more than the original recruitment did." },
                { metric: "HR Self-Service Adoption", desc: "The percentage of routine HR tasks employees handle themselves. High adoption means less admin overhead and more time for strategic work." },
                { metric: "HR Cost per Employee", desc: "The true cost of running your HR function per head. Sustained reduction here is the most direct measure of successful digital transformation." }
              ].map((m, i) => (
                <div key={i} className="bg-background border border-border p-6">
                  <h4 className="font-bold text-sm text-foreground mb-2">{m.metric}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-secondary/30 bg-secondary/5 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to transform your HR lifecycle?</h3>
              <p className="text-muted-foreground max-w-xl">
                Whether you need to fix one broken stage or rebuild the entire employee journey, I will tell you exactly where your HR function is losing value — and how to get it back.
              </p>
            </div>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="secondary"
              size="lg"
              className="rounded-none font-semibold px-8 h-14 shrink-0"
            >
              Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* APPROACH / IMAGE BREAK */}
      <section id="approach" className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] border border-background/20 p-2"
            >
              <div className="w-full h-full overflow-hidden bg-background/5">
                <img 
                  src={servicesAbstract} 
                  alt="Data architecture visualization" 
                  className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                />
              </div>
            </motion.div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-secondary"></div>
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-secondary">
                  The Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Technology is the easy part. Adoption is where transformation happens.
              </h2>
              <div className="space-y-6 text-background/70 mb-12">
                <p className="text-lg">
                  Many organizations buy sophisticated HR software only to use 20% of its capabilities. I don't just architect systems; I architect the organizational change required to make them work.
                </p>
                <p>
                  My methodology bridges the traditional divide between IT (who owns the infrastructure) and HR (who owns the human experience), ensuring that intelligent tools like AI actually serve the people using them.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Stakeholder alignment & readiness assessment",
                  "Vendor selection & technology roadmapping",
                  "Data hygiene & migration strategy",
                  "Change management & adoption training"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-background/90">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PROFILE */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-secondary"></div>
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  The Advisor
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">
                Abdul Haseeb Shaik
              </h2>
              <div className="space-y-6 text-muted-foreground mb-8 text-lg">
                <p>
                  With over 20 years spanning IT architecture and HR application delivery, I bring a rare dual perspective: the technical precision to build enterprise systems and the domain depth to transform how organizations manage their people.
                </p>
                <p>
                  Across 50+ global projects, I have helped organizations reimagine their HR functions — implementing AI-powered recruitment, intelligent analytics, and end-to-end digital transformation strategies that deliver measurable results.
                </p>
              </div>
              <div className="font-mono text-sm uppercase tracking-wider text-foreground font-bold">
                <p className="mb-2">— 20+ Years in HR Technology & IT</p>
                <p>— 50+ Projects Delivered Globally</p>
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
                  alt="Modern office" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary p-8 hidden md:flex flex-col justify-end text-foreground shadow-2xl">
                  <LineChart className="w-12 h-12 mb-auto opacity-50" />
                  <p className="font-bold text-2xl tracking-tight leading-tight">Data-driven.<br/>Human-centric.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-32 bg-secondary text-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
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
              <Button size="lg" variant="default" className="rounded-none h-16 px-10 text-lg shadow-xl hover:shadow-2xl transition-all">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'mailto:saphr.abdul@gmail.com'} className="rounded-none h-16 px-10 text-lg border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent transition-all">
                saphr.abdul@gmail.com
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
