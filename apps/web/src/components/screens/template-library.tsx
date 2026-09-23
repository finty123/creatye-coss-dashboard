"use client";

import { useMemo, useState } from "react";
import { Grid2X2, Heart, List, MoreHorizontal, Plus, SlidersHorizontal, WandSparkles } from "lucide-react";
import { Button, IconButton } from "@creatye/ui";
import { templateFixtures, type TemplateFixture } from "@/lib/product-fixtures";
import { ConfirmActions, ProductDrawer, ProductEmpty, ProductModal, ProductNotice, ProductPage, ProductPagination, ProductTabs } from "@/components/product/product-ui";

function matchesTemplate(item: TemplateFixture, category: string, favorites: Set<string>) {
  if (category === "all") return true;
  if (category === "favorites") return favorites.has(item.id);
  return item.category === category;
}

function TemplateCard({ item, favorite, onFavorite, onOpen }: { item: TemplateFixture; favorite: boolean; onFavorite: () => void; onOpen: () => void }) {
  return <article className="template-product-card" onDoubleClick={onOpen}><button type="button" className={`template-art template-art--${item.tone}`} onClick={onOpen}><span>{item.category}</span><strong>{item.name}</strong><small>{item.format} · {item.duration}</small></button><footer><div><strong>{item.name}</strong><small>{item.category} · usado {item.uses} vezes</small></div><IconButton label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} size="sm" onClick={onFavorite}><Heart size={14} fill={favorite ? "currentColor" : "none"} /></IconButton><IconButton label="Mais opções" size="sm"><MoreHorizontal size={15} /></IconButton></footer></article>;
}

function TemplateDetails({ item, favorite, onClose, onFavorite, onUse }: { item: TemplateFixture | null; favorite: boolean; onClose: () => void; onFavorite: () => void; onUse: () => void }) {
  if (!item) return null;
  return <ProductDrawer title={item.name} subtitle={`${item.category} · ${item.format} · ${item.duration}`} onClose={onClose} footer={<><Button onClick={onFavorite}><Heart size={14} /> {favorite ? "Remover favorito" : "Favoritar"}</Button><Button variant="primary" onClick={onUse}><WandSparkles size={14} /> Usar template</Button></>}><div className={`template-art template-art--${item.tone} template-art--large`}><span>{item.category}</span><strong>{item.name}</strong><small>Uma estrutura editorial pronta para personalizar.</small></div><div><div className="product-kpi"><span>Formato</span><strong>{item.format}</strong></div><div className="product-kpi"><span>Duração</span><strong>{item.duration}</strong></div><div className="product-kpi"><span>Usos</span><strong>{item.uses}</strong></div></div><label className="product-field">Nome da cópia<input defaultValue={`${item.name} — cópia`} /></label></ProductDrawer>;
}

function TemplateCreateDialog({ open, onClose, onCreate }: { open: boolean; onClose: () => void; onCreate: () => void }) {
  if (!open) return null;
  return <ProductModal title="Criar template" description="Salve uma estrutura própria para reutilizar no Studio." onClose={onClose} footer={<ConfirmActions cancel="Cancelar" confirm="Criar template" onCancel={onClose} onConfirm={onCreate} />}><label className="product-field">Nome<input placeholder="Ex.: Série editorial semanal" /></label><label className="product-field">Categoria<select defaultValue="Reels"><option>Reels</option><option>Stories</option><option>Carrossel</option><option>Ads</option></select></label><label className="product-field">Descrição<textarea placeholder="Explique quando este template deve ser usado." /></label></ProductModal>;
}

export function TemplateLibrary() {
  const [category, setCategory] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(() => new Set(templateFixtures.filter((item) => item.favorite).map((item) => item.id)));
  const [selected, setSelected] = useState<TemplateFixture | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const visible = useMemo(() => templateFixtures.filter((item) => matchesTemplate(item, category, favorites)), [category, favorites]);
  const perPage = view === "grid" ? 6 : 7;
  const pages = Math.max(1, Math.ceil(visible.length / perPage));
  const items = visible.slice((page - 1) * perPage, page * perPage);
  function toggleFavorite(id: string) { setFavorites((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }
  function useTemplate() { setSelected(null); setNotice("Template aplicado ao novo projeto."); }
  function createTemplate() { setCreateOpen(false); setNotice("Novo template adicionado à biblioteca."); }

  return <ProductPage eyebrow="Biblioteca criativa" title="Templates" description="Estruturas reutilizáveis para produzir campanhas consistentes com mais velocidade." actions={<Button variant="primary" onClick={() => setCreateOpen(true)}><Plus size={14} /> Novo template</Button>}>
    <div className="product-toolbar"><Button size="sm"><SlidersHorizontal size={14} /> Filtros</Button><span className="product-toolbar-spacer" /><div className="view-toggle"><IconButton label="Grade" size="sm" variant={view === "grid" ? "surface" : "quiet"} onClick={() => setView("grid")}><Grid2X2 size={14} /></IconButton><IconButton label="Lista" size="sm" variant={view === "list" ? "surface" : "quiet"} onClick={() => setView("list")}><List size={15} /></IconButton></div></div>
    <ProductTabs items={[{ id: "all", label: "Todos", count: templateFixtures.length }, { id: "Reels", label: "Reels" }, { id: "Stories", label: "Stories" }, { id: "Carrossel", label: "Carrosséis" }, { id: "Ads", label: "Anúncios" }, { id: "favorites", label: "Favoritos", count: favorites.size }]} active={category} onChange={(value) => { setCategory(value); setPage(1); }} />
    {items.length ? <section className={view === "grid" ? "template-product-grid" : "template-product-list"}>{items.map((item) => <TemplateCard key={item.id} item={item} favorite={favorites.has(item.id)} onFavorite={() => toggleFavorite(item.id)} onOpen={() => setSelected(item)} />)}</section> : <ProductEmpty title="Nenhum template encontrado" description="Experimente outra categoria ou remova os filtros aplicados." action={<Button onClick={() => setCategory("all")}>Ver todos</Button>} />}
    <ProductPagination page={Math.min(page, pages)} pages={pages} onChange={setPage} />
    <TemplateDetails item={selected} favorite={selected ? favorites.has(selected.id) : false} onClose={() => setSelected(null)} onFavorite={() => selected && toggleFavorite(selected.id)} onUse={useTemplate} />
    <TemplateCreateDialog open={createOpen} onClose={() => setCreateOpen(false)} onCreate={createTemplate} />
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </ProductPage>;
}
