import { DesktopShell } from "@/components/desktop-shell";
import { StudioHistory, StudioProduct, type StudioStep } from "@/components/screens/studio-product";

export default async function StudioPage({ searchParams }: { searchParams: Promise<{ step?: string }> }) {
  const requested = (await searchParams).step;
  const step: StudioStep = requested === "select" || requested === "customize" || requested === "review" || requested === "publish" || requested === "history" ? requested : "select";
  return (
    <DesktopShell active="Video Studio">
      {step === "history" ? <StudioHistory /> : <StudioProduct step={step} />}
    </DesktopShell>
  );
}
