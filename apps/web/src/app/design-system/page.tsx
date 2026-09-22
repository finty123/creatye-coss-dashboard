import { DesktopShell } from "@/components/desktop-shell";
import { DesignSystemPlayground } from "@/components/screens/design-system-playground";

export default function DesignSystemPage() {
  return (
    <DesktopShell active="Settings">
      <DesignSystemPlayground />
    </DesktopShell>
  );
}
