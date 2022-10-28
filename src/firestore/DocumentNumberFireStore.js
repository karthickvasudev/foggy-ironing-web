import { doc, getDoc, updateDoc } from "firebase/firestore";
import FoggyDatabase from "./Database";

class DocumentNumberFireStore {
  getProductNumber() {
    let docRef = doc(FoggyDatabase, "document_numbering", "products");
    return getDoc(docRef);
  }

  async incrementProductNumber() {
    let docRef = doc(FoggyDatabase, "document_numbering", "products");
    let products = await (await getDoc(docRef)).data();
    let incremented = this._incrementGet(products.doc_id);
    products['doc_id'] = incremented
    updateDoc(docRef, products)
  }

  _incrementGet(id) {
    let prefix = id.replace(/[^a-zA-Z]+/g, "");
    let num = id.replace(/^\D+/g, "");
    let inc = (Number(num) + 1).toString().padStart(5, "0");
    return prefix + "-" + inc;
  }
}

export default new DocumentNumberFireStore();
