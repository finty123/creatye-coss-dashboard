import Link from "next/link";
import {
  Bell,
  ChartNoAxesCombined,
  ChevronDown,
  CircleHelp,
  FileImage,
  Home,
  LayoutTemplate,
  Menu,
  MonitorPlay,
  Search,
  Settings,
  Sparkles,
  Workflow
} from "lucide-react";
import { AppShell, Avatar, Button, IconButton, Progress, Sidebar, SidebarSection, WorkspaceSwitcher } from "@creatye/ui";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Pages", href: "/", icon: FileImage },
  { label: "Automations", href: "/automations", icon: Workflow },
  { label: "Video Studio", href: "/studio?step=customize", icon: MonitorPlay },
  { label: "Image Studio", href: "/", icon: Sparkles },
  { label: "Templates", href: "/templates", icon: LayoutTemplate },
  { label: "Analytics", href: "/", icon: ChartNoAxesCombined }
] as const;

function NavigationLink({ label, href, icon: Icon, active }: (typeof navigation)[number] & { active: string }) {
  return <Link href={href} className="cr-sidebar-item" aria-current={active === label ? "page" : undefined}><Icon size={16} strokeWidth={1.75} /><span>{label}</span></Link>;
}

export function DesktopShell({ active, mode = "standard", children }: { active: string; mode?: "standard" | "studio"; children: React.ReactNode }) {
  const sidebar = <Sidebar footer={<><div className="canvas-usage"><div><span>Monthly usage</span><strong>68%</strong></div><Progress value={68} label="Monthly usage" /><small>32 hours remaining</small></div><button className="canvas-profile"><Avatar label="Samuel Cruz" /><span><strong>Samuel Cruz</strong><small>Owner</small></span><ChevronDown size={14} /></button></>}>
    <WorkspaceSwitcher mark="C" name="Creatye Studio" meta="Master workspace" action={<ChevronDown size={14} />} />
    <SidebarSection label="Workspace">{navigation.map((item) => <NavigationLink key={item.label} {...item} active={active} />)}</SidebarSection>
    <SidebarSection label="Manage"><Link href="/design-system" className="cr-sidebar-item" aria-current={active === "Settings" ? "page" : undefined}><Settings size={16} /><span>Settings</span></Link><Link href="/design-system" className="cr-sidebar-item"><CircleHelp size={16} /><span>Help & feedback</span></Link></SidebarSection>
  </Sidebar>;

  const header = <header className="canvas-topbar"><div className="canvas-topbar__mobile"><IconButton label="Open navigation" variant="surface"><Menu size={17} /></IconButton></div><button className="canvas-command" type="button"><Search size={15} /><span>Search or jump to</span><kbd>Ctrl K</kbd></button><div className="canvas-topbar__actions"><Button variant="primary" size="sm"><Sparkles size={14} /> Create</Button><ThemeToggle /><IconButton label="Notifications" variant="surface"><Bell size={16} /></IconButton></div></header>;

  return <div data-theme={mode === "studio" ? "dark" : undefined}><AppShell sidebar={sidebar} header={header} className={mode === "studio" ? "canvas-shell canvas-shell--studio" : "canvas-shell"}>{children}</AppShell><nav className="canvas-mobile-nav" aria-label="Mobile navigation">{navigation.slice(0, 5).map(({ label, href, icon: Icon }) => <Link key={label} href={href} aria-current={active === label ? "page" : undefined}><Icon size={19} /><span>{label.replace(" Studio", "")}</span></Link>)}</nav></div>;
}
