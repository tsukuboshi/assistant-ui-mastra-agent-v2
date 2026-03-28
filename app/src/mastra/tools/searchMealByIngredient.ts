import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { MEALDB_BASE_URL } from "./shared";

export const searchMealByIngredient = createTool({
  id: "search-meal-by-ingredient",
  description:
    "Search for meal recipes by ingredient using TheMealDB. Returns a list of meals that use the specified ingredient.",
  inputSchema: z.object({
    ingredient: z.string().describe("The ingredient to search for (e.g. 'chicken_breast', 'tomato')"),
  }),
  outputSchema: z.object({
    results: z.string(),
  }),
  execute: async ({ ingredient }) => {
    const res = await fetch(`${MEALDB_BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
    const data = await res.json();
    const meals: Array<{ idMeal: string; strMeal: string; strMealThumb: string }> = data.meals ?? [];

    if (meals.length === 0) {
      return { results: `No meals found with ingredient "${ingredient}".` };
    }

    const formatted = meals.map((m) => `- **${m.strMeal}** (ID: ${m.idMeal})\n  ${m.strMealThumb}`).join("\n");
    return { results: formatted };
  },
});
