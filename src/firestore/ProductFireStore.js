import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { GetDateTime } from "../constants/DateTimeUtil";
import FoggyDatabase from "./Database";

class ProductFireStore {
  async create(data) {
    data["createdBy"] = JSON.parse(sessionStorage.getItem("profile")).email;
    data["createdOn"] = GetDateTime();
    data["updatedBy"] = null;
    data["updatedOn"] = null;
    let docRef = doc(FoggyDatabase, "products", data.productId);
    return await setDoc(docRef, data);
  }

  async getProduct(id) {
    let docRef = doc(FoggyDatabase, "products", id);
    return await (await getDoc(docRef)).data();
  }

  async update(data) {
    let docRef = doc(FoggyDatabase, "products", data.productId);
    return await updateDoc(docRef, data);
  }

  async getAll(){
    let docRef = collection(FoggyDatabase, "products");
    return await (await getDocs(docRef)).docs.map(d=>({...d.data()}));
  }
}

export default new ProductFireStore();
