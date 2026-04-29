import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 bg-secondary transition-colors rounded-sm flex items-center justify-center">
                <span className="text-foreground font-mono font-bold text-lg leading-none pt-0.5">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Abdul Haseeb Shaik
              </span>
            </Link>
            <p className="text-background/60 max-w-sm mb-8 leading-relaxed">
              Transforming organizations through intelligent HR tech and AI integration. Building the future of human capital.
            </p>
            <div className="flex gap-4">
              {/* Placeholder socials */}
              <a href="#" className="w-10 h-10 border border-background/20 rounded flex items-center justify-center hover:bg-secondary hover:text-foreground hover:border-secondary transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 rounded flex items-center justify-center hover:bg-secondary hover:text-foreground hover:border-secondary transition-all">
                x
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-secondary mb-6">Expertise</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">AI for HR</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">System Integration</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">HR Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-secondary mb-6">Connect</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="mailto:saphr.abdul@gmail.com" className="hover:text-secondary transition-colors">saphr.abdul@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} Abdul Haseeb Shaik. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}