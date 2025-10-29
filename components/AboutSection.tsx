"use client";

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    "Expert car mechanic services trusted by customers across Riyadh Nasim.",
    "Over 30 years of hands-on experience in car repair and maintenance.",
    "Professional team specializing in mechanical, electrical, and painting work.",
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#282828]/80 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/logo/logo.png"
              alt="Best Car Mechanic Services in Riyadh Nasim"
              className="rounded-2xl object-contain w-full max-w-[450px] md:max-w-[500px] shadow-lg shadow-red-500/20 hover:scale-105 transition-transform duration-500"
              width={500}
              height={400}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About Our Garage
            </h2>

            <p className="text-gray-300 md:text-lg leading-relaxed max-w-xl">
              Welcome to{" "}
              <span className="text-red-400 font-semibold">
                A-Mix car maintenance
              </span>
              — your trusted destination for{" "}
              <span className="text-red-400 font-semibold">
                car repair and maintenance in Riyadh
              </span>
              . With over{" "}
              <span className="text-red-400 font-semibold">30 years</span> of
              proven experience, we provide top-quality mechanical, electrical,
              painting, and denting services using advanced diagnostic tools and
              genuine parts.
            </p>

            <p className="text-gray-300 md:text-lg leading-relaxed max-w-xl">
              Our expert team is known for delivering{" "}
              <span className="text-red-400 font-semibold">
                fast, reliable, and affordable car services
              </span>{" "}
              — keeping your vehicle running like new. Whether it’s a routine
              checkup or a full engine rebuild, we’ve got you covered!
            </p>

            {/* Highlights */}
            <ul className="grid gap-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/20">
                    <ArrowRight className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
            onClick={scrollToContact}
            className="hidden sm:inline-flex items-center justify-center gap-2 
             bg-red-600 hover:bg-red-700 text-white font-medium 
             px-1  py-5 rounded-full text-sm shadow-md 
             transition-all duration-300 hover:shadow-red-500/30 hover:-translate-y-[1px]"
              >
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
    </section>
  );
}
