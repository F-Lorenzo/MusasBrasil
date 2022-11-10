import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./cardGrid.css";

function CardGrid({ grid }) {
  // const initialState = grid;
  // const [cardList, setCardList] = useState(initialState);

  // console.log(initialState, "grid");
  // console.log(cardList, "cardlist");
  // const [cache, setCache] = useState("");
  // const [etnia, setEtnia] = useState("");
  // const [idade, setIdade] = useState("");

  // const [filters, setFilters] = useState({
  //   anal: false,
  //   sexoOralSemCamisinha: false,
  //   beijoNaBoca: false,
  //   beijoGrego: false,
  // });

  // const dataCache = [
  //   "sin experiencia",
  //   "poca experiencia",
  //   "con experiencia",
  //   "mucha experiencia",
  // ];
  // const dataEtnia = ["loiras", "orientais", "morenas", "mulatas", "ruvias"];
  // const dataIdade = ["18-25", "26-30", "31-35", "+35"];

  // const handleOnCheckbox = (e) => {
  //   setFilters({
  //     ...filters,
  //     [e.target.value]: e.target.checked,
  //   });
  //   if (e.target.checked) {
  //     const gridFiltered = grid.filter((data) => data.tags === e.target.value);
  //     setCardList([...filters, gridFiltered]);
  //   } else {
  //     const gridFiltered = filters.filter(
  //       (data) => data.tags !== e.target.value
  //     );
  //     setCardList([...gridFiltered]);
  //   }
  // };

  return (
    // <div className="container">
    //   <div className="grid">
    //     {grid.map((data) => (
    //       <Card key={data.id} data={data} />
    //     ))}
    //   </div>
    // </div>
    <div></div>
  );
}

export default CardGrid;
