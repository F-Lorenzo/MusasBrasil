import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Navbar from "./components/navBar/Navbar.jsx";
import GridContainer from "./components/gridContainer/GridContainer";
import CardDetailContainer from "./components/cardDetailContainer/cardDetailContainer";
import Footer from "./components/footer/Footer";
import AcompanhanteCreation from "./components/admin/userCreation/OldAcompanhanteCreation";
import SignIn from "./components/admin/singIn/SignIn";
// import AdminPanel from "./components/admin/AdminPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<GridContainer />} />
          <Route path="/Acompanhante" element={<GridContainer />} />
          <Route path="/Acompanhante/:Id" element={<CardDetailContainer />} />
          <Route
            path="/Acompanhante/:city?/:cache?/:idade?/:etnia?"
            element={<CardDetailContainer />}
          />
          <Route path="/SingIn" element={<SignIn />} />
          {/* <Route path="/AdminPanel" element={<AdminPanel />} /> */}
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
