export const creatyeThemes = ["light", "dark"] as const;
export type CreatyeTheme = (typeof creatyeThemes)[number];

export const densityModes = ["comfortable", "standard", "compact"] as const;
export type DensityMode = (typeof densityModes)[number];

export const controlSizes = ["sm", "md", "lg"] as const;
export type ControlSize = (typeof controlSizes)[number];

export const statusIntents = ["neutral", "success", "warning", "danger", "info", "brand"] as const;
export type StatusIntent = (typeof statusIntents)[number];

export const creatyeBreakpoints = {
  mobile: 720,
  tablet: 900,
  halfWide: 1180,
  desktop: 1440,
  ultrawide: 1920
} as const;

export const creatyeDurations = {
  instant: 80,
  fast: 140,
  standard: 200,
  deliberate: 320
} as const;

export const creatyeIconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
} as const;

export const creatyeSemanticTokens = [
  "background",
  "canvas",
  "surface",
  "surface-raised",
  "surface-muted",
  "surface-selected",
  "foreground",
  "foreground-secondary",
  "foreground-muted",
  "border",
  "border-strong",
  "primary",
  "accent",
  "success",
  "warning",
  "danger",
  "overlay",
  "focus-ring"
] as const;

export type CreatyeSemanticToken = (typeof creatyeSemanticTokens)[number];
