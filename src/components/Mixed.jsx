import React from 'react'
import Header from './Header'
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from './Subpro';
import img2 from "../assets/mix.jpeg";


function Mixed() {
  return (
      
    <div
      className="bg-cover h-screen bg-center "
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={'/'}>home</Link><Link className="underline" to={'/guppy'}>/guppy</Link>
      <Subpro fish={"Mixed guppies"} img={img2} />
    
    </div>
  )
}

export default Mixed