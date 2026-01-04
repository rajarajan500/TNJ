import React from "react";
import Header from "./Header";
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from "./Subpro";
import img2 from "../assets/pl1.jpeg";
import img3 from "../assets/pl2.jpeg";

function Platy({ fish, img }) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={"/"}>
        home
      </Link>
      <Subpro fish={"Black tail platy"} img={img2} />
      <Subpro fish={"Full red platy"} img={img3} />
    </div>
  );
}

export default Platy;
