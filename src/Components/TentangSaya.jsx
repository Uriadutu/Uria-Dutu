import React from "react";

const TentangSaya = () => {
  return (
    <div className="flex sm:px-20 px-5 w-full justify-center mt-20">
      <div className="">
        <h1
          data-aos="zoom-in"
          className="text-center mb-3 sm:mb-[70px] text-gray-700 font-medium pt-5 w-full text-[35px] 
                     transform transition-transform duration-300 hover:scale-105"
        >
          Tentang Saya
        </h1>
        <h1
          data-aos="zoom-in"
          className="text-lg text-center text-[#222222] transition-transform duration-300 hover:scale-105"
        >
          Saya Mahasiswa <span className="italic">Universitas</span> Katolik De
          La Salle Manado Yang Tertarik Dalam Pengembangan
          <span className="italic"> Web</span>, Dengan Menggunakan
          <span className="italic">
            {" "}
            React, Next.js, Node.js, Express,{" "}
          </span>{" "}
          Dan
          <span className="italic"> Tailwind CSS.</span> Saya Telah Belajar Dan
          Mempunyai Pengetahuan Dasar Dari{" "}
          <span className="italic">JavaScript </span>
          Dan <span className="italic">TypeScript</span>. Dan Saya Juga
          Mempelajari <span className="italic">HTML</span> Dan{" "}
          <span className="italic">CSS.</span> Saya Terus Belajar Untuk Menjadi{" "}
          <span className="italic">Web</span> Developer Yang Lebih Baik
          Kedepannya.
        </h1>
      </div>
    </div>
  );
};

export default TentangSaya;
