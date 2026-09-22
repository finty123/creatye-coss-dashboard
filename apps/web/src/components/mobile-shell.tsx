import Link from "next/link";
import { ArrowLeft, History, Video, WandSparkles } from "lucide-react";
import { IconButton } from "@creatye/ui";

export function MobileShell({ children, active = "Studio", step = 2 }: { children: React.ReactNode; active?: "Studio" | "History"; step?: number }) {
  return <div className="mobile-shell" data-theme="dark">
    <header className="mobile-topbar"><IconButton label="Back" variant="quiet"><ArrowLeft size={19} /></IconButton><span className="mobile-brand-mark"><WandSparkles size={17} /></span><div className="mobile-title"><strong>{active === "History" ? "History" : "Video Studio"}</strong><span>{active === "History" ? "Generated and published batches" : "4 videos selected"}</span></div>{active === "Studio" ? <div className="mobile-steps">{[1, 2, 3].map((item) => <span key={item} className={step === item ? "is-active" : ""}>{item}</span>)}</div> : null}</header>
    <main className="mobile-content">{children}</main>
    <nav className="mobile-bottom-nav"><Link href="/mobile?view=customize" aria-current={active === "Studio" ? "page" : undefined}><Video size={19} /><span>Studio</span></Link><Link href="/mobile?view=history" aria-current={active === "History" ? "page" : undefined}><History size={19} /><span>History</span></Link></nav>
  </div>;
}
