import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // e.g., "Seafood", "Filipino Favorites"
  imageUrl: text("image_url"),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rating: integer("rating").notNull(), // 1-5
  comment: text("comment").notNull(),
  date: text("date").notNull(), // Keeping as string to match "4 months ago" style or actual date
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true });

export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
