import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const skills = [
    {
      category: "Bahasa Dan Alat",
      items: ["TypeScript", "JavaScript", "Visual Studio Code"],
    },
    {
      category: "Library Dan Framework",
      items: ["React", "Next.js", "Express", "Tailwind"],
    },
    { category: "Lainnya", items: ["HTML", "CSS"] },
  ];

  return (
    <div
      className="flex px-0 sm:px-20 w-full justify-center mt-20"
      data-aos="fade-up"
    >
      <div className="w-full max-w-2xl">
        <h1 className="text-center mb-3 sm:mb-[30px] text-gray-700 dark:text-gray-300 font-medium pt-5 w-full text-[35px]">
          Keterampilan Saya
        </h1>

        {skills.map((skill, index) => (
          <div key={index} className="my-6">
            <h2
              translate="no"
              className="text-center mb-4 text-gray-700 dark:text-gray-300 font-medium pt-5 text-xl sm:text-md"
              data-aos="fade-up"
            >
              {skill.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg"
                  data-aos="fade-up"
                  aria-label={item}
                >
                  <h1
                    translate="no"
                    className="text-gray-700 dark:text-gray-200 font-medium"
                  >
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
