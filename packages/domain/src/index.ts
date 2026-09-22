export const creatyeProductLoop = [
  "create",
  "automate",
  "publish",
  "analyze",
  "optimize",
  "repeat"
] as const;

export type ProductLoopStage = (typeof creatyeProductLoop)[number];

export const studioJourney = ["select", "customize", "publish"] as const;
export const refinedStudioJourney = ["edit", "review", "publish-setup", "publish-or-schedule"] as const;
