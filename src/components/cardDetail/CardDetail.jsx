import React from "react";
import { Link } from "react-router-dom";
import "./CardDetail.css";
import whatsappIcon from "../../assets/whatsapp.png";
function CardDetail({ Acompanhante }) {
  const tags = Acompanhante.tags;
  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <div className="gallery-description">
          <div className="gallery">
            <img
              className="img"
              src={Acompanhante.images}
              alt={Acompanhante.name}
            />
          </div>
          <div className="description-container">
            <div className="name-container">
              {Acompanhante.name} {Acompanhante.lastname}
            </div>
            <div className="description">{Acompanhante.description}</div>
            <div className="cache">$R{Acompanhante.cache}</div>
            <div className="contact-button">
              <a href={"https://wa.me/" + Acompanhante.phone} target="_blank">
                send me a message
              </a>
              <img src={whatsappIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="tags-list">
          {tags === undefined ? (
            <span></span>
          ) : (
            tags.map((tag) => <li className="tags">{tag}</li>)
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
