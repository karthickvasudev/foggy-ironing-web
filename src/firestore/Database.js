import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../constants/Constants";
const app = initializeApp(firebaseConfig);

const FoggyDatabase = getFirestore(app);

export default FoggyDatabase;
