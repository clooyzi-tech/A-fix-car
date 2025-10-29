"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  phone: string;
  highlight?: boolean;
}

const services: Service[] = [
  {
    title: "Car Mechanic & Maintenance",
    description:
      "From regular servicing, oil changes, and brake repairs to engine diagnostics — we ensure your car runs smoothly and safely.",
    image: "/car-mechanic-maintenance.png",
    phone: "tel:+966555941897",
  },
  {
    title: "Painting & Denting",
    description:
      "Get that showroom shine! We provide expert car body painting, color matching, scratch removal, and dent repair services.",
    image: "/car-painting-denting.png",
    phone: "tel:+966502226865",
  },
  {
    title: "Electrical Works",
    description:
      "We handle all electrical issues — from battery checks and wiring repairs to headlight installations and sensor servicing.",
    image: "/electrical-work.png",
    phone: "tel:+966502226865",
  },
  {
    title: "24x7 Emergency Towing Service",
    description:
      "Stranded? Don’t worry — our towing team is on standby 24x7 to assist you anywhere, anytime with quick roadside support.",
    image: "/towing-service.png",
    phone: "tel:+966555941897",
    highlight: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#1c1c1c] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* === Header === */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Car Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Professional auto care and emergency assistance you can count on — day
          or night.
        </p>

        {/* === Service Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg bg-[#222] border border-gray-700 hover:scale-[1.02] transition-all duration-500 ${
                service.highlight
                  ? "border-yellow-400 shadow-yellow-500/30"
                  : "hover:shadow-red-500/30"
              }`}
            >
              {/* === Image === */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* === Content === */}
              <CardContent className="p-8 text-left">
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    service.highlight ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                {/* === Call Button === */}
                <a
                  href={service.phone}
                  className={`inline-flex items-center gap-2 rounded-full font-semibold px-6 py-2 transition-all duration-300 ${
                    service.highlight
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
