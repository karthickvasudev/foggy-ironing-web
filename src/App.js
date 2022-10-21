import "./App.css";
import ProjectRouter from "../src/Router/ProjectRouter";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpL9R351vsrkdJc6SDWvsbIsRiSLa0T3o",
  authDomain: "foggy-demo.firebaseapp.com",
  projectId: "foggy-demo",
  storageBucket: "foggy-demo.appspot.com",
  messagingSenderId: "852061930239",
  appId: "1:852061930239:web:1458bc9f57df211565c2ca",
  measurementId: "G-7DWKQWTCRR",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return <ProjectRouter />;
}

export default App;
