import React from "react";
import { Link } from "react-router-dom";
import "./CardDetail.css";
function CardDetail({ Acompanhante }) {
  const tags = Acompanhante.tags;
  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <div className="gallery-description">
          <div className="gallery"></div>
          <div className="description-container">
            <div className="name-container">
              {Acompanhante.name} {Acompanhante.lastname}
            </div>
            <div className="description">{Acompanhante.description}</div>
            <div className="contact-button">
              <Link
                to={`https://api.whatsapp.com/send/?phone=55${Acompanhante.phone}&text&type=phone_number&app_absent=0`}
              >
                <button>send me a message</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="tags-list">
          {tags === undefined ? (
            <span></span>
          ) : (
            tags.map((tag) => <li>{tag}</li>)
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
