import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";

function UserUpdate() {
  const [form, setForm] = useState({});
  const [userId, setUserId] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = query(
      collection(db, "Acompanhantes"),
      where("uid", "==", `${userId}`)
    );
    const findUsers = await getDocs(userRef);
    findUsers.forEach(async (Acompanhante) => {
      const getUser = doc(db, "Acompanhantes", Acompanhante.uid);
      await updateDoc(getUser, {
        name: form.name,
        lastName: form.lastName,
        phone: form.phone,
        idade: form.idade,
        description: form.description,
        tags: form.tags,
        images: form.images,
      });
    });
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
        <label htmlFor="tags">tags :</label>
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

export default UserUpdate;
