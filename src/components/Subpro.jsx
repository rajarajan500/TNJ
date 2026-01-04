import React from "react";

function Subpro({ fish, img }) {
  const whatsappUrl = `https://wa.me/918056826319?text=hello%20I%20would%20like%20to%20order%20${fish}%20from%20your%20store%20can%20explain%20your%20service%20in%20in%20detail`;
  return (
    <div data-aos="fade-in" className="flex flex-wrap justify-center">
      <div className="mt-10 flex flex-row  p-2 rounded bg-[#dde5b6] h-[150px] w-[350px]">
        <div
          className=" bg-cover bg-center h-[100px] w-[100px] bg-white rounded-full mt-4 ml-4"
          style={{ backgroundImage: `url(${img}) ` }}
        ></div>
        <div className="text-center flex flex-col items-center justify-center gap-6 pl-3 text-xl font-bold"><h1 >{fish}</h1><a href={whatsappUrl} className=" underline  font-semibold text-blue-500">Chat on whatsapp</a></div>
      </div>
    </div>
  );
}

export default Subpro;
