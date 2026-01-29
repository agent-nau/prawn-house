import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, MapPin, Clock, ChefHat } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useMenu } from "@/hooks/use-menu";
import { useReviews } from "@/hooks/use-reviews";
import { MenuItemCard } from "@/components/MenuItemCard";
import { ReviewCard } from "@/components/ReviewCard";

export default function Home() {
  const { data: menuItems, isLoading: menuLoading } = useMenu();
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  // Filter highlights (e.g., just take the first 3 or specific ones)
  const highlights = menuItems?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Unsplash: scenic ocean restaurant view */}
          <img 
            src="https://images.unsplash.com/photo-1533640924469-22d99db6273d?q=80&w=2070&auto=format&fit=crop"
            alt="Prawn House View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-handwriting text-3xl md:text-5xl text-accent mb-4 block transform -rotate-2">
              Welcome to Opol
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              Prawn House
            </h1>
            <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Fresh Filipino seafood favorites served with stunning views of Macajalar Bay.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link 
                href="/menu"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                View Menu <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Info Cards */}
        <div className="absolute bottom-8 left-0 right-0 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.4/5 Rating</p>
                  <p className="text-xs text-muted-foreground">Based on 100+ Reviews</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Open Daily</p>
                  <p className="text-xs text-muted-foreground">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Bayside View</p>
                  <p className="text-xs text-muted-foreground">Opol, Misamis Oriental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10" />
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full -z-10" />
               {/* Unsplash: fresh seafood platter */}
               <img 
                 src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1600&auto=format&fit=crop" 
                 alt="Fresh Seafood Platter" 
                 className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] rotate-1 hover:rotate-0 transition-transform duration-500"
               />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Authentic Flavors by the Bay
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are more than just a restaurant; we are a destination. Prawn House offers a relaxing atmosphere where you can enjoy the fresh breeze of Macajalar Bay while indulging in our signature prawn dishes, crispy pata, and fresh ceviche.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <ChefHat className="text-primary mb-2" size={32} />
                  <h4 className="font-bold text-lg mb-1">Expert Chefs</h4>
                  <p className="text-sm text-muted-foreground">Masters of Filipino coastal cuisine.</p>
                </div>
                <div>
                  <UtensilsCrossed className="text-primary mb-2" size={32} />
                  <h4 className="font-bold text-lg mb-1">Fresh Ingredients</h4>
                  <p className="text-sm text-muted-foreground">Sourced daily from local fishermen.</p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/about" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 group">
                  Learn more about our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Favorites</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Menu Highlights</h2>
            <p className="text-muted-foreground text-lg">
              From our signature garlic butter prawns to our hearty beef dishes, every plate is prepared with love and the freshest ingredients.
            </p>
          </div>

          {menuLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white bg-texture-paper">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="w-full lg:w-1/3 text-center lg:text-left">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Loved by Locals & Travelers
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Don't just take our word for it. See what our guests have to say about their dining experience at Prawn House.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg">
                  <span className="font-bold text-2xl text-primary">4.4</span>
                  <div className="flex text-yellow-400">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} className="text-yellow-400/50" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">on Google Reviews</span>
                </div>
             </div>
             
             <div className="w-full lg:w-2/3">
                {reviewsLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                      <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews?.slice(0, 2).map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Location Teaser */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Unsplash: abstract water texture */}
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
          alt="Water Texture"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready for a Feast?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Visit us today at the Bayside. Perfect for family gatherings, romantic dinners, or a casual lunch with friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Directions
            </Link>
            <a 
              href="tel:+639123456789"
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300"
            >
              Call for Reservations
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
