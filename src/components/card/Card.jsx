import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="card-container">
      <Link to={"/Acompanhante/" + data.id}>
        <div className="card-img">
          <img src={data.images} alt="" />
        </div>
        <div className="info"></div>
        <div className="tags-container">
          {/* <ul className="tags-list">
          {data.tags.map((tag) => (
            <li>{tag.value}</li>
          ))} */}
          <li>Tag1</li>
          <li>tag2</li>
          <li>tag3</li>
          {/* </ul> */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
