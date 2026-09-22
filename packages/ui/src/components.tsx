import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";
import { clsx } from "clsx";
import type { ControlSize, StatusIntent } from "./tokens.js";

type ButtonVariant = "primary" | "secondary" | "quiet" | "danger" | "accent";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ControlSize;
  loading?: boolean;
}

export function Button({ className, variant = "secondary", size = "md", loading = false, children, disabled, ...props }: ButtonProps) {
  return <button className={clsx("cr-button", `cr-button--${variant}`, `cr-control--${size}`, className)} aria-busy={loading || undefined} disabled={disabled || loading} {...props}>{loading ? <span className="cr-spinner" aria-hidden="true" /> : null}{children}</button>;
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: ControlSize;
  variant?: "quiet" | "surface" | "primary";
  loading?: boolean;
}

export function IconButton({ className, label, size = "md", variant = "quiet", loading = false, children, disabled, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className={clsx("cr-icon-button", `cr-icon-button--${variant}`, `cr-control--${size}`, className)}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="cr-spinner" aria-hidden="true" /> : children}
    </button>
  );
}

export interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function Field({ label, hint, error, children }: FieldProps) {
  return (
    <label className="cr-field">
      <span className="cr-field__label">{label}</span>
      {children}
      {hint ? <span className="cr-field__hint">{hint}</span> : null}
      {error ? <span className="cr-field__error">{error}</span> : null}
    </label>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx("cr-input", className)} {...props} />;
}

export function SearchInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="search" className={clsx("cr-input cr-search-input", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={clsx("cr-input cr-textarea", className)} {...props} />;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly SelectOption[];
}

export function Select({ className, options, ...props }: SelectProps) {
  return (
    <select className={clsx("cr-input cr-select", className)} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function Checkbox({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" className={clsx("cr-checkbox", className)} {...props} />;
}

export function Radio({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="radio" className={clsx("cr-radio", className)} {...props} />;
}

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Switch({ className, label, ...props }: SwitchProps) {
  return (
    <label className={clsx("cr-switch", className)}>
      <input type="checkbox" {...props} />
      <span className="cr-switch__track" aria-hidden="true">
        <span className="cr-switch__thumb" />
      </span>
      <span>{label}</span>
    </label>
  );
}

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: readonly TabItem[];
  active: string;
  ariaLabel: string;
  compact?: boolean;
}

export function Tabs({ items, active, ariaLabel, compact = false }: TabsProps) {
  return (
    <div className={clsx("cr-tabs", compact && "cr-tabs--compact")} role="tablist" aria-label={ariaLabel}>
      {items.map((item) => (
        <button key={item.value} type="button" role="tab" aria-selected={active === item.value} className="cr-tabs__item">
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function SegmentedControl(props: TabsProps) {
  return <Tabs {...props} compact />;
}

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  intent?: StatusIntent;
}

export function Badge({ className, intent = "neutral", ...props }: BadgeProps) {
  return <span className={clsx("cr-badge", `cr-badge--${intent}`, className)} {...props} />;
}

export function StatusBadge({ className, intent = "neutral", ...props }: BadgeProps) {
  return <span className={clsx("cr-status-badge", `cr-status-badge--${intent}`, className)} {...props} />;
}

export function Tag({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span className={clsx("cr-tag", className)} {...props} />;
}

export function FilterChip({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={clsx("cr-filter-chip", className)} {...props} />;
}

export function Card({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={clsx("cr-card", className)} {...props} />;
}

export interface OperationalCardProps extends ComponentPropsWithoutRef<"article"> {
  title: string;
  meta: string;
  status?: ReactNode;
  action?: ReactNode;
}

export function OperationalCard({ className, title, meta, status, action, children, ...props }: OperationalCardProps) {
  return (
    <article className={clsx("cr-operational-card", className)} {...props}>
      <div className="cr-operational-card__header">
        <div>
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
        {status ? <div className="cr-operational-card__status">{status}</div> : null}
      </div>
      <div className="cr-operational-card__body">{children}</div>
      {action ? <div className="cr-operational-card__action">{action}</div> : null}
    </article>
  );
}

export interface ProgressProps {
  value: number;
  label?: string;
}

export function Progress({ value, label }: ProgressProps) {
  const bounded = Math.min(Math.max(value, 0), 100);
  return (
    <div className="cr-progress" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={bounded} role="progressbar">
      <span style={{ width: `${bounded}%` }} />
    </div>
  );
}

export interface StepperStep {
  label: string;
  state: "complete" | "active" | "upcoming";
}

export function Stepper({ steps }: { steps: readonly StepperStep[] }) {
  return (
    <ol className="cr-stepper">
      {steps.map((step, index) => (
        <li key={step.label} className={clsx("cr-stepper__step", `cr-stepper__step--${step.state}`)}>
          <span>{index + 1}</span>
          <strong>{step.label}</strong>
        </li>
      ))}
    </ol>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <span className={clsx("cr-skeleton", className)} aria-hidden="true" />;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="cr-empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
}

export function Avatar({ label, className }: { label: string; className?: string }) {
  const initials = label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  return <span className={clsx("cr-avatar", className)} aria-label={label}>{initials}</span>;
}

export function Divider() {
  return <hr className="cr-divider" />;
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="cr-page-header">
      <div>
        {eyebrow ? <p className="cr-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="cr-page-header__actions">{actions}</div> : null}
    </header>
  );
}

export function ToastPrimitive({ children }: { children: ReactNode }) {
  return <div className="cr-toast" role="status">{children}</div>;
}

export function TooltipHint({ children }: { children: ReactNode }) {
  return <span className="cr-tooltip-hint" role="tooltip">{children}</span>;
}

export function DialogSurface({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="cr-dialog-surface" aria-label={title}>
      {children}
    </section>
  );
}

export function SheetSurface({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="cr-sheet-surface" aria-label={title}>
      <span className="cr-sheet-surface__handle" aria-hidden="true" />
      {children}
    </section>
  );
}

export function AppShell({ sidebar, header, children, className }: { sidebar: ReactNode; header?: ReactNode; children: ReactNode; className?: string }) {
  return <div className={clsx("cr-app-shell", className)}>{sidebar}<div className="cr-app-shell__main">{header}<main className="cr-app-shell__content">{children}</main></div></div>;
}

export function Sidebar({ children, footer, label = "Primary navigation", className }: { children: ReactNode; footer?: ReactNode; label?: string; className?: string }) {
  return <aside className={clsx("cr-sidebar", className)} aria-label={label}><div className="cr-sidebar__content">{children}</div>{footer ? <footer className="cr-sidebar__footer">{footer}</footer> : null}</aside>;
}

export function SidebarSection({ label, children }: { label?: string; children: ReactNode }) {
  return <section className="cr-sidebar-section">{label ? <span className="cr-sidebar-section__label">{label}</span> : null}{children}</section>;
}

export function SidebarItem({ icon, label, active = false, collapsed = false, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { icon?: ReactNode; label: string; active?: boolean; collapsed?: boolean }) {
  return <button type="button" className="cr-sidebar-item" aria-current={active ? "page" : undefined} title={collapsed ? label : undefined} {...props}>{icon}<span>{label}</span></button>;
}

export function WorkspaceSwitcher({ mark, name, meta, action }: { mark: ReactNode; name: string; meta?: string; action?: ReactNode }) {
  return <button type="button" className="cr-workspace-switcher"><span className="cr-workspace-switcher__mark">{mark}</span><span className="cr-workspace-switcher__text"><strong>{name}</strong>{meta ? <small>{meta}</small> : null}</span>{action ? <span className="cr-workspace-switcher__action">{action}</span> : null}</button>;
}

export function FloatingToolbar({ children, label = "Tools", className }: { children: ReactNode; label?: string; className?: string }) {
  return <div className={clsx("cr-floating-toolbar", className)} role="toolbar" aria-label={label}>{children}</div>;
}

export function DropdownMenu({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return <div className={clsx("cr-menu", className)} role="menu" aria-label={label}>{children}</div>;
}

export function DropdownMenuItem({ children, destructive = false, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { destructive?: boolean }) {
  return <button type="button" className={clsx("cr-menu__item", destructive && "cr-menu__item--danger")} role="menuitem" {...props}>{children}</button>;
}

export function Popover({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return <section className={clsx("cr-popover", className)} aria-label={title}>{children}</section>;
}

export function Dialog({ title, description, children, footer }: { title: string; description?: string; children: ReactNode; footer?: ReactNode }) {
  return <div className="cr-overlay"><section className="cr-dialog" role="dialog" aria-modal="true" aria-labelledby="cr-dialog-title"><header><div><h2 id="cr-dialog-title">{title}</h2>{description ? <p>{description}</p> : null}</div></header><div className="cr-dialog__body">{children}</div>{footer ? <footer>{footer}</footer> : null}</section></div>;
}

export function Drawer({ title, children, side = "right" }: { title: string; children: ReactNode; side?: "right" | "bottom" }) {
  return <aside className={clsx("cr-drawer", `cr-drawer--${side}`)} aria-label={title}><span className="cr-drawer__handle" aria-hidden="true" /><header><h2>{title}</h2></header>{children}</aside>;
}

export function CommandPalette({ queryPlaceholder = "Search projects and actions", children }: { queryPlaceholder?: string; children: ReactNode }) {
  return <section className="cr-command-palette" role="dialog" aria-modal="true" aria-label="Command palette"><SearchField placeholder={queryPlaceholder} aria-label={queryPlaceholder} /><div className="cr-command-palette__results">{children}</div></section>;
}

export function ProjectCard({ title, meta, preview, action, className }: { title: string; meta?: string; preview?: ReactNode; action?: ReactNode; className?: string }) {
  return <article className={clsx("cr-project-card", className)}>{preview ? <div className="cr-project-card__preview">{preview}</div> : null}<div className="cr-project-card__body"><div><h3>{title}</h3>{meta ? <p>{meta}</p> : null}</div>{action}</div></article>;
}

export function MetricCard({ label, value, detail, trend }: { label: string; value: ReactNode; detail?: string; trend?: ReactNode }) {
  return <article className="cr-metric-card"><span>{label}</span><strong>{value}</strong><footer>{detail ? <small>{detail}</small> : null}{trend}</footer></article>;
}

export function UploadZone({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <section className="cr-upload-zone" aria-label={title}><div className="cr-upload-zone__icon" aria-hidden="true">+</div><h3>{title}</h3>{description ? <p>{description}</p> : null}{action}</section>;
}

export function SearchField(props: InputHTMLAttributes<HTMLInputElement>) {
  return <div className="cr-search-field"><span aria-hidden="true">⌕</span><SearchInput {...props} /></div>;
}

export function AIComposer({ placeholder = "Describe what you want to create…", actions, disabled = false }: { placeholder?: string; actions?: ReactNode; disabled?: boolean }) {
  return <div className="cr-ai-composer-wrap"><div className="cr-ai-halo" aria-hidden="true" /><section className="cr-ai-composer" aria-label="AI composer"><Textarea placeholder={placeholder} disabled={disabled} /><footer>{actions}<Button size="sm" variant="primary" disabled={disabled} aria-label="Send prompt">↑</Button></footer></section></div>;
}

export function Toast({ children, intent = "neutral" }: { children: ReactNode; intent?: StatusIntent }) {
  return <div className={clsx("cr-toast", `cr-toast--${intent}`)} role="status">{children}</div>;
}

export function Table({ caption, columns, rows }: { caption: string; columns: readonly string[]; rows: readonly (readonly ReactNode[])[] }) {
  return <div className="cr-table-wrap"><table className="cr-table"><caption>{caption}</caption><thead><tr>{columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${caption}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function Pagination({ current, total, onPrevious, onNext }: { current: number; total: number; onPrevious?: () => void; onNext?: () => void }) {
  return <nav className="cr-pagination" aria-label="Pagination"><Button size="sm" variant="quiet" onClick={onPrevious} disabled={current <= 1}>Previous</Button><span><b>{current}</b> / {total}</span><Button size="sm" variant="quiet" onClick={onNext} disabled={current >= total}>Next</Button></nav>;
}

export function InspectorPanel({ title, children, footer }: { title: string; children: ReactNode; footer?: ReactNode }) {
  return <aside className="cr-inspector" aria-label={title}><header><h2>{title}</h2></header><div className="cr-inspector__body">{children}</div>{footer ? <footer>{footer}</footer> : null}</aside>;
}

export function MediaCard({ title, meta, media, selected = false, action }: { title: string; meta?: string; media: ReactNode; selected?: boolean; action?: ReactNode }) {
  return <article className="cr-media-card" data-selected={selected || undefined}><div className="cr-media-card__media">{media}</div><footer><div><strong>{title}</strong>{meta ? <small>{meta}</small> : null}</div>{action}</footer></article>;
}

export function TemplateCard({ title, category, preview, selected = false }: { title: string; category?: string; preview: ReactNode; selected?: boolean }) {
  return <button type="button" className="cr-template-card" aria-pressed={selected}><span className="cr-template-card__preview">{preview}</span><span className="cr-template-card__copy"><strong>{title}</strong>{category ? <small>{category}</small> : null}</span></button>;
}

export function StatusIndicator({ label, intent = "neutral", pulse = false }: { label: string; intent?: StatusIntent; pulse?: boolean }) {
  return <span className={clsx("cr-status-indicator", `cr-status-indicator--${intent}`, pulse && "is-pulsing")}><i aria-hidden="true" />{label}</span>;
}
