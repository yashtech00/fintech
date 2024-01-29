// FDcard.js
import React from "react";
import FDdata, { idToBbBoxColor, idToBbButtonColor } from "../utils/FDdata";
import { idToBackgroundColor } from "../utils/FDdata";
import GetAnswer from "./GetAnswer";

const FDcard = () => {
  const FDinfo = FDdata.data;
 

  
  if (!FDinfo) {
    return null; 
  }

  return (
    <>
    <div className="flex flex-wrap justify-evenly border-1">
      {FDinfo.map((info) => (
        <div
          key={info.id}
          className={`m-2 p-4  border-4 border-white w-[48%] justify-between rounded-lg shadow-lg ${
            idToBackgroundColor[info.id] || "bg-gray-300"
          }`}
        >
          <div className="flex">
            <img
              className="res-logo rounded-lg w-[13%] h-[13%]"
              src={info.logo}
              alt={info.name}
            />
            <div className="font-semibold py-1 text-xl ml-4">{info.name}</div>
          </div>
          <div className="font-normal py-4">
            <div className="flex">
              <div
                className={`flex rounded-lg w-[48%] px-1 py-2  mx-2  ${
                  idToBbBoxColor[info.id] || "bg-gray-300"
                }`}
              >
                <div className={`w-4 h-4 mx-1 mt-1`}><img
                  src="https://banner2.cleanpng.com/20190218/oux/kisspng-check-mark-checkbox-computer-icons-clip-art-scalab-check-circle-svg-png-icon-free-download-43-4-8-5c6b565974a684.2640523115505383294778.jpg"
                   /></div>
                {info.Interest_Rate}
              </div>
              <div
                className={`flex rounded-lg w-[48%] px-1 py-2  ${
                  idToBbBoxColor[info.id] || "bg-gray-300"
                }`}
              >
                <div className={`w-4 h-4 mx-1 mt-1`}><img
                  src="https://banner2.cleanpng.com/20190218/oux/kisspng-check-mark-checkbox-computer-icons-clip-art-scalab-check-circle-svg-png-icon-free-download-43-4-8-5c6b565974a684.2640523115505383294778.jpg"
                   /></div>
                {info.KYC}
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mt-4 w-[20%] ml-3">
              <div className="text-sm text-slate-500 font-medium">Interest Upto</div>
              <div className="font-bold">{info.Interest_Upto}</div>
            </div>
            <div>
              <button
                className={` ml-48 mt-6 w-[50%] p-2 rounded-lg text-white  ${
                  idToBbButtonColor[info.id] || "bg-gray-300"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      </div>
      <div><GetAnswer/></div>
    </>
  );
};

export default FDcard;
