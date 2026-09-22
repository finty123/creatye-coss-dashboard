"use client";

import { Moon, Sun } from "lucide-react";
import { IconButton } from "@creatye/ui";
import { useEffect, useState } from "react";
import type { CreatyeTheme } from "@creatye/ui";

export function ThemeToggle() {
  const [theme, setTheme] = useState<CreatyeTheme>("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <IconButton
      label={theme === "light" ? "Use dark mode" : "Use light mode"}
      variant="surface"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
    </IconButton>
  );
}
