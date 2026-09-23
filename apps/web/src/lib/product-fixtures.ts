export type ConnectionStatus = "active" | "attention" | "inactive";
export type PublishingStatus = "draft" | "scheduled" | "publishing" | "published" | "failed";

export interface ConnectedPage {
  id: string;
  name: string;
  handle: string;
  platform: "Instagram" | "Facebook";
  status: ConnectionStatus;
  followers: string;
  automations: number;
  lastSync: string;
  color: string;
}

export interface TemplateFixture {
  id: string;
  name: string;
  category: "Reels" | "Stories" | "Carrossel" | "Ads";
  format: string;
  duration: string;
  uses: string;
  favorite: boolean;
  tone: string;
}

export interface StudioProject {
  id: string;
  name: string;
  type: "Vídeo" | "Imagem";
  format: string;
  status: PublishingStatus;
  updated: string;
  destination: string;
  tone: string;
}

export interface AutomationFixture {
  id: string;
  name: string;
  page: string;
  trigger: string;
  action: string;
  status: "active" | "paused" | "attention";
  executions: number;
  conversion: string;
  updated: string;
}

export interface PublishingFixture {
  id: string;
  title: string;
  page: string;
  channel: string;
  date: string;
  time: string;
  status: PublishingStatus;
  type: string;
}

export const connectedPages: readonly ConnectedPage[] = [
  { id: "creatye-brasil", name: "Creatye Brasil", handle: "@creatyebrasil", platform: "Instagram", status: "active", followers: "82,4 mil", automations: 4, lastSync: "Agora", color: "#c8b4a6" },
  { id: "academy-launch", name: "Academy Launch", handle: "@academy.launch", platform: "Instagram", status: "attention", followers: "31,8 mil", automations: 2, lastSync: "Há 18 min", color: "#9eb2bf" },
  { id: "creator-hub", name: "Creator Hub", handle: "Creator Hub Brasil", platform: "Facebook", status: "active", followers: "19,2 mil", automations: 3, lastSync: "Há 4 min", color: "#a7b39d" },
  { id: "studio-vertice", name: "Studio Vértice", handle: "@studiovertice", platform: "Instagram", status: "inactive", followers: "12,6 mil", automations: 0, lastSync: "Há 8 dias", color: "#b6a9bd" },
  { id: "movimento-leve", name: "Movimento Leve", handle: "@movimentoleve", platform: "Instagram", status: "active", followers: "46,1 mil", automations: 1, lastSync: "Há 12 min", color: "#c2b79d" },
  { id: "nexo-business", name: "Nexo Business", handle: "Nexo Business", platform: "Facebook", status: "active", followers: "8,9 mil", automations: 2, lastSync: "Há 32 min", color: "#9faeb6" },
  { id: "clube-aurora", name: "Clube Aurora", handle: "@clubeaurora", platform: "Instagram", status: "attention", followers: "27,3 mil", automations: 1, lastSync: "Há 2 h", color: "#c1a7aa" },
  { id: "casa-norte", name: "Casa Norte", handle: "@casanorte", platform: "Instagram", status: "active", followers: "15,7 mil", automations: 3, lastSync: "Há 7 min", color: "#aeb7a5" },
  { id: "pulse-lab", name: "Pulse Lab", handle: "Pulse Lab", platform: "Facebook", status: "inactive", followers: "6,4 mil", automations: 0, lastSync: "Há 21 dias", color: "#b4afbe" }
];

export const templateFixtures: readonly TemplateFixture[] = [
  { id: "hook-editorial", name: "Hook editorial", category: "Reels", format: "9:16", duration: "18 s", uses: "2,4 mil", favorite: true, tone: "peach" },
  { id: "product-story", name: "Product story", category: "Stories", format: "9:16", duration: "12 s", uses: "1,8 mil", favorite: false, tone: "blue" },
  { id: "weekly-recap", name: "Weekly recap", category: "Carrossel", format: "4:5", duration: "8 telas", uses: "938", favorite: true, tone: "sage" },
  { id: "clean-launch", name: "Clean launch", category: "Ads", format: "1:1", duration: "15 s", uses: "1,2 mil", favorite: false, tone: "sand" },
  { id: "creator-notes", name: "Creator notes", category: "Reels", format: "9:16", duration: "24 s", uses: "764", favorite: false, tone: "lilac" },
  { id: "before-after", name: "Before & after", category: "Stories", format: "9:16", duration: "10 s", uses: "2,1 mil", favorite: true, tone: "rose" },
  { id: "insight-cards", name: "Insight cards", category: "Carrossel", format: "4:5", duration: "6 telas", uses: "583", favorite: false, tone: "graphite" },
  { id: "direct-response", name: "Direct response", category: "Ads", format: "1:1", duration: "20 s", uses: "1,5 mil", favorite: false, tone: "amber" },
  { id: "mini-documentary", name: "Mini documentary", category: "Reels", format: "9:16", duration: "45 s", uses: "649", favorite: true, tone: "ocean" },
  { id: "question-box", name: "Question box", category: "Stories", format: "9:16", duration: "3 telas", uses: "891", favorite: false, tone: "mint" },
  { id: "case-study", name: "Case study", category: "Carrossel", format: "4:5", duration: "10 telas", uses: "432", favorite: false, tone: "clay" },
  { id: "offer-countdown", name: "Offer countdown", category: "Ads", format: "9:16", duration: "9 s", uses: "1,1 mil", favorite: true, tone: "violet" }
];

export const studioProjects: readonly StudioProject[] = [
  { id: "launch-manifesto", name: "Manifesto de lançamento", type: "Vídeo", format: "9:16", status: "draft", updated: "Há 8 min", destination: "Creatye Brasil", tone: "blue" },
  { id: "three-hidden-spots", name: "Três pontos escondidos", type: "Vídeo", format: "9:16", status: "published", updated: "Hoje, 10:42", destination: "Creator Hub", tone: "peach" },
  { id: "academy-opening", name: "Abertura Academy", type: "Vídeo", format: "1:1", status: "scheduled", updated: "Hoje, 09:18", destination: "Academy Launch", tone: "violet" },
  { id: "weekly-numbers", name: "Números da semana", type: "Imagem", format: "4:5", status: "draft", updated: "Ontem", destination: "Nexo Business", tone: "sage" },
  { id: "summer-offer", name: "Oferta de verão", type: "Imagem", format: "1:1", status: "failed", updated: "Ontem", destination: "Clube Aurora", tone: "rose" },
  { id: "behind-scenes", name: "Bastidores do estúdio", type: "Vídeo", format: "9:16", status: "publishing", updated: "Há 1 min", destination: "Studio Vértice", tone: "sand" }
];

export const automationFixtures: readonly AutomationFixture[] = [
  { id: "comment-keyword", name: "Comentário para DM", page: "Creatye Brasil", trigger: "Comentário contém palavra-chave", action: "Enviar sequência personalizada", status: "active", executions: 1284, conversion: "42,8%", updated: "Há 8 min" },
  { id: "lead-qualification", name: "Qualificação de lead", page: "Academy Launch", trigger: "Formulário enviado", action: "Classificar e atribuir lead", status: "attention", executions: 386, conversion: "31,2%", updated: "Há 18 min" },
  { id: "weekly-repurpose", name: "Reaproveitamento semanal", page: "Creator Hub", trigger: "Lote de conteúdo aprovado", action: "Criar três variações", status: "active", executions: 92, conversion: "68,5%", updated: "Amanhã, 09:00" },
  { id: "welcome-sequence", name: "Sequência de boas-vindas", page: "Movimento Leve", trigger: "Novo seguidor qualificado", action: "Enviar mensagem e aplicar tag", status: "paused", executions: 719, conversion: "37,4%", updated: "Ontem" },
  { id: "story-reply", name: "Resposta de story", page: "Casa Norte", trigger: "Resposta contém interesse", action: "Enviar catálogo", status: "active", executions: 541, conversion: "51,7%", updated: "Há 24 min" },
  { id: "event-reminder", name: "Lembrete de evento", page: "Nexo Business", trigger: "Inscrição confirmada", action: "Aguardar e lembrar", status: "active", executions: 203, conversion: "76,1%", updated: "Há 1 h" }
];

export const publishingFixtures: readonly PublishingFixture[] = [
  { id: "pub-1", title: "Três sinais que seu conteúdo está pronto", page: "Creatye Brasil", channel: "Instagram", date: "22 set", time: "18:30", status: "scheduled", type: "Reel" },
  { id: "pub-2", title: "Checklist da campanha", page: "Academy Launch", channel: "Instagram", date: "23 set", time: "09:00", status: "scheduled", type: "Carrossel" },
  { id: "pub-3", title: "Bastidores do processo", page: "Creator Hub", channel: "Facebook", date: "23 set", time: "14:00", status: "draft", type: "Vídeo" },
  { id: "pub-4", title: "Ritual de segunda-feira", page: "Movimento Leve", channel: "Instagram", date: "24 set", time: "08:15", status: "published", type: "Reel" },
  { id: "pub-5", title: "Oferta de verão", page: "Clube Aurora", channel: "Instagram", date: "24 set", time: "19:20", status: "failed", type: "Imagem" },
  { id: "pub-6", title: "Radar de tendências", page: "Nexo Business", channel: "Facebook", date: "25 set", time: "11:00", status: "publishing", type: "Carrossel" }
];

export const analyticsSeries = [44, 58, 52, 71, 66, 83, 78, 96, 91, 112, 106, 128] as const;

export const activityLog = [
  { time: "10:42:18", title: "Mensagem entregue", detail: "Comentário para DM · @marina.souza", status: "success" },
  { time: "10:41:53", title: "Condição validada", detail: "Palavra-chave: QUERO", status: "success" },
  { time: "10:40:09", title: "Execução aguardando", detail: "Follow-up em 2 horas", status: "waiting" },
  { time: "10:32:44", title: "Falha de provedor", detail: "Tentativa 3 de 3 · resposta indisponível", status: "error" },
  { time: "10:28:11", title: "Tag aplicada", detail: "lead_interessado · @joaopedro", status: "success" }
] as const;
