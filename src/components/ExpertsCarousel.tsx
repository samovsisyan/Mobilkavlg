"use client";

import Image from "next/image";
import { useRef } from "react";

const experts = [
  {
    name: "Иван Петров",
    exp: "Сертифицированный специалист по ремонту смартфонов и планшетов, с 8+ лет стажем",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Алексей Сидоров",
    exp: "Сертифицированный специалист по ремонту смартфонов и планшетов, с 8+ лет стажем",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Максим Иванов",
    exp: "Сертифицированный специалист по ремонту смартфонов и планшетов, с 8+ лет стажем",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Сергей Смирнов",
    exp: "Сертифицированный специалист по ремонту смартфонов и планшетов, с 8+ лет стажем",
    photo:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ExpertsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.clientWidth;
    track.scrollBy({ left: dir * Math.round(width * 0.9), behavior: "smooth" });
  };

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Познакомьтесь с нашими экспертами</h2>

        <div className="relative mt-6">
          {/* Buttons */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Назад"
              className="pointer-events-auto hidden md:grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Вперёд"
              className="pointer-events-auto hidden md:grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
            >
              ›
            </button>
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex gap-4 sm:gap-5 pr-4">
              {experts.map((e, idx) => (
                <div
                  key={idx}
                  className="relative snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[48%] lg:w-[32%] rounded-2xl overflow-hidden bg-slate-200"
                >
                  <div className="relative h-72 sm:h-80 md:h-96">
                    <Image src={e.photo} alt={e.name} fill className="object-cover" sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 85vw" />
                  </div>

                  {/* Info card overlay */}
                  <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-semibold text-slate-900">{e.name}</div>
                    <p className="mt-1 text-sm text-slate-600">
                      {e.exp.split("8+")[0]}
                      <span className="font-semibold text-blue-700">8+ лет стажем</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
