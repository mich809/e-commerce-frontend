import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;
