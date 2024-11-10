import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DisoraL from "../img/DisporaL.png";
import DisoraH from "../img/DisporaH.png";
import KemenagL from "../img/KemenagL.png";
import KemenagH from "../img/KemenagH.png";
import VictoriaL from "../img/VictoriaL.png";
import VictoriaH from "../img/VictoriaH.png";

const Projek = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation duration in milliseconds
      once: true, // animation occurs only once
      offset: 50, // offset to trigger animation
    });
  }, []);

  return (
    <div className="flex flex-col px-4 sm:px-20 w-full justify-center mt-20">
      <div>
        <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 w-full text-[35px]">
          Projek Saya
        </h1>

        {/* Dinas Pemuda Dan Olahraga Kota Manado */}
        <div className="mb-12 group">
          <div className="relative flex justify-center transition-transform duration-300 ease-out transform group-hover:scale-105">
            <div className="relative">
              <img
                src={DisoraL}
                alt="Dinas Pemuda Dan Olahraga Kota Manado"
                className="w-80 sm:w-full"
              />
              <img
                data-aos="fade-up" // Animation for mobile
                className="absolute bottom-1 sm:bottom-3 right-0 w-[90px] sm:w-44 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                src={DisoraH}
                alt="Dinas Pemuda Dan Olahraga Kota Manado Highlight"
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md transition-colors duration-300 group-hover:text-blue-600">
            Dinas Pemuda Dan Olahraga Kota Manado
          </h1>
        </div>

        {/* Kantor Kementerian Agama Halmahera Barat */}
        <div className="mt-5 mb-12 group">
          <div className="relative flex justify-center transition-transform duration-300 ease-out transform group-hover:scale-105">
            <div className="relative">
              <img
                src={KemenagL}
                alt="Kantor Kementerian Agama Halmahera Barat"
                className="w-80 sm:w-full"
              />
              <img
                data-aos="fade-up" // Animation for mobile
                className="absolute bottom-1 sm:bottom-3 right-0 w-[90px] sm:w-44 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                src={KemenagH}
                alt="Kantor Kementerian Agama Halmahera Barat Highlight"
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md transition-colors duration-300 group-hover:text-blue-600">
            Kantor Kementerian Agama Halmahera Barat
          </h1>
        </div>

        {/* Victoria Inn Manado */}
        <div className="mt-5 group">
          <div className="relative flex justify-center transition-transform duration-300 ease-out transform group-hover:scale-105">
            <div className="relative">
              <img
                src={VictoriaL}
                alt="Victoria Inn Manado"
                className="w-80 sm:w-full"
              />
              <img
                data-aos="fade-up" // Animation for mobile
                className="absolute bottom-1 sm:bottom-3 right-0 w-[90px] sm:w-44 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                src={VictoriaH}
                alt="Victoria Inn Manado Highlight"
              />
            </div>
          </div>
          <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-md transition-colors duration-300 group-hover:text-blue-600">
            Victoria Inn Manado
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projek;
