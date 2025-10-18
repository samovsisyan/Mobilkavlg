"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import YellowPhone from "@/assets/yellowPhone";
import YellowLocation from "@/assets/yellowLocation";
import YellowTime from "@/assets/yellowTime";

export default function ContactHero({ imageUrl = bg.src }: AboutHeroProps) {
  const items = [
    {
      title: "Позвоните",
      desc: "Свяжитесь с нами",
      icon: YellowPhone,
      cta: { label: "Позвонить", href: "tel:+79093843434" },
    },
    {
      title: "Напишите",
      desc: "Быстрый ответ",
      icon: YellowTime,
      cta: { label: "Написать", href: "/contacts" },
    },
    {
      title: "Посетите нас",
      desc: "Волгоград, ул. Елецкая 8/1",
      icon: YellowLocation,
      cta: { label: "На карте", href: "/contacts" },
    },
    {
      title: "Новая локация! 🎉",
      desc: "Волгоград, ул Качинцев 95",
      icon: YellowLocation,
      cta: { label: "На карте", href: "/contacts" },
    },
  ] as const;

  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
       <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden
        />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-blue-400">Здесь начинается</span> <span className="text-white">решение</span>
          <br className="hidden sm:block" />
          <span className="text-white">вашей проблемы</span>
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} className="bg-white/10 backdrop-blur border-white/30 text-white">
              <div className="flex flex-col h-full justify-center align-center items-center">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow-400/90 text-xl" aria-hidden>
                        <item.icon />
                    </div>
                    <div className="text-lg font-semibold text-center">{item.title}</div>
                    <div className="text-sm text-center text-white/80">{item.desc}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button href={item.cta.href} variant="ghost" className="w-full border border-white/60 text-white hover:bg-white/10">
                    {item.cta.label}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
