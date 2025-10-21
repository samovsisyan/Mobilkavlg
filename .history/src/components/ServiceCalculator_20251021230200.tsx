"use client";

import Select from "react-select";
import type { SingleValue } from "react-select";
import { useMemo, useState } from "react";
import Calculator from "@/assets/calculator";
import YellowPhone from "@/assets/yellowPhone";
import YellowNotebook from "@/assets/yellowNotebook";
import YellowPS from "@/assets/yellowPS";
import YellowTV from "@/assets/yellowTV"; 
import SuccessModal from "@/components/SuccessModal";
import CallRequestModal from "@/components/CallRequestModal";

type Option = { value: string; label: string };

const categories = [
  { key: "phones", label: "Телефоны", icon: <YellowPhone /> },
  { key: "laptops", label: "Ноутбуки", icon: <YellowNotebook /> },
  { key: "computers", label: "Компьютеры", icon: <YellowPS /> },
  { key: "tv", label: "ТВ и Мониторы", icon: <YellowTV /> },
] as const;

const optionsMap: Record<typeof categories[number]["key"], Option[]> = {
  phones: [
    { value: "screen", label: "Замена экрана" },
    { value: "battery", label: "Замена батареи" },
    { value: "water", label: "После воды" },
    { value: "camera", label: "Камера/динамик" },
  ],
  laptops: [
    { value: "hinges", label: "Петли/корпус" },
    { value: "keyboard", label: "Клавиатура" },
    { value: "cooling", label: "Чистка системы охлаждения" },
    { value: "ssd", label: "Установка SSD/ОЗУ" },
  ],
  computers: [
    { value: "psu", label: "Блок питания" },
    { value: "gpu", label: "Видеокарта" },
    { value: "os", label: "Переустановка ОС" },
    { value: "data", label: "Восстановление данных" },
  ],
  tv: [
    { value: "backlight", label: "Подсветка" },
    { value: "panel", label: "Панель/матрица" },
    { value: "mainboard", label: "Main board" },
    { value: "port", label: "Порты/разъёмы" },
  ],
};

export default function ServiceCalculator() {
  const [cat, setCat] = useState<typeof categories[number]["key"]>("phones");
  const [problem, setProblem] = useState<Option | null>(null);
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const options = useMemo(() => optionsMap[cat], [cat]);

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Поиск услуг и калькулятор цен</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Получите мгновенную оценку стоимости ремонта вашего устройства. Выберите устройство и проблему ниже.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <div className="mx-auto grid place-items-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-blue-700 text-2xl" aria-hidden>
              <Calculator />
            </div>
          </div>

          <h3 className="mt-4 text-center text-xl sm:text-2xl font-bold text-slate-900">Найдите свою услугу</h3>

          {/* Category buttons */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((c) => {
              const active = c.key === cat;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setCat(c.key);
                    setProblem(null);
                  }}
                  className={
                    "flex items-center gap-3 flex-col sm:flex-row sm:flex-col rounded-xl border px-4 py-3 text-left transition-colors " +
                    (active
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 hover:bg-slate-50")
                  }
                >
                  <span className="grid h-10 w-10 place-items-center text-xl" aria-hidden>
                    {c.icon}
                  </span>
                  <span className="font-medium text-slate-900">{c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Problem select */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-900">В чем проблема?</label>
            <Select<Option, false>
              instanceId="service-problem-select"
              placeholder="Выберите тип проблемы"
              options={options}
              value={problem}
              onChange={(v: SingleValue<Option>) => setProblem(v)}
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderRadius: 12,
                  borderColor: state.isFocused ? "#2563eb" : "#e2e8f0",
                  boxShadow: "none",
                  padding: 2,
                  minHeight: 48,
                  ":hover": { borderColor: state.isFocused ? "#2563eb" : "#cbd5e1" },
                }),
                menu: (base) => ({ ...base, borderRadius: 12, overflow: "hidden" }),
              }}
              classNames={{
                placeholder: () => "text-slate-400",
              }}
            />
          </div>

          {/* Result preview */}
          {/* <div className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-slate-700">
            {problem ? (
              <div>
                Предварительная оценка для «{categories.find((c) => c.key === cat)?.label} → {problem.label}»: от
                <span className="font-semibold text-blue-700"> 500 ₽</span>. Точная стоимость после диагностики.
              </div>
            ) : (
              <div>Выберите проблему, чтобы увидеть ориентировочную стоимость ремонта.</div>
            )}
          </div> */}

          {/* CTA: open modal */}
          {/* <div className="mt-6 flex justify-center">
            <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
              Заказать звонок
            </Button>
          </div> */}
        </div>
      </div>

      {/* Call Request Modal (reusable) */}
      <CallRequestModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => setSuccessOpen(true)}
        context={{ cat, problem }}
      />

      {/* Success Modal */}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </section>
  );
}
