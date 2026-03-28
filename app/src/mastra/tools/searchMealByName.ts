import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { MEALDB_BASE_URL, type Meal, formatMeal } from "./shared";

export const searchMealByName = createTool({
  id: "search-meal-by-name",
  description:
    "Search for meal recipes by name using TheMealDB. Returns matching recipes with details including ingredients and instructions.",
  inputSchema: z.object({
    name: z.string().describe("The meal name to search for (e.g. 'Arrabiata', 'Chicken')"),
  }),
  outputSchema: z.object({
    results: z.string(),
  }),
  execute: async ({ name }) => {
    const res = await fetch(`${MEALDB_BASE_URL}/search.php?s=${encodeURIComponent(name)}`);
    const data = await res.json();
    const meals: Meal[] = data.meals ?? [];

    if (meals.length === 0) {
      return { results: `No meals found for "${name}".` };
    }

    return { results: meals.map(formatMeal).join("\n\n---\n\n") };
  },
});
