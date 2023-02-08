import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <>
      <Navbar />
      <CheckOutPage />
      {/* <MainPage /> */}
      {/* <ProductPage /> */}
    </>
  );
}

export default App;
