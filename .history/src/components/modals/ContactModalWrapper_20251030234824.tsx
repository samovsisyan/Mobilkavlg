'use client';

import dynamic from 'next/dynamic';
import { useModal } from '@/context/ModalContext';

const ContactModal = dynamic(
  () => import('./ContactModal'),
  { ssr: false }
);

const CallRequestModal = dynamic(
  () => import('./CallRequestModal'),
  { ssr: false }
);

const SuccessModal = dynamic(
  () => import('./SuccessModal'),
  { ssr: false }
);

const ServicesModal = dynamic(
  () => import('./ServicesModal'),
  { ssr: false }
);

export default function ContactModalWrapper() {
  const { 
    isContactOpen, 
    isCallRequestOpen, 
    isSuccessOpen,
    isServicesOpen,
    closeContactModal, 
    closeCallRequestModal,
    closeSuccessModal,
    closeServicesModal
  } = useModal();
  
  return (
    <>
      <ContactModal open={isContactOpen} onClose={closeContactModal} />
      <CallRequestModal open={isCallRequestOpen} onClose={closeCallRequestModal} />
      <SuccessModal open={isSuccessOpen} onClose={closeSuccessModal} />
      <ServicesModal open={isServicesOpen} onClose={closeServicesModal} />
    </>
  );
}
