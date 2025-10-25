import Button from "@/components/ui/Button";
import Check from "@/assets/check";
import Radio from "@/assets/radio";
import Telephone from "@/assets/telephone";
import Notebook from "@/assets/notebook";
import Display from "@/assets/display";
import { useModal } from "@/context/ModalContext";

type RepairCard = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  brands: string[];
  services: string[];
  priceFrom: string;
};

const data: RepairCard[] = [
  {
    icon: <Telephone />,
    title: "Телефоны",
    subtitle: "Полный комплекс услуг по ремонту смартфонов",
    brands: ["iPhone", "Samsung", "Xiaomi", "Huawei", "Honor", "Redmi"],
    services: [
      "Замена экрана (LCD, OLED, AMOLED)",
      "Замена батареи и оптимизация",
      "Устранение повреждений и очистка от воды",
      "Ремонт камеры и динамика",
      "Замена батареи и оптимизация",
      "Программные проблемы и разблокировка",
      "Микропайка материнской платы",
      "Замена заднего стекла",
    ],
    priceFrom: "от 500 ₽",
  },
  {
    icon: <Notebook />,
    title: "Ноутбуки",
    subtitle: "Профессиональный ремонт ноутбуков",
    brands: ["MacBook", "Asus", "Lenovo", "HP", "Dell", "Acer"],
    services: [
      "Замена экрана и ремонт петель",
      "Замена клавиатуры и тачпада",
      "Диагностика и ремонт материнской платы",
      "Чистка и ремонт системы охлаждения",
      "Обновление оперативной памяти и SSD",
      "Ремонт разъёма питания",
      "Восстановление биоса и установка ОС",
      "Удаление вирусов и оптимизация",
    ],
    priceFrom: "от 800 ₽",
  },
  {
    icon: <Display />,
    title: "Настольные компьютеры",
    subtitle: "Спектр услуг по диагностике и ремонту ПК",
    brands: ["Custom PC", "Asus", "Lenovo", "HP", "Dell"],
    services: [
      "Диагностика и тестирование оборудования",
      "Замена компонентов и модернизация",
      "Ремонт и замена блока питания",
      "Ремонт материнской платы и процессора",
      "Диагностика видеокарты",
      "Оптимизация и очистка системы",
      "Услуги по восстановлению данных",
      "Проблемы с сетью и подключением",
    ],
    priceFrom: "от 1500 ₽",
  },
  {
    icon: <Radio />,
    title: "Ремонт телевизоров и мониторов",
    subtitle: "Ремонт дисплеев всех типов",
    brands: ["Samsung", "LG", "Philips", "TCL", "Xiaomi"],
    services: [
      "Ремонт LCD и LED экранов",
      "Замена OLED-панели",
      "Ремонт платы блока питания",
      "Замена основной платы",
      "Ремонт и замена подсветки",
      "Проблемы с программным обеспечением Смарт ТВ",
      "Услуги по восстановлению данных",
      "Ремонт порта и подключение",
    ],
    priceFrom: "от 2000 ₽",
  },
];

function BrandBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-slate-900">
      {label}
    </span>
  );
}

export default function FullRepair() {
  const { openCallRequestModal } = useModal();

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Полный ремонт всего</h2>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {data.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-700 text-xl" aria-hidden>
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-sm text-slate-500">{card.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {card.brands.map((b) => (
                  <BrandBadge key={b} label={b} />
                ))}
              </div>

              <div className="mt-5">
                <div className="font-semibold text-slate-900 mb-2">Наши услуги включают:</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {card.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
                <div className="text-blue-700 font-bold text-2xl flex justify-end">{card.priceFrom}</div>

              <div className="mt-5 flex items-center justify-between">
                <Button variant="primary" size="md" className="px-4 py-3 text-sm  w-full"
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  openCallRequestModal();
                }}
                >
                  Заказать ремонт
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
