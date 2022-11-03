import React from "react";
import { Link } from "react-router-dom";
import Filter from "./filters/Filter";
import Card from "../card/Card";
import "./cardGrid.css";

function CardGrid({ grid }) {
  return (
    <div className="container">
      <Filter />
      {/* <Link to={}> */}
      <div className="grid">
        {grid.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      {/* </Link> */}
    </div>
  );
}

export default CardGrid;
