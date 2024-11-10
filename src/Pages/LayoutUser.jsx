import React from "react";
import { Link } from "react-router-dom";

const LayoutUser = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen w-full pt-5 md:pt-10">
        {/* Background with opacity */}
        <div className="w-full ">
          <div className=" fixed justify-center  sm:top-2 top-2 flex  w-full items-center z-10">
            <div className="flex gap-2 items-center backdrop-blur-[5px] bg-opacity-[0.8]  drop-shadow-xl bg-[white] px-5 py-2 rounded-full">
              <div className="flex justify-center items-center">
                <Link
                  to="#beranda"
                  className="text-lg mr-4 p-1 hover:text-green-500 transition-opacity"
                >
                  Beranda
                </Link>
                <Link
                  to="#tentangsaya"
                  className="text-lg mx-4 p-1 hover:text-green-500 transition-opacity"
                >
                  Tentang Saya
                </Link>
                <Link
                  to="#projek"
                  className="text-lg mx-4 p-1 hover:text-green-500 transition-opacity"
                >
                  Projek
                </Link>
                <Link
                  to="#penguasaan"
                  className="text-lg mx-4 p-1 hover:text-green-500 transition-opacity"
                >
                  Penguasaan
                </Link>
                <Link
                  to="#kontak"
                  className="text-lg mx-4 p-1 hover:text-green-500 transition-opacity"
                >
                  Kontak
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 bg-gray-200"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.3,
          }}
        />
        {/* Main content */}
        <main className="relative min-h-screen w-full justify-center px-64">
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
