import { DesktopShell } from "@/components/desktop-shell";
import { CommandCenterProduct } from "@/components/screens/command-center-product";

export default function HomePage() {
  return (
    <DesktopShell active="Home">
      <CommandCenterProduct />
    </DesktopShell>
  );
}
