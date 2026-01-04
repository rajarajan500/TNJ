import React from "react";
import Header from "./Header";
import img1 from "../assets/bg_2.jpeg";
import Subbutton from "./Subbutton";
import { Link } from "react-router-dom";
function Guppy({ name, link,fish}) {


  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={'/'}>home</Link>
      <div
        className="h-[300px] bg-cover mt-10 bg-center rounded border border-black "
        style={{
          backgroundImage: `url(${"https://loremflickr.com/800/600/guppy,aquarium/all"}) `,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center pt-6 gap-10">
        <Subbutton name="IMPORTED" link="/imported" />
        <Subbutton name="MIXED" link="/mixed" />
      </div>
    </div>
  );
}

export default Guppy;
