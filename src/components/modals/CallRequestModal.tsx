"use client";

import * as React from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Phone from "@/assets/phone";
import { useModal } from "@/context/ModalContext";

type CallRequestModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  title?: React.ReactNode;
  // Optional context to log/submit along with the form
  context?: {
    cat?: string;
    problem?: { value: string; label: string } | null;
  };
};

export default function CallRequestModal({ open, onClose, onSuccess, title = <span>Оставьте заявку на звонок</span>, context }: CallRequestModalProps) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      // reset on close
      setName("");
      setPhone("");
      setIsSubmitted(false);
    }
  }, [open]);

  const { showSuccessModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', { name, phone, ...context });
      
      // Close this modal and show success modal
      onClose();
      showSuccessModal(
        'Заявка принята!', 
        'Наш специалист свяжется с вами в ближайшее время.'
      );
      onSuccess?.();
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="-mt-1 mb-4 text-center text-slate-600">
        Мы перезвоним вам в течение 5 минут и проконсультируем по всем вопросам
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block">
          <span className="sr-only">Ваше имя</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Ваше имя"
            className="w-full rounded-[12px] border border-slate-300 px-3 py-3 outline-none focus:border-blue-600"
            required
            disabled={isLoading}
          />
        </label>
        <label className="block">
          <span className="sr-only">Телефон</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-[12px] border border-slate-300 px-3 py-3 outline-none focus:border-blue-600"
            required
            disabled={isLoading}
          />
        </label>
        <Button 
          type="submit" 
          variant="primary" 
          size="md" 
          className="w-full" 
          leftIcon={isLoading ? null : <Phone fill="#fff" width={18} height={18}/>}
          disabled={isLoading}
        >
          {isLoading ? 'Отправка...' : 'Заказать звонок'}
        </Button>
        <p className="text-center text-xs text-slate-500">
          Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
        </p>
      </form>
    </Modal>
  );
}
