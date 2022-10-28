import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.jpg";
import Home from "../../assets/Home.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="list-items">
        <li className="list-items-Home">
          <Link to="/">
            <img src={Home} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/Cidade" className="list-items-link">
            CIDADES
          </Link>
        </li>
        <li>
          <Link to="/Acompanhantes" className="list-items-link">
            ACOMPANHANTES
          </Link>
        </li>
        {/* redirije a link de wpp */}
        <li className="anunciar">ANUNCIAR</li>
      </ul>
    </div>
  );
}

export default Navbar;
