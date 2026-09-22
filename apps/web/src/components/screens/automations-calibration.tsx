import { AlertCircle, ArrowUpRight, CheckCircle2, ChevronDown, Filter, MoreHorizontal, Pause, Play, Plus, Search, Workflow } from "lucide-react";
import { Button, IconButton, SearchInput, StatusBadge } from "@creatye/ui";
import { automations } from "@/lib/fixtures";

export function AutomationsCalibration() {
  return (
    <div className="automation-screen">
      <header className="automation-header"><div><span>Automation</span><h1>Keep every conversation moving</h1><p>12 active flows across 4 connected pages.</p></div><Button variant="primary"><Plus size={15} /> New automation</Button></header>
      <section className="automation-overview" aria-label="Automation overview">
        <div><span>Active</span><strong>12</strong><small><CheckCircle2 size={12} /> all systems normal</small></div><div><span>Executions today</span><strong>1,284</strong><small><ArrowUpRight size={12} /> 14% from yesterday</small></div><div><span>Needs attention</span><strong>1</strong><small><AlertCircle size={12} /> follow-up waiting</small></div><div><span>Success rate</span><strong>98.7%</strong><small>last 7 days</small></div>
      </section>
      <div className="automation-toolbar"><div className="automation-tabs" role="tablist"><button aria-selected="true">All <span>16</span></button><button>Active <span>12</span></button><button>Paused <span>3</span></button><button>Draft <span>1</span></button></div><div className="automation-tools"><label className="inline-search"><Search size={14} /><SearchInput placeholder="Search automations" /></label><Button size="sm"><Filter size={13} /> Filter</Button><Button variant="quiet" size="sm">Last updated <ChevronDown size={13} /></Button></div></div>
      <section className="automation-card-grid" aria-label="Automations">
        {automations.map((automation, index) => <article key={automation.name} className={automation.errors ? "needs-attention" : undefined}>
          <header><span className="automation-mark" data-tone={index}><Workflow size={17} /></span><div><strong>{automation.name}</strong><p>{automation.page}</p></div><StatusBadge intent={automation.errors ? "warning" : index === 2 ? "info" : "success"}>{automation.status}</StatusBadge><IconButton label={`More actions for ${automation.name}`} size="sm"><MoreHorizontal size={15} /></IconButton></header>
          <div className="automation-flow"><div><span>When</span><strong>{automation.trigger}</strong></div><ArrowUpRight size={15} /><div><span>Then</span><strong>{index === 0 ? "Send personalized DM" : index === 1 ? "Qualify and assign lead" : "Create weekly variants"}</strong></div></div>
          <footer><div><span>Activity</span><strong>{index === 0 ? "42 today" : index === 1 ? "18 today" : "Tomorrow, 09:00"}</strong><small>{automation.activity}</small></div><button type="button" aria-label={index === 1 ? "Resume automation" : "Pause automation"}>{index === 1 ? <Play size={15} /> : <Pause size={15} />}</button></footer>
        </article>)}
        <article className="automation-create-card"><Plus size={18} /><div><strong>Build another workflow</strong><p>Start from a proven trigger or a blank flow.</p></div><Button size="sm">Browse templates</Button></article>
      </section>
    </div>
  );
}
