import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/admin/AdminPanel";
import Navbar from "./components/navBar/Navbar.jsx";
import CardGrid from "./components/cardGrid/CardGrid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardGrid />} />
          <Route path="/Acompanhante" element={<CardGrid />} />
          <Route path="/Acompanhante:Cidade" element={<CardGrid />} />
          <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
