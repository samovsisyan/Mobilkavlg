"use client";

import Apple from "@/assets/logos/apple";
import Google from "@/assets/logos/google";
import Acer from "@/assets/logos/acer";
import Huawei from "@/assets/logos/huawei";
import Motorola from "@/assets/logos/motorola";
import HP from "@/assets/logos/hp";
import Lenovo from "@/assets/logos/lenovo";
import Image from "next/image";
import { useState } from "react";
import Samsung from "@/assets/logos/samsung";
import Xiaomi from "@/assets/logos/xiaomi";

const logos = [
  { key: "apple", Comp: Apple },
  { key: "samsung", Comp: Samsung },
  { key: "xiaomi", Comp: Xiaomi },
  { key: "huawei", Comp: Huawei },
  { key: "motorola", Comp: Motorola },
  { key: "google", Comp: Google },
  { key: "lenovo", Comp: Lenovo },
  { key: "hp", Comp: HP },
  { key: "acer", Comp: Acer },
];
const baseImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Работы 1",
  },
  {
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop",
    alt: "Работы 2",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Работы 3",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Работы 4",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Работы 5",
  },
];

export default function WorksShowcase() {
  const [count, setCount] = useState(5);

  const images = baseImages.concat(
    baseImages.map((img, i) => ({ ...img, alt: img.alt + " копия " + (i + 1) }))
  );

  const visible = images.slice(0, count);

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Наши работы</h2>

        {/* Logos row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-500">
          {logos.map(({ key, Comp }) => (
            <span key={key} className="text-2xl sm:text-3xl font-semibold opacity-70">
              <Comp />
            </span>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First row - two items */}
          {visible.slice(0, 2).map((img) => (
            <div key={img.src + "a"} className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-slate-200">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          ))}

          {/* Second row - one wide item */}
          <div className="sm:col-span-2 relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-xl bg-slate-200">
            <Image src={visible[2]?.src || images[2].src} alt={visible[2]?.alt || images[2].alt} fill className="object-cover" sizes="100vw" />
          </div>

          {/* Third row - two items */}
          {visible.slice(3, 5).map((img) => (
            <div key={img.src + "b"} className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-slate-200">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          ))}

          {/* Before/After collage */}
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-slate-200">
              <Image src={images[1].src} alt="До" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-900">ДО</span>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-slate-200">
              <Image src={images[4].src} alt="После" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className="absolute right-3 bottom-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-900">ПОСЛЕ</span>
            </div>
          </div>
        </div>

        {/* Load more */}
        {count < images.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setCount((c) => Math.min(c + 4, images.length))}
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
