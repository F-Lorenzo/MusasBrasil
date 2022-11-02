import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import CardGrid from "../cardGrid/CardGrid";
import "./gridContainer.css";

function GridContainer() {
  const [grid, setGrid] = useState([]);
  const { Cidade } = useParams();

  useEffect(() => {
    setGrid([]);

    const db = getFirestore();

    const itemCollection = collection(db, "Acompanhantes");
    const collectionFiltered = query(
      collection(db, "Acompanhantes"),
      where("city", "==", `${Cidade}`)
    );

    getDocs(!Cidade ? itemCollection : collectionFiltered).then((snapshot) => {
      setGrid(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [Cidade]);
  return (
    <div className="super-container">
      <CardGrid grid={grid} />
    </div>
  );
}

export default GridContainer;
