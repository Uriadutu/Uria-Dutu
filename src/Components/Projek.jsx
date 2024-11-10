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
      duration: 600,
      once: true,
      offset: 50,
    });
  }, []);

  const projects = [
    {
      name: "Dinas Pemuda Dan Olahraga Kota Manado",
      imgL: DisoraL,
      imgH: DisoraH,
      alt: "Dinas Pemuda Dan Olahraga Kota Manado",
    },
    {
      name: "Kantor Kementerian Agama Halmahera Barat",
      imgL: KemenagL,
      imgH: KemenagH,
      alt: "Kantor Kementerian Agama Halmahera Barat",
    },
    {
      name: "Victoria Inn Manado",
      imgL: VictoriaL,
      imgH: VictoriaH,
      alt: "Victoria Inn Manado",
    },
  ];

  return (
    <div className="flex flex-col px-4 sm:px-20 w-full justify-center ">
      <h1 className="text-center mb-3 sm:mb-[70px] text-gray-700 dark:text-gray-300 font-medium pt-10 w-full sm:pt-72 text-[35px]">
        Projek Saya
      </h1>

      {projects.map((project, index) => (
        <figure
          key={index}
          className="mb-12 group"
          aria-label={`Project ${project.name}`}
        >
          <div className="relative flex justify-center transition-transform duration-300 ease-out transform group-hover:scale-105">
            <div className="relative">
              <img
                src={project.imgL}
                alt={project.alt}
                className="w-80 sm:w-full"
              />
              <img
                data-aos="fade-up"
                className="absolute bottom-1 sm:bottom-3 right-0 w-[90px] sm:w-44 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                src={project.imgH}
                alt={`${project.alt} Highlight`}
              />
            </div>
          </div>
          <figcaption className="text-center mt-5 text-gray-700 dark:text-gray-300 font-medium text-xl sm:text-md transition-colors duration-300 group-hover:text-blue-600">
            {project.name}
          </figcaption>
        </figure>
      ))}
      {/* <Link to={"https://github.com/Uriadutu"} className="">
        <h1 className="text-gray-700 dark:text-gray-300 underline hover:text-black dark:hover:text-white duration-300">Projek Lainnya</h1>
      </Link> */}
    </div>
  );
};

export default Projek;
