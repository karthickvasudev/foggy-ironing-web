import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../constants/Constants";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
const app = initializeApp(firebaseConfig);
const FoggyDatabase = getFirestore(app);

function DatabaseNew() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDocs(collection(FoggyDatabase, "products")).then((snap) => {
      setProducts(snap.docs);
      console.log(snap.docs);
      console.log("-------------------------------------");
      console.log(products);
    });
  },[products]);
}

export default DatabaseNew;
