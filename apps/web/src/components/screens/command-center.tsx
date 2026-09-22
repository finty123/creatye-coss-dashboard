import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, ChevronRight, Clock3, MessageCircle, MoreHorizontal, Paperclip, Sparkles, WandSparkles } from "lucide-react";
import { AIComposer, Button, IconButton, MetricCard, StatusIndicator } from "@creatye/ui";

const metrics = [
  { label: "Reach", value: "428.6k", detail: "Last 7 days", trend: "+18.4%" },
  { label: "Engagement", value: "8.7%", detail: "Across 4 pages", trend: "+1.6%" },
  { label: "Published", value: "24", detail: "This month", trend: "+4" },
  { label: "Automations", value: "1,248", detail: "Executions", trend: "99.2%" }
] as const;

const work = [
  { time: "09:30", title: "Review story batch", meta: "4 video variants · Creator Hub", state: "complete" },
  { time: "14:00", title: "Check automation health", meta: "Comment to DM · 3 pages", state: "active" },
  { time: "18:30", title: "Quiz reel goes live", meta: "Instagram · Creatye Brasil", state: "scheduled" }
] as const;

const content = [
  ["creator-cafe.png", "Cafe guide: three hidden spots", "81k views"],
  ["creator-home.png", "Three signs your content is ready", "64k views"],
  ["creator-skincare.png", "Skin routine in 30 seconds", "49k views"]
] as const;

export function CommandCenter() {
  return <div className="canvas-dashboard">
    <header className="canvas-page-head"><div><span>Tuesday · September 22</span><h1>Good afternoon, Samuel.</h1><p>Your creative operation is moving. Two decisions need attention today.</p></div><Button variant="primary" size="lg">Create content <ArrowRight size={15} /></Button></header>

    <section className="canvas-ai-home" aria-labelledby="canvas-ai-title"><div><span>Creatye Intelligence</span><h2 id="canvas-ai-title">What are you creating today?</h2></div><AIComposer actions={<><IconButton label="Attach media" size="sm"><Paperclip size={15} /></IconButton><IconButton label="Use creative tools" size="sm"><WandSparkles size={15} /></IconButton></>} /></section>

    <section className="canvas-metrics" aria-label="Workspace metrics">{metrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} trend={<span className="canvas-positive">{metric.trend}</span>} />)}</section>

    <div className="canvas-dashboard-grid">
      <section className="canvas-panel canvas-today"><header><div><span>Today</span><h2>Publishing rhythm</h2></div><Button variant="quiet" size="sm"><CalendarDays size={14} /> Calendar</Button></header><div className="canvas-schedule">{work.map((item) => <article key={item.time} data-state={item.state}><time>{item.time}</time><span className="canvas-schedule__rail">{item.state === "complete" ? <Check size={11} /> : null}</span><div><strong>{item.title}</strong><small>{item.meta}</small></div><StatusIndicator label={item.state === "complete" ? "Done" : item.state === "active" ? "Next" : "Scheduled"} intent={item.state === "active" ? "brand" : item.state === "complete" ? "success" : "info"} /></article>)}</div><Link className="canvas-panel-link" href="/studio?step=customize">Open Video Studio <ChevronRight size={14} /></Link></section>

      <section className="canvas-panel canvas-performance"><header><div><span>Content</span><h2>Performance leaders</h2></div><IconButton label="More performance options"><MoreHorizontal size={16} /></IconButton></header><div className="canvas-performance-list">{content.map(([src,title,value], index) => <article key={title}><span className="canvas-rank">0{index + 1}</span><Image src={`/media/${src}`} alt="" width={54} height={64} /><div><strong>{title}</strong><small>Creatye Brasil · Instagram</small><i><b style={{ width: `${92-index*16}%` }} /></i></div><span>{value}</span></article>)}</div></section>

      <section className="canvas-panel canvas-activity"><header><div><span>Live operation</span><h2>Recent activity</h2></div><StatusIndicator label="All systems healthy" intent="success" pulse /></header><div><article><span><Sparkles size={15} /></span><div><strong>Four video variants rendered</strong><small>Bold hook template · 12 minutes ago</small></div><StatusIndicator label="Ready" intent="success" /></article><article><span><MessageCircle size={15} /></span><div><strong>Comment automation completed</strong><small>42 conversations started · 28 minutes ago</small></div><StatusIndicator label="Healthy" intent="success" /></article><article><span><Clock3 size={15} /></span><div><strong>Post scheduled for 18:30</strong><small>Creatye Brasil · Instagram and Facebook</small></div><StatusIndicator label="Scheduled" intent="info" /></article></div></section>
    </div>
  </div>;
}
