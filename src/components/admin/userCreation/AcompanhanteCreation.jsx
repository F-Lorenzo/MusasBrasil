import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.js";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  idade: "",
  description: "",
  tags: "",
  images: "",
};

function AcompanhanteCreation() {
  const [form, setForm] = useState(initialState);
  const { name, lastName, phone, idade, description, tags } = form;
  const [file, setFile] = useState(null);

  useEffect(() => {
    // const name = new Date().getTime() + "-" + file.name;
    const storageRef = ref(storage, `images/${name}`);
    const uploadTask = uploadBytes(storageRef, file);
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setForm({ ...form, images: downloadURL });
    });
  }, [file]);

  const handleChange = () => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    e.preventDefault();
    try {
      const db = getFirestore();
      const dbRef = collection(db, "Acompanhantes");
      addDoc(dbRef, { ...form });
    } catch (e) {
      console.log(e);
    }
    console.log(form, "form");
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
          multiple
          accept="/images"
          type="file"
          id="images"
          name="images"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button type="submit">crear Acompanhante</button>
    </form>
  );
}

export default AcompanhanteCreation;
