import Image from "next/image";

export type AboutMediaProps = {
  images?: { src: string; alt?: string }[];
};

export default function AboutMedia({
  images = [
    { src: "/next.svg", alt: "placeholder 1" },
    { src: "/vercel.svg", alt: "placeholder 2" },
    { src: "/globe.svg", alt: "placeholder 3" },
    { src: "/window.svg", alt: "placeholder 4" },
  ],
}: AboutMediaProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900">Наша команда и сервис</h2>
        <p className="mt-2 text-center text-slate-600">Фото из мастерской, работы и команды.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src={img.src}
                alt={img.alt ?? `about-${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
