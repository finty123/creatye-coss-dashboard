import type { CreatyeStatus } from "@creatye/shared";

export interface AttentionItem {
  title: string;
  detail: string;
  intent: "danger" | "warning" | "info";
}

export interface ActivityItem {
  title: string;
  meta: string;
  status: CreatyeStatus;
}

export interface AutomationItem {
  name: string;
  page: string;
  trigger: string;
  activity: string;
  status: CreatyeStatus;
  errors: number;
}

export interface MediaFixture {
  title: string;
  meta: string;
  tone: "warm" | "cool" | "neutral";
}

export const attentionItems: readonly AttentionItem[] = [
  { title: "Instagram token expires soon", detail: "Refresh connection for Creatye Brasil before Friday.", intent: "warning" },
  { title: "Two scheduled posts need review", detail: "Captions are ready; destinations need approval.", intent: "info" },
  { title: "Automation paused after provider error", detail: "Lead reply flow stopped after three retry attempts.", intent: "danger" }
];

export const activityItems: readonly ActivityItem[] = [
  { title: "Video variant rendered", meta: "Sara Novo template · 12 min ago", status: "healthy" },
  { title: "Post scheduled", meta: "Creatye Brasil · Today 18:30", status: "scheduled" },
  { title: "Automation completed", meta: "Comment to DM · 42 executions", status: "published" }
];

export const automations: readonly AutomationItem[] = [
  {
    name: "Comment keyword to DM",
    page: "Creatye Brasil",
    trigger: "New comment contains keyword",
    activity: "42 executions today · last run 8 min ago",
    status: "healthy",
    errors: 0
  },
  {
    name: "New lead qualification",
    page: "Academy Launch",
    trigger: "Form submitted",
    activity: "18 executions today · 2 waiting for follow-up",
    status: "attention",
    errors: 1
  },
  {
    name: "Weekly content repurpose",
    page: "Creator Hub",
    trigger: "Monday content batch ready",
    activity: "Next run tomorrow 09:00",
    status: "scheduled",
    errors: 0
  }
];

export const mediaFixtures: readonly MediaFixture[] = [
  { title: "Sara Novo", meta: "9:16 · 3.8 MB · Base", tone: "warm" },
  { title: "Cecilia Novo", meta: "9:16 · 3.8 MB · Page", tone: "cool" },
  { title: "Xanaina Novo", meta: "9:16 · 3.2 MB · Variant", tone: "neutral" }
];
