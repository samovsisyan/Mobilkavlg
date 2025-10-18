"use client";

import * as React from "react";
import Modal from "@/components/ui/Modal";
import Location from "@/assets/location";
import Facebook from "@/assets/social/facebook";
import VK from "@/assets/social/vk";
import Telegram from "@/assets/social/telegram";
import WhatsApp from "@/assets/social/whatsApp";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={<span>Связаться с нами</span>}>
      <p className="mb-6 mt-1 text-center text-slate-600">Выберите удобный способ связи с нами.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-start gap-2 text-slate-900 font-semibold">
            <span aria-hidden className="pt-0.5"><Location /></span>
            <span>Волгоград, ул. Елецкая 8/1</span>
          </div>
          <a href="tel:+79093843434" className="mt-2 inline-block text-blue-700 hover:underline">
            +7 (909) 384-34-34
          </a>
        </div>
        <div>
          <div className="flex items-start gap-2 text-slate-900 font-semibold">
            <span aria-hidden className="pt-0.5"><Location /></span>
            <span>Волгоград, ул. Качинцев д.95</span>
          </div>
          <a href="tel:+79093843334" className="mt-2 inline-block text-blue-700 hover:underline">
            +7 (909) 384-33-34
          </a>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {[{label: "Whatsapp", icon: WhatsApp}, {label: "Telegram", icon: Telegram}].map((s) => (
          <button
            key={s.label}
            aria-label={s.label}
            className="h-10 w-10 rounded-md bg-white text-slate-800 grid place-items-center border border-slate-200 hover:bg-slate-50"
          >
            <span aria-hidden>{s.icon}</span>
          </button>
        ))}
        
      </div>
    </Modal>
  );
}
