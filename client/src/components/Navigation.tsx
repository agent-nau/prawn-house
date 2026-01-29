import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, UtensilsCrossed } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg text-white group-hover:bg-accent transition-colors">
              <UtensilsCrossed size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl md:text-2xl font-bold leading-none ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
                Prawn House
              </span>
              <span className={`text-xs uppercase tracking-widest font-medium ${isScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow-sm'}`}>
                Seafood Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                  location === link.href
                    ? "text-accent"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white drop-shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/menu"
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${
                 isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-current"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium p-2 rounded-md hover:bg-muted ${
                location === link.href ? "text-primary bg-primary/5" : "text-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/menu"
            className="w-full text-center px-6 py-3 rounded-xl font-bold bg-primary text-white shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
