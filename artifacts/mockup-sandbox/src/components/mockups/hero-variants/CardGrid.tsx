import { Button } from "@/components/ui/button"
import { Users, TrendingUp, BrainCircuit, Server, GraduationCap, Briefcase } from "lucide-react"

export function CardGrid() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-slate-50 overflow-hidden py-24 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/50 text-amber-700 font-medium text-sm mb-6 border border-amber-200/50">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Digital Transformation & HR Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Connecting People, Process, and Technology with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              I help organizations bridge the gap between IT infrastructure and human capital, creating seamless workflows that empower your workforce and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 bg-slate-900 text-white hover:bg-slate-800 rounded-full text-base shadow-lg shadow-slate-900/20">
                Discuss Your Transformation
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base border-slate-300 hover:bg-slate-100 text-slate-700">
                View Methodology
              </Button>
            </div>
          </div>

          {/* Right Column - Card Grid Composition */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-2xl mx-auto">
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full text-amber-500/30" style={{ zIndex: 0 }}>
              {/* Lines from center (50%, 50%) to the centers of the 6 outer cells */}
              <line x1="16.66%" y1="16.66%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite]" />
              <line x1="83.33%" y1="16.66%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
              <line x1="16.66%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite_1s]" />
              <line x1="83.33%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite_1.5s]" />
              <line x1="16.66%" y1="83.33%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite_2s]" />
              <line x1="83.33%" y1="83.33%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite_2.5s]" />
            </svg>

            {/* Grid */}
            <div className="relative z-10 w-full h-full grid grid-cols-3 grid-rows-3 gap-3 md:gap-6">
              {/* Row 1 */}
              <div className="flex items-center justify-center relative -bottom-4 md:-bottom-8 lg:-bottom-12">
                <HRCard icon={Users} title="Recruitment" desc="AI-driven candidate sourcing" />
              </div>
              <div className="flex items-center justify-center"></div>
              <div className="flex items-center justify-center relative -bottom-4 md:-bottom-8 lg:-bottom-12">
                <HRCard icon={TrendingUp} title="Performance" desc="Continuous feedback loops" />
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center relative -right-2 md:-right-4 lg:-right-8">
                <HRCard icon={BrainCircuit} title="AI Analytics" desc="Predictive talent insights" />
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="/__mockup/images/hero-tech.png" 
                  alt="HR Tech Network" 
                  className="w-full min-w-[120px] max-w-[160px] md:max-w-[200px] aspect-square object-cover rounded-full shadow-2xl border-4 md:border-8 border-white relative z-20"
                />
              </div>
              <div className="flex items-center justify-center relative -left-2 md:-left-4 lg:-left-8">
                <HRCard icon={Server} title="HR Systems" desc="Core system of record" />
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-center relative -top-4 md:-top-8 lg:-top-12">
                <HRCard icon={GraduationCap} title="Learning" desc="Personalized dev paths" />
              </div>
              <div className="flex items-center justify-center"></div>
              <div className="flex items-center justify-center relative -top-4 md:-top-8 lg:-top-12">
                <HRCard icon={Briefcase} title="Workforce" desc="Strategic talent planning" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HRCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 flex flex-col gap-1.5 md:gap-2 w-full max-w-[160px] text-center items-center group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 p-2 md:p-2.5 bg-slate-50 rounded-lg text-slate-600 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300 shadow-sm border border-slate-100 group-hover:border-amber-200">
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      <div className="relative z-10 mt-1 md:mt-2">
        <h3 className="font-semibold text-[11px] md:text-sm text-slate-900 mb-0.5 md:mb-1">{title}</h3>
        <p className="text-[9px] md:text-xs text-slate-500 leading-tight">{desc}</p>
      </div>
    </div>
  )
}
