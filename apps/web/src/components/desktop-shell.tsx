import Link from "next/link";
import {
  BarChart3,
  ChevronDown,
  CircleHelp,
  FileImage,
  Home,
  ImageIcon,
  LayoutTemplate,
  ListFilter,
  Menu,
  MonitorPlay,
  Search,
  Settings,
  Workflow
} from "lucide-react";
import { AppShell, IconButton, Sidebar, SidebarSection } from "@creatye/ui";
import { TopActionsMenu } from "./theme-settings-menu";

const navigation = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Pages", href: "/pages", icon: FileImage },
  { label: "Automations", href: "/automations", icon: Workflow },
  { label: "Video Studio", href: "/studio?step=customize", icon: MonitorPlay },
  { label: "Image Studio", href: "/studio?step=customize&type=image", icon: ImageIcon },
  { label: "Templates", href: "/templates", icon: LayoutTemplate },
  { label: "Analytics", href: "#analytics", icon: BarChart3 }
] as const;

function NavigationLink({ label, href, icon: Icon, active }: (typeof navigation)[number] & { active: string }) {
  return <Link href={href} className="cr-sidebar-item" aria-current={active === label || (active === "Home" && label === "Dashboard") ? "page" : undefined}><Icon size={15} strokeWidth={1.65} /><span>{label}</span></Link>;
}

export function DesktopShell({ active, children }: { active: string; mode?: "standard" | "studio"; children: React.ReactNode }) {
  const sidebar = <Sidebar className="luma-sidebar" footer={<div className="creatye-usage"><div><span>Monthly usage</span><strong>68%</strong></div><i><b /></i><small>32 hours remaining</small></div>}>
    <button className="luma-account" type="button"><span className="luma-avatar">SC</span><strong>Samuel Cruz</strong><ChevronDown size={14} strokeWidth={1.6} /></button>
    <div className="luma-sidebar-divider" />
    <SidebarSection label="Workspace">{navigation.map((item) => <NavigationLink key={item.label} {...item} active={active} />)}</SidebarSection>
    <SidebarSection label="Manage"><Link href="/design-system" className="cr-sidebar-item" aria-current={active === "Settings" ? "page" : undefined}><Settings size={15} strokeWidth={1.65} /><span>Settings</span></Link><Link href="#help" className="cr-sidebar-item"><CircleHelp size={15} strokeWidth={1.65} /><span>Help & feedback</span></Link></SidebarSection>
  </Sidebar>;

  const controls = <header className="luma-top-controls"><IconButton label="Open navigation" className="luma-mobile-menu"><Menu size={17} /></IconButton><IconButton label="Search"><Search size={16} strokeWidth={1.7} /></IconButton><IconButton label="Filter"><ListFilter size={16} strokeWidth={1.7} /></IconButton><TopActionsMenu /></header>;

  return <AppShell sidebar={sidebar} header={controls} className="canvas-shell luma-shell">{children}<nav className="canvas-mobile-nav" aria-label="Mobile navigation">{navigation.slice(0, 5).map(({ label, href, icon: Icon }) => <Link key={label} href={href} aria-current={active === label || (active === "Home" && label === "Dashboard") ? "page" : undefined}><Icon size={18} /><span>{label.replace(" Studio", "")}</span></Link>)}</nav></AppShell>;
}
