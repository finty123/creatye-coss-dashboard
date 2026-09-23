"use client";

import Link from "next/link";
import { useState } from "react";
import { Activity, ArrowLeft, Edit3, Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@creatye/ui";
import { activityLog, automationFixtures, type AutomationFixture } from "@/lib/product-fixtures";
import { ProductNotice, ProductPage, ProductTabs } from "@/components/product/product-ui";

function Overview({ automation }: { automation: AutomationFixture }) {
  return <div className="detail-tab"><div className="product-stat-grid"><div className="product-stat"><span>Execuções</span><strong>{automation.executions.toLocaleString("pt-BR")}</strong><small>Últimos 30 dias</small></div><div className="product-stat"><span>Conversão</span><strong>{automation.conversion}</strong><small>+4,2% no período</small></div><div className="product-stat"><span>Tempo médio</span><strong>1m 18s</strong><small>Da entrada à conclusão</small></div><div className="product-stat"><span>Falhas</span><strong>0,8%</strong><small>12 recuperadas</small></div></div><section className="product-panel"><header><h2>Volume de execuções</h2><span className="product-muted">Últimos 12 dias</span></header><div className="product-panel-body"><div className="detail-mini-chart automation-chart">{[55,48,67,62,81,73,90,78,98,88,110,102].map((value,index) => <i key={index} style={{height:`${value/1.2}%`}} />)}</div></div></section></div>;
}

function ActivityTimeline({ onRetry }: { onRetry: () => void }) {
  return <div className="activity-timeline detail-tab">{activityLog.map((item) => <article key={`${item.time}-${item.title}`}><span data-status={item.status}><Activity size={13} /></span><div><strong>{item.title}</strong><small>{item.detail}</small></div><time>{item.time}</time>{item.status === "error" ? <Button size="sm" onClick={onRetry}><RotateCcw size={12} /> Tentar novamente</Button> : null}</article>)}</div>;
}

function Versions() {
  return <div className="product-list detail-tab">{["Versão 6 · Publicada", "Versão 5 · 18 set", "Versão 4 · 12 set"].map((item,index) => <div className="product-row" key={item}><div><strong>{item}</strong><small>{index === 0 ? "Versão em produção" : "Salva por Samuel Cruz"}</small></div><span className="product-row-meta">{index === 0 ? "Atual" : `${index + 1} alterações`}</span><span /><Button size="sm">{index ? "Restaurar" : "Visualizar"}</Button></div>)}</div>;
}

function AutomationSettings({ automation, onSave }: { automation: AutomationFixture; onSave: () => void }) {
  return <section className="product-panel detail-tab"><header><h2>Preferências do fluxo</h2></header><div className="product-panel-body settings-form"><label className="product-field">Nome<input defaultValue={automation.name} /></label><label className="product-field">Fuso horário<select defaultValue="America/Sao_Paulo"><option>America/Sao_Paulo</option><option>UTC</option></select></label><label className="product-field">Limite diário<input type="number" defaultValue="5000" /></label><Button variant="primary" onClick={onSave}>Salvar alterações</Button></div></section>;
}

function DetailContent({ tab, automation, onNotice }: { tab: string; automation: AutomationFixture; onNotice: (message: string) => void }) {
  if (tab === "activity") return <ActivityTimeline onRetry={() => onNotice("Execução reenfileirada.")} />;
  if (tab === "versions") return <Versions />;
  if (tab === "settings") return <AutomationSettings automation={automation} onSave={() => onNotice("Configurações salvas.")} />;
  return <Overview automation={automation} />;
}

export function AutomationDetail({ automationId }: { automationId: string }) {
  const automation = automationFixtures.find((item) => item.id === automationId) ?? automationFixtures[0]!;
  const [tab, setTab] = useState("overview");
  const [paused, setPaused] = useState(automation.status === "paused");
  const [notice, setNotice] = useState("");
  const pauseLabel = paused ? "Ativar" : "Pausar";
  const pauseIcon = paused ? <Play size={14} /> : <Pause size={14} />;
  function toggleStatus() { setPaused((value) => !value); setNotice(paused ? "Automação ativada." : "Automação pausada."); }

  return <ProductPage eyebrow="Automação" title={automation.name} description={`${automation.page} · Atualizada ${automation.updated.toLowerCase()}`} actions={<><Link className="cr-button cr-button--quiet cr-control--md" href="/automations"><ArrowLeft size={14} /> Voltar</Link><Button onClick={toggleStatus}>{pauseIcon}{pauseLabel}</Button><Link className="cr-button cr-button--primary cr-control--md" href={`/automations/${automation.id}/builder`}><Edit3 size={14} /> Editar fluxo</Link></>}>
    <div className="automation-detail-route"><span className="automation-route-node"><small>Quando</small><strong>{automation.trigger}</strong></span><i>→</i><span className="automation-route-node"><small>Ação</small><strong>{automation.action}</strong></span><i>→</i><span className="automation-route-node"><small>Resultado</small><strong>Lead qualificado</strong></span></div>
    <ProductTabs items={[{ id: "overview", label: "Visão geral" }, { id: "activity", label: "Atividade", count: activityLog.length }, { id: "versions", label: "Versões" }, { id: "settings", label: "Configurações" }]} active={tab} onChange={setTab} />
    <DetailContent tab={tab} automation={automation} onNotice={setNotice} />
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </ProductPage>;
}
