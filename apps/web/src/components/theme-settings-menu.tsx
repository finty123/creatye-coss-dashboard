"use client";

import { Check, Monitor, Moon, Settings, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ThemeChoice = "light" | "dark" | "system";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor }
] as const;

function applyTheme(choice: ThemeChoice) {
  const resolved = choice === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : choice === "system" ? "light" : choice;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeSettingsMenu() {
  const [open, setOpen] = useState(false);
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
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  function selectTheme(choice: ThemeChoice) {
    setTheme(choice);
    window.localStorage.setItem("creatye-theme", choice);
    applyTheme(choice);
    setOpen(false);
  }

  return <div className="luma-settings" ref={root}>
    <button className="cr-sidebar-item luma-settings-trigger" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Settings size={15} strokeWidth={1.65} /><span>Settings</span></button>
    {open ? <div className="luma-settings-menu" role="menu" aria-label="Display settings"><strong>Appearance</strong>{options.map(({ value, label, icon: Icon }) => <button key={value} type="button" role="menuitemradio" aria-checked={theme === value} onClick={() => selectTheme(value)}><Icon size={14} /><span>{label}</span>{theme === value ? <Check size={13} /> : null}</button>)}</div> : null}
  </div>;
}
