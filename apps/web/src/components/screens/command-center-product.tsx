"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUp, Mic, Paperclip, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@creatye/ui";
import { ProductModal, ProductNotice } from "@/components/product/product-ui";

const boardMedia = ["creator-cafe.png", "creator-home.png", "creator-skincare.png", "creator-home.png"] as const;

export function CommandCenterProduct() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [create, setCreate] = useState(false);
  const [notice, setNotice] = useState("");

  function submit() {
    if (!prompt.trim()) {
      setNotice("Descreva primeiro o que você quer criar.");
      return;
    }
    router.push("/studio?step=select");
  }

  return <div className="luma-home">
    <section className="luma-create">
      <h1>O que você quer criar hoje?</h1>
      <div className="luma-composer">
        <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} aria-label="Descreva o que você quer criar" placeholder="Descreva o que você quer criar..." />
        <span className="luma-composer-dot" />
        <footer>
          <button type="button" aria-label="Anexar mídia" onClick={() => setNotice("Seletor de mídia aberto para o próximo projeto.")}><Paperclip size={20} /></button>
          <button type="button" aria-label="Usar voz" onClick={() => setNotice("Entrada por voz preparada para integração.")}><Mic size={18} /></button>
          <button className="luma-send" type="button" aria-label="Enviar prompt" onClick={submit}><ArrowUp size={18} /></button>
        </footer>
      </div>
    </section>

    <section className="luma-board-grid">
      <button type="button" className="luma-new-board" onClick={() => setCreate(true)}><Plus size={52} /><span>Novo</span><strong>Criar projeto</strong></button>
      <Link href="/studio?step=customize" className="luma-board-card"><header><strong>CAMPANHAS CREATYE</strong><span>Editado há poucos minutos</span></header><div className="luma-board-collage">{boardMedia.map((src, index) => <span key={`${src}-${index}`}><Image src={`/media/${src}`} alt="" fill sizes="150px" /></span>)}</div></Link>
    </section>

    {create ? <ProductModal title="Criar novo projeto" description="Escolha por onde começar." onClose={() => setCreate(false)}><button className="dashboard-create-option" type="button" onClick={() => router.push("/studio?step=select")}><Sparkles size={18} /><span><strong>Video Studio</strong><small>Crie variações de vídeo.</small></span><ArrowRight size={14} /></button><button className="dashboard-create-option" type="button" onClick={() => router.push("/image-studio")}><Plus size={18} /><span><strong>Image Studio</strong><small>Gere imagens para campanhas.</small></span><ArrowRight size={14} /></button><Button variant="quiet" onClick={() => setCreate(false)}>Cancelar</Button></ProductModal> : null}
    {notice ? <ProductNotice onClose={() => setNotice("")}>{notice}</ProductNotice> : null}
  </div>;
}
