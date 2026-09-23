"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ExternalLink, RefreshCw, ShieldCheck } from "lucide-react";
import { Button, Switch } from "@creatye/ui";
import { automationFixtures, connectedPages, publishingFixtures, type AutomationFixture, type ConnectedPage, type PublishingFixture } from "@/lib/product-fixtures";
import { ProductNotice, ProductPage, ProductTabs } from "@/components/product/product-ui";

function PageOverview() {
  return <div className="product-split detail-tab"><section className="product-panel"><header><h2>Desempenho recente</h2><span className="product-muted">Últimos 30 dias</span></header><div className="product-panel-body"><div className="product-stat-grid"><div className="product-stat"><span>Alcance</span><strong>128 mil</strong><small>+18,4%</small></div><div className="product-stat"><span>Engajamento</span><strong>8,7%</strong><small>+1,6%</small></div><div className="product-stat"><span>Publicados</span><strong>24</strong><small>Este mês</small></div><div className="product-stat"><span>Conversões</span><strong>486</strong><small>+12,1%</small></div></div><div className="detail-mini-chart">{[42,58,49,70,64,82,76,91,84,104,96,118].map((value, index) => <i key={index} style={{ height: `${value / 1.3}%` }} />)}</div></div></section><aside className="product-panel"><header><h2>Próximas ações</h2></header><div className="product-panel-body">{["Revisar permissões em 12 dias", "Aprovar 2 publicações", "Otimizar automação com baixa conversão"].map((item) => <div className="product-kpi" key={item}><span>{item}</span><ExternalLink size={13} /></div>)}</div></aside></div>;
}

function PageContent({ publications }: { publications: readonly PublishingFixture[] }) {
  if (!publications.length) return <p className="product-muted detail-tab">Ainda não há publicações vinculadas.</p>;
  return <div className="product-list detail-tab">{publications.map((item) => <div className="product-row" key={item.id}><div><strong>{item.title}</strong><small>{item.type} · {item.channel}</small></div><span className="product-row-meta">{item.date}, {item.time}</span><span className="product-status" data-status={item.status}>{item.status}</span><Button size="sm">Abrir</Button></div>)}</div>;
}

function PageAutomations({ automations }: { automations: readonly AutomationFixture[] }) {
  if (!automations.length) return <p className="product-muted detail-tab">Nenhuma automação vinculada.</p>;
  return <div className="product-list detail-tab">{automations.map((item) => <Link className="product-row" href={`/automations/${item.id}`} key={item.id}><div><strong>{item.name}</strong><small>{item.trigger}</small></div><span className="product-row-meta">{item.executions} execuções</span><span className="product-status" data-status={item.status}>{item.status}</span><ExternalLink size={13} /></Link>)}</div>;
}

function Permissions() {
  return <section className="product-panel detail-tab"><header><h2>Escopos de acesso</h2><ShieldCheck size={16} /></header><div className="product-panel-body permission-list">{["Gerenciar conteúdo", "Responder mensagens", "Ler comentários", "Consultar insights", "Publicar mídia"].map((item) => <Switch key={item} label={item} defaultChecked />)}</div></section>;
}

function DetailTab({ tab, publications, automations }: { tab: string; publications: readonly PublishingFixture[]; automations: readonly AutomationFixture[] }) {
  if (tab === "content") return <PageContent publications={publications} />;
  if (tab === "automation") return <PageAutomations automations={automations} />;
  if (tab === "permissions") return <Permissions />;
  return <PageOverview />;
}

function connectionLabel(page: ConnectedPage) {
  if (page.status === "active") return "Conectada";
  if (page.status === "attention") return "Requer atenção";
  return "Inativa";
}

export function PageDetail({ pageId }: { pageId: string }) {
  const page = connectedPages.find((item) => item.id === pageId) ?? connectedPages[0]!;
  const [tab, setTab] = useState("overview");
  const [notice, setNotice] = useState("");
  const automations = automationFixtures.filter((item) => item.page === page.name);
  const publications = publishingFixtures.filter((item) => item.page === page.name);
  const health = page.status === "active" ? "98%" : "72%";
  return <ProductPage eyebrow="Página conectada" title={page.name} description={`${page.handle} · ${page.platform} · Sincronizada ${page.lastSync.toLowerCase()}`} actions={<><Link className="cr-button cr-button--quiet cr-control--md" href="/pages"><ArrowLeft size={14} /> Voltar</Link><Button onClick={() => setNotice("Sincronização concluída.")}><RefreshCw size={14} /> Sincronizar</Button></>}>
    <div className="page-detail-hero"><div className="page-detail-mark" style={{ "--page-color": page.color } as React.CSSProperties}>{page.name.slice(0, 1)}</div><div><span className="product-status" data-status={page.status}>{connectionLabel(page)}</span><h2>{page.followers} seguidores</h2><p>Canal disponível para conteúdo, automações e análise de desempenho.</p></div><div className="page-detail-score"><span>Saúde da conexão</span><strong>{health}</strong><small>Últimos 30 dias</small></div></div>
    <ProductTabs items={[{ id: "overview", label: "Visão geral" }, { id: "content", label: "Conteúdo", count: publications.length }, { id: "automation", label: "Automações", count: automations.length }, { id: "permissions", label: "Permissões" }]} active={tab} onChange={setTab} />
    <DetailTab tab={tab} publications={publications} automations={automations} />
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </ProductPage>;
}
