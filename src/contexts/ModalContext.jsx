import React, { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext({
  isContactOpen: false,
  openContactModal: () => {},
  closeContactModal: () => {},
  isShowreelOpen: false,
  openShowreelModal: () => {},
  closeShowreelModal: () => {},
});

export function ModalProvider({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const openContactModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsContactOpen(true);
  };

  const closeContactModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsContactOpen(false);
  };

  const openShowreelModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsShowreelOpen(true);
  };

  const closeShowreelModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsShowreelOpen(false);
  };

  // Synchronize body scroll
  useEffect(() => {
    if (isContactOpen || isShowreelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isContactOpen, isShowreelOpen]);

  // Global window fallback so inline onclick or external clicks still work
  useEffect(() => {
    window.openContactModal = openContactModal;
    window.closeContactModal = closeContactModal;
    window.openShowreelModal = openShowreelModal;
    window.closeShowreelModal = closeShowreelModal;

    const handleGlobalClick = (e) => {
      const trigger = e.target.closest('a[href="#contact"], a[href$="#contact"], .contact-trigger');
      if (trigger) {
        e.preventDefault();
        openContactModal();
      }
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        closeContactModal();
        closeShowreelModal();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isContactOpen,
        openContactModal,
        closeContactModal,
        isShowreelOpen,
        openShowreelModal,
        closeShowreelModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
