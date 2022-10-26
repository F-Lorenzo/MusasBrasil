import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/admin/AdminPanel";
import Navbar from "./components/navBar/Navbar.jsx";
import GridContainer from "./components/gridContainer/GridContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GridContainer />} />
          <Route path="/Acompanhante" element={<GridContainer />} />
          <Route path="/Acompanhante:Cidade" element={<GridContainer />} />
          <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
