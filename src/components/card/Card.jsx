import React from "react";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src="" alt="" />
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
    </div>
  );
}

export default Card;
