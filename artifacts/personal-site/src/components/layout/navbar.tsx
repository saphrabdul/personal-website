import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "HR Lifecycle", href: "/lifecycle" },
  { label: "Approach", href: "/approach" },
  { label: "About Me", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                location === link.href || location.startsWith(link.href + "/")
                  ? "text-foreground font-semibold"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/about#contact">
            <Button variant="secondary" className="font-semibold px-6 rounded-none">
              Let's Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block py-2 text-sm font-medium transition-colors",
                location === link.href ? "text-secondary" : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/about#contact">
            <Button variant="secondary" size="sm" className="font-semibold rounded-none w-full mt-2">
              Let's Talk
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
