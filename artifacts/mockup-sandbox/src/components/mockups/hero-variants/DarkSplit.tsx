import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "./_group.css";

export function DarkSplit() {
  return (
    <section className="w-full min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 bg-[#0d1117] text-slate-200 overflow-hidden font-sans">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20 lg:py-0 relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Digital Transformation Advisor
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Connecting People, Process, and Technology <span className="text-amber-500 italic">with AI.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
            I help organizations bridge the gap between IT infrastructure and human capital, deploying AI and intelligent systems to transform how companies recruit, perform, and grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold border-0 h-14 px-8 text-base rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              Discuss Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 text-base rounded-full bg-transparent">
              View Methodology
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white mb-1">6+</span>
              <span className="text-sm text-slate-500">Years Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white mb-1">15+</span>
              <span className="text-sm text-slate-500">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-sm text-slate-500">Commitment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Visual */}
      <div className="relative hidden lg:flex items-center justify-center bg-[#131923] p-12 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        
        {/* Abstract Grid/Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50"></div>

        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center dark-split-spin">
            <img 
              src="/__mockup/images/hero-tech.png" 
              alt="HR Tech Network" 
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(245,158,11,0.15)] dark-split-pulse"
            />
        </div>
      </div>
    </section>
  );
}
