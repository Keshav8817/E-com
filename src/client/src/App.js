import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
