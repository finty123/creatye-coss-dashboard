"use client";

import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Button, IconButton } from "@creatye/ui";

export function ProductPage({ title, actions, children, className = "" }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode; children: ReactNode; className?: string }) {
  return <div className={`product-page ${className}`}><header className="product-header"><h1>{title}</h1>{actions ? <div className="product-header-actions">{actions}</div> : null}</header>{children}</div>;
}

export function SearchBox({ value, onChange, placeholder = "Pesquisar" }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="product-search"><Search size={15} /><input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>;
}

export function ProductTabs({ items, active, onChange }: { items: readonly { id: string; label: string; count?: number }[]; active: string; onChange: (id: string) => void }) {
  return <div className="product-tabs" role="tablist">{items.map((item) => <button key={item.id} type="button" role="tab" aria-selected={active === item.id} onClick={() => onChange(item.id)}>{item.label}{item.count === undefined ? null : <span>{item.count}</span>}</button>)}</div>;
}

export function ProductPagination({ page, pages, onChange }: { page: number; pages: number; onChange: (page: number) => void }) {
  return <nav className="product-pagination" aria-label="Paginação"><IconButton label="Página anterior" size="sm" onClick={() => onChange(page - 1)} disabled={page <= 1}><ChevronLeft size={15} /></IconButton><span>Página <strong>{page}</strong> de {pages}</span><IconButton label="Próxima página" size="sm" onClick={() => onChange(page + 1)} disabled={page >= pages}><ChevronRight size={15} /></IconButton></nav>;
}

export function ProductModal({ title, description, children, footer, onClose }: { title: string; description?: string; children: ReactNode; footer?: ReactNode; onClose: () => void }) {
  return <div className="product-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="product-modal" role="dialog" aria-modal="true" aria-label={title}><header><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div><IconButton label="Fechar" size="sm" onClick={onClose}><X size={16} /></IconButton></header><div className="product-modal-body">{children}</div>{footer ? <footer>{footer}</footer> : null}</section></div>;
}

export function ProductDrawer({ title, subtitle, children, footer, onClose }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode; onClose: () => void }) {
  return <div className="product-overlay product-overlay--drawer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><aside className="product-drawer" aria-label={title}><header><div><h2>{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div><IconButton label="Fechar" size="sm" onClick={onClose}><X size={16} /></IconButton></header><div className="product-drawer-body">{children}</div>{footer ? <footer>{footer}</footer> : null}</aside></div>;
}

export function ProductEmpty({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="product-empty"><span aria-hidden="true">⌁</span><h3>{title}</h3><p>{description}</p>{action}</div>;
}

export function ProductNotice({ children, onClose }: { children: ReactNode; onClose?: () => void }) {
  return <div className="product-notice" role="status"><span>{children}</span>{onClose ? <button type="button" onClick={onClose}>Fechar</button> : null}</div>;
}

export function ConfirmActions({ cancel, confirm, onCancel, onConfirm, danger = false }: { cancel: string; confirm: string; onCancel: () => void; onConfirm: () => void; danger?: boolean }) {
  return <><Button variant="quiet" onClick={onCancel}>{cancel}</Button><Button variant={danger ? "danger" : "primary"} onClick={onConfirm}>{confirm}</Button></>;
}
