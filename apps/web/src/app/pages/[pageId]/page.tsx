import { DesktopShell } from "@/components/desktop-shell";
import { PageDetail } from "@/components/screens/page-detail";

export default async function ConnectedPageDetail({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  return <DesktopShell active="Pages"><PageDetail pageId={pageId} /></DesktopShell>;
}
