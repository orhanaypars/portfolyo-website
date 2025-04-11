"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Anasayfa" },
    { href: "#projelerim", label: "Projelerim" },
    { href: "#yeteneklerim", label: "Yeteneklerim" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D0D0D] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="#"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]"
        >
          Aypars Çelik
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg hover:text-[#00FFFF] transition"
            >
              {link.label}
            </Link>
          ))}
          <div>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <FaBars className="text-2xl" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] text-white p-6"
            >
              {/* Header for Accessibility */}
              <SheetHeader className="flex items-left ">
                <SheetTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] ">
                  Menü
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-[#00FFFF] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 border-t border-[#333] pt-6">
                <p className="text-sm text-gray-400">
                  © 2025 Aypars Çelik. Tüm hakları saklıdır.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
