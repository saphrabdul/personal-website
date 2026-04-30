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
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-background/20 rounded flex items-center justify-center hover:bg-secondary hover:text-foreground hover:border-secondary transition-all text-sm font-bold"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-secondary mb-6">Explore</h4>
            <ul className="space-y-4 text-background/70">
              <li><Link href="/expertise" className="hover:text-secondary transition-colors">My Expertise</Link></li>
              <li><Link href="/lifecycle" className="hover:text-secondary transition-colors">HR Lifecycle</Link></li>
              <li><Link href="/approach" className="hover:text-secondary transition-colors">My Approach</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-secondary mb-6">Connect</h4>
            <ul className="space-y-4 text-background/70">
              <li>
                <Link href="/about#contact" className="hover:text-secondary transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-secondary transition-colors">
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} Abdul Haseeb Shaik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
