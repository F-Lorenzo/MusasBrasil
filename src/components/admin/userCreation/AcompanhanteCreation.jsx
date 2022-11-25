import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, getFirestore, doc } from "firebase/firestore";

function AcompanhanteCreation() {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

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
      const dbRef = doc(db, "Acompanhantes");
      setDoc(dbRef, ...form);

      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        {" "}
        <label htmlFor="name">Name :</label>
        <input
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
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName || ""}
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
        <label htmlFor="tags">tags :</label>
        <input
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
        <input
          type="textarea"
          id="description"
          name="description"
          value={form.description || ""}
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
          value={form.apariencia || ""}
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
