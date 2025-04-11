"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "./components/Navbar";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaSearch,
  FaBolt,
  FaMobileAlt,
  FaCogs,
  FaTools,
  FaShieldAlt,
  FaPhone,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-poppins overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[90vh] text-center px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Aypars Çelik
          <span className="neon-line"></span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mb-10 leading-relaxed text-gray-700 dark:text-gray-300">
          Full Stack Developer | React | Next.js | Tailwind CSS
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Button className="px-8 py-4 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition text-lg">
            GitHub <FaGithub />
          </Button>
          <Button className="px-8 py-4 rounded-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition text-lg">
            Projeler <FaTools />
          </Button>
          <Button className="px-8 py-4 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition text-lg">
            İletişim
            <FaPhone />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-300 dark:to-teal-300 mb-8">
          Hakkımda
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Görsel */}
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Profil fotoğrafınızı buraya ekleyin
              alt="Aypars Çelik"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
            />
          </div>

          {/* Metin */}
          <div className="text-left">
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Merhaba, ben{" "}
              <span className="font-bold text-indigo-500 dark:text-indigo-300">
                Aypars Çelik
              </span>
              . Kullanıcı deneyimini ön planda tutan, modern web teknolojilerine
              tutkulu bir
              <span className="font-bold text-teal-500 dark:text-teal-300">
                {" "}
                Full Stack Developer
              </span>{" "}
              olarak çalışıyorum. React, Next.js ve Tailwind CSS gibi modern
              araçlarla performanslı ve etkileyici arayüzler geliştiriyorum.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Yazılım geliştirme sürecinde, temiz kod yazmaya ve en iyi uygulama
              standartlarını takip etmeye özen gösteriyorum. Ayrıca, takım
              çalışmasına yatkın biriyim ve projelerde etkili iletişim kurarak
              hedeflere ulaşmayı önemsiyorum.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Boş zamanlarımda yeni teknolojiler öğrenmek, açık kaynak projelere
              katkıda bulunmak ve blog yazıları yazmak gibi aktivitelerle
              ilgileniyorum.
            </p>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-indigo-500 dark:text-indigo-300">
              2+
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Yıllık Deneyim
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-teal-500 dark:text-teal-300">
              8+
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Tamamlanan Proje
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-blue-500 dark:text-blue-300">
              10+
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Mutlu Müşteri
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Kullandığım Teknolojiler
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

      {/* Avantajlar Bölümü */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Projelerimin Avantajları
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO Optimizasyonu */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaSearch className="text-4xl text-indigo-500 dark:text-indigo-300" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-4">
              SEO Optimizasyonu
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projem, arama motorlarında üst sıralarda yer almak için optimize
              edilmiştir. Hızlı yükleme süreleri, temiz kod yapısı ve meta
              etiketler sayesinde daha fazla görünürlük sağlar.
            </p>
          </div>

          {/* Hızlı Performans */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaBolt className="text-4xl text-teal-500 dark:text-teal-300" />
            </div>
            <h3 className="text-xl font-semibold text-teal-500 dark:text-teal-300 mb-4">
              Hızlı Performans
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Next.js ve Tailwind CSS gibi modern teknolojiler sayesinde projem
              hızlı ve verimli çalışır. Kullanıcı deneyimini artırmak için
              optimize edilmiş bileşenler kullanıyorum.
            </p>
          </div>

          {/* Responsive Tasarım */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaMobileAlt className="text-4xl text-blue-500 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-4">
              Responsive Tasarım
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projem, tüm cihazlarda mükemmel bir kullanıcı deneyimi sunar.
              Mobil, tablet ve masaüstü cihazlar için optimize edilmiş bir
              tasarıma sahiptir.
            </p>
          </div>

          {/* Modern Teknolojiler */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaCogs className="text-4xl text-purple-500 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-300 mb-4">
              Modern Teknolojiler
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              React, Next.js ve Tailwind CSS gibi modern teknolojiler kullanarak
              performanslı ve ölçeklenebilir projeler geliştiriyorum.
            </p>
          </div>

          {/* Kolay Yönetim */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaTools className="text-4xl text-green-500 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-green-500 dark:text-green-300 mb-4">
              Kolay Yönetim
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Projem, temiz kod yapısı ve modüler bileşenler sayesinde kolayca
              yönetilebilir ve güncellenebilir.
            </p>
          </div>

          {/* Güvenlik */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaShieldAlt className="text-4xl text-red-500 dark:text-red-300" />
            </div>
            <h3 className="text-xl font-semibold text-red-500 dark:text-red-300 mb-4">
              Güvenlik
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Modern güvenlik standartları ve en iyi uygulamalar sayesinde
              projem, kullanıcı verilerini korumak için güvenli bir altyapıya
              sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-8xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-300 dark:to-teal-300 mb-8">
          Son Projelerim
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 w-full sm:w-80 md:w-96">
            <Image
              src="/project-1.png"
              alt="Proje 1"
              width={500}
              height={300}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-500 dark:text-indigo-400">
              Proje 1
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Modern bir web uygulaması. React ve Tailwind ile geliştirilmiştir.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 w-full sm:w-80 md:w-96">
            <Image
              src="/project-2.png"
              alt="Proje 2"
              width={500}
              height={300}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-500 dark:text-indigo-400">
              Proje 2
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              E-ticaret platformu. Next.js ve Tailwind ile geliştirilmiştir.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-6">
          İletişim
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              İsim
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Adınızı girin"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              E-posta
            </label>
            <Input
              id="email"
              type="email"
              placeholder="E-posta adresinizi girin"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Mesajınızı yazın"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
            ></textarea>
          </div>
          <Button className="px-6 py-3 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition">
            Gönder
          </Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aypars Çelik. Tüm hakları
            saklıdır.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
