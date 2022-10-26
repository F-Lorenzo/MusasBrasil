import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="list-items">
        <li>
          <Link to="/Cidade">CIDADE</Link>
        </li>
        <li>
          <Link to="/Acompanhantes">ACOMPANHANTES</Link>
        </li>
        {/* redirije a link de wpp */}
        <li className="anunciar">ANUNCIAR</li>
      </ul>
    </div>
  );
}

export default Navbar;
