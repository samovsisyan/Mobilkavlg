"use client";

import Star from "@/assets/star";
import Avito from "@/assets/avito";
import Yandex from "@/assets/yandex";
import TwoGIS from "@/assets/twoGIS";
import { useMemo, useState } from "react";

type Source = "all" | "2GIS" | "Avito" | "Яндекс";

const REVIEWS = Array.from({ length: 18 }).map((_, i) => {
  const source = (i % 3 === 0 ? "2GIS" : i % 3 === 1 ? "Avito" : "Яндекс") as Exclude<Source, "all">;
  const icon = source === "2GIS" ? <TwoGIS /> : source === "Avito" ? <Avito /> : <Yandex />;
  return {
    name: "Анна Петрова",
    text:
      "Отличный сервис! Заменили экран на iPhone за 2 часа. Работает как новый, гарантию дали на год. Рекомендую!",
    source,
    icon,
    date: "2 недели назад",
  };
});

export default function ReviewsWall() {
  const [filter, setFilter] = useState<Source>("all");
  const [count, setCount] = useState(6);

  const filtered = useMemo(
    () => (filter === "all" ? REVIEWS : REVIEWS.filter((r) => r.source === filter)),
    [filter]
  );

  const visible = filtered.slice(0, count);

  const filters: Source[] = ["all", "2GIS", "Avito", "Яндекс"];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Клиенты о нас</h2>

        {/* Filter row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setCount(6);
              }}
              className={
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                (filter === f
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50")
              }
            >
              {f === "all" ? "Посмотреть все" : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visible.map((r, idx) => (
            <article key={idx} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white text-sm font-bold" aria-hidden>
                  АП
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500 whitespace-nowrap">{r.date}</div>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2 text-slate-400" aria-hidden>
                <span className="text-xl leading-none">“</span>
                <p className="-mt-1 text-slate-600 leading-6">{r.text}</p>
              </div>

              <div className="mt-5 text-slate-900 font-semibold flex items-center gap-2">
                <span aria-hidden className="inline-flex items-center">{r.icon}</span>
                <span className="sr-only">{r.source}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {visible.length < filtered.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setCount((c) => Math.min(c + 6, filtered.length))}
              className="rounded-[10px] border border-blue-600 px-6 py-3 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
            >
              Загрузить больше
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
