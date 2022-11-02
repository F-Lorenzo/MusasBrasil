import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHhmpU7ZtSIhjiO7i8phtRtEjtbaXy8PE",
  authDomain: "musasbrasil-9ce3c.firebaseapp.com",
  databaseURL: "https://musasbrasil-9ce3c-default-rtdb.firebaseio.com",
  projectId: "musasbrasil-9ce3c",
  storageBucket: "musasbrasil-9ce3c.appspot.com",
  messagingSenderId: "190314195923",
  appId: "1:190314195923:web:bf839103c55c83fd069d26",
  measurementId: "G-069GBYWEPE",
};

const app = initializeApp(firebaseConfig);
export const db = getAuth(app);
const analytics = getAnalytics(app);

export default db;
