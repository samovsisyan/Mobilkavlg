"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Logo  from "@/assets/logo";
import Location from "@/assets/location";
import { useBreakpoints } from "@/helpers/funtions";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isLg, isMd } = useBreakpoints();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the mobile menu when switching to desktop (>= md: 768px)
  useEffect(() => {
    // Guard for environments without window (SSR safety)
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
      if (matches) setOpen(false);
    };

    // Initial check
    if (mql.matches) setOpen(false);

    // Add listener with backward compatibility
    const listener = (e: MediaQueryListEvent) => handleChange(e);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", listener);
    } else {
      (mql as MediaQueryList & { addListener: (l: (e: MediaQueryListEvent) => void) => void }).addListener(listener);
    }

    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", listener);
      } else {
        (mql as MediaQueryList & { removeListener: (l: (e: MediaQueryListEvent) => void) => void }).removeListener(listener);
      }
    };
  }, []);

  const links = [
    { href: "/services", label: "Услуги" },
    { href: "/works", label: "Наши работы" },
    { href: "/reviews", label: "Отзывы" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "Контакты" },
  ];

  function setContactOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
    ModalsControls
  }

  return (
    <div className="sticky top-0 md:top-0 md:pt-4 md:pb-4 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-6 justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-900">
            <Logo />
          </Link>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <div className="flex items-center gap-3">
          {isMd && <Button
            href="/contacts"
            variant="primary"
            size="responsive"
            className="min-w-[180px]"
            onClick={() => setContactOpen(true)}
          >
            {isLg ? "Связаться с нами" : "Связаться"}
          </Button>}

            {/* Mobile hamburger */}
            <button
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded hover:bg-slate-100 transition-colors"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-4 w-6">
                <span
                  className={
                    "absolute left-0 top-0 h-0.5 w-full bg-slate-900 transition-transform duration-300 " +
                    (open ? "translate-y-1.5 rotate-45" : "")
                  }
                />
                <span
                  className={
                    "absolute left-0 top-1.5 h-0.5 w-full bg-slate-900 transition-opacity duration-300 " +
                    (open ? "opacity-0" : "opacity-100")
                  }
                />
                <span
                  className={
                    "absolute left-0 top-3 h-0.5 w-full bg-slate-900 transition-transform duration-300 " +
                    (open ? "-translate-y-1.5 -rotate-45" : "")
                  }
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={
          "hidden md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
        role="presentation"
      />

      {/* Mobile panel */}
      {open &&
      <aside
        id="mobile-menu-panel"
        className={
          "md:hidden fixed right-0 top-0 z-50 h-dvh w-[88%] max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out " +
          (open ? "translate-x-0" : "translate-x-full")
        }
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <button aria-label="Закрыть меню" className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-slate-100" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <div className="px-6 pb-24 pt-2 overflow-y-auto h-[calc(100dvh-4rem)]">
          <nav className="space-y-4 text-lg">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block text-black hover:text-blue-700" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <hr className="my-6 border-slate-200" />

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <Location />
              <div>
                <div>Волгоград, ул. Елецкая 8/1</div>
                <a className="text-slate-900 hover:text-blue-700" href="tel:+79093843434">+7 (909) 384-34-34</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Location />
              <div>
                <div>Волгоград, ул. Качинцев д.95</div>
                <a className="text-slate-900 hover:text-blue-700" href="tel:+79093843334">+7 (909) 384-33-34</a>
              </div>
            </div>
          </div>
          <Button href="/contacts" variant="primary" size="lg" className="mt-6 w-full">
            Связаться с нами
          </Button>
        </div>
      </aside>}
    </div>
  );
}

