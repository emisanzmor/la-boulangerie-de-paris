import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/header";
import PhotoGrid from "./components/pages/photogrid";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-amber-50/20">
      <Header />
      <PhotoGrid />
    </div>
  );
}

export default App;
