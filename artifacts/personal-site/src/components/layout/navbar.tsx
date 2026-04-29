import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-foreground group-hover:bg-secondary transition-colors rounded-sm flex items-center justify-center">
            <span className="text-background font-mono font-bold text-lg leading-none pt-0.5">A</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            Abdul Haseeb <span className="text-muted-foreground font-normal">Shaik</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection("expertise")} className="text-foreground/70 hover:text-foreground transition-colors">Expertise</button>
          <button onClick={() => scrollToSection("hire-to-retire")} className="text-foreground/70 hover:text-foreground transition-colors">HR Lifecycle</button>
          <button onClick={() => scrollToSection("approach")} className="text-foreground/70 hover:text-foreground transition-colors">Approach</button>
          <button onClick={() => scrollToSection("about")} className="text-foreground/70 hover:text-foreground transition-colors">About</button>
          <Button onClick={() => scrollToSection("contact")} variant="secondary" className="font-semibold px-6 rounded-none">
            Let's Talk
          </Button>
        </nav>

        <div className="md:hidden">
           <Button onClick={() => scrollToSection("contact")} variant="secondary" size="sm" className="font-semibold rounded-none">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
