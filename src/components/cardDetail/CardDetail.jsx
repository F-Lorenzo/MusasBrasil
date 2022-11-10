import React from "react";
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
            <div className="description">
              <ul>
                <li>apariencia:</li>
                <li>peso:</li>
                <li>Idade:</li>
                <li>Busto:</li>
                <li>Cintura:</li>
                <li>Cuadril:</li>
              </ul>
            </div>
            <div className="contact-button">
              <button>112233445566</button>
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
