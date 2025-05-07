"use client";
import Image from "next/image";
import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaPhone,
  FaTools,
  FaBolt,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Mesaj gönderilirken bir hata oluştu.");
      }

      toast.success("Mesajınız başarıyla gönderildi!", {
        style: {
          backgroundColor: "#22c55e",
          color: "#ffffff",
        },
      });
    } catch (error) {
      console.error(error);

      toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.", {
        style: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
        },
      });
    }
  };

  const projects = [
    {
      title: 'Veteriner Website',
      description: 'Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir uygulamadır.',
      image: '/project-1.png',
      link: 'https://vet-website-project.vercel.app/'
    },
    {
      title: 'Öğrenci Yurdu Website',
      description: 'Bu proje, kullanıcı dostu bir arayüz ve güçlü bir altyapı sunar.',
      image: '/project-2.png',
      link: 'https://dormitory-project-kappa.vercel.app/'
    },
    {
      title: 'Sosyal Medya Platformu',
      description: 'Kullanıcıların içerik paylaşabileceği bir sosyal medya platformu.',
      image: '/project-3.png',
      link: 'https://social-media-project-six.vercel.app/'
    },
    {
      title: 'Otel website project',
      description: 'Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir otel websitesidir.',
      image: '/project4.png',
      link: 'https://hotel-website-nu-seven.vercel.app/en'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] text-center px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        {/* İçerik */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-[#c771c7] dark:to-[#00FFFF]">
          Aypars Çelik
          <span className="neon-line"></span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mb-10 leading-relaxed font-light text-gray-700 dark:text-gray-300">
          Full Stack Developer | React | Next.js | Tailwind CSS
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/orhanaypars"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-medium text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition text-lg flex items-center gap-2"
          >
            GitHub <FaGithub />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg font-medium text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition text-lg flex items-center gap-2"
          >
            Projelerim
            <FaTools />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition text-lg flex items-center gap-2"
          >
            İletişim <FaPhone />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-300 dark:to-teal-300 mb-8">
          Hakkımda
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/thatsme.jpg"
              alt="Aypars Çelik"
              width={300}
              height={300}
              className="rounded-full shadow-2xl object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Merhaba, ben{" "}
              <span className="font-bold text-indigo-500 dark:text-indigo-300">
                Aypars Çelik
              </span>
              . Kullanıcı deneyimini ön planda tutan, modern web teknolojilerine
              tutkulu bir{" "}
              <span className="font-bold text-teal-500 dark:text-teal-300">
                Full Stack Developer
              </span>{" "}
              olarak çalışıyorum.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Yazılım geliştirme sürecinde, temiz kod yazmaya ve en iyi uygulama
              standartlarını takip etmeye özen gösteriyorum.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Boş zamanlarımda yeni teknolojiler öğrenmek, açık kaynak projelere
              katkıda bulunmak ve blog yazıları yazmak gibi aktivitelerle
              ilgileniyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-12">
          Kullandığım Teknolojiler
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* React */}
          <div className="group relative bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 w-48 h-48">
            <FaReact className="text-5xl text-white group-hover:animate-spin" />
            <p className="mt-4 text-lg font-semibold text-white">React</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                React, modern kullanıcı arayüzleri geliştirmek için kullanılan
                güçlü bir JavaScript kütüphanesidir.
              </p>
            </div>
          </div>

          {/* Next.js */}
          <div className="group relative bg-gradient-to-r from-gray-800 to-black dark:from-gray-700 dark:to-gray-900 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <RiNextjsFill className="text-5xl text-white group-hover:animate-pulse" />
            <p className="mt-4 text-lg font-semibold text-white">Next.js</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                Next.js, React tabanlı projeler için sunucu tarafı render ve
                statik site oluşturma özellikleri sunar.
              </p>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="group relative bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <RiTailwindCssFill className="text-5xl text-white group-hover:animate-bounce" />
            <p className="mt-4 text-lg font-semibold text-white">
              Tailwind CSS
            </p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                Tailwind CSS, hızlı ve özelleştirilebilir tasarımlar oluşturmak
                için kullanılan bir CSS framework&apos;üdür.
              </p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-400 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <IoLogoJavascript className="text-5xl text-white group-hover:animate-wiggle" />
            <p className="mt-4 text-lg font-semibold text-white">JavaScript</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                JavaScript, web uygulamalarına dinamik özellikler kazandırmak
                için kullanılan bir programlama dilidir.
              </p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="group relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <SiTypescript className="text-5xl text-white group-hover:animate-spin" />
            <p className="mt-4 text-lg font-semibold text-white">TypeScript</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                TypeScript, JavaScript&apos;in güçlü bir tip sistemiyle
                genişletilmiş halidir.
              </p>
            </div>
          </div>

          {/* HTML5 */}
          <div className="group relative bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaHtml5 className="text-5xl text-white group-hover:animate-bounce" />
            <p className="mt-4 text-lg font-semibold text-white">HTML5</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                HTML5, web sayfalarının yapısını oluşturmak için kullanılan en
                son HTML standardıdır.
              </p>
            </div>
          </div>

          {/* CSS3 */}
          <div className="group relative bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <FaCss3 className="text-5xl text-white group-hover:animate-spin" />
            <p className="mt-4 text-lg font-semibold text-white">CSS3</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                CSS3, web sayfalarının stilini ve düzenini kontrol etmek için
                kullanılan en son CSS standardıdır.
              </p>
            </div>
          </div>

          {/* Node.js */}
          <div className="group relative bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-100 hover:scale-105">
            <FaNode className="text-5xl text-white group-hover:animate-pulse" />
            <p className="mt-4 text-lg font-semibold text-white">Node.js</p>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
              <p className="text-sm text-white px-4">
                Node.js, JavaScript&apos;i sunucu tarafında çalıştırmak için
                kullanılan bir çalışma ortamıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
  id="projects"
  className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center"
>
  <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500 dark:from-indigo-300 dark:to-teal-300 mb-8">
    Projelerim
  </h2>
  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12">
    Projelerim hakkında detaylı bilgi almak için aşağıdaki bağlantılara göz atabilirsiniz.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {projects.map((project, index) => {
      const gradients = [
        "from-green-500 to-blue-500",
        "from-purple-500 to-pink-500",
        "from-yellow-500 to-orange-500",
        "from-blue-800 to-amber-500",
      ];
      const gradient = gradients[index % gradients.length];
      return (
        <div
          key={index}
          className={`group bg-gradient-to-r ${gradient} shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            {project.title}
          </h3>
          <div className="w-full h-[200px] mb-6 relative">
            <Image
              src={project.image}
              alt={`${project.title} Görseli`}
              fill
              className="rounded-lg object-cover group-hover:opacity-90 transition duration-300"
            />
          </div>
          <p className="text-white mb-6 group-hover:opacity-80 transition duration-300">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            Projeyi İncele
          </a>
        </div>
      );
    })}
  </div>
</section>
      {/* Projelerimin Avantajları */}
      <section
        id="advantages"
        className="max-w-6xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Projelerimin Avantajları
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-12">
          Projelerimde sunduğum avantajlar, kullanıcı deneyimini ve performansı
          ön planda tutar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO Optimizasyonu */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaTools className="text-5xl text-teal-500 mb-4 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition duration-300">
              SEO Optimizasyonu
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Projelerim arama motorlarında üst sıralarda yer alacak şekilde
              optimize edilmiştir.
            </p>
          </div>

          {/* Güvenlik */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaShieldAlt className="text-5xl text-indigo-500 mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-indigo-500 transition duration-300">
              Güvenlik
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Projelerimde en güncel güvenlik standartları uygulanır.
            </p>
          </div>

          {/* Son Teknoloji */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaReact className="text-5xl text-blue-500 mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-500 transition duration-300">
              Son Teknoloji
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Projelerimde en yeni ve modern teknolojiler kullanılır.
            </p>
          </div>

          {/* Responsive Tasarım */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaMobileAlt className="text-5xl text-green-500 mb-4 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-green-500 transition duration-300">
              Responsive Tasarım
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Tüm cihazlarda mükemmel bir kullanıcı deneyimi sunar.
            </p>
          </div>

          {/* Performans */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaBolt className="text-5xl text-yellow-500 mb-4 group-hover:animate-pulse" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-yellow-500 transition duration-300">
              Yüksek Performans
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Projelerim hızlı yükleme süreleri ve yüksek performans sunar.
            </p>
          </div>

          {/* Teknik Destek */}
          <div className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaPhone className="text-5xl text-red-500 mb-4 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-red-500 transition duration-300">
              Teknik Destek
            </h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition duration-300">
              Projelerim için sürekli teknik destek ve güncellemeler sağlıyorum.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto py-16 px-6 sm:px-12 lg:px-24 text-center"
      >
        <div className="flex justify-center items-center gap-3">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-12 animate-fade-in">
              İletişim
            </h2>
          </div>
          <FaPhone className=" text-gray-600 dark:text-white" size={40} />
        </div>
        <span className="neon-line"></span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-200 dark:border-gray-700 animate-slide-up"
        >
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 group-hover:text-teal-500 transition duration-300"
            >
              İsim
            </label>
            <input
              id="name"
              type="text"
              placeholder="Adınızı girin"
              {...register("name", { required: "İsim zorunludur." })}
              className={`w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-teal-500"
              } focus:outline-none transition duration-300 group-hover:shadow-lg`}
            />
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition duration-300"
            >
              E-posta
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-posta adresinizi girin"
              {...register("email", {
                required: "E-posta zorunludur.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Geçerli bir e-posta adresi girin.",
                },
              })}
              className={`w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500"
              } focus:outline-none transition duration-300 group-hover:shadow-lg`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2">
                {errors.email?.message &&
                  typeof errors.email.message === "string" && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.email.message}
                    </p>
                  )}
              </p>
            )}
          </div>
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition duration-300"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Mesajınızı yazın"
              {...register("message", { required: "Mesaj zorunludur." })}
              className={`w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 border ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-blue-500"
              } focus:outline-none transition duration-300 group-hover:shadow-lg`}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-2">
                {typeof errors.message.message === "string" &&
                  errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition disabled:opacity-50 animate-bounce-once"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>
        </form>
      </section>
    </main>
  );
}
