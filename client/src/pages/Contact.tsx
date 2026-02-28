import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { AppleMap } from "@/components/AppleMap";

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

          <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
            <AppleMap className="w-full h-full" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
