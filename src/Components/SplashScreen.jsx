import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Beranda from "./Beranda";
import TentangSaya from "./TentangSaya";
import Projek from "./Projek";
import Skill from "./Skill";
import Kontak from "./Kontak";

const SplashScreen = () => {
  const location = useLocation();


  useEffect(() => {
    // Smooth scrolling when hash in URL changes
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Beranda Section */}
      <section className="pt-12 sm:pt-0" id="beranda">
        <div className="flex mr-0 justify-center sm:justify-start w-full h-[90vh]">
          <div className="flex pt-10 w-full justify-center bg-opacity-100 rounded-t-lg">
            <Beranda />
          </div>
        </div>
      </section>

      {/* Tentang Saya Section */}
      <section id="tentang">
        <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start w-full h-[60vh] sm:h-[60vh]">
          <TentangSaya />
        </div>
      </section>

      {/* Projek Section */}
      <section className="sm:mb-64" id="projek">
        <div className="flex sm:mt-32 pt-10 mr-0 justify-center sm:justify-start w-full h-[150vh] sm:h-[200vh]">
          <Projek />
        </div>
      </section>

      {/* Keterampilan Section */}
      <section id="keterampilan">
        <div className="flex sm:mt-10 mt-10 mr-0 justify-center sm:justify-start w-full h-[90vh] sm:h-[100vh]">
          <Skill />
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak">
        <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start w-full h-[90vh] sm:h-[100vh]">
          <Kontak />
        </div>
      </section>
      <div className="flex justify-center w-full">
        <h1 translate="no" className="text-gray-400 pt-6 pb-1 dark:text-gray-500">
          ©notfound
        </h1>
      </div>
    </>
  );
};

export default SplashScreen;
