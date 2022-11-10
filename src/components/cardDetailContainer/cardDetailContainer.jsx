import React, { useEffect, useState } from "react";
import CardDetail from "../cardDetail/CardDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function cardDetailContainer() {
  const [Acompanhante, setAcompanhante] = useState({});
  const { Id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const response = doc(db, "Acompanhantes", `${Id}`);
    getDoc(response).then((snapshot) => {
      snapshot.exists()
        ? setAcompanhante({ id: snapshot.id, ...snapshot.data() })
        : setAcompanhante(undefined);
    });
  }, [Id]);

  return <CardDetail Acompanhante={Acompanhante} />;
}

export default cardDetailContainer;
