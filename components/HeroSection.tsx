"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const [showNumber, setShowNumber] = useState(false);

  const handleCall = () => {
    if (!showNumber) {
      setShowNumber(true);
    } else {
      window.location.href = "tel:+966555941897"; // ✅ Riyadh emergency number
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🖼️ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/car-garage-bg.png"
          alt="Best car mechanical work in Riyadh Nasim garage"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* 🔴 Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#000000cc] via-[#00000066] to-[#000000cc]" />

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-4 md:px-6 text-white">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl drop-shadow-lg">
          Best Car Mechanical Work in Nasim
        </h1>

        <p className="text-lg md:text-xl mt-4 text-gray-200 drop-shadow-md max-w-2xl mx-auto">
          Professional Car Repair • Painting • Electrical • 24x7 Towing Service in Riyadh
        </p>

        <div className="flex flex-col min-[400px]:flex-row justify-center mt-8">
          <Button
            onClick={handleCall}
            className={`rounded-full font-semibold px-8 py-4 flex items-center justify-center gap-2 transition-all duration-500 
            ${
              showNumber
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <Phone className="h-5 w-5" />
            {showNumber ? "📞 050 222 6865 (Tap to Call)" : "Call Now"}
          </Button>
        </div>

        {!showNumber && (
          <p className="text-sm text-gray-400 mt-3 animate-pulse">
            Tap once to reveal emergency number
          </p>
        )}
      </div>
    </section>
  );
}
