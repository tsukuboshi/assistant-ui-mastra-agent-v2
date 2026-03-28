import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { MEALDB_BASE_URL, type Meal, formatMeal } from "./shared";

export const getRandomMeal = createTool({
  id: "get-random-meal",
  description: "Get a random meal recipe from TheMealDB. Useful for suggesting a meal when the user has no preference.",
  inputSchema: z.object({}),
  outputSchema: z.object({
    results: z.string(),
  }),
  execute: async () => {
    const res = await fetch(`${MEALDB_BASE_URL}/random.php`);
    const data = await res.json();
    const meals: Meal[] = data.meals ?? [];

    if (meals.length === 0) {
      return { results: "Could not fetch a random meal." };
    }

    return { results: formatMeal(meals[0]) };
  },
});
