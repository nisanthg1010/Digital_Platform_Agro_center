import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

//paste database from firebase tolls id
const firebaseConfig = {
  apiKey: "AIzaSyA1Bb3F4qsw9x_am3CWHywpsy7tWAwMLPY",
  authDomain: "newni-d38b7.firebaseapp.com",
  databaseURL: "https://newni-d38b7-default-rtdb.firebaseio.com",
  projectId: "newni-d38b7",
  storageBucket: "newni-d38b7.appspot.com",
  messagingSenderId: "449426874349",
  appId: "1:449426874349:web:d51a96c89f0bb86e7991e4",
  measurementId: "G-TPYZQS1N8T"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, auth, storage }
