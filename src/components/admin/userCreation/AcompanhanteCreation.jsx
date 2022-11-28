import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.js";

function AcompanhanteCreation() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  let urlDescarga;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore();
      const dbRef = collection(db, "Acompanhantes");
      addDoc(dbRef, { ...form });

      // navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };
  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        {" "}
        <label htmlFor="name">Name :</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="lastName">Last name :</label>
        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">phone :</label>
        <input
          required
          type="phone"
          id="phone"
          name="phone"
          value={form.phone || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="city">city :</label>
        <input
          required
          type="city"
          id="city"
          name="city"
          value={form.city || ""}
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
          value={form.idade || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tags">tags:</label>
        <input
          required
          type="tags"
          id="tags"
          name="tags"
          value={form.tags || ""}
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
          value={form.etnia || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="description">description :</label>
        <textarea
          required
          rows="5"
          cols="30"
          type="description"
          id="description"
          name="description"
          value={form.description || ""}
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
          value={form.images || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit">crear Acompanhante</button>
    </form>
  );
}

export default AcompanhanteCreation;
