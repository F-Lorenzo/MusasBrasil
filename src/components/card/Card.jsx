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
          <p>here goes the image</p>
        </div>
        <div className="info"></div>
        <div>{data.name}</div>
        <div className="card-description">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
        </div>
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
