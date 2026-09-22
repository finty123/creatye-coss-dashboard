import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mic, Paperclip, Plus } from "lucide-react";

const boardMedia = ["creator-cafe.png", "creator-home.png", "creator-skincare.png", "creator-home.png"] as const;

export function CommandCenter() {
  return <div className="luma-home">
    <section className="luma-create" aria-labelledby="create-title">
      <h1 id="create-title">What do you want to create today?</h1>
      <div className="luma-composer">
        <textarea aria-label="Describe what you want to create" placeholder="Describe what you want to create..." />
        <span className="luma-composer-dot" aria-hidden="true" />
        <footer>
          <button type="button" aria-label="Attach media"><Paperclip size={20} strokeWidth={1.6} /></button>
          <button type="button" aria-label="Use voice"><Mic size={18} strokeWidth={1.7} /></button>
          <button className="luma-send" type="button" aria-label="Send prompt"><ArrowUp size={18} strokeWidth={2} /></button>
        </footer>
      </div>
    </section>

    <section className="luma-board-grid" aria-label="Boards">
      <Link href="/studio?step=customize" className="luma-new-board"><Plus size={52} strokeWidth={1.5} /><span>⇧⌘O</span><strong>Create board</strong></Link>
      <Link href="/studio?step=customize" className="luma-board-card">
        <header><strong>CREATYE CAMPAIGNS</strong><span>Edited moments ago</span></header>
        <div className="luma-board-collage">{boardMedia.map((src, index) => <span key={`${src}-${index}`}><Image src={`/media/${src}`} alt="" fill sizes="150px" /></span>)}</div>
      </Link>
    </section>
  </div>;
}
