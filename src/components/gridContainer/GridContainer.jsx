import React from "react";
import { useParams } from "react-router-dom";
import CardGrid from "../cardGrid/CardGrid";

function GridContainer() {
  const { Cidade } = useParams();
  return (
    <div>
      <CardGrid props={props} />
    </div>
  );
}

export default GridContainer;
