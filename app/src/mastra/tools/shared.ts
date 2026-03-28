import { z } from "zod";

export const MEALDB_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const mealSchema = z.object({
  idMeal: z.string(),
  strMeal: z.string(),
  strCategory: z.string().nullable(),
  strArea: z.string().nullable(),
  strInstructions: z.string().nullable(),
  strMealThumb: z.string().nullable(),
  strYoutube: z.string().nullable(),
});

export type Meal = z.infer<typeof mealSchema>;

export function formatMeal(meal: Meal): string {
  const lines = [`**${meal.strMeal}**`];
  if (meal.strCategory) lines.push(`Category: ${meal.strCategory}`);
  if (meal.strArea) lines.push(`Cuisine: ${meal.strArea}`);
  if (meal.strMealThumb) lines.push(`Image: ${meal.strMealThumb}`);
  if (meal.strYoutube) lines.push(`YouTube: ${meal.strYoutube}`);
  if (meal.strInstructions) lines.push(`\nInstructions:\n${meal.strInstructions}`);
  return lines.join("\n");
}
