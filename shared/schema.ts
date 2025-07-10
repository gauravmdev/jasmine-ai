import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  slug: text("slug").notNull().unique(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company"),
  quote: text("quote").notNull(),
  avatar: text("avatar"),
});

export const voicePersonas = pgTable("voice_personas", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  language: text("language").notNull(),
  tone: text("tone").notNull(),
  personality: text("personality").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export const insertVoicePersonaSchema = createInsertSchema(voicePersonas).omit({
  id: true,
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type VoicePersona = typeof voicePersonas.$inferSelect;
export type InsertVoicePersona = z.infer<typeof insertVoicePersonaSchema>;
