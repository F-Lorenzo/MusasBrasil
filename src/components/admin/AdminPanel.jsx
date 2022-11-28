import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ModifyUserCard from "./userUpdate/ModifyUserCard";
import { UserAuth } from "../../context/AuthContext";
import "./adminPanel.css";

export default function AdminPanel() {
  const [grid, setGrid] = useState([]);
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "Acompanhantes");
    getDocs(itemCollection).then((snapshot) => {
      const fullGrid = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGrid(fullGrid);
    });
  }, []);
  const findUser = (e) => {
    const db = getFirestore();
    const collectionFiltered = query(
      collection(db, "Acompanhantes"),
      where("name", "==", `${e.target.value}`)
    );
    getDocs(collectionFiltered).then((snapshot) => {
      const fullGrid = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGrid(fullGrid);
    });
  };
  return (
    <div className="admin-panel-container">
      <div className="log-out">
        <button onClick={handleSignOut} className="logout-button">
          Logout
        </button>
      </div>
      <div>
        <Link to="/createAcompanhante">
          <button className="button-create-acompanhante">
            create Acompanhante
          </button>
        </Link>
      </div>
      <div>
        <label htmlFor="name">serach Acompanhante by name</label>
        <input onChange={findUser} type="text" id="name" name="name" />
      </div>
      <div>
        {grid.map((item) => (
          <ModifyUserCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
