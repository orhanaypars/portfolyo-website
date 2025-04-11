import React from "react";
import Image from "next/image";
import {
  FaBolt,
  FaMobileAlt,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-24 my-15">
      {/* Projelerim Bölümü */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Projelerim
          <span className="neon-line"></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Proje 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <Image
              src="/project-1.png"
              alt="Proje 1"
              width={500}
              height={300}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-500 dark:text-indigo-300">
              Proje 1
            </h3>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Modern bir web uygulaması. React ve Tailwind CSS ile
              geliştirilmiştir.
            </p>
          </div>

          {/* Proje 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <Image
              src="/project-2.png"
              alt="Proje 2"
              width={500}
              height={300}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-500 dark:text-indigo-300">
              Proje 2
            </h3>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              E-ticaret platformu. Next.js ve Tailwind CSS ile geliştirilmiştir.
            </p>
          </div>
        </div>
      </section>

      {/* Projelerimin Avantajları Bölümü */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Projelerimin Avantajları
          <span className="neon-line max-w-xl"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Avantaj 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 ">
            <div className="flex items-center justify-center">
              <FaBolt className="text-4xl text-yellow-500 dark:text-yellow-500 mb-2 " />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-500 mb-5">
              Hızlı Performans
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projelerim, modern teknolojiler kullanılarak{" "}
              <span className="text-yellow-500 font-semibold">hızlı</span> ve{" "}
              <span className="text-yellow-500 font-semibold">verimli</span> bir
              şekilde çalışır.
            </p>
          </div>

          {/* Avantaj 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaMobileAlt className="text-4xl text-blue-500 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-4">
              Responsive Tasarım
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {" "}
              <span className="text-sky-600 font-semibold">
                Tüm cihazlarda{" "}
              </span>
              kusursuz bir şekilde çalışır. mükemmel bir kullanıcı deneyimi
              sunar.
            </p>
          </div>

          {/* Avantaj 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaShieldAlt className="text-4xl text-green-500 dark:text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-green-500 dark:text-green-500 mb-4">
              Güvenlik
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Modern{" "}
              <span className="text-green-500 font-semibold">güvenlik </span>{" "}
              standartları ile kullanıcı verilerini korur.
            </p>
          </div>

          {/* Avantaj 4 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaCogs className="text-4xl text-purple-500 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-300 mb-4">
              Modern Teknolojiler
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {" "}
              <span className="text-sky-600 font-semibold">React </span>{" "}
              <span className="text-slate-500 font-semibold">Next Js </span>{" "}
              <span className="text-sky-300 font-semibold">Tailwind CSS </span>{" "}
              gibi modern teknolojiler kullanılarak geliştirilmiştir.
            </p>
          </div>

          {/* Avantaj 5 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaTools className="text-4xl text-green-500 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-green-500 dark:text-green-300 mb-4">
              Kolay Yönetim
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projelerim,{" "}
              <span className="text-black dark:text-white font-semibold">
                temiz kod{" "}
              </span>{" "}
              yapısı ve modüler bileşenler sayesinde kolayca yönetilebilir.
            </p>
          </div>

          {/* Avantaj 6 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaChartLine className="text-4xl text-yellow-300 dark:text-yellow-200" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-300 dark:text-yellow-200 mb-4">
              Ölçeklenebilirlik
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projelerim, büyüyen iş ihtiyaçlarına{" "}
              <span className="text-yellow-200 font-semibold">
                kolayca uyum{" "}
              </span>{" "}
              sağlayacak şekilde tasarlanmıştır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
