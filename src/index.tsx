import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
