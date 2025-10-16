import Logo from "@/assets/logo";
import OwlWeb from "@/assets/owlWeb";
import Link from "next/link";
import LogoFooter from "@/assets/logoFooter";
import Facebook from "@/assets/facebook";
import VK from "@/assets/vk";
import LinkedIn from "@/assets/linkedin";

export default function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Top section: columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo */}
          <div className="order-1 md:order-1 flex items-start">
            <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
              <LogoFooter />
            </Link>
          </div>

          {/* Contacts + Address (stacked in one column) */}
          <div className="order-2 md:order-2">
            <h4 className="mb-3 text-base font-semibold text-white">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-white/90" href="tel:+79093843434">+7 (909) 384-34-34</a>
              </li>
              <li>
                <a className="hover:text-white/90" href="tel:+79093843334">+7 (909) 384-33-34</a>
              </li>
            </ul>

            <h4 className="mt-6 mb-3 text-base font-semibold text-white">Адрес</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Волгоград, ул. Елецкая 8/1</li>
              <li>Волгоград, ул. Качинцев д.95</li>
            </ul>
          </div>

          {/* Links */}
          <div className="order-3 md:order-3">
            <h4 className="mb-3 text-base font-semibold text-white">Ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-white/90" href="/services">Услуги</Link></li>
              <li><Link className="hover:text-white/90" href="/works">Наши работы</Link></li>
              <li><Link className="hover:text-white/90" href="/reviews">Отзывы</Link></li>
              <li><Link className="hover:text-white/90" href="/about">О нас</Link></li>
              <li><Link className="hover:text-white/90" href="/contacts">Контакты</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="order-4 md:order-4">
            <h4 className="mb-3 text-base font-semibold text-white">Следите за нами!</h4>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", icon: <Facebook /> },
                { label: "VK", icon: <VK /> },
                { label: "LinkedIn", icon: <LinkedIn /> },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-lg hover:bg-white/20 transition-colors"
                  title={s.label}
                >
                  <span aria-hidden>{s.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-slate-700" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 text-xs sm:text-[13px] md:flex-row md:items-center md:justify-between">
          <p className="text-slate-400">© {new Date().getFullYear()} Mobilka.vlg. Все права защищены.</p>

          <div className="flex items-center gap-3 text-slate-300">
            <Link href="#" className="hover:text-white/90">Политика конфиденциальности</Link>
            <span className="text-slate-600">|</span>
            <Link href="#" className="hover:text-white/90">Пользовательское соглашение</Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wide"><OwlWeb/></span>
          </div>
          <p className="mt-2">Сайт создан компанией owlweb.ru</p>
        </div>
      </div>
    </footer>
  );
}

