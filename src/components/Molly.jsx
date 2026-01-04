import React from "react";
import Header from "./Header";
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from "./Subpro";
import img2 from "../assets/m1.jpeg";
import img3 from "../assets/m2.jpeg";
import img4 from "../assets/m4.jpeg";
import img5 from "../assets/m5.jpeg";
function Molly({fish,img}) {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={"/"}>
        home
      </Link>
      <Subpro fish={'Molly fish'} img={img2} />
      <Subpro fish={'Boolean molly'} img={img3} />
      <Subpro fish={'Panda molly'} img={img4} />
      <Subpro fish={'Moon tail molly'} img={img5} />
    </div>
  );
}

export default Molly;
