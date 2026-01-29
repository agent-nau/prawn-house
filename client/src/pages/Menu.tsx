import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useMenu } from "@/hooks/use-menu";
import { MenuItemCard } from "@/components/MenuItemCard";
import { useState } from "react";

export default function MenuPage() {
  const { data: menuItems, isLoading } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Seafood", "Meat", "Favorites", "Drinks"];

  // Mock filtering since category field is simple text in schema
  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems?.filter(item => 
        item.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
        (activeCategory === "Meat" && (item.category.includes("Beef") || item.category.includes("Pork")))
      );

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg max-w-2xl mx-auto text-primary-foreground/90">
            A culinary journey through the flavors of the Philippines, featuring the freshest catch from the sea.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
             ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredItems?.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-xl">No items found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-primary font-bold hover:underline"
            >
              View all items
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
