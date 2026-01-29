import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize seed data
  await storage.seed();

  app.get(api.menu.list.path, async (_req, res) => {
    const menu = await storage.getMenuItems();
    res.json(menu);
  });

  app.get(api.reviews.list.path, async (_req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  return httpServer;
}
