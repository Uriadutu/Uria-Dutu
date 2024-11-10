import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex px-0 sm:px-20 w-full justify-center mt-20"
      data-aos="fade-up"
    >
      <div>
        <h1
          className="text-center mb-3 sm:mb-[30px] text-gray-700 font-medium pt-5 w-full text-[35px]"
          data-aos="fade-up"
        >
          Keterampilan Saya
        </h1>
        <h1
          className="text-center mb-3 sm:mb-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md"
          data-aos="fade-up"
        >
          Bahasa Dan Alat
        </h1>
        <div className="flex justify-between sm:justify-center gap-2 sm:gap-5 items-center">
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>TypeScript</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>JavaScript</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>Visual Studio Code</h1>
          </div>
        </div>
        <h1
          className="text-center my-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md"
          data-aos="fade-up"
        >
          <span className="italic">Library</span> Dan
          <span className="italic">Framework</span>
        </h1>
        <div className="flex justify-evenly sm:justify-center sm:gap-5 items-center">
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>React</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>Next.js</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>Express</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>Tailwind</h1>
          </div>
        </div>
        <h1
          className="text-center my-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md"
          data-aos="fade-up"
        >
          Lainnya
        </h1>
        <div className="flex justify-center gap-5 items-center">
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>HTML</h1>
          </div>
          <div
            className="flex items-center justify-center p-3 bg-white border border-gray-300 rounded-lg"
            data-aos="fade-up"
          >
            <h1>CSS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
