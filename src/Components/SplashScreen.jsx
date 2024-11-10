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
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section className="" id="beranda">
        <div className="flex mr-0 justify-center sm:justify-start  w-full h-[90vh] sm:h-[100vh]">
          <div className=" flex pt-10 w-full justify-center bg-opacity-100 rounded-t-lg">
            <Beranda />
          </div>
        </div>
      </section>
      <section className="" id="tentangsaya">
        <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start  w-full h-[90vh] sm:h-[60vh]">
          <TentangSaya />
        </div>
      </section>
      <section className="" id="projek">
        <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start  w-full">
          <Projek />
        </div>
      </section>
        <section className="" id="penguasaan">
      <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start  w-full h-[90vh] sm:h-[100vh]">
            <Skill />
          
      </div>
        </section>
        <section className="" id="kontak">
      <div className="flex sm:mt-20 mt-10 mr-0 justify-center sm:justify-start  w-full h-[90vh] sm:h-[100vh]">
            <Kontak />
          
      </div>
        </section>
    </>
  );
};

export default SplashScreen;
