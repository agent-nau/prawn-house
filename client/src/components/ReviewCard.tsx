import { Star, Quote } from "lucide-react";
import type { Review } from "@shared/schema";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/40 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative group h-full flex flex-col">
      <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={40} />
      </div>
      
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < review.rating ? "currentColor" : "none"} 
            className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic mb-6 flex-grow leading-relaxed">
        "{review.comment}"
      </p>
      
      <div className="mt-auto border-t border-border pt-4">
        <h4 className="font-bold text-foreground font-display text-lg">{review.name}</h4>
        <p className="text-sm text-muted-foreground">{review.date}</p>
      </div>
    </div>
  );
}
