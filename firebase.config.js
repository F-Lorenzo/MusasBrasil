import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: import.meta.env.API_KEY,
  // authDomain: import.meta.env.AUTH_DOMAIN,
  // databaseURL: import.meta.env.DATABASE_URL,
  // projectId: import.meta.env.PROJECT_ID,
  // storageBucket: import.meta.env.STORAGE_BUCKET_URL,
  // messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  // appId: import.meta.env.APP_ID,
  // measurementId: import.meta.env.MEASUREMENT_ID,
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
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, db };
