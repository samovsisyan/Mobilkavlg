"use client";

import Button from "@/components/ui/Button";

export default function ErrorHero() {
  return (
    <section className="relative isolate overflow-hidden bg-blue-700 py-16 sm:py-20 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="relative inline-block">
            <span className="block text-[120px] sm:text-[160px] md:text-[200px] font-extrabold leading-none opacity-95 select-none">
              404
            </span>
            <span className="pointer-events-none absolute left-6 top-6 hidden text-[120px] sm:text-[160px] md:text-[200px] font-extrabold leading-none opacity-20 sm:block">
              404
            </span>
          </div>

          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Ой! Что-то пошло не так...
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/85 text-sm sm:text-base">
            Ой-ой, похоже, мы не можем найти страницу, которую вы ищете. Попробуйте вернуться на главную
            страницу или свяжитесь с нами для получения дополнительной информации.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="/" variant="primary" className="min-w-40 bg-white text-blue-700 hover:bg-white/90">
              На главную
            </Button>
            <Button href="/contacts" variant="ghost" className="min-w-40 border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
