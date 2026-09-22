import { DesktopShell } from "@/components/desktop-shell";
import { CommandCenter } from "@/components/screens/command-center";

export default function HomePage() {
  return (
    <DesktopShell active="Home">
      <CommandCenter />
    </DesktopShell>
  );
}
