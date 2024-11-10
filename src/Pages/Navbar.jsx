import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    // Intersection Observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section based on the observed element
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Sections to be observed
    const sectionIds = [
      "beranda",
      "tentang",
      "projek",
      "keterampilan",
      "kontak",
    ];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="w-full">
      <div className="fixed top-0 sm:top-3 left-0 flex justify-center items-center w-full z-10">
        <div className="flex flex-wrap gap-2 items-center backdrop-blur-[5px] bg-opacity-[0.8] drop-shadow-xl dark:backdrop-blur-[5px] dark:bg-opacity-[0.8] dark:drop-shadow-xl bg-white dark:bg-gray-800 px-10 sm:px-5 py-2 sm:rounded-full">
          <div className="relative flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            {["beranda", "tentang", "projek", "keterampilan", "kontak"].map(
              (section) => (
                <Link
                  key={section}
                  to={`#${section}`}
                  className={`text-sm sm:text-lg p-1 font-medium text-gray-600 dark:text-gray-300 rounded-lg
                          transition-all duration-300 ease-in-out transform
                          ${
                            activeSection === section
                              ? "shadow-inner text-black dark:shadow-inner shadow-gray-300 dark:shadow-gray-600 dark:text-white scale-105 "
                              : "hover:text-black dark:hover:text-white"
                          }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
