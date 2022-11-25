import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Navbar from "./components/navBar/Navbar.jsx";
import GridContainer from "./components/gridContainer/GridContainer";
import CardDetailContainer from "./components/cardDetailContainer/cardDetailContainer";
import Footer from "./components/footer/Footer";
import AcompanhanteCreation from "./components/admin/userCreation/AcompanhanteCreation";
import SignIn from "./components/admin/singIn/SignIn";

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
          <Route path="/Admin" element={<SignIn />} />
          <Route
            path="/createAcompanhante"
            element={<AcompanhanteCreation />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
