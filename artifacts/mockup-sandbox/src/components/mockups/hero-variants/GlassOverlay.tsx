import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function GlassOverlay() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/hero-tech.png"
          alt="HR Tech Network"
          className="w-full h-full object-cover object-right opacity-60 mix-blend-screen"
        />
        {/* Subtle gradient overlay to darken the overall background slightly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Glass Panel - Left side */}
          <div className="lg:col-span-5 relative">
            {/* The Glass Card */}
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Optional ambient glow inside the card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-200 tracking-wider uppercase">Digital Transformation Advisor</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Connecting People, Process, and Technology{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  with AI.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
                I help organizations bridge the gap between IT infrastructure and
                human capital, deploying AI and intelligent systems to transform
                how companies recruit, perform, and grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-full h-14 px-8 text-base shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] transition-all hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5"
                >
                  Discuss Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
                >
                  View Methodology
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          {/* Right side is empty to let the image show through clearly */}
          <div className="lg:col-span-7 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
