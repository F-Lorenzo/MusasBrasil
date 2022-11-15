import React, { useState, useEffect } from "react";
import {
  addDoc,
  setDoc,
  collection,
  getFirestore,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

function AcompanhanteCreation() {
  const [newUser, setNewUser] = useState({});

  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newUser.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newUser.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="lastName">Last name :</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={newUser.lastName || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="city">city :</label>
        <input
          type="city"
          id="city"
          name="city"
          value={newUser.city || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="idade">idade :</label>
        <input
          type="idade"
          id="idade"
          name="idade"
          value={newUser.idade || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="cache">cache :</label>
        <input
          type="cache"
          id="cache"
          name="cache"
          value={newUser.cache || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tags">tags :</label>
        <input
          type="tags"
          id="tags"
          name="tags"
          value={newUser.tags || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="etnia">etnia :</label>
        <input
          type="etnia"
          id="etnia"
          name="etnia"
          value={newUser.etnia || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="description">description :</label>
        <input
          type="textarea"
          id="description"
          name="description"
          value={newUser.description || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="apariencia">apariencia :</label>
        <input
          type="apariencia"
          id="apariencia"
          name="apariencia"
          value={newUser.apariencia || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="peso">peso :</label>
        <input
          type="peso"
          id="peso"
          name="peso"
          value={newUser.peso || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="busto">busto :</label>
        <input
          type="busto"
          id="busto"
          name="busto"
          value={newUser.busto || ""}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <label htmlFor="cintura">cintura :</label>
        <input
          type="cintura"
          id="cintura"
          name="cintura"
          value={newUser.cintura || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="cuadril">cuadril :</label>
        <input
          type="cuadril"
          id="cuadril"
          name="cuadril"
          value={newUser.cuadril || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="images">images :</label>
        <input
          accept="/images"
          type="file"
          id="images"
          name="images"
          value={newUser.images || ""}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default AcompanhanteCreation;
