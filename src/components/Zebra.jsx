import React from 'react'
import Header from './Header'
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from './Subpro';
import img2 from '../assets/z1.jpeg'

function Zebra({fish,img}) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={'/'}>home</Link>
      <Subpro fish={'Zebra fish'} img={img2} />
      
    </div>
  )
}

export default Zebra