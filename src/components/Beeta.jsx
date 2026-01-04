import React from "react";
import Header from "./Header";
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from "./Subpro";
import img2 from "../assets/b1.jpeg";
import img3 from "../assets/b2.jpeg";
import img4 from "../assets/b4.jpeg";
import img5 from "../assets/b5.jpeg";
import img6 from "../assets/b6.jpeg";
import img7 from "../assets/p7.jpeg";

function Beeta({ img, fish }) {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={"/"}>
        home
      </Link>
      <Subpro fish={"Full moon"} img={img2} />
      <Subpro fish={"Half moon"} img={img3} />
      <Subpro fish={"Crown taill"} img={img4} />
      <Subpro fish={"Dumbo ear"} img={img5} />
      <Subpro fish={"Nemo candy"} img={img6} />
      <Subpro fish={"Placket"} img={img7} />
    </div>
  );
}

export default Beeta;
