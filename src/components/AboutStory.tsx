import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">История MobilkaVLG</h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: narrative */}
          <div className="text-slate-700 leading-7">
            <p className="font-semibold text-slate-900">
              MobilkaVLG появилась как ответ на разочарование в недобросовестных ремонтных сервисах и необоснованно завышенных ценах.
            </p>
            <p className="mt-4">
              Наш основатель сам прошёл через опыт, когда дорогие устройства приходилось отдавать в мастерские без прозрачности, гарантии и профессионализма.
            </p>
            <p className="mt-4">
              В 2019 году мы решили изменить рынок ремонта в Волгограде и создали сервис, основанный на трёх ключевых принципах:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold text-slate-900">Честность</span> — полная прозрачность на каждом этапе,
              </li>
              <li>
                <span className="font-semibold text-slate-900">Качество</span> — только проверенные запчасти и опытные мастера,
              </li>
              <li>
                <span className="font-semibold text-slate-900">Забота</span> — уважение к каждому клиенту и его устройству.
              </li>
            </ul>
            <p className="mt-4">
              Сегодня <span className="font-semibold text-slate-900">Mobilka.vlg — самый надёжный сервис ремонта в Волгограде</span>, и наши ценности остаются неизменными. Мы относимся к каждому устройству так, словно оно наше собственное, а к каждому клиенту — как к члену семьи.
            </p>
          </div>

          {/* Right: collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-72 sm:h-80 md:h-96 overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                alt="Команда и мастерская"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative h-40 sm:h-44 md:h-56 overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                alt="Команда"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-40 sm:h-44 md:h-56 overflow-hidden rounded-2xl bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-9b3f0d6e5df4?q=80&w=1200&auto=format&fit=crop"
                alt="Мастер за работой"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
