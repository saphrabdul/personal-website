import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight, Users, TrendingUp, BrainCircuit, Network, BookOpen, BarChart3, Briefcase, Zap } from "lucide-react";
import "./_group.css";

export function FloatCards() {
  const pills = [
    { icon: Users, label: "Recruitment", classes: "delay-1 top-[10%] left-[-10%]" },
    { icon: TrendingUp, label: "Performance", classes: "delay-2 top-[5%] right-[10%]" },
    { icon: BrainCircuit, label: "AI Analytics", classes: "delay-3 top-[30%] right-[-15%]" },
    { icon: Network, label: "HR Systems", classes: "delay-4 bottom-[25%] right-[-10%]" },
    { icon: BookOpen, label: "Learning & Dev", classes: "delay-5 bottom-[5%] right-[15%]" },
    { icon: BarChart3, label: "Reporting", classes: "delay-6 bottom-[10%] left-[-5%]" },
    { icon: Briefcase, label: "Workforce", classes: "delay-7 top-[45%] left-[-20%]" },
    { icon: Zap, label: "Automation", classes: "delay-8 top-[80%] left-[10%]" },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] bg-stone-50 overflow-hidden flex items-center pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-100/50 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-stone-200/50 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              Digital Transformation & HR Tech Advisor
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.1]">
              Connecting People, Process, and Technology with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">AI</span>.
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl">
              I help organizations bridge the gap between IT infrastructure and human capital, deploying AI and intelligent systems to transform how companies recruit, perform, and grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-stone-900 text-white hover:bg-stone-800 h-14 px-8 text-base rounded-full">
                Discuss Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-stone-200 text-stone-700 hover:bg-stone-100 h-14 px-8 text-base rounded-full">
                View Methodology
              </Button>
            </div>
          </div>

          {/* Right Column: Image & Floating Pills */}
          <div className="relative w-full max-w-[500px] mx-auto aspect-square lg:mt-0 mt-12">
            {/* The core image */}
            <div className="absolute inset-8 rounded-full bg-stone-100 shadow-xl overflow-hidden border border-stone-200 flex items-center justify-center">
              <img 
                src="/__mockup/images/hero-tech.png" 
                alt="HR Tech Network" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* The floating pills */}
            {pills.map((pill, idx) => (
              <div 
                key={idx} 
                className={`absolute float-card ${pill.classes}`}
              >
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-amber-100/50 text-stone-800 text-sm font-medium whitespace-nowrap">
                  <pill.icon className="h-4 w-4 text-amber-500" />
                  {pill.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
