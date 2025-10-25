'use client';

import dynamic from 'next/dynamic';
import { ModalProvider } from '@/context/ModalContext';

const ContactModalWrapper = dynamic(
  () => import('@/components/modals/ContactModalWrapper'),
  { ssr: false }
);

export default function ModalProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      {children}
      <ContactModalWrapper />
    </ModalProvider>
  );
}
