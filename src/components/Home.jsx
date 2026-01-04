import React from "react";
import img1 from "../assets/logo.jpeg";
import img2 from "../assets/bg_1.jpeg";
import Product from "./Product";
import img3 from "../assets/fis.jpeg";
import img4 from "../assets/guppy.jpeg";
import { Link } from "react-router-dom";
import img5 from "../assets/beeta.jpeg";
import img6 from "../assets/molly.jpeg";
import img7 from "../assets/zebra.jpeg";
import img8 from "../assets/platy.jpeg";
import img9 from "../assets/OIP.webp";

function Home({ name, bgimg, img, page }) {
  const whatsappUrl = "https://wa.me/918056826319?text=hello%20I%20would%20like%20to%20order%20fish%20from%20your%20store%20can%20explain%20your%20service%20in%20in%20detail";
  
  return (
    <div
      className="pt-10 bg-center bg-cover bg-repeat flex flex-col items-center  "
      style={{ backgroundImage: `url(${img2}) ` }}
    >
      <div className="flex flex-row text-center gap-5 items-center">
        <div
          className="bg-black bg-cover bg-center shadow-2xl h-[150px] rounded-full w-[150px] ml-5 "
          style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
        ></div>
        <div className="font-bold hover:italic font-sans text-[#588157] text-xl">
          AQUA LIFE STARTS HERE
        </div>
      </div>
      <h1 className="font-semibold text-center mt-10">
        Step into the peaceful world of aquatic life with TNJ Aquarium, your
        friendly store for ornamental and freshwater fishes. Each
        fish is carefully chosen to bring beauty, calm, and joy to your
        aquarium. Whether you’re setting up your very first tank or adding a new
        companion to your collection, TNJ Aquarium is here with healthy fishes
        and simple guidance to help you care for them. Discover the gentle
        colors, graceful movements, and soothing presence of aquatic life—all
        waiting for you at TNJ Aquarium.
      </h1>
      <div className="pl-4 flex flex-wrap">
      <Product name="Guppy" bgimg={img3} img={img4} page={"/guppy"} />
      <Product name="Beeta" bgimg={img3} img={img5} page={"/beeta"} />
      <Product name="Molly" bgimg={img3} img={img6} page={"/molly"} />
      <Product name="Zebra" bgimg={img3} img={img7} page={"/zebra"} />
      <Product name="Platy" bgimg={img3} img={img8} page={"/platy"} />
      <Product name="Plants" bgimg={img3} img={img9} page={"/plants"} /></div>
      <div className="gap-5">
        <button
          data-aos="fade-in"
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="bg-[#588157] flex flex-row h-[90px] w-[290px] rounded-full mt-10"
        >
          <i className="fa-brands text-5xl m-5 fa-whatsapp"></i>
          <h1 className="text-center text-2xl mt-7 font-semibold">Whatsapp</h1>
        </button>
      </div>
      <button
        data-aos="fade-in"
        onClick={() =>
          window.open(
            "https://www.instagram.com/tnj_guppy_farm.24?igsh=MXBqdjdlYzhwbnhldQ==",
            "_blank"
          )
        }
        className="bg-[#bb3e03] flex flex-row h-[90px] w-[290px] rounded-full mt-10"
      >
        <i className="fa-brands text-5xl m-5 fa-instagram"></i>
        <h1 className="text-center text-2xl mt-7 font-semibold">Instagram</h1>
      </button>
      <h1 className="font-bold mt-5">ORDER NOW</h1>
      <p className="mt-10"></p>
    </div>
  );
}

export default Home;
