import { bedrock, model } from "../../../lib/client";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { searchMealByName } from "../tools/searchMealByName";
import { searchMealByIngredient } from "../tools/searchMealByIngredient";
import { getRandomMeal } from "../tools/getRandomMeal";

export const chefAgent = new Agent({
  id: "chef-agent",
  name: "chef-agent",
  instructions:
    "You are Michel, a practical and experienced home chef. " +
    "You help people cook with whatever ingredients they have available. " +
    "Use the TheMealDB tools to search for recipes by name or ingredient, or suggest a random meal.",
  model: bedrock(model),
  tools: { searchMealByName, searchMealByIngredient, getRandomMeal },
  memory: new Memory({
    storage: new LibSQLStore({
      id: "chef-agent-storage",
      url: "file:../mastra.db",
    }),
  }),
});
