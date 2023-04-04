import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import { Contact } from "./Pages/Contact";

import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
