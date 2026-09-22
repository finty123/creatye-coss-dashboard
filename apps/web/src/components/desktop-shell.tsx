import Link from "next/link";
import {
  Archive,
  Bell,
  ChevronDown,
  Compass,
  CreditCard,
  Folder,
  Globe2,
  History,
  LayoutDashboard,
  Library,
  Menu,
  MoreVertical,
  PieChart,
  Search,
  ListFilter,
  Sparkles,
  Users
} from "lucide-react";
import { AppShell, IconButton, Sidebar, SidebarSection } from "@creatye/ui";

const quickNavigation = [
  { label: "Search", href: "#search", icon: Search },
  { label: "Recents", href: "/", icon: History },
  { label: "Shared With You", href: "#shared", icon: Archive },
  { label: "Notifications", href: "#notifications", icon: Bell }
] as const;

const workspaceNavigation = [
  { label: "Boards", href: "/", icon: LayoutDashboard },
  { label: "Projects", href: "/studio?step=customize", icon: Folder },
  { label: "Discover", href: "/templates", icon: Compass },
  { label: "Skills", href: "/automations", icon: Sparkles },
  { label: "Members", href: "#members", icon: Users },
  { label: "Library", href: "/templates", icon: Library },
  { label: "Connectors", href: "#connectors", icon: Globe2 },
  { label: "Billing", href: "#billing", icon: CreditCard },
  { label: "Usage", href: "#usage", icon: PieChart }
] as const;

function selectedNavigation(active: string) {
  if (active === "Templates") return "Library";
  if (active === "Automations") return "Skills";
  if (active === "Video Studio" || active === "Image Studio") return "Projects";
  return "Boards";
}

function NavigationLink({ label, href, icon: Icon, selected }: { label: string; href: string; icon: typeof Search; selected?: boolean }) {
  return <Link href={href} className="cr-sidebar-item" aria-current={selected ? "page" : undefined}><Icon size={15} strokeWidth={1.65} /><span>{label}</span></Link>;
}

export function DesktopShell({ active, mode = "standard", children }: { active: string; mode?: "standard" | "studio"; children: React.ReactNode }) {
  const selected = selectedNavigation(active);
  const sidebar = <Sidebar className="luma-sidebar" footer={<button className="luma-credits" type="button"><span>88% of credits remaining</span></button>}>
    <button className="luma-account" type="button"><span className="luma-avatar">SC</span><strong>Samuel Cruz</strong><ChevronDown size={14} strokeWidth={1.6} /></button>
    <SidebarSection>{quickNavigation.map((item) => <NavigationLink key={item.label} {...item} />)}</SidebarSection>
    <div className="luma-sidebar-divider" />
    <button className="luma-workspace" type="button"><span>P</span><strong>Personal</strong><ChevronDown size={14} strokeWidth={1.6} /></button>
    <SidebarSection>{workspaceNavigation.map((item) => <NavigationLink key={item.label} {...item} selected={selected === item.label} />)}</SidebarSection>
  </Sidebar>;

  const controls = <header className="luma-top-controls"><IconButton label="Open navigation" className="luma-mobile-menu"><Menu size={17} /></IconButton><IconButton label="Search"><Search size={16} strokeWidth={1.7} /></IconButton><IconButton label="Filter"><ListFilter size={16} strokeWidth={1.7} /></IconButton><IconButton label="More options"><MoreVertical size={16} strokeWidth={1.7} /></IconButton></header>;

  return <div data-theme={mode === "studio" ? "dark" : undefined}><AppShell sidebar={sidebar} header={controls} className="canvas-shell luma-shell">{children}</AppShell><nav className="canvas-mobile-nav" aria-label="Mobile navigation">{workspaceNavigation.slice(0, 5).map(({ label, href, icon: Icon }) => <Link key={label} href={href} aria-current={selected === label ? "page" : undefined}><Icon size={18} /><span>{label}</span></Link>)}</nav></div>;
}
