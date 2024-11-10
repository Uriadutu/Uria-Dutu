import React from 'react'

const Skill = () => {
  return (
    <div className="flex px-20 w-full justify-center  mt-20">
      <div className="">
        <h1 className="text-center mb-3 sm:mb-[30px] text-gray-700 font-medium pt-5 text-xl w-full sm:text-[35px]">
          Penguasaan
        </h1>
        <h1 className="text-center mb-3 sm:mb-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
          Bahasa Dan Alat
        </h1>
        <div className="flex justify-center gap-5 items-center">
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>TypeScript</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>JavaScript</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>Visual Studio Code</h1>
          </div>
        </div>
        <h1 className="text-center my-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
          <span className="italic">Library</span> Dan
          <span className="italic">Framework</span>
        </h1>
        <div className="flex justify-center gap-5 items-center">
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>React</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>Next.js</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>Express</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>Tailwind</h1>
          </div>
        </div>
        <h1 className="text-center my-3 text-gray-700 font-medium pt-5 text-xl w-full sm:text-md">
          Lainnya
        </h1>
        <div className="flex justify-center gap-5 items-center">
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>HTML</h1>
          </div>
          <div className="flex items-center justify-center p-3 bg-white border border-gray-300  rounded-lg">
            <h1>CSS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill
