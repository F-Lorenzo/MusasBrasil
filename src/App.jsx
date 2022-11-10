import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import db from "../firebase.config.js";
import AdminPanel from "./components/admin/AdminPanel";
import Navbar from "./components/navBar/Navbar.jsx";
import GridContainer from "./components/gridContainer/GridContainer";
import CardDetailContainer from "./components/cardDetailContainer/cardDetailContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GridContainer />} />
          <Route path="/Acompanhante" element={<GridContainer />} />
          <Route path="/Acompanhante/:Id" element={<CardDetailContainer />} />
          <Route path="/Acompanhante/:city" element={<GridContainer />} />
          <Route path="/Admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
