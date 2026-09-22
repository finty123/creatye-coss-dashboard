import { createLogger } from "@creatye/observability";

const logger = createLogger({ service: "worker", environment: process.env.NODE_ENV ?? "development" });

logger.info("Creatye worker foundation ready", {
  queues: ["media", "publishing", "automation", "analytics", "ai"],
  mode: "foundation-only"
});
