import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Menu", id: "menu" },
    { name: "Reviews", id: "reviews" },
    { name: "Location", id: "location" },
    { name: "About", id: "about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Anchor className="w-6 h-6 text-primary" />
          </div>
          <span className={cn(
            "text-2xl font-bold font-display tracking-tight transition-colors",
            isScrolled ? "text-primary" : "text-white drop-shadow-md"
          )}>
            Prawn House
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("location")}
            className={cn(
              "rounded-full px-6 font-semibold shadow-lg transition-all hover:scale-105",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90 border-0"
            )}
          >
            Visit Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-medium text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button className="w-full rounded-full" onClick={() => scrollToSection("location")}>
              Visit Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
