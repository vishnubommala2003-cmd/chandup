import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProviders from './providers/AppProviders';
import IntroScreen from '../shared/components/IntroScreen';
import AppRouter from './router';

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <IntroScreen />
        <AppRouter />
      </AppProviders>
    </BrowserRouter>
  );
}

