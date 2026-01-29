import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary text-white text-center px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Visit Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-primary-foreground/90">
          We'd love to serve you. Here's how to find us.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
             <h2 className="font-display text-3xl font-bold text-foreground">Contact Information</h2>
             
             <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md border border-border">
               <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                 <MapPin size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Address</h3>
                 <p className="text-muted-foreground">
                   GHCG+6G8, Butuan–Cagayan de Oro–Iligan Rd<br/>
                   Opol, Misamis Oriental, Philippines
                 </p>
               </div>
             </div>

             <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md border border-border">
               <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                 <Phone size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Phone</h3>
                 <p className="text-muted-foreground">+63 (0912) 345 6789</p>
                 <p className="text-xs text-muted-foreground mt-1">Available for reservations</p>
               </div>
             </div>

             <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md border border-border">
               <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                 <Clock size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                 <p className="text-muted-foreground">Monday - Sunday</p>
                 <p className="text-primary font-bold">10:00 AM - 10:00 PM</p>
               </div>
             </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
             {/* 
                In a real app, integrate Google Maps Embed API here.
                For now, using a static image of a map or placeholder.
             */}
             <div className="absolute inset-0 flex items-center justify-center bg-muted">
               <div className="text-center p-6">
                 <MapPin size={48} className="mx-auto text-primary mb-4" />
                 <h3 className="text-2xl font-display font-bold text-foreground">Located in Opol</h3>
                 <p className="text-muted-foreground">Just a short drive from Cagayan de Oro City</p>
               </div>
             </div>
             {/* Simulated Map Overlay */}
             <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
               <p className="font-bold text-sm">Prawn House</p>
               <p className="text-xs text-muted-foreground">Seafood Restaurant</p>
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xs text-primary font-bold mt-2 block hover:underline"
               >
                 View on Google Maps
               </a>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
