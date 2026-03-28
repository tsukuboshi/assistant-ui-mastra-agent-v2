import { Mastra } from "@mastra/core";
import { chefAgent } from "./agents/chefAgent";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

export const mastra = new Mastra({
  agents: { chefAgent },
  storage: new LibSQLStore({
    id: "mastra-storage",
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
