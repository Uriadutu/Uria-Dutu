import React from "react";
import DisoraL from "../img/DisporaL.png";
import DisoraH from "../img/DisporaH.png";
import KemenagL from "../img/KemenagL.png";
import KemenagH from "../img/KemenagH.png";
import VictoriaL from "../img/VictoriaL.png";
import VictoriaH from "../img/VictoriaH.png";
const Projek = () => {
  return (
    <div className="flex px-20 w-full justify-cente mt-20">
      <div className="">
        <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-[35px]">
          Projek Saya
        </h1>
        <div className="">
          <div className="relative flex justify-center">
            <div className="">
              <img src={DisoraL} alt="" />
              <img
                className="absolute bottom-3 right-0 w-44"
                src={DisoraH}
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
            Dinas Pemuda Dan Olahraga Kota Manado
          </h1>
        </div>
        <div className="mt-5">
          <div className="relative flex justify-center">
            <div className="">
              <img src={KemenagL} alt="" />
              <img
                className="absolute bottom-3 right-0 w-44"
                src={KemenagH}
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
            Kantor Kementerian Agama Halmahera Barat
          </h1>
        </div>
        <div className="mt-5">
          <div className="relative flex justify-center">
            <div className="">
              <img src={VictoriaL} alt="" />
              <img
                className="absolute bottom-3 right-0 w-44"
                src={VictoriaH}
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
            Victoria Inn Manado
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projek;
