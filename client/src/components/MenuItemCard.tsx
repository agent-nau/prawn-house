import { type MenuItem } from "@shared/schema";
import { Plus } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-border/50">
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground/30 font-display text-2xl">
            {item.category === "Seafood" ? "🦐" : "🍲"}
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
          {item.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-lg text-primary">From ₱250</span>
          <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all duration-300">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
