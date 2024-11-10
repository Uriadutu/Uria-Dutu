import React from "react";
import { IoSendSharp } from "react-icons/io5";

const Kontak = () => {
  return (
      <div className="flex sm:px-20 w-full justify-center px-4 mt-20 dark:text-gray-300">
        <div className="w-full max-w-4xl">
          <h1
            translate="no"
            className="text-center mb-5 sm:mb-[30px] text-gray-700 dark:text-gray-300 font-medium pt-5 text-3xl sm:text-[35px] transform transition-transform duration-300 hover:scale-105"
          >
            Kontak
          </h1>
          <h2
            translate="no"
            className="text-center mb-3 sm:mb-5 text-gray-700 dark:text-gray-300 pt-3 text-xl sm:text-[20px] transition-transform duration-300 hover:scale-105"
          >
            Hubungi Saya Di{" "}
            <a
              href="mailto:balisoan03@gmail.com"
              className="underline text-blue-600 dark:text-blue-400"
            >
              balisoan03@gmail.com
            </a>{" "}
            atau melalui form di bawah
          </h2>

          <div className="w-full mt-5">
            <form className="space-y-4">
              <input
                translate="no"
                className="input w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222222] dark:text-gray-300"
                type="email"
                placeholder="Email Anda"
                aria-label="Email Anda"
                required
              />
              <textarea
                translate="no"
                className="input w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#222222] dark:text-gray-300"
                rows={7}
                placeholder="Pesan Anda"
                aria-label="Pesan Anda"
                required
              ></textarea>
              <button
                type="submit"
                onClick={()=> alert("Masi Perbaikan")}
                className="bg-[#222222] dark:bg-[#444444] flex gap-2 items-center rounded-xl p-3 text-white hover:bg-black dark:hover:bg-[#333333] transition-colors w-auto"
              >
                <h1 translate="no" className="text-lg">
                  Kirim
                </h1>
                <IoSendSharp color="white" />
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Kontak;
