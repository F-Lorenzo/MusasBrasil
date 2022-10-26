import React from "react";
import { useParams } from "react-router-dom";

function CardGrid() {
  const { Cidade } = useParams();
  return <div>CardGrid</div>;
}

export default CardGrid;
