import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Fpage from "./components/Fpage";
import AOS from "aos";
import "aos/dist/aos.css";
import Guppy from "./components/Guppy";
import Beeta from "./components/Beeta";
import Molly from "./components/Molly";
import Platy from "./components/Platy";
import Zebra from "./components/Zebra";
import Plants from "./components/Plants";
import Imported from "./components/Imported";
import Mixed from "./components/Mixed";
AOS.init();

function App() {
  useEffect(() => {AOS.init({duration: 1000})}, []);


  return (
    <div className="">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Fpage />} />
          <Route path="/guppy" element={<Guppy />} />
          <Route path="/beeta" element={<Beeta />} />
          <Route path="/molly" element={<Molly />} />
          <Route path="/platy" element={<Platy />} />
          <Route path="/zebra" element={<Zebra />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/imported" element={<Imported />} />
          <Route path="/mixed" element={<Mixed />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
