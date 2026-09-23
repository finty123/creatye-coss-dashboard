"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink, Instagram, MoreHorizontal, Plus, RefreshCw } from "lucide-react";
import { Button, IconButton } from "@creatye/ui";
import { connectedPages, type ConnectionStatus } from "@/lib/product-fixtures";
import { ConfirmActions, ProductDrawer, ProductEmpty, ProductModal, ProductNotice, ProductPage, ProductPagination, ProductTabs, SearchBox } from "@/components/product/product-ui";

const statusLabels: Record<ConnectionStatus, string> = { active: "Conectada", attention: "Requer atenção", inactive: "Inativa" };

function PageAvatar({ name, platform, color }: { name: string; platform: string; color: string }) {
  return <span className="connected-page-avatar" style={{ "--page-color": color } as React.CSSProperties}>{name.split(" ").map((part) => part[0]).slice(0, 2).join("")}<i>{platform === "Instagram" ? <Instagram size={9} /> : "f"}</i></span>;
}

export function PagesCalibration() {
  const [status, setStatus] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const [connectOpen, setConnectOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof connectedPages)[number] | null>(null);
  const [notice, setNotice] = useState("");
  const visible = useMemo(() => connectedPages.filter((item) => (status === "all" || item.status === status) && (platform === "all" || item.platform === platform) && `${item.name} ${item.handle}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : a.lastSync.localeCompare(b.lastSync)), [platform, query, sort, status]);
  const pages = Math.max(1, Math.ceil(visible.length / 5));
  const pageItems = visible.slice((page - 1) * 5, page * 5);
  const tabs = [{ id: "all", label: "Todas", count: connectedPages.length }, { id: "active", label: "Ativas", count: connectedPages.filter((item) => item.status === "active").length }, { id: "attention", label: "Atenção", count: connectedPages.filter((item) => item.status === "attention").length }, { id: "inactive", label: "Inativas", count: connectedPages.filter((item) => item.status === "inactive").length }];

  return <ProductPage eyebrow="Canais conectados" title="Páginas" description="Gerencie os canais que alimentam sua produção, suas automações e seus relatórios." actions={<><Button variant="quiet" onClick={() => setNotice("Permissões atualizadas com sucesso.")}><RefreshCw size={14} /> Atualizar permissões</Button><Button variant="primary" onClick={() => setConnectOpen(true)}><Plus size={14} /> Conectar página</Button></>}>
    <div className="product-stat-grid"><div className="product-stat"><span>Páginas ativas</span><strong>6</strong><small>2 plataformas conectadas</small></div><div className="product-stat"><span>Alcance combinado</span><strong>250 mil</strong><small>+12,8% nos últimos 30 dias</small></div><div className="product-stat"><span>Automações vinculadas</span><strong>19</strong><small>16 ativas neste momento</small></div><div className="product-stat"><span>Permissões</span><strong>7/9</strong><small>2 conexões exigem revisão</small></div></div>
    <div className="product-toolbar"><select aria-label="Filtrar plataforma" value={platform} onChange={(event) => { setPlatform(event.target.value); setPage(1); }} className="product-compact-select"><option value="all">Todas as plataformas</option><option>Instagram</option><option>Facebook</option></select><SearchBox value={query} onChange={(value) => { setQuery(value); setPage(1); }} placeholder="Pesquisar páginas" /><span className="product-toolbar-spacer" /><select aria-label="Ordenar páginas" value={sort} onChange={(event) => setSort(event.target.value)} className="product-compact-select"><option value="recent">Mais recentes</option><option value="name">Nome A–Z</option></select></div>
    <ProductTabs items={tabs} active={status} onChange={(value) => { setStatus(value); setPage(1); }} />
    {pageItems.length ? <div className="connected-pages-list">{pageItems.map((item) => <article key={item.id}><Link href={`/pages/${item.id}`}><PageAvatar name={item.name} platform={item.platform} color={item.color} /><span><strong>{item.name}</strong><small>{item.handle} · {item.platform}</small></span><span className="connected-page-detail"><strong>{item.followers}</strong><small>seguidores</small></span><span className="connected-page-detail"><strong>{item.automations}</strong><small>automações</small></span><span className="connected-page-detail"><strong>{item.lastSync}</strong><small>última sincronização</small></span><span className="product-status" data-status={item.status}>{statusLabels[item.status]}</span></Link><IconButton label={`Ações de ${item.name}`} size="sm" onClick={() => setSelected(item)}><MoreHorizontal size={15} /></IconButton></article>)}</div> : <ProductEmpty title="Nenhuma página encontrada" description="Ajuste a busca ou os filtros para voltar a visualizar suas conexões." action={<Button onClick={() => { setQuery(""); setStatus("all"); setPlatform("all"); }}>Limpar filtros</Button>} />}
    <ProductPagination page={Math.min(page, pages)} pages={pages} onChange={setPage} />
    {connectOpen ? <ProductModal title="Conectar uma página" description="Escolha a plataforma. A conexão real será integrada ao backend depois desta etapa visual." onClose={() => setConnectOpen(false)} footer={<ConfirmActions cancel="Cancelar" confirm="Continuar" onCancel={() => setConnectOpen(false)} onConfirm={() => { setConnectOpen(false); setNotice("Fluxo de conexão preparado para integração."); }} />}><button className="connection-option" type="button"><Instagram size={20} /><span><strong>Instagram</strong><small>Perfis profissionais e criadores</small></span><ChevronDown size={15} /></button><button className="connection-option" type="button"><b>f</b><span><strong>Facebook</strong><small>Páginas comerciais e comunidades</small></span><ChevronDown size={15} /></button><label className="product-check"><input type="checkbox" defaultChecked /> Sincronizar insights assim que a conexão for concluída</label></ProductModal> : null}
    {selected ? <ProductDrawer title={selected.name} subtitle={`${selected.handle} · ${selected.platform}`} onClose={() => setSelected(null)} footer={<><Button variant="quiet" onClick={() => setSelected(null)}>Fechar</Button><Button variant="primary" onClick={() => setNotice("Permissões revisadas.")}>Revisar acesso</Button></>}><div className="product-preview" style={{ "--preview": selected.color } as React.CSSProperties}><div className="product-preview-copy"><strong>{selected.name}</strong><span>{selected.followers} seguidores</span></div></div><div>{["Conteúdo", "Mensagens", "Comentários", "Insights"].map((permission) => <div className="product-kpi" key={permission}><span>{permission}</span><strong>Permitido</strong></div>)}</div><Link className="product-link-button" href={`/pages/${selected.id}`}>Abrir visão completa <ExternalLink size={13} /></Link></ProductDrawer> : null}
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </ProductPage>;
}
