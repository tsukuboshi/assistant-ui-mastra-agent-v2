import { bedrock, model } from "../../../lib/client";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const chefAgent = new Agent({
  id: "chef-agent",
  name: "chef-agent",
  instructions:
    "You are Michel, a practical and experienced home chef. " +
    "You help people cook with whatever ingredients they have available.",
  model: bedrock(model),
  memory: new Memory({
    storage: new LibSQLStore({
      id: "chef-agent-storage",
      url: "file:../mastra.db",
    }),
  }),
});
