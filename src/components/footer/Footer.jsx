import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.jpg";
import instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-container">
          <div className="logo-name">
            <div className="logo-footer">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="bussines-name">
              <h1>Musas Brasil</h1>
            </div>
          </div>
          <div className="copyright">
            <span>
              &copy; Copyright 2022 Musas Brasil,Brasil all rights reserved
            </span>
          </div>
        </div>
        {/* <div className="right-container">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vulputate, neque vitae facilisis ultricies, sapien nisi gravida
            justo, quis feugiat est ante sit amet neque. Pellentesque at dictum
            libero, nec posuere lacus. Suspendisse dapibus, ante id aliquam
            eleifend, felis nulla imperdiet ipsum, vel molestie nulla urna
            dictum leo. In sagittis odio nisi, sit amet elementum magna dapibus
            vel. Mauris auctor tellus sit amet blandit iaculis. Quisque
            consequat purus ut condimentum lacinia. Donec pretium, orci et
            consequat blandit, diam augue lobortis leo, vitae eleifend lorem
            urna et orci.
          </p>
          <ul className="list-icons">
            <li className="icon">
              <a>
                <img src={instagram} alt="" />
              </a>
            </li>
            <li className="icon">
              <a>
                <img src={instagram} alt="" />
              </a>
            </li>
            <li className="icon">
              <a>
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
