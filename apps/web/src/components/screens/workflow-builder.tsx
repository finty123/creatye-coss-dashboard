"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Bot, Clock3, GitBranch, ImageIcon, MessageCircle, MousePointer2, Play, Plus, Save, Tag, Trash2, Webhook } from "lucide-react";
import { Button, IconButton } from "@creatye/ui";
import { automationFixtures } from "@/lib/product-fixtures";
import { ProductModal, ProductNotice } from "@/components/product/product-ui";

const nodeCatalog = [{ type: "Mensagem", icon: MessageCircle }, { type: "Mídia", icon: ImageIcon }, { type: "Espera", icon: Clock3 }, { type: "Condição", icon: GitBranch }, { type: "IA", icon: Bot }, { type: "Tag", icon: Tag }, { type: "Webhook", icon: Webhook }] as const;
type FlowNode = { id: number; type: string; title: string; detail: string };

export function WorkflowBuilder({ automationId }: { automationId: string }) {
  const automation = automationFixtures.find((item) => item.id === automationId) ?? automationFixtures[0]!;
  const [nodes, setNodes] = useState<FlowNode[]>([{ id: 1, type: "Gatilho", title: automation.trigger, detail: automation.page }, { id: 2, type: "Mensagem", title: "Mensagem de boas-vindas", detail: "Texto personalizado com nome" }, { id: 3, type: "Condição", title: "Respondeu em até 2 horas?", detail: "Sim / Não" }, { id: 4, type: "Tag", title: "Aplicar lead_interessado", detail: "Concluir execução" }]);
  const [selected, setSelected] = useState(2);
  const [testOpen, setTestOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const active = nodes.find((item) => item.id === selected) ?? nodes[0]!;
  function addNode(type: string) { const id = Math.max(...nodes.map((node) => node.id)) + 1; setNodes((current) => [...current, { id, type, title: `Novo bloco de ${type.toLowerCase()}`, detail: "Configure este bloco" }]); setSelected(id); }
  function updateNode(key: "title" | "detail", value: string) { setNodes((current) => current.map((node) => node.id === selected ? { ...node, [key]: value } : node)); }
  function removeNode() { if (nodes.length <= 1) return; setNodes((current) => current.filter((node) => node.id !== selected)); setSelected(nodes[0]!.id); }

  return <div className="workflow-builder"><header className="workflow-builder-top"><Link href={`/automations/${automation.id}`}><ArrowLeft size={16} /> <span><strong>{automation.name}</strong><small>Rascunho salvo agora</small></span></Link><div><Button size="sm" onClick={() => setTestOpen(true)}><Play size={13} /> Testar fluxo</Button><Button size="sm" variant="primary" onClick={() => setNotice("Nova versão publicada.")}><Save size={13} /> Publicar</Button></div></header><div className="workflow-builder-layout"><aside className="workflow-library"><span>Blocos</span><p>Arraste ou adicione ao final do fluxo.</p>{nodeCatalog.map(({ type, icon: Icon }) => <button type="button" key={type} onClick={() => addNode(type)}><Icon size={15} /><strong>{type}</strong><Plus size={13} /></button>)}</aside><main className="workflow-canvas"><div className="workflow-canvas-tools"><MousePointer2 size={14} /><span>Selecionar</span><b>100%</b></div><div className="workflow-path">{nodes.map((node, index) => <div key={node.id} className="workflow-path-item">{index ? <i /> : null}<button type="button" aria-pressed={selected === node.id} onClick={() => setSelected(node.id)}><small>{node.type}</small><strong>{node.title}</strong><span>{node.detail}</span></button>{index < nodes.length - 1 ? <em>↓</em> : null}</div>)}</div></main><aside className="workflow-inspector"><header><span>Configurar bloco</span><IconButton label="Excluir bloco" size="sm" onClick={removeNode}><Trash2 size={14} /></IconButton></header><div><label className="product-field">Tipo<input value={active.type} readOnly /></label><label className="product-field">Título<input value={active.title} onChange={(event) => updateNode("title", event.target.value)} /></label><label className="product-field">Detalhes<textarea value={active.detail} onChange={(event) => updateNode("detail", event.target.value)} /></label><label className="product-check"><input type="checkbox" defaultChecked /> Continuar mesmo se este bloco falhar</label></div></aside></div>
    {testOpen ? <ProductModal title="Testar automação" description="A simulação não envia mensagens reais." onClose={() => setTestOpen(false)} footer={<><Button variant="quiet" onClick={() => setTestOpen(false)}>Cancelar</Button><Button variant="primary" onClick={() => { setTestOpen(false); setNotice("Teste concluído: todos os blocos passaram."); }}>Executar teste</Button></>}><label className="product-field">Contato de teste<input defaultValue="@samuel.teste" /></label><div className="builder-test-summary"><strong>{nodes.length} blocos</strong><span>Tempo estimado: 2 min 12 s</span></div></ProductModal> : null}{notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </div>;
}
