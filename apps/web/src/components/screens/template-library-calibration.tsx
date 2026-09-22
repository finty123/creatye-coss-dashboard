import Image from "next/image";
import { ChevronDown, Grid2X2, List, Plus, SlidersHorizontal } from "lucide-react";
import { Button, FilterChip, IconButton, PageHeader, SearchField, StatusIndicator, TemplateCard } from "@creatye/ui";

const templates = [
  { title: "Clean quiz", category: "Education · 9:16", image: "creator-home.png", tone: "quiet" },
  { title: "Bold hook", category: "Growth · 9:16", image: "creator-cafe.png", tone: "bold" },
  { title: "Before & after", category: "Beauty · 9:16", image: "creator-skincare.png", tone: "warm" },
  { title: "Fast list", category: "Creator · 9:16", image: "creator-home.png", tone: "paper" },
  { title: "POV caption", category: "Lifestyle · 9:16", image: "creator-cafe.png", tone: "studio" },
  { title: "Mini guide", category: "Education · 1:1", image: "creator-skincare.png", tone: "editorial" }
] as const;

export function TemplateLibraryCalibration() {
  return <div className="canvas-templates">
    <PageHeader eyebrow="Creative library" title="Templates" description="Reusable structures for videos, images, stories, and campaign variations." actions={<Button variant="primary"><Plus size={14} /> New template</Button>} />
    <section className="canvas-library-toolbar" aria-label="Template filters"><SearchField placeholder="Search templates" aria-label="Search templates" /><div className="canvas-filter-scroll"><FilterChip aria-pressed="true">All</FilterChip><FilterChip>Video</FilterChip><FilterChip>Images</FilterChip><FilterChip>Stories</FilterChip><FilterChip>My templates</FilterChip></div><Button variant="secondary" size="sm"><SlidersHorizontal size={14} /> Filters <ChevronDown size={13} /></Button><div className="canvas-view-toggle"><IconButton label="Grid view" variant="surface"><Grid2X2 size={15} /></IconButton><IconButton label="List view"><List size={15} /></IconButton></div></section>
    <div className="canvas-library-meta"><StatusIndicator label="48 templates" intent="neutral" /><span>Updated today</span></div>
    <section className="canvas-template-grid" aria-label="Template library">{templates.map((template, index) => <TemplateCard key={template.title} title={template.title} category={template.category} selected={index === 1} preview={<span className={`canvas-template-preview canvas-template-preview--${template.tone}`}><Image src={`/media/${template.image}`} alt="" fill sizes="(max-width: 720px) 88vw, (max-width: 1180px) 40vw, 24vw" /><span><b>{["QUIZ", "HOOK", "BEFORE", "LIST", "POV", "GUIDE"][index]}</b><i>{index % 2 ? "3 steps" : "NEW POST"}</i></span></span>} />)}</section>
  </div>;
}
