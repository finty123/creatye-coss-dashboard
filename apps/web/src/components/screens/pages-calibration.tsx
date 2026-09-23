"use client";

import {
  Check,
  ChevronDown,
  CircleHelp,
  FileSearch,
  Instagram,
  Monitor,
  MoreHorizontal,
  PanelsTopLeft,
  Plus,
  RefreshCw,
} from "lucide-react";
import { Button, IconButton, SearchInput, StatusBadge } from "@creatye/ui";
import { useEffect, useMemo, useRef, useState } from "react";

type PageStatus = "active" | "attention" | "inactive" | "hidden";
type Platform = "all" | "facebook" | "instagram";

type ConnectedPage = {
  id: string;
  name: string;
  initials: string;
  platform: Exclude<Platform, "all">;
  status: PageStatus;
  detail: string;
  sync: string;
  tone: number;
};

const connectedPages: ConnectedPage[] = [
  { id: "238874210991", name: "Ana Mercedes", initials: "AM", platform: "facebook", status: "active", detail: "Creator account", sync: "Updated 3 min ago", tone: 1 },
  { id: "172440629384", name: "Jamile Souza", initials: "JS", platform: "facebook", status: "active", detail: "Business page", sync: "Updated 8 min ago", tone: 2 },
  { id: "581397099126", name: "Agatha Moreira", initials: "AG", platform: "facebook", status: "active", detail: "Creator account", sync: "Updated 12 min ago", tone: 3 },
  { id: "490018337742", name: "Lara Louis", initials: "LL", platform: "facebook", status: "active", detail: "Business page", sync: "Updated 18 min ago", tone: 4 },
  { id: "724018395671", name: "Vanessa Lemos", initials: "VL", platform: "facebook", status: "active", detail: "Creator account", sync: "Updated 26 min ago", tone: 5 },
  { id: "189422660731", name: "Monica Garcia", initials: "MG", platform: "facebook", status: "active", detail: "Business page", sync: "Updated 31 min ago", tone: 6 },
  { id: "290118631205", name: "Julita Menezes", initials: "JM", platform: "facebook", status: "attention", detail: "Permission expired", sync: "Action required", tone: 2 },
  { id: "581909003621", name: "Dra. Julia Marquez", initials: "JM", platform: "facebook", status: "attention", detail: "Review connection", sync: "Action required", tone: 4 },
  { id: "310994552901", name: "Enfermeiro Bruno", initials: "EB", platform: "facebook", status: "inactive", detail: "Connection paused", sync: "Paused 2 days ago", tone: 3 },
  { id: "771450228901", name: "Baby Santana", initials: "BS", platform: "facebook", status: "hidden", detail: "Hidden from workspace", sync: "Hidden 5 days ago", tone: 5 },
];

const statusTabs: Array<{ value: PageStatus; label: string; count: number }> = [
  { value: "active", label: "Active", count: 30 },
  { value: "attention", label: "Needs attention", count: 6 },
  { value: "inactive", label: "Inactive", count: 2 },
  { value: "hidden", label: "Hidden", count: 4 },
];

const platformOptions: Array<{ value: Platform; label: string; count: number }> = [
  { value: "all", label: "All platforms", count: 36 },
  { value: "facebook", label: "Facebook", count: 36 },
  { value: "instagram", label: "Instagram", count: 0 },
];

const statusPresentation: Record<PageStatus, { label: string; intent: "success" | "warning" | "neutral" | "info" }> = {
  active: { label: "Connected", intent: "success" },
  attention: { label: "Needs attention", intent: "warning" },
  inactive: { label: "Inactive", intent: "neutral" },
  hidden: { label: "Hidden", intent: "info" },
};

function PlatformOptionIcon({ platform }: { platform: Platform }) {
  if (platform === "instagram") return <Instagram size={16} aria-hidden />;
  if (platform === "facebook") return <PanelsTopLeft size={16} aria-hidden />;
  return <Monitor size={16} aria-hidden />;
}

function PlatformMark({ platform }: { platform: ConnectedPage["platform"] }) {
  return (
    <span className={`pages-platform-mark pages-platform-mark--${platform}`} aria-label={platform === "facebook" ? "Facebook" : "Instagram"}>
      {platform === "facebook" ? "f" : <Instagram size={10} aria-hidden />}
    </span>
  );
}

function filterPages(status: PageStatus, platform: Platform, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  return connectedPages.filter((page) => {
    const matchesStatus = page.status === status;
    const matchesPlatform = platform === "all" || page.platform === platform;
    const matchesQuery = !normalizedQuery || `${page.name} ${page.id}`.toLowerCase().includes(normalizedQuery);
    return matchesStatus && matchesPlatform && matchesQuery;
  });
}

function PlatformFilter({ platform, onChange }: { platform: Platform; onChange: (platform: Platform) => void }) {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closePicker(event: MouseEvent) {
      if (!pickerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", closePicker);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closePicker);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const currentPlatform = platformOptions.find((option) => option.value === platform) ?? platformOptions[0]!;

  return (
    <div className="pages-platform-picker" ref={pickerRef}>
      <Button
        variant="secondary"
        className="pages-platform-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <PlatformOptionIcon platform={platform} />
        <span>{currentPlatform.label}</span>
        <span className="pages-control-count">{currentPlatform.count}</span>
        <ChevronDown size={14} aria-hidden />
      </Button>
      {open ? (
        <div className="pages-platform-menu" role="menu" aria-label="Filter by platform">
          {platformOptions.map((option) => (
            <button
              type="button"
              role="menuitemradio"
              aria-checked={platform === option.value}
              className={platform === option.value ? "is-selected" : undefined}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <PlatformOptionIcon platform={option.value} />
              <span>{option.label}</span>
              <span className="pages-menu-count">{option.count}</span>
              {platform === option.value ? <Check size={14} aria-hidden /> : <span className="pages-check-placeholder" />}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function StatusTabs({ status, onChange }: { status: PageStatus; onChange: (status: PageStatus) => void }) {
  return (
    <nav className="pages-status-tabs" aria-label="Page status">
      {statusTabs.map((tab) => (
        <button
          type="button"
          key={tab.value}
          className={status === tab.value ? "is-active" : undefined}
          aria-current={status === tab.value ? "page" : undefined}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
          <span>{tab.count}</span>
        </button>
      ))}
    </nav>
  );
}

function ConnectedPageList({
  pages,
  statusLabel,
  selectedPage,
  onSelect,
}: {
  pages: ConnectedPage[];
  statusLabel: string;
  selectedPage: string | null;
  onSelect: (id: string | null) => void;
}) {
  if (!pages.length) {
    return (
      <section className="pages-list" aria-live="polite" aria-label={`${statusLabel} pages`}>
        <div className="pages-empty">
          <span><FileSearch size={26} aria-hidden /></span>
          <strong>No {statusLabel} pages found</strong>
          <p>Try a different platform or search term.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pages-list" aria-live="polite" aria-label={`${statusLabel} pages`}>
      {pages.map((page) => {
        const presentation = statusPresentation[page.status];
        return (
          <article className={selectedPage === page.id ? "is-selected" : undefined} key={page.id}>
            <button
              type="button"
              className="pages-row-main"
              onClick={() => onSelect(selectedPage === page.id ? null : page.id)}
            >
              <span className="pages-avatar" data-tone={page.tone}>
                {page.initials}
                <PlatformMark platform={page.platform} />
              </span>
              <span className="pages-identity">
                <strong>{page.name}</strong>
                <span>Page ID: {page.id}</span>
                <small>Admin</small>
              </span>
              <span className="pages-activity">
                <strong>{page.detail}</strong>
                <span>{page.sync}</span>
              </span>
              <StatusBadge intent={presentation.intent}>{presentation.label}</StatusBadge>
            </button>
            <IconButton label={`More options for ${page.name}`} className="pages-row-actions">
              <MoreHorizontal size={17} aria-hidden />
            </IconButton>
          </article>
        );
      })}
    </section>
  );
}

export function PagesCalibration() {
  const [status, setStatus] = useState<PageStatus>("active");
  const [platform, setPlatform] = useState<Platform>("all");
  const [query, setQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const visiblePages = useMemo(() => filterPages(status, platform, query), [platform, query, status]);

  const currentStatusLabel = statusTabs.find((tab) => tab.value === status)?.label.toLowerCase() ?? "active";

  return (
    <main className="pages-screen" aria-labelledby="pages-title">
      <header className="pages-header">
        <div>
          <p className="pages-eyebrow">CONNECTED CHANNELS</p>
          <h1 id="pages-title">Welcome back, Samuel.</h1>
          <p>Manage the pages that power your content and automations.</p>
        </div>
        <div className="pages-view-switch" aria-label="Page views">
          <button type="button" className="is-active" aria-pressed="true">Page list</button>
          <button type="button" aria-pressed="false">Multi-mode</button>
          <button type="button" aria-pressed="false">Templates</button>
        </div>
      </header>

      <section className="pages-toolbar" aria-label="Page filters">
        <PlatformFilter platform={platform} onChange={setPlatform} />

        <SearchInput
          className="pages-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search pages"
          aria-label="Search pages"
        />

        <Button className="pages-connect">
          <Plus size={16} aria-hidden />
          Connect page
        </Button>
      </section>

      <StatusTabs status={status} onChange={setStatus} />
      <ConnectedPageList
        pages={visiblePages}
        statusLabel={currentStatusLabel}
        selectedPage={selectedPage}
        onSelect={setSelectedPage}
      />

      <footer className="pages-footer">
        <button type="button"><CircleHelp size={15} aria-hidden /> Need help?</button>
        <span>Showing {visiblePages.length} of {statusTabs.find((tab) => tab.value === status)?.count ?? 0} pages</span>
        <button type="button"><RefreshCw size={15} aria-hidden /> Refresh permissions</button>
      </footer>
    </main>
  );
}
