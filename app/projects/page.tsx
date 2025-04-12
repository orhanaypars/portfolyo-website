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
      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-300 dark:to-teal-300 mb-8">
          Projelerim
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12">
          Projelerim hakkında detaylı bilgi almak için aşağıdaki bağlantılara
          göz atabilirsiniz.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proje 1 */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 group-hover:from-teal-500 group-hover:to-indigo-500 transition duration-300 mb-10">
              Veteriner Website
            </h3>
            <Image
              src="/project-1.png"
              alt="Proje 1 Görseli"
              width={300}
              height={200}
              className="rounded-lg mb-4 object-cover group-hover:opacity-90 transition duration-300"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6 group-hover:text-gray-500 transition duration-300">
              Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir
              uygulamadır.
            </p>
            <a
              href="https://vet-website-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition"
            >
              Projeyi İncele
            </a>
          </div>

          {/* Proje 2 */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500  mb-10 group-hover:from-teal-500 group-hover:to-indigo-500 transition duration-300">
              Öğrenci Yurdu Website
            </h3>
            <Image
              src="/project-2.png"
              alt="Proje 2 Görseli"
              width={300}
              height={200}
              className="rounded-lg mb-8 object-cover group-hover:opacity-90 transition duration-300"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6 group-hover:text-gray-500 transition duration-300">
              Bu proje, kullanıcı dostu bir arayüz ve güçlü bir altyapı sunar.
            </p>
            <a
              href="https://dormitory-project-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition"
            >
              Projeyi İncele
            </a>
          </div>

          {/* Proje 3 */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800  mb-4 group-hover:from-teal-500 group-hover:to-indigo-500 transition duration-300 mb-10">
              Sosyal Medya Platformu
            </h3>
            <Image
              src="/project-3.png"
              alt="Proje 3 Görseli"
              width={300}
              height={200}
              className="rounded-lg mb-4 object-cover group-hover:opacity-90 transition duration-300"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6 group-hover:text-gray-500 transition duration-300">
              Kullanıcıların içerik paylaşabileceği bir sosyal medya platformu.
            </p>
            <a
              href="https://social-media-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition"
            >
              Projeyi İncele
            </a>
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
