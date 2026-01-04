import React from "react";
import { Link } from "react-router-dom";

function Subbutton({name,link}) {
  return (
    <div className=" pt-8 bg-[#94d2bd] h-[100px] w-[90%] rounded-lg text-center">
     <Link to={link}><h1 className="font-bold text-xl">
        
       {name}<i class="fa-solid fa-arrow-right"></i>{" "}
      </h1></Link>
    </div>
  );
}

export default Subbutton;
