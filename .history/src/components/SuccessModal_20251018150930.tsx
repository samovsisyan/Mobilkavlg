"use client";

import * as React from "react";
import Modal from "@/components/ui/Modal";
import SuccessModalIllustration from "@/assets/successModalIllustration";
import Phone from "@/assets/phone";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-green-100 text-green-700">
          <SuccessModalIllustration />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-bold text-slate-900">Запрос успешно отправлен!</h3>
        <p className="mt-2 text-slate-600">Спасибо за Вашу заявку!</p>

        <div className="mt-6 w-full">
          <div className="mx-auto max-w-md rounded-xl bg-slate-100 px-4 py-3 text-slate-700 flex items-center justify-center gap-2">
            <span aria-hidden className="text-blue-700">
              <Phone />
            </span>
            <span className="font-medium">Ожидаемое время звонка: 10-15 минут</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
