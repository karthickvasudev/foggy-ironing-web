import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import ProjectRouter from "../src/Router/ProjectRouter";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../src/constants/Constants";


function App() {
  initializeApp(firebaseConfig);
  return <ProjectRouter />;
}

export default App;
