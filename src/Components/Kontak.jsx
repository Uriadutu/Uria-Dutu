import React from "react";
import { IoSendSharp } from "react-icons/io5";
const Kontak = () => {
  return (
    <div className="flex sm:px-20 w-full justify-center px-4  sm:mt-20">
      <div className="">
        <h1 className="text-center mb-3 sm:mb-[30px] text-gray-700 font-medium pt-5  w-full text-[35px]">
          Kontak
        </h1>
        <h1 className="text-center mb-3 sm:mb-3 text-gray-700 pt-5 text-xl w-full sm:text-[20px]">
          Hubungi Saya Di{" "}
          <a href="mailto:balisoan03@gmail.com" className="underline">
            balisoan03@gmail.com
          </a>{" "}
          atau melalui form di bawah
        </h1>
        <div className="w-full">
          <div className="">
            <input
              className="input w-full mt-4"
              type="email"
              placeholder="Email Anda"
            />
            <textarea
              className="input w-full mt-3"
              rows={7}
              name=""
              placeholder="Pesan Anda"
              id=""
            ></textarea>
          </div>
          <div className="mt-5 inline-block">
            <bottom className="bg-[#222222] flex gap-2 items-center rounded-xl p-3">
              <h1 className="text-white">Kirim</h1>{" "}
              <IoSendSharp color="white" />
            </bottom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
