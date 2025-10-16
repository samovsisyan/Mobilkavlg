"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Услуги" },
  { href: "/works", label: "Наши работы" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center lg:gap-12 md:gap-6 lg:text-[16px] md:text-[14px] sm:text-[12px]">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              "text-16 font-medium text-center align-middle transition-colors " +
              (active ? "text-[#132C7E]" : "text-black hover:text-black/60")
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
