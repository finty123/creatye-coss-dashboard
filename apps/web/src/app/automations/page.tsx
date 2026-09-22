import { DesktopShell } from "@/components/desktop-shell";
import { AutomationsCalibration } from "@/components/screens/automations-calibration";

export default function AutomationsPage() {
  return (
    <DesktopShell active="Automations">
      <AutomationsCalibration />
    </DesktopShell>
  );
}
