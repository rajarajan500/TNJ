import React from 'react'
import Header from './Header'
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";  
import Subpro from './Subpro';
import img2 from "../assets/imp1.jpeg";
import img3 from "../assets/imp2.jpeg";
import img4 from "../assets/imp3.jpeg";
import img5 from "../assets/imp5.jpeg";
import img6 from "../assets/imp6.jpeg";
import img7 from "../assets/imp7.jpeg";
import img8 from "../assets/imp8.jpeg";
import img9 from "../assets/imp9.jpeg";
import img10 from "../assets/imp10.jpeg";
import img11 from "../assets/imp11.jpeg";
import img12 from "../assets/imp12.jpeg";
import img13 from "../assets/imp13.jpeg";
function Imported({fish, img }) {

  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={'/'}>home</Link><Link className="underline" to={'/guppy'}>/guppy</Link>
      <Subpro fish={"Chilli mosaic"} img={img2} />
      <Subpro fish={"Blue koi"} img={img3} />
      <Subpro fish={"White tuxedo"} img={img4} />
      <Subpro fish={"Emerald green"} img={img5} />
      <Subpro fish={"Galaxy blue"} img={img6} />
      <Subpro fish={"Snake skin black tail"} img={img7} />
      <Subpro fish={"Snake skin blue round tail"} img={img8} />
      <Subpro fish={"Full gold"} img={img9} />
      <Subpro fish={"Glass belly"} img={img10} />
      <Subpro fish={"Japanese blue"} img={img11} />
      <Subpro fish={"Snow white"} img={img12} />
      <Subpro fish={"Platinum koi"} img={img13} />
    </div>
  )
}

export default Imported