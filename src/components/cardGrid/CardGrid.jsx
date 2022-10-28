import React from "react";
import Card from "../card/Card";

function CardGrid({ props }) {
  return <div>{<Card props={props} />}</div>;
}

export default CardGrid;
