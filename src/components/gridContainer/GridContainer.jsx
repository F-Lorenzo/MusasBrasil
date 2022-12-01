import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import CardGrid from "../cardGrid/CardGrid";
import "./gridContainer.css";
import Card from "../card/Card";

function GridContainer() {
  const [grid, setGrid] = useState([]);
  const navigate = useNavigate();
  const [lowIndex, setLowIndex] = useState(0);
  const [highIndex, setHighIndex] = useState(6);
  const [page, setPage] = useState(1);
  const { city, etnia } = useParams();

  const pagIncrement = () => {
    setLowIndex(lowIndex + 6);
    setHighIndex(highIndex + 6);
    setPage(page + 1);
  };

  const pagDecrement = () => {
    setLowIndex(lowIndex - 6);
    setHighIndex(highIndex - 6);
    page < 1 ? setPage(1) : setPage(page - 1);
  };

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "Acompanhantes");

    if (etnia) {
      const collectionFilteredEtnia = query(
        collection(db, "Acompanhantes"),
        where("etnia", "==", `${etnia}`)
      );

      getDocs(collectionFilteredEtnia).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.sort(() => 0.5 - Math.random()));
      });
    } else if (city) {
      const collectionFilteredCity = query(
        collection(db, "Acompanhantes"),
        where("city", "==", `${city}`)
      );

      getDocs(collectionFilteredCity).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.sort(() => 0.5 - Math.random()));
      });
    } else {
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.sort(() => 0.5 - Math.random()));
      });
    }
  }, [city, etnia]);
  const dataCache = [
    "Cache",
    " R$ 0 - R$ 150,00",
    " R$151,00 - R$250,00",
    " R$251,00 - R$ 400,00",
    "R$ 400+",
  ];
  const dataEtnia = ["branca", "oriental", " negra", "mulata"];
  const dataIdade = ["Idade", "18-24", "24-30", "30+"];
  const dataCacheFilter = (e) => {
    if (e === "Cache") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.sort(() => 0.5 - Math.random()));
      });
    }
    if (e === " R$ 0 - R$ 150,00") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.filter((data) => data.cache <= 150));
      });
    }
    if (e === " R$151,00 - R$250,00") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(
          fullGrid.filter((data) => data.cache > 150 && data.cache <= 250)
        );
      });
    }
    if (e === " R$251,00 - R$ 400,00") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(
          fullGrid.filter((data) => data.cache > 250 && data.cache <= 400)
        );
      });
    }
    if (e === "R$ 400+") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.filter((data) => data.cache > 400));
      });
    }
  };
  const dataCacheIdade = (e) => {
    if (e === "Idade") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.sort(() => 0.5 - Math.random()));
      });
    }
    if (e === "18-24") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.filter((data) => data.idade <= 24));
      });
    }
    if (e === "24-30") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.filter((data) => data.idade > 24 && data.idade <= 30));
      });
    }
    if (e === "30+") {
      const db = getFirestore();
      const itemCollection = collection(db, "Acompanhantes");
      getDocs(itemCollection).then((snapshot) => {
        const fullGrid = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGrid(fullGrid.filter((data) => data.idade > 30));
      });
    }
  };

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
          <div className="etnia">
            <select
              list="dataEtnia"
              onChange={(e) => navigate(`/Acompanhantese/${e.target.value}`)}
              placeholder="Etnia"
            >
              <option hidden>Etnia</option>
              {dataEtnia.map((op) => (
                <option value={op}>{op}</option>
              ))}
            </select>
          </div>
          <div className="cache">
            <select
              list="dataCache"
              onChange={(e) => dataCacheFilter(e.target.value)}
              placeholder="Cache"
            >
              <option hidden>Cache</option>
              {dataCache.map((op) => (
                <option value={op}>{op}</option>
              ))}
            </select>
          </div>
          <div className="idade">
            <select
              list="dataIdade"
              onChange={(e) => dataCacheIdade(e.target.value)}
              placeholder="Idade"
            >
              <option hidden>Idade</option>
              {dataIdade.map((op) => (
                <option value={op}>{op}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-checkbox">
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
      <div className="container">
        <div className="grid">
          {filters.anal == false &&
          filters.sexoOralSemCamisinha == false &&
          filters.beijoNaBoca == false &&
          filters.beijoGrego == false &&
          filters.podolatria == false
            ? grid
                // .slice(lowIndex, highIndex)
                .map((data) => <Card key={data.id} data={data} />)
            : grid
                // .slice(lowIndex, highIndex)
                .filter((data) => filters[data.tags])
                .map((data) => <Card key={data.id} data={data} />)}
        </div>
        {/* <div className="page-handler">
          <button
            className="button-page"
            disabled={lowIndex <= 0}
            onClick={pagDecrement}
          >
            back page
          </button>
          <div className="page-number">{page}</div>
          <button className="button-page" onClick={pagIncrement}>
            next page
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default GridContainer;
