import React from "react";
import Menu from "../Components/Menu";
import Navbar from "./Navbar";

const LayoutUser = ({ children }) => {

  return (
    <>
      <div className="relative min-h-screen w-full pt-5 md:pt-10 dark:bg-gray-900">
        <Navbar />
        <div
          className="absolute inset-0 z-0 bg-gray-100 dark:bg-gray-900"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            // opacity: 0.3,
          }}
        />
        <main className="relative min-h-screen w-full pt-10 sm:pt-0 justify-center px-0 sm:px-64">
          <Menu />
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
