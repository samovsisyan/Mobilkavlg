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
      {is}
    </div>
  );
}

