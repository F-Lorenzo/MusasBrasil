import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  const tags = data.tags;
  return (
    <div className="card-container">
      <Link to={"/Acompanhante/" + data.id}>
        <div className="card-img">
          <img className="img" src={data.images} alt={data.name} />
        </div>
        <div className="info"></div>
        <div className="card-name">
          {data.name} {data.lastname}
        </div>
        <div className="card-description">{data.description}</div>
        <div className="tags-container">
          {tags.slice(0, 1).map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
      </Link>
    </div>
  );
}

export default Card;
