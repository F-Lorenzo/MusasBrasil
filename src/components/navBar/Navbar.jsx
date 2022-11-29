import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/logo.jpg";
import Home from "../../assets/Home.png";

function Navbar() {
  const navigate = useNavigate();
  const [serach, setSerach] = useState(false);
  useEffect(() => {
    setSerach(false);
  }, []);
  const handleState = () => {
    setSerach(true);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="list-items">
        <li className="list-items-Home">
          <Link to={"/"}>
            <img src={Home} alt="Home" />
          </Link>
        </li>
        <li>
          {serach == true ? (
            <input
              className="list-items-link-input"
              type="text"
              list="dataCiudades"
              onChange={(e) =>
                e.target.value === ""
                  ? navigate("/")
                  : navigate(`/Acompanhantes/${e.target.value}`)
              }
            />
          ) : (
            <button className="list-items-cidade" onClick={handleState}>
              <span>CIDADES</span>
            </button>
          )}
        </li>
        <li>
          <Link to="/Acompanhantes" className="list-items-link">
            ACOMPANHANTES
          </Link>
        </li>
        {/* redirije a link de wpp */}
        <a href={"https://wa.me/numeroDePedro"} target="_blank">
          <li className="anunciar">ANUNCIAR</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
