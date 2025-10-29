"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToServicesSection = (section: string) => {
    const sectionId = section.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const ServicesSection = document.getElementById(sectionId);
    if (ServicesSection) {
      ServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleCall = () => {
    window.location.href = "tel:+966555941897"; // ✅ Riyadh number
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* 🚗 Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png" // ✅ Make sure your logo is in /public/logo.png
              alt="A-Mix AutoCare Logo"
              width={13}
              height={50}
              className="object-contain h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300 rounded-full"
              priority
            />
          </Link>
        </div>

          {/* === Services Navbar === */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {[
              "Car Mechanic & Maintenance",
              "Painting & Denting",
              "Electrical Works",
              "24x7 Emergency Towing Service",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToServicesSection(section)}
                className="text-sm font-semibold text-red-500 hover:text-white transition-colors duration-300"
              >
                {section}
              </button>
            ))}
          </nav>


        {/* 📞 Call Button */}
        <Button
          onClick={handleCall}
          className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
        >
          <Phone className="h-4 w-4" /> Call Now
        </Button>

        {/* 📱 Mobile Menu */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded-md hover:bg-gray-800/70 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {mobileOpen && (
            <div
              className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-sm flex flex-col items-start py-6 px-6 gap-6 z-50 transform transition-transform duration-700 ease-out ${
                mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {/* Close Button */}
              <button
                className="self-end mb-4 p-2 rounded-md text-red-500 hover:bg-white/10 transition"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>

              <a className="text-red-500 font-extrabold text-3xl w-full mb-4">
                Menu
              </a>

              {/* Mobile Links */}
              {[
                "Car Mechanic & Maintenance",
                "Painting & Denting",
                "Electrical Works",
                "24x7 Emergency Towing Service",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-white font-semibold text-lg w-full hover:text-red-500 transition-colors duration-300"
                >
                  {section}
                </a>
              ))}

              {/* 📞 Mobile Call Button */}
              <Button
                onClick={handleCall}
                className="mt-6 w-full bg-red-600 text-white font-semibold px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition-all duration-300"
              >
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </div>
          )}
        </div>
      </div>
      
    </header>
  );
}
