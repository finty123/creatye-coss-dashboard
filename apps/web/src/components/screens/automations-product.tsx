"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Copy, MoreHorizontal, Pause, Play, Plus, Workflow } from "lucide-react";
import { Button, IconButton } from "@creatye/ui";
import { automationFixtures, type AutomationFixture } from "@/lib/product-fixtures";
import { ConfirmActions, ProductEmpty, ProductModal, ProductNotice, ProductPage, ProductPagination, ProductTabs, SearchBox } from "@/components/product/product-ui";

function matchesAutomation(item: AutomationFixture, tab: string, paused: Set<string>, query: string) {
  const matchesQuery = `${item.name} ${item.page}`.toLowerCase().includes(query.toLowerCase());
  if (!matchesQuery) return false;
  if (tab === "all") return true;
  if (tab === "paused") return paused.has(item.id);
  if (tab === "active") return !paused.has(item.id) && item.status !== "attention";
  return item.status === tab;
}

function AutomationCard({ item, isPaused, onToggle }: { item: AutomationFixture; isPaused: boolean; onToggle: () => void }) {
  const status = isPaused ? "paused" : item.status;
  const label = isPaused ? "Pausada" : item.status === "attention" ? "Atenção" : "Ativa";
  return <article className="automation-product-card"><header><span className="automation-product-icon"><Workflow size={16} /></span><Link href={`/automations/${item.id}`}><strong>{item.name}</strong><small>{item.page}</small></Link><span className="product-status" data-status={status}>{label}</span><IconButton size="sm" label="Mais opções"><MoreHorizontal size={15} /></IconButton></header><Link className="automation-product-flow" href={`/automations/${item.id}/builder`}><span><small>Quando</small><strong>{item.trigger}</strong></span><b>→</b><span><small>Então</small><strong>{item.action}</strong></span></Link><footer><div><small>Atividade</small><strong>{item.executions.toLocaleString("pt-BR")} execuções</strong><span>{item.conversion} converteram · {item.updated}</span></div><IconButton label={isPaused ? "Ativar automação" : "Pausar automação"} size="sm" onClick={onToggle}>{isPaused ? <Play size={15} /> : <Pause size={15} />}</IconButton></footer></article>;
}

function AutomationCreateDialog({ open, onClose, onCreate }: { open: boolean; onClose: () => void; onCreate: () => void }) {
  if (!open) return null;
  return <ProductModal title="Nova automação" description="Comece em branco ou use uma estrutura pronta." onClose={onClose} footer={<ConfirmActions cancel="Cancelar" confirm="Criar fluxo" onCancel={onClose} onConfirm={onCreate} />}><button className="automation-start-option" type="button"><Plus size={17} /><span><strong>Fluxo em branco</strong><small>Defina o gatilho e cada ação.</small></span></button><button className="automation-start-option" type="button"><Copy size={17} /><span><strong>Usar um modelo</strong><small>Comece com uma estrutura testada.</small></span></button><label className="product-field">Nome<input placeholder="Ex.: Resposta de campanha" /></label></ProductModal>;
}

export function AutomationsProduct() {
  const [tab, setTab] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [createOpen, setCreateOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [paused, setPaused] = useState(() => new Set(automationFixtures.filter((item) => item.status === "paused").map((item) => item.id)));
  const visible = useMemo(() => automationFixtures.filter((item) => matchesAutomation(item, tab, paused, query)), [paused, query, tab]);
  const pages = Math.max(1, Math.ceil(visible.length / 4));
  const items = visible.slice((page - 1) * 4, page * 4);
  function togglePause(id: string) { setPaused((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }
  function createAutomation() { setCreateOpen(false); setNotice("Rascunho de automação criado."); }

  return <ProductPage eyebrow="Automação" title="Mantenha cada conversa em movimento" description="Crie, acompanhe e otimize fluxos em todos os canais conectados." actions={<Button variant="primary" onClick={() => setCreateOpen(true)}><Plus size={14} /> Nova automação</Button>}>
    <div className="product-stat-grid"><div className="product-stat"><span>Ativas</span><strong>12</strong><small>Todos os sistemas normais</small></div><div className="product-stat"><span>Execuções hoje</span><strong>1.284</strong><small>+14% desde ontem</small></div><div className="product-stat"><span>Precisam de atenção</span><strong>1</strong><small>Falha no provedor</small></div><div className="product-stat"><span>Taxa de sucesso</span><strong>98,7%</strong><small>Últimos 7 dias</small></div></div>
    <div className="product-toolbar"><SearchBox value={query} onChange={(value) => { setQuery(value); setPage(1); }} placeholder="Pesquisar automações" /><span className="product-toolbar-spacer" /><select className="product-compact-select" aria-label="Filtrar página"><option>Todas as páginas</option><option>Creatye Brasil</option><option>Academy Launch</option></select><select className="product-compact-select" aria-label="Ordenar"><option>Atualizadas recentemente</option><option>Mais execuções</option><option>Maior conversão</option></select></div>
    <ProductTabs items={[{ id: "all", label: "Todas", count: automationFixtures.length }, { id: "active", label: "Ativas" }, { id: "paused", label: "Pausadas" }, { id: "attention", label: "Atenção", count: 1 }]} active={tab} onChange={(value) => { setTab(value); setPage(1); }} />
    {items.length ? <section className="automation-product-grid">{items.map((item) => <AutomationCard key={item.id} item={item} isPaused={paused.has(item.id)} onToggle={() => togglePause(item.id)} />)}</section> : <ProductEmpty title="Nenhuma automação encontrada" description="Ajuste os filtros ou crie um novo fluxo para começar." action={<Button onClick={() => setCreateOpen(true)}>Criar automação</Button>} />}
    <ProductPagination page={Math.min(page, pages)} pages={pages} onChange={setPage} />
    <AutomationCreateDialog open={createOpen} onClose={() => setCreateOpen(false)} onCreate={createAutomation} />
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </ProductPage>;
}
