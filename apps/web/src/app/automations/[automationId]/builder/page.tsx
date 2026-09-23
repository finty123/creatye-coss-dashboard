import { WorkflowBuilder } from "@/components/screens/workflow-builder";

export default async function BuilderPage({ params }: { params: Promise<{ automationId: string }> }) { const { automationId } = await params; return <WorkflowBuilder automationId={automationId} />; }
