import { DesktopShell } from "@/components/desktop-shell";
import { PagesCalibration } from "@/components/screens/pages-calibration";

export default function PagesPage() {
  return (
    <DesktopShell active="Pages">
      <PagesCalibration />
    </DesktopShell>
  );
}
