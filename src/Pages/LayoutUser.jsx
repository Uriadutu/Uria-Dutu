import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LayoutUser = ({ children }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("#beranda");

  useEffect(() => {
    // Set active link based on URL hash
    setActiveLink(location.hash || "#beranda");
  }, [location]);

  return (
    <>
      <div className="relative min-h-screen w-full pt-5 md:pt-10">
        {/* Background with opacity */}
        <div className="w-full">
          <div className="fixed justify-center sm:top-2 top-0 flex w-full items-center z-10">
            <div className="flex flex-wrap gap-2 items-center backdrop-blur-[5px] bg-opacity-[0.8] drop-shadow-xl bg-[white] px-20 sm:px-5 py-2 sm:rounded-full">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                {[
                  { name: "Beranda", href: "#beranda" },
                  { name: "Tentang", href: "#tentangsaya" },
                  { name: "Projek", href: "#projek" },
                  { name: "Keterampilan", href: "#keterampilan" },
                  { name: "Kontak", href: "#kontak" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm sm:text-lg p-1 transition-opacity duration-300 font-medium text-gray-600 rounded-lg ${
                      activeLink === link.href
                        ? "text-black shadow-inner "
                        : "hover:text-black"
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
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
        <main className="relative min-h-screen w-full pt-10 sm:pt-0 justify-center px-0 sm:px-64">
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
