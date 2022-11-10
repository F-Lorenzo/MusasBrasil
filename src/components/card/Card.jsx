import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  const tags = data.tags;
  return (
    <div className="card-container">
      <Link to={"/Acompanhante/" + data.id}>
        <div className="card-img">
          <img src={data.images} alt="" />
        </div>
        <div className="info"></div>
        <div>{data.name}</div>
        <div className="tags-container">
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Card;
