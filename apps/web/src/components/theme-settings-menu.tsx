"use client";

import { Check, ChevronRight, MoreVertical } from "lucide-react";
import { IconButton } from "@creatye/ui";
import { useEffect, useRef, useState } from "react";

type ThemeChoice = "light" | "dark" | "system";

const options = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" }
] as const;

function applyTheme(choice: ThemeChoice) {
  const resolved = choice === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : choice === "system" ? "light" : choice;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function TopActionsMenu() {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeChoice>("system");
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("creatye-theme") as ThemeChoice | null;
    const initial = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystem = () => { if ((window.localStorage.getItem("creatye-theme") ?? "system") === "system") applyTheme("system"); };
    media.addEventListener("change", syncSystem);
    return () => media.removeEventListener("change", syncSystem);
  }, []);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setOpen(false);
        setThemeOpen(false);
      }
    };
    const closeWithEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setThemeOpen(false); } };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function selectTheme(choice: ThemeChoice) {
    setTheme(choice);
    window.localStorage.setItem("creatye-theme", choice);
    applyTheme(choice);
    setOpen(false);
    setThemeOpen(false);
  }

  return <div className="luma-actions-menu" ref={root}>
    <IconButton label="More options" aria-expanded={open} onClick={() => { setOpen((value) => !value); setThemeOpen(false); }}><MoreVertical size={16} strokeWidth={1.7} /></IconButton>
    {open ? <div className="luma-actions-dropdown" role="menu" aria-label="More options menu">
      <button type="button" role="menuitem"><span>Select all</span><kbd>Ctrl+A</kbd></button>
      <i />
      <button type="button" role="menuitem"><span>Help</span><ChevronRight size={14} /></button>
      <button type="button" role="menuitem" aria-expanded={themeOpen} onClick={() => setThemeOpen((value) => !value)}><span>Theme</span><ChevronRight size={14} /></button>
      <button type="button" role="menuitem"><span>Notification preferences</span></button>
      {themeOpen ? <div className="luma-theme-flyout" role="menu" aria-label="Theme">{options.map(({ value, label }) => <button key={value} type="button" role="menuitemradio" aria-checked={theme === value} onClick={() => selectTheme(value)}>{theme === value ? <Check size={14} /> : <span />}<span>{label}</span></button>)}</div> : null}
    </div> : null}
  </div>;
}
