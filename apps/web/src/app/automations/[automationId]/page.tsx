import { DesktopShell } from "@/components/desktop-shell";
import { AutomationDetail } from "@/components/screens/automation-detail";

export default async function AutomationDetailPage({ params }: { params: Promise<{ automationId: string }> }) { const { automationId } = await params; return <DesktopShell active="Automations"><AutomationDetail automationId={automationId} /></DesktopShell>; }
