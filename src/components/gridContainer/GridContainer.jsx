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
import Card from "../card/Card";

function GridContainer() {
  const [grid, setGrid] = useState([]);
  const { city } = useParams();

  useEffect(() => {
    setGrid([]);

    const db = getFirestore();

    const itemCollection = collection(db, "Acompanhantes");
    const collectionFiltered = query(
      collection(db, "Acompanhantes"),
      where("city", "==", `${city}`)
    );

    getDocs(!city ? itemCollection : collectionFiltered).then((snapshot) => {
      setGrid(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [city]);
  const dataCache = [
    "sin experiencia",
    "poca experiencia",
    "con experiencia",
    "mucha experiencia",
  ];
  const dataEtnia = ["loiras", "orientais", "morenas", "mulatas", "ruvias"];
  const dataIdade = ["18-25", "26-30", "31-35", "+35"];

  const [filters, setFilters] = useState({
    anal: true,
    sexoOralSemCamisinha: true,
    beijoNaBoca: true,
    beijoGrego: true,
  });
  const handleOnCheckbox = (e) => {
    // if (e.target.checked) {
    //   const gridFiltered = grid.filter((data) => data.tags === e.target.value);
    //   setGrid([...filters, gridFiltered]);
    // }
    // else {
    //   const gridFiltered = filters.filter(
    //     (data) => data.tags !== e.target.value
    //   );
    //   setGrid([...gridFiltered]);
    // }
    setFilters({ ...filters, [e.target.value]: e.target.checked });
  };
  return (
    <div className="super-container">
      <div className="filter-container">
        <div className="filter-dropdowns">
          <div className="cache">
            <input
              list="dataCache"
              onChange={(e) => setCache(e.target.value)}
              placeholder="Cache"
            />
            <datalist id="dataCache">
              {dataCache.map((op) => (
                <option>{op}</option>
              ))}
            </datalist>
          </div>
          <div className="etnia">
            <input
              list="dataEtnia"
              onChange={(e) => setEtnia(e.target.value)}
              placeholder="Etnia"
            />
            <datalist id="dataEtnia">
              {dataEtnia.map((op) => (
                <option>{op}</option>
              ))}
            </datalist>
          </div>
          <div className="idade">
            <input
              list="dataIdade"
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Idade"
            />
            <datalist id="dataIdade">
              {dataIdade.map((op) => (
                <option>{op}</option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="filter-checkbox">
          <div className="arriba">
            <div className="input-checkbox">
              <span>Anal</span>
              <input
                onChange={handleOnCheckbox}
                checked={filters.anal}
                type="checkbox"
                name="filters"
                value="anal"
                id="Anal"
              />
            </div>
            <div className="input-checkbox">
              <span>Sexo oral Sem camisinha</span>
              <input
                onChange={handleOnCheckbox}
                checked={filters.sexoOralSemCamisinha}
                type="checkbox"
                name="filters"
                value="sexoOralSemCamisinha"
                id="Sexo oral Sem camisinha"
              />
            </div>
          </div>
          <div className="abajo">
            <div className="input-checkbox">
              <span>Beijo na boca</span>
              <input
                onChange={handleOnCheckbox}
                checked={filters.beijoNaBoca}
                type="checkbox"
                name="filters"
                value="beijoNaBoca"
                id="Beijo na boca"
              />
            </div>
            <div className="input-checkbox">
              <span>Beijo grego</span>
              <input
                onChange={handleOnCheckbox}
                checked={filters.beijoGrego}
                type="checkbox"
                name="filters"
                value="beijoGrego"
                id="Beijo grego"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          {grid
            .filter((data) => filters[data.tags])
            .map((data) => (
              <Card key={data.id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default GridContainer;
