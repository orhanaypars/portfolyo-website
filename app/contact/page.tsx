"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Form verileri için arayüz
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function ContactPage() {
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

  return (
    <main className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-24 mt-15">
      {/* Başlık */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          İletişim
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Bana ulaşmak için aşağıdaki formu doldurun veya sosyal medya
          hesaplarımdan iletişime geçin.
        </p>
      </section>

      {/* İletişim Formu */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
              } focus:outline-none`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-2">
                {typeof errors.name?.message === "string" &&
                  errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  : "border-gray-300 dark:border-gray-700 focus:ring-teal-500"
              } focus:outline-none`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2">
                {typeof errors.email?.message === "string" &&
                  errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  : "border-gray-300 dark:border-gray-700 focus:ring-teal-500"
              } focus:outline-none`}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-2">
                {typeof errors.message?.message === "string" &&
                  errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition disabled:opacity-50"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>
        </form>
      </section>

      {/* Sosyal Medya Hesapları */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 dark:from-teal-300 dark:to-indigo-300 mb-8">
          Sosyal Medya
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
