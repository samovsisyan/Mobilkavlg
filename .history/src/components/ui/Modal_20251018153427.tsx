"use client";

import * as React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, title, children, className = 'max-w-xl' }: ModalProps) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        aria-hidden
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={
            `relative w-full max-w-[95vw] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-200 ${className}`
          }
        >
          <button
            aria-label="Закрыть модальное окно"
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded hover:bg-slate-100 text-slate-500"
            onClick={onClose}
          >
            ✕
          </button>

          {title ? (
            <div className="pt-8 px-8 pb-0 md:pt-10 md:px-10">
              <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
            </div>
          ) : null}

          <div className="p-8 md:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
