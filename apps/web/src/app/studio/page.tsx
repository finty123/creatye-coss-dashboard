import { DesktopShell } from "@/components/desktop-shell";
import { DesktopStudioCalibration, type StudioStep } from "@/components/screens/desktop-studio-calibration";

export default async function StudioPage({ searchParams }: { searchParams: Promise<{ step?: string }> }) {
  const requested = (await searchParams).step;
  const step: StudioStep = requested === "select" || requested === "customize" || requested === "publish" ? requested : "select";
  return (
    <DesktopShell active="Video Studio">
      <DesktopStudioCalibration step={step} />
    </DesktopShell>
  );
}
