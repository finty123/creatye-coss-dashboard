import type { FrameConfig } from "@jaxx/core";

/**
 * Whitelabel configuration for Creatye Studio.
 * Edit repos, docker containers, theme and quality thresholds to match
 * this project.
 */
const config = {
  project: {
    name: "Creatye Studio",
  },
  theme: {
    primaryColor: "#2563eb",
    borderRadius: "0.5rem",
  },
  repos: [
    {
      name: "main",
      path: ".",
      defaultBranch: "main",
    },
  ],
  docker: {
    containers: [],
  },
  ports: {
    dashboard: 3099,
  },
  quality: {
    enabled: true,
    maxComplexity: 10,
    maxDuplicationRatio: 0.05,
    exclude: [
      "**/*.test.ts",
      "**/*.spec.ts",
      "docs/design/references/**",
      "**/.next/**",
      "**/dist/**",
      "**/node_modules/**",
      "package-lock.json",
      "**/package.json",
      "**/tsconfig.json"
    ],
  },
} satisfies FrameConfig;

export default config;
