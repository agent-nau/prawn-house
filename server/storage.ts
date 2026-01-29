import { db } from "./db";
import { menuItems, reviews, type InsertMenuItem, type InsertReview, type MenuItem, type Review } from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  getReviews(): Promise<Review[]>;
  seed(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    return await db.select().from(menuItems);
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async seed(): Promise<void> {
    const existingMenu = await this.getMenuItems();
    if (existingMenu.length === 0) {
      await db.insert(menuItems).values([
        {
          name: "Prawn Dishes",
          description: "Fresh, flavorful, and cooked to perfection in various styles (Butter Garlic, Chili, Sinigang).",
          category: "Seafood",
        },
        {
          name: "Crispy Pata",
          description: "A must-try Filipino delicacy. Deep-fried pork knuckle, crispy on the outside and tender on the inside.",
          category: "Filipino Favorites",
        },
        {
          name: "Ceviche (Kinilaw)",
          description: "Refreshing and zesty raw fish marinated in vinegar, citrus, and spices.",
          category: "Seafood",
        },
        {
          name: "Sinigang na Hipon",
          description: "Sour tamarind soup with fresh prawns and vegetables.",
          category: "Seafood",
        },
        {
          name: "Grilled Tuna Belly",
          description: "Juicy tuna belly grilled to perfection with soy-calamansi glaze.",
          category: "Seafood",
        }
      ]);
    }

    const existingReviews = await this.getReviews();
    if (existingReviews.length === 0) {
      await db.insert(reviews).values([
        {
          name: "Tennessee Tim",
          rating: 5,
          comment: "Wow!! I was quite surprised!! Didn’t plan on coming here … but so glad we did. The food is topnotch!!! What a way to celebrate our engagement.",
          date: "4 months ago"
        },
        {
          name: "Ryan Jose Ruiz III",
          rating: 4,
          comment: "Bayside restaurant with good views of Macajalar Bay. Serves mostly Filipino dishes. Affordable and good tasting. Mostly busy in dinner and less busy in lunch. With plenty of parking facilities.",
          date: "8 months ago"
        },
        {
          name: "Richard Glasner",
          rating: 3,
          comment: "Menu was limited and overpriced. Crab was more expensive compared to Palawan. Only one type of beer and no wines.",
          date: "9 months ago"
        },
        {
          name: "Maria Santos",
          rating: 5,
          comment: "Best sunset view in Opol! The Crispy Pata and Prawns are to die for. Perfect for family dinners.",
          date: "1 month ago"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
