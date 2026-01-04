import React from "react";
import { Link } from "react-router-dom";

function Product({ name, bgimg, img, page }) {
  return (
    <div
      data-aos="slide-left"
      className="mt-10 bg-cover bg-center flex flex-row  w-[350px] h-[150px] rounded-full"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div
        className=" border border-white shadow-lg bg-cover bg-center h-[110px] w-[110px] rounded-full m-5"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className=" bg-[#caf0f8] text-center opacity-50 h-[100px] w-[150px] rounded mt-5">
        {" "}
        <h1 className="font-semibold text-black mt-3">{name}</h1>
        <Link
          to={page}
          className="text-[10px] mt-5 text-blue-900 hover:underline"
        >
          explore more <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Product;
