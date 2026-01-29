import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Prawn House</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Serving the freshest Filipino seafood favorites with a stunning view of Macajalar Bay.
              Experience casual dining at its finest.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-accent transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/menu" className="hover:text-accent transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">
                  GHCG+6G8, Butuan–Cagayan de Oro–Iligan Rd, Opol, Misamis Oriental
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/90">+63 (0912) 345 6789</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-primary-foreground/90">
                  <p className="font-semibold text-white">Daily</p>
                  <p>10:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Prawn House Seafood Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
