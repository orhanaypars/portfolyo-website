import React from "react";
import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center mt-10 lg:mt-30 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
        Kullanabildiğim Teknolojiler
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <FaReact className="text-4xl text-[#61DAFB]" />
          <p className="mt-2 text-lg font-semibold">React</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <RiNextjsFill className="text-4xl text-black dark:text-white" />
          <p className="mt-2 text-lg font-semibold">Next.js</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <RiTailwindCssFill className="text-4xl text-[#38BDF8]" />
          <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <IoLogoJavascript className="text-4xl text-[#F7DF1E]" />
          <p className="mt-2 text-lg font-semibold">JavaScript</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <SiTypescript className="text-4xl text-[#3178C6]" />
          <p className="mt-2 text-lg font-semibold">TypeScript</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <FaHtml5 className="text-4xl text-[#E34F26]" />
          <p className="mt-2 text-lg font-semibold">HTML5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <FaCss3 className="text-4xl text-[#1572B6]" />
          <p className="mt-2 text-lg font-semibold">CSS3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
          <FaNode className="text-4xl text-[#68A063]" />
          <p className="mt-2 text-lg font-semibold">Node.js</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
