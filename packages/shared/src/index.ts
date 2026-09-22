export type ThemeMode = "light" | "dark";
export type Density = "comfortable" | "standard" | "compact";

export type CreatyeStatus = "healthy" | "attention" | "warning" | "failed" | "scheduled" | "published";

export interface WorkspaceContext {
  workspaceName: string;
  pageName: string;
}

export const defaultWorkspaceContext: WorkspaceContext = {
  workspaceName: "Creatye Studio",
  pageName: "All pages"
};
