import Image from "next/image";
import Link from "next/link";
import { Captions, ChevronDown, ChevronRight, Crop, ImageIcon, LayoutTemplate, Mic2, MoreHorizontal, Music2, Play, Redo2, Scissors, Search, Sparkles, Type, Undo2, Upload, Video } from "lucide-react";
import { Button, Field, FloatingToolbar, IconButton, InspectorPanel, MediaCard, Select, StatusIndicator, Switch } from "@creatye/ui";

export type StudioStep = "select" | "customize" | "publish";

const tools = [
  { label: "Media", icon: ImageIcon }, { label: "Templates", icon: LayoutTemplate }, { label: "Text", icon: Type },
  { label: "Captions", icon: Captions }, { label: "Audio", icon: Music2 }, { label: "AI tools", icon: Sparkles }
] as const;

const clips = [
  ["Opening hook", "00:08", "creator-home.png"],
  ["Proof point", "00:06", "creator-cafe.png"],
  ["Final CTA", "00:09", "creator-skincare.png"]
] as const;

function StudioHeader({ step }: { step: StudioStep }) {
  return <header className="canvas-studio-header"><div><Video size={17} /><span><strong>Video Studio</strong><small>Creator growth · 3 clips</small></span></div><nav aria-label="Studio views">{(["select", "customize", "publish"] as const).map((item) => <Link key={item} href={`/studio?step=${item}`} aria-current={step === item ? "page" : undefined}>{item === "select" ? "Media" : item === "customize" ? "Edit" : "Publish"}</Link>)}</nav><div><StatusIndicator label="Saved" intent="success" /><Button variant="primary" size="sm">{step === "publish" ? "Publish" : "Export"} <ChevronRight size={14} /></Button></div></header>;
}

function MediaLibrary() {
  return <aside className="canvas-media-library"><header><div><span>Project assets</span><strong>Media library</strong></div><IconButton label="Upload media" variant="surface"><Upload size={15} /></IconButton></header><label><Search size={14} /><input placeholder="Search media" /></label><div className="canvas-media-tabs"><button className="is-active">All</button><button>Video</button><button>Images</button><button>Audio</button></div><div className="canvas-media-grid">{clips.map(([title,duration,src], index) => <MediaCard key={title} title={title} meta={duration} selected={index === 0} media={<Image src={`/media/${src}`} alt="" fill sizes="160px" />} action={<IconButton label={`More options for ${title}`} size="sm"><MoreHorizontal size={14} /></IconButton>} />)}</div></aside>;
}

function Preview() {
  return <section className="canvas-preview"><div className="canvas-preview-toolbar"><span>Preview</span><div><button>Fit <ChevronDown size={12} /></button><button>9:16 <ChevronDown size={12} /></button></div></div><div className="canvas-preview-stage"><div className="canvas-phone-frame"><Image src="/media/creator-home.png" alt="Video preview" fill priority sizes="360px" /><div className="canvas-preview-copy"><small>CREATYE NOTES</small><strong>Three ways to grow</strong><span>without posting every day</span></div><button aria-label="Play preview"><Play size={22} fill="currentColor" /></button></div><FloatingToolbar label="Canvas tools"><IconButton label="Undo" size="sm"><Undo2 size={15} /></IconButton><IconButton label="Redo" size="sm"><Redo2 size={15} /></IconButton><span /><IconButton label="Crop" size="sm"><Crop size={15} /></IconButton><IconButton label="Split" size="sm"><Scissors size={15} /></IconButton><IconButton label="Record voice" size="sm"><Mic2 size={15} /></IconButton></FloatingToolbar></div></section>;
}

function Inspector({ step }: { step: StudioStep }) {
  return <InspectorPanel title={step === "publish" ? "Publish setup" : step === "select" ? "Clip details" : "Inspector"} footer={<Button variant="primary">{step === "publish" ? "Publish 3 clips" : "Apply changes"}</Button>}><div className="canvas-inspector-fields">
    <Field label="Template"><Select defaultValue="editorial" options={[{value:"editorial",label:"Editorial note"},{value:"hook",label:"Bold hook"},{value:"clean",label:"Clean captions"}]} /></Field>
    <Field label="Format"><Select defaultValue="9:16" options={[{value:"9:16",label:"Vertical · 9:16"},{value:"1:1",label:"Square · 1:1"},{value:"16:9",label:"Landscape · 16:9"}]} /></Field>
    <section><span>Caption style</span><div className="canvas-style-options"><button className="is-active">Quiet</button><button>Bold</button><button>Minimal</button></div></section>
    <section><span>Composition</span><label>Scale<input type="range" min="40" max="100" defaultValue="78" /></label><label>Position<input type="range" min="0" max="100" defaultValue="50" /></label></section>
    <Switch label="Auto captions" defaultChecked /><Switch label="Safe-area guides" defaultChecked />
  </div></InspectorPanel>;
}

function Timeline() {
  return <section className="canvas-timeline"><header><div><button><Scissors size={13} /> Split</button><button><Captions size={13} /> Captions</button><button><Music2 size={13} /> Audio</button></div><time>00:00:14 / 00:00:23</time></header><div className="canvas-timeline-ruler"><span>00:00</span><span>00:05</span><span>00:10</span><span>00:15</span><span>00:20</span></div><div className="canvas-timeline-tracks"><span className="canvas-playhead" /><div className="canvas-track-label">Video</div><div className="canvas-track-clips">{clips.map(([title,,src],index) => <button key={title} style={{ flex: index === 0 ? 1.3 : 1 }}><Image src={`/media/${src}`} alt="" fill sizes="240px" /><span>{title}</span></button>)}</div><div className="canvas-track-label">Audio</div><div className="canvas-audio-track">Original audio · normalized</div></div></section>;
}

export function DesktopStudioCalibration({ step }: { step: StudioStep }) {
  return <div className="canvas-studio"><StudioHeader step={step} /><div className="canvas-studio-workspace"><aside className="canvas-tool-rail" aria-label="Studio tools">{tools.map(({label,icon:Icon},index) => <button key={label} className={index === (step === "publish" ? 5 : step === "customize" ? 1 : 0) ? "is-active" : undefined}><Icon size={17} /><span>{label}</span></button>)}</aside><MediaLibrary /><Preview /><Inspector step={step} /><Timeline /></div></div>;
}
