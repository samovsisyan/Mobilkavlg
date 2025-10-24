"use client";

import * as React from "react";
import Button from "@/components/ui/Button";
import ContactModal from "@/components/modals/ContactModal";
import SuccessModal from "@/components/SuccessModal";
import Modal from "@/components/ui/Modal";
import CallRequestModal from "@/components/modals/CallRequestModal";

export default function ModalsControls() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [genericOpen, setGenericOpen] = React.useState(false);
  const [callRequestOpen, setCallRequestOpen] = React.useState(false);

  const closeAll = () => {
    setContactOpen(false);
    setSuccessOpen(false);
    setGenericOpen(false);
    setCallRequestOpen(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" onClick={() => setContactOpen(true)}>Открыть ContactModal</Button>
        <Button variant="secondary" onClick={() => setSuccessOpen(true)}>Открыть SuccessModal</Button>
        <Button variant="ghost" onClick={() => setGenericOpen(true)}>Открыть Modal (generic)</Button>
        <Button variant="ghost" onClick={() => setCallRequestOpen(true)}>Открыть CallRequestModal</Button>
        <Button variant="ghost" onClick={closeAll}>Закрыть все</Button>
      </div>

      {/* Contact */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Success */}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />

      {/* Call Request */}
      <CallRequestModal
        open={callRequestOpen}
        onClose={() => setCallRequestOpen(false)}
        onSuccess={() => setSuccessOpen(true)}
      />

      {/* Generic example */}
      <Modal open={genericOpen} onClose={() => setGenericOpen(false)} title={<span>Пример модального окна</span>}>
        <p className="text-slate-600">Это базовый пример содержимого. Используйте этот Modal для любых задач.</p>
        <div className="mt-4 flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setGenericOpen(false)}>Отмена</Button>
          <Button variant="primary" onClick={() => setGenericOpen(false)}>Ок</Button>
        </div>
      </Modal>
    </div>
  );
}
