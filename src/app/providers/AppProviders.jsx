import React from 'react';
import { IntroProvider } from '../../contexts/IntroContext';
import { ModalProvider } from '../../contexts/ModalContext';

export default function AppProviders({ children }) {
  return (
    <IntroProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </IntroProvider>
  );
}

