import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const Menu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    // Handle dark mode toggling
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Detect scroll position and show/hide "Scroll to Top" button
    const handleScroll = () => {
      const sectionBeranda = document.getElementById("beranda");
      if (sectionBeranda) {
        const sectionTop = 550;
        if (window.scrollY > sectionTop) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Scroll to the top of the "beranda" section and hide the button
  const scrollToTop = () => {
    const sectionBeranda = document.getElementById("beranda");
    if (sectionBeranda) {
      sectionBeranda.scrollIntoView({ behavior: "smooth" });
      setIsScrollingUp(true);
    }
  };

  // Reset scroll state when the user scrolls to the top
  useEffect(() => {
    if (isScrollingUp) {
      setTimeout(() => {
        setShowScrollTop(false); // Hide button after scroll is completed
        setIsScrollingUp(false);
      }, 500); // Adjust the timeout duration to match the scroll duration
    }
  }, [isScrollingUp]);

  return (
    <div className="fixed z-10 bottom-2 right-1 sm:right-2 sm:bottom-4">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`flex bg-white dark:bg-gray-800 drop-shadow-md rounded-full p-2 transition-all duration-500 ease-in-out
          ${
            showScrollTop
              ? "transform translate-y-[-4px]"
              : "transform translate-y-10"
          }`}
        style={{
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        {darkMode ? (
          <MdOutlineDarkMode size={25} className="text-white" />
        ) : (
          <MdDarkMode size={25} className="text-black" />
        )}
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex bg-blue-600 text-white drop-shadow-md rounded-full p-2 transition-all duration-500 ease-in-out
          ${
            showScrollTop
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        style={{
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        }}
      >
        <FaArrowUp size={25} />
      </button>
    </div>
  );
};

export default Menu;
