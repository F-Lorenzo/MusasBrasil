import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.js";
import { db } from "../../../../firebase.config.js";

function OldAcompanhanteCreation() {
  const [form, setForm] = useState({});
  const {
    name,
    lastname,
    city,
    etnia,
    phone,
    idade,
    description,
    tags,
    cache,
  } = form;
  const [file, setFile] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const acompanhanteRef = query(
      collection(db, "Acompanhantes"),
      where("id", "==", `${id}`)
    );
    getDocs(acompanhanteRef).then((snapshot) => {
      (snapshot) => {
        setForm(
          snapshot.docs({
            id: doc.id,
            ...doc.data(),
          })
        );
      };
    });
  }, [id]);

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

      navigate("/adminPanel");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const storageRef = ref(storage, `images/${name}`);
    const uploadTask = uploadBytes(storageRef, file);
    getDownloadURL(ref(storage, `images/${name}`)).then((downloadURL) => {
      setForm({ ...form, tags: [tags], images: downloadURL });
    });
  }, [file]);

  return id ? (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last name :</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">phone :</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">city :</label>
        <input
          type="city"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="idade">idade :</label>
        <input
          type="idade"
          id="idade"
          name="idade"
          value={idade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tags">tags:</label>
        <input
          type="tags"
          id="tags"
          name="tags"
          value={tags}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="etnia">etnia :</label>
        <input
          type="etnia"
          id="etnia"
          name="etnia"
          value={etnia}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cache">cache :</label>
        <input
          type="cache"
          id="cache"
          name="cache"
          value={cache}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">description :</label>
        <textarea
          rows="10"
          cols="50"
          type="description"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="images">image :</label>
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
  ) : (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
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
        <label htmlFor="lastname">Last name :</label>
        <input
          required
          type="text"
          id="lastname"
          name="lastname"
          value={form.lastname || ""}
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
          value={form.tags || []}
          onChange={handleChange}
        />
      </div>
      <div>
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
        <label htmlFor="cache">cache :</label>
        <input
          required
          type="cache"
          id="cache"
          name="cache"
          value={cache}
          onChange={handleChange}
        />
      </div>
      <div>
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
        <label htmlFor="images">image :</label>
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

export default OldAcompanhanteCreation;
