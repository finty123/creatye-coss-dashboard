"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { BarChart3, FileImage, Home, ImageIcon, LayoutTemplate, ListFilter, Menu, MonitorPlay, Search, Settings, Workflow, X } from "lucide-react";
import { IconButton } from "@creatye/ui";
import { automationFixtures, connectedPages, publishingFixtures, studioProjects, templateFixtures } from "@/lib/product-fixtures";
import { TopActionsMenu } from "./theme-settings-menu";

const destinations = [
  { label: "Dashboard", detail: "Visão geral da operação", href: "/", icon: Home },
  { label: "Páginas", detail: "Conexões e canais", href: "/pages", icon: FileImage },
  { label: "Automações", detail: "Fluxos e atividade", href: "/automations", icon: Workflow },
  { label: "Video Studio", detail: "Criar, revisar e publicar", href: "/studio?step=select", icon: MonitorPlay },
  { label: "Image Studio", detail: "Compor imagens e variações", href: "/image-studio", icon: ImageIcon },
  { label: "Templates", detail: "Modelos reutilizáveis", href: "/templates", icon: LayoutTemplate },
  { label: "Publicações", detail: "Calendário e fila", href: "/publishing", icon: FileImage },
  { label: "Analytics", detail: "Desempenho e insights", href: "/analytics", icon: BarChart3 },
  { label: "Configurações", detail: "Workspace e preferências", href: "/settings", icon: Settings }
] as const;

type SearchItem = { label: string; detail: string; href: string; icon: LucideIcon };

function contextualItems(pathname: string): { label: string; items: SearchItem[] } {
  if (pathname.startsWith("/pages")) return { label: "Páginas", items: connectedPages.map((item) => ({ label: item.name, detail: `${item.handle} · ${item.platform}`, href: `/pages/${item.id}`, icon: FileImage })) };
  if (pathname.startsWith("/automations")) return { label: "Automações", items: automationFixtures.map((item) => ({ label: item.name, detail: `${item.page} · ${item.trigger}`, href: `/automations/${item.id}`, icon: Workflow })) };
  if (pathname.startsWith("/templates")) return { label: "Templates", items: templateFixtures.map((item) => ({ label: item.name, detail: `${item.category} · ${item.format}`, href: "/templates", icon: LayoutTemplate })) };
  if (pathname.startsWith("/publishing")) return { label: "Agendamentos", items: publishingFixtures.map((item) => ({ label: item.title, detail: `${item.page} · ${item.date}, ${item.time}`, href: "/publishing", icon: FileImage })) };
  if (pathname.startsWith("/studio")) return { label: "Video Studio", items: studioProjects.map((item) => ({ label: item.name, detail: `${item.status} · ${item.destination}`, href: "/studio?step=history", icon: MonitorPlay })) };
  if (pathname.startsWith("/image-studio")) return { label: "Image Studio", items: templateFixtures.map((item) => ({ label: item.name, detail: `${item.category} · ${item.format}`, href: "/image-studio", icon: ImageIcon })) };
  if (pathname.startsWith("/analytics")) return { label: "Analytics", items: connectedPages.map((item) => ({ label: item.name, detail: `${item.followers} seguidores · ${item.platform}`, href: "/analytics", icon: BarChart3 })) };
  return { label: "Dashboard", items: destinations.map((item) => ({ ...item })) };
}

export function GlobalSearchTrigger({ children }: { children: ReactNode }) {
  return <button className="cr-sidebar-item" type="button" aria-label="Pesquisa global" title="Pesquisa global" onClick={() => window.dispatchEvent(new CustomEvent("creatye:global-search"))}>{children}</button>;
}

type SearchMode = "context" | "global";

function SearchDialog({ mode, context, query, items, onQuery, onClose }: { mode: SearchMode; context: ReturnType<typeof contextualItems>; query: string; items: SearchItem[]; onQuery: (value: string) => void; onClose: () => void }) {
  const global = mode === "global";
  return <div className="shell-command-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="shell-command" role="dialog" aria-modal="true" aria-label={global ? "Pesquisa global do Creatye" : `Pesquisar em ${context.label}`}><header><Search size={17} /><input autoFocus value={query} onChange={(event) => onQuery(event.target.value)} placeholder={global ? "Pesquisar em todo o Creatye..." : `Pesquisar em ${context.label.toLowerCase()}...`} /><IconButton size="sm" label="Fechar" onClick={onClose}><X size={15} /></IconButton></header><span className="shell-command-scope">{global ? "Todo o sistema" : context.label}</span><div>{items.length ? items.map(({ label, detail, href, icon: Icon }, index) => <Link href={href} key={`${href}-${label}-${index}`} onClick={onClose}><Icon size={16} /><span><strong>{label}</strong><small>{detail}</small></span><kbd>↵</kbd></Link>) : <p>Nenhum resultado encontrado.</p>}</div></section></div>;
}

function MobileNavigation({ onClose }: { onClose: () => void }) {
  return <div className="shell-mobile-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><aside className="shell-mobile-menu"><header><span><strong>Creatye Studio</strong><small>Master workspace</small></span><IconButton label="Fechar" size="sm" onClick={onClose}><X size={16} /></IconButton></header><nav>{destinations.map(({ label, href, icon: Icon }) => <Link key={href} href={href} onClick={onClose}><Icon size={17} /><span>{label}</span></Link>)}</nav></aside></div>;
}

export function ApplicationShellControls() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<SearchMode>("context");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const context = useMemo(() => contextualItems(pathname), [pathname]);
  const source = searchMode === "global" ? destinations : context.items;
  const filtered = useMemo(() => source.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase())), [query, source]);

  function openSearch(mode: SearchMode) { setSearchMode(mode); setQuery(""); setSearchOpen(true); }

  useEffect(() => {
    const openGlobal = () => openSearch("global");
    const shortcut = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openGlobal(); } };
    window.addEventListener("creatye:global-search", openGlobal);
    window.addEventListener("keydown", shortcut);
    return () => { window.removeEventListener("creatye:global-search", openGlobal); window.removeEventListener("keydown", shortcut); };
  }, []);

  return <>
    <header className="luma-top-controls"><IconButton label="Abrir navegação" className="luma-mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={17} /></IconButton><IconButton label={`Pesquisar em ${context.label}`} onClick={() => openSearch("context")}><Search size={16} strokeWidth={1.7} /></IconButton><IconButton label={`Filtrar ${context.label}`} onClick={() => openSearch("context")}><ListFilter size={16} strokeWidth={1.7} /></IconButton><TopActionsMenu /></header>
    {searchOpen ? <SearchDialog mode={searchMode} context={context} query={query} items={filtered} onQuery={setQuery} onClose={() => setSearchOpen(false)} /> : null}
    {mobileOpen ? <MobileNavigation onClose={() => setMobileOpen(false)} /> : null}
  </>;
}
