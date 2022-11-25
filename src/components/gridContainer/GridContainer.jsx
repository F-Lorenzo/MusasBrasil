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
    const db = getFirestore();

    const itemCollection = collection(db, "Acompanhantes");
    const collectionFiltered = query(
      collection(db, "Acompanhantes"),
      where("city", "==", `${city}`)
    );
    getDocs(!city ? itemCollection : collectionFiltered).then((snapshot) => {
      const fullGrid = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(
        "🚀 ~ file: GridContainer.jsx ~ line 31 ~ fullGrid ~ fullGrid",
        fullGrid
      );
      setGrid(fullGrid);
    });

    console.log(grid, "use");
  }, [city]);
  console.log(grid);
  const dataCache = [
    " R$ 0 - R$ 150,00",
    " R$150,00 - R$250,00",
    " R$250,00 - R$ 400,00",
    "R$ 400+",
  ];
  const dataEtnia = ["Brancas", "orientais", " Negras", "mulatas"];
  const dataIdade = ["18-24", "24-30", "30+"];

  const [filters, setFilters] = useState({
    anal: false,
    sexoOralSemCamisinha: false,
    beijoNaBoca: false,
    beijoGrego: false,
    podolatria: false,
  });
  const handleOnCheckbox = (e) => {
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
            <div className="input-checkbox">
              <span>podolatria</span>
              <input
                onChange={handleOnCheckbox}
                checked={filters.podolatria}
                type="checkbox"
                name="filters"
                value="podolatria"
                id="podolatria"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          {filters.anal == false &&
          filters.sexoOralSemCamisinha == false &&
          filters.beijoNaBoca == false &&
          filters.beijoGrego == false &&
          filters.podolatria == false
            ? grid.map((data) => <Card key={data.id} data={data} />)
            : grid
                .filter((data) => filters[data.tags])
                .map((data) => <Card key={data.id} data={data} />)}
        </div>
      </div>
    </div>
  );
}

export default GridContainer;
