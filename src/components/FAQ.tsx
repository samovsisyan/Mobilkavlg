"use client";

import ArrowDown from "@/assets/arrowDown";
import { useState } from "react";

const qas = [
  {
    q: "Сколько времени занимает ремонт?",
    a: "В среднем от 30 минут до 2 часов — всё зависит от модели устройства и характера поломки. Точные сроки мастер сообщит после диагностики.",
  },
  {
    q: "Используете ли оригинальные запчасти?",
    a: "Да, мы используем оригинальные или премиальные аналоги с гарантией качества.",
  },
  {
    q: "Сколько стоит диагностика?",
    a: "Диагностика — бесплатна. Стоимость ремонта согласовывается после диагностики.",
  },
  {
    q: "Предоставляете ли вы гарантию на ремонт?",
    a: "Да, гарантия до 12 месяцев в зависимости от вида работ и запчастей.",
  },
  {
    q: "Что делать, если после ремонта возникли проблемы?",
    a: "Обратитесь к нам любым удобным способом — мы быстро решим вопрос по гарантии.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Часто задаваемые вопросы</h2>

        <div className="mt-8 sm:mt-10 space-y-4">
          {qas.map((item, idx) => {
            const isOpen = open === idx;
            const contentId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white shadow-[0_5px_12px_rgba(0,0,0,0.04)]"
              >
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <span
                    className={
                      "transition-transform duration-300 text-slate-500 " +
                      (isOpen ? "rotate-180" : "rotate-0")
                    }
                    aria-hidden
                  >
                    <ArrowDown />
                  </span>
                </button>
                {/* Animated content */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out px-4 sm:px-5 " +
                    (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 sm:pb-5 text-slate-600 leading-6">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
