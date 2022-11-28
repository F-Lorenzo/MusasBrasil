import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import "./modifyUserCard.css";

function ModifyUserCard({ item }) {
  const navigate = useNavigate();

  const db = getFirestore();

  const handleDelete = (id) => {
    const userRef = doc(db, "Acompanhantes", id);
    deleteDoc(userRef);
    navigate("/adminPanel");
  };

  return (
    <div className="modify-user-card-container">
      {/* <div className="modify-user-card-img">{item.images}</div> */}
      <div className="modify-user-card-name">
        {item.name} {item.lastname}
      </div>
      <div className="modify-user-card-img">Acompanhante Id={item.id}</div>
      <div>
        {/* <button
          onClick={() => {
            navigate(`/update/${item.id}`);
          }}
        >
          Update
        </button> */}
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ModifyUserCard;
