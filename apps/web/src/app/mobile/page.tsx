import { MobileCalibration, type MobileView } from "@/components/screens/mobile-calibration";

export default async function MobilePage({ searchParams }: { searchParams: Promise<{ view?: string }> }) {
  const requested = (await searchParams).view;
  const view: MobileView = requested === "select" || requested === "templates" || requested === "publish" || requested === "history" ? requested : "customize";
  return <MobileCalibration view={view} />;
}
