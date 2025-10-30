'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  // Contact Modal
  isContactOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
  
  // Call Request Modal
  isCallRequestOpen: boolean;
  callRequestServiceTitle: string;
  openCallRequestModal: (serviceTitle?: string) => void;
  closeCallRequestModal: () => void;
  
  // Success Modal
  isSuccessOpen: boolean;
  successModalTitle: string;
  successModalMessage: string;
  showSuccessModal: (title?: string, message?: string) => void;
  closeSuccessModal: () => void;

  // Services Modal
  isServicesOpen: boolean;
  currentServiceSlug: string;
  openServicesModal: (slug?: string) => void;
  closeServicesModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  // Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false);
  // Call Request Modal State
  const [isCallRequestOpen, setIsCallRequestOpen] = useState(false);
  const [callRequestServiceTitle, setCallRequestServiceTitle] = useState('');
  // Success Modal State
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successModalTitle, setSuccessModalTitle] = useState('Успешно!');
  const [successModalMessage, setSuccessModalMessage] = useState('Ваш запрос успешно отправлен!');

  // Contact Modal Handlers
  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);
  
  // Call Request Modal Handlers
  const openCallRequestModal = (serviceTitle = '') => {
    setCallRequestServiceTitle(serviceTitle);
    setIsCallRequestOpen(true);
  };
  const closeCallRequestModal = () => {
    setIsCallRequestOpen(false);
    setCallRequestServiceTitle('');
  };
  
  // Success Modal Handlers
  const showSuccessModal = (title = 'Успешно!', message = 'Ваш запрос успешно отправлен!') => {
    setSuccessModalTitle(title);
    setSuccessModalMessage(message);
    setIsSuccessOpen(true);
  };
  
  const closeSuccessModal = () => setIsSuccessOpen(false);

  // Services Modal State
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentServiceSlug, setCurrentServiceSlug] = useState('phones');

  // Services Modal Handlers
  const openServicesModal = (slug = 'phones') => {
    setCurrentServiceSlug(slug);
    setIsServicesOpen(true);
  };
  const closeServicesModal = () => setIsServicesOpen(false);

  return (
    <ModalContext.Provider value={{
      // Contact Modal
      isContactOpen,
      openContactModal,
      closeContactModal,
      
      // Call Request Modal
      isCallRequestOpen,
      callRequestServiceTitle,
      openCallRequestModal,
      closeCallRequestModal,
      
      // Success Modal
      isSuccessOpen,
      successModalTitle,
      successModalMessage,
      showSuccessModal,
      closeSuccessModal,
      // Services Modal
      isServicesOpen,
      currentServiceSlug,
      openServicesModal,
      closeServicesModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
