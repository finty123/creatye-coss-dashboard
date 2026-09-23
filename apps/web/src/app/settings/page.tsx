import { DesktopShell } from "@/components/desktop-shell";
import { SettingsProduct } from "@/components/screens/settings-product";

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const { section } = await searchParams;
  return <DesktopShell active="Settings">{section ? <SettingsProduct initial={section} /> : <SettingsProduct />}</DesktopShell>;
}
