import React, { useState, useEffect } from "react";
import Link from "react-router-dom";
import "./adminPanel.css";
import SingIn from "./singIn/SignIn";
import AcompanhanteCreation from "./userCreation/OldAcompanhanteCreation";

function AdminPanel() {
  return (
    <div>
      <Link to="/createAcompanhante">
        <button>create Acompanhante</button>
      </Link>
      <Link to="/deleteAcompanhante">
        <button>Sereach acompanhante</button>
      </Link>
    </div>
  );
}

export default AdminPanel;
