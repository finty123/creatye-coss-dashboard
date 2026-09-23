"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BarChart3, FileImage, Home, ImageIcon, LayoutTemplate, ListFilter, Menu, MonitorPlay, Search, Settings, Workflow, X } from "lucide-react";
import { IconButton } from "@creatye/ui";
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

export function ApplicationShellControls() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => destinations.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <>
    <header className="luma-top-controls"><IconButton label="Abrir navegação" className="luma-mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={17} /></IconButton><IconButton label="Pesquisar" onClick={() => setSearchOpen(true)}><Search size={16} strokeWidth={1.7} /></IconButton><IconButton label="Abrir filtros" onClick={() => setSearchOpen(true)}><ListFilter size={16} strokeWidth={1.7} /></IconButton><TopActionsMenu /></header>
    {searchOpen ? <div className="shell-command-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}><section className="shell-command" role="dialog" aria-modal="true" aria-label="Pesquisar no Creatye"><header><Search size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar telas e ações..." /><IconButton size="sm" label="Fechar" onClick={() => setSearchOpen(false)}><X size={15} /></IconButton></header><div>{filtered.length ? filtered.map(({ label, detail, href, icon: Icon }) => <Link href={href} key={href} onClick={() => setSearchOpen(false)}><Icon size={16} /><span><strong>{label}</strong><small>{detail}</small></span><kbd>↵</kbd></Link>) : <p>Nenhum resultado encontrado.</p>}</div></section></div> : null}
    {mobileOpen ? <div className="shell-mobile-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setMobileOpen(false); }}><aside className="shell-mobile-menu"><header><span><strong>Creatye Studio</strong><small>Master workspace</small></span><IconButton label="Fechar" size="sm" onClick={() => setMobileOpen(false)}><X size={16} /></IconButton></header><nav>{destinations.map(({ label, href, icon: Icon }) => <Link key={href} href={href} onClick={() => setMobileOpen(false)}><Icon size={17} /><span>{label}</span></Link>)}</nav></aside></div> : null}
  </>;
}
