import React from 'react'
import Header from './Header'
import img1 from "../assets/bg_2.jpeg";
import { Link } from "react-router-dom";
import Subpro from './Subpro';
import img2 from '../assets/pt1.jpeg'
import img3 from '../assets/pt3.jpeg'
import img4 from '../assets/pt5.jpeg'

function Plants({fish,img}) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${img1}) ` }}
    >
      <Header />
      <Link className="underline" to={'/'}>home</Link>
      <Subpro fish={'Foxtail'} img={img2} />
      <Subpro fish={'Duck weed'} img={img3} />
      <Subpro fish={'Guppy grass'} img={img4} />
    
    </div>
  )
}

export default Plants