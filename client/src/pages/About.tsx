import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Fish, Waves, Sun, Utensils } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-secondary text-foreground text-center px-4">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-primary">Our Story</h1>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          Bringing the freshest catch to your table since 2018.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
           <div className="order-2 md:order-1 space-y-6">
             <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">A Gem by the Bay</h2>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Nestled along the serene coast of Opol, Misamis Oriental, Prawn House started with a simple vision: to serve high-quality, fresh seafood in a relaxing, unpretentious atmosphere.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               What began as a small family eatery has grown into a beloved destination for both locals and travelers seeking the authentic taste of Filipino coastal cuisine. We believe that great food tastes even better when shared with loved ones by the sea.
             </p>
           </div>
           <div className="order-1 md:order-2 relative">
             <div className="absolute inset-0 border-4 border-accent rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
             {/* Unsplash: restaurant interior or exterior */}
             <img 
               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
               alt="Restaurant Interior"
               className="rounded-2xl shadow-xl w-full"
             />
           </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Fish size={32} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Freshness First</h3>
            <p className="text-muted-foreground">We source our seafood daily from local fishermen to ensure premium quality.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent text-center">
             <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Waves size={32} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Bayside Ambience</h3>
            <p className="text-muted-foreground">Dining with a view. Enjoy the cool breeze and calming sound of the waves.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
             <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Utensils size={32} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Authentic Taste</h3>
            <p className="text-muted-foreground">Traditional Filipino recipes passed down through generations.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent text-center">
             <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Sun size={32} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Warm Hospitality</h3>
            <p className="text-muted-foreground">We treat every guest like family with our signature Filipino service.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
