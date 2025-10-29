"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your car services.",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always visible, no scroll hide
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
        h-16 w-16 rounded-full 
        bg-green-500 
        text-white 
        shadow-[0_0_20px_rgba(72,187,120,0.7)] 
        hover:shadow-[0_0_35px_rgba(72,187,120,1)] 
        transition-all duration-500 ease-out 
        hover:scale-110 active:scale-95 
        animate-pulse-smooth 
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white drop-shadow-md" />
    </button>
  );
}

// 🟢 Add this Tailwind CSS animation in your globals.css or tailwind.css
/*
@keyframes pulse-smooth {
  0%, 100% {
    box-shadow: 0 0 15px rgba(72, 187, 120, 0.5), 0 0 30px rgba(72, 187, 120, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(72, 187, 120, 0.9), 0 0 50px rgba(72, 187, 120, 0.6);
  }
}

.animate-pulse-smooth {
  animation: pulse-smooth 2.5s infinite;
}
*/
