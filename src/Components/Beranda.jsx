import React, { useState, useEffect, useMemo } from "react";
import profil from "../img/profil.jpeg";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Beranda = () => {
  const [text, setText] = useState("");
  const [fullTextIndex, setFullTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Define roles array
  const roles = useMemo(
    () => ["WEB DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
    []
  );

  useEffect(() => {
    const currentText = roles[fullTextIndex];
    if (charIndex < currentText.length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeoutId = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setFullTextIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
      return () => clearTimeout(resetTimeoutId);
    }
  }, [charIndex, fullTextIndex, roles]);

  return (
    <div className="flex h-full w-full sm:px-20 px-4 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full items-center gap-y-6 sm:gap-x-8">
        <div className="flex justify-center">
          <div className="relative">
            <img
              translate="no"
              className="rounded-full w-52 sm:w-[100%] drop-shadow-lg border-4 border-white transition duration-300 ease-in-out transform hover:scale-105"
              src={profil}
              alt="Profil"
            />
            <div className="absolute bottom-2 right-0">
              <h1 translate="no" className="text-[40px] md:text-[50px]">
                🍒
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 flex flex-col md:items-end items-center text-center md:text-right space-y-3 md:space-y-2">
          <div className="space-y-[-10px] relative">
            <h1
              translate="no"
              className="text-[25px] md:text-[35px] lg:text-[40px] transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="font-bold">Halo,</span> Saya Uria.
            </h1>
            <div className="flex relative mb-20">
              <div className="w-full flex">
                <h1
                  translate="no"
                  className="text-[18px] mt-2 sm:text-[24px] font-bold transition duration-300 text-start ease-in-out transform whitespace-nowrap"
                >
                  {text}
                  <span className="blinking-cursor">|</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <div className="grid grid-cols-2 gap-0 mt-4">
              <h1 className="text-semibold">Backend</h1>
              <h1 className="text-semibold text-[#000AC1]">
                &#9733;&#9733;&#9733;&#9734;&#9734;
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <h1 className="text-semibold">Frontend</h1>
              <h1 className="text-semibold text-[#000AC1]">
                &#9733;&#9733;&#9733;&#9734;&#9734;
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to="#kontak">
            <div className="bg-[#222222] rounded-full p-3 hover:bg-[#333333] transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex justify-center gap-3 items-center">
                <h1
                  translate="no"
                  className="text-white font-bold text-center text-lg"
                >
                  Kontak Saya
                </h1>
                <FaArrowRight color="white" width={40} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-2 flex justify-center md:justify-end">
          <div className="grid grid-cols-3 gap-4">
            <Link to="https://www.instagram.com/uriiaaaa">
              <div
                translate="no"
                className="border-2 border-gray-300 rounded-full bg-white p-3 opacity-50 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              >
                <AiFillInstagram size={25} className="text-[#E4405F]" />
              </div>
            </Link>
            <Link to="https://www.tiktok.com/@uriadutu_">
              <div
                translate="no"
                className="border-2 border-gray-300 rounded-full bg-white p-3 opacity-50 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              >
                <IoLogoTiktok size={25} className="text-black" />
              </div>
            </Link>
            <Link to="https://github.com/Uriadutu">
              <div
                translate="no"
                className="border-2 border-gray-300 rounded-full bg-white p-3 opacity-50 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              >
                <FaGithub size={25} className="text-black" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
