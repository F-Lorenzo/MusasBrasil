import React, { useState, useEffect } from "react";
import "./filter.css";

function filter() {
  const [cache, setCache] = useState("");
  const [etnia, setEtnia] = useState("");
  const [idade, setIdade] = useState("");

  const [filters, setFilters] = useState({
    anal: false,
    sexoOralSemCamisinha: false,
    beijoNaBoca: false,
    beijoGrego: false,
  });

  const dataCache = [
    "sin experiencia",
    " poca experiencia",
    "con experiencia",
    "mucha experiencia",
  ];
  const dataEtnia = ["loiras", "orientais", "morenas", "mulatas", "ruvias"];
  const dataIdade = ["18-25", "26-30", "31-35", "+35"];

  const handleOnCheckbox = (e) => {
    console.log(e.target.value);
  };
  return (
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
              type="checkbox"
              name="Anal"
              value="Anal"
              id="Anal"
            />
          </div>
          <div className="input-checkbox">
            <span>Sexo oral Sem camisinha</span>
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="Sexo oral Sem camisinha"
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
              type="checkbox"
              name="Beijo na boca"
              value="beijoNaBoca"
              id="Beijo na boca"
            />
          </div>
          <div className="input-checkbox">
            <span>Beijo grego</span>
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="Beijo grego"
              value="beijoGrego"
              id="Beijo grego"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default filter;
