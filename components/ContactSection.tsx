"use client";

import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const callNumbers = {
    mechanic: "tel:+966555941897",
    painting: "tel:+966502226865",
    electrical: "tel:+966502226865",
    towing: "tel:+966555941897", // ✅ Updated towing number
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-20 md:py-28 overflow-hidden text-white"
      aria-labelledby="contact-title"
    >
      {/* 🔴 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-900/10 via-black to-black" />

      <div className="container px-4 md:px-8 relative z-10 text-center">
        <h2
          id="contact-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-red-500 mb-4"
        >
          Contact Us
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-12">
          We’re always ready to assist you — 24x7 emergency towing and expert services in Riyadh.
        </p>

        {/* 📞 Service Numbers */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-12">
          <ContactCard
            title="Car Mechanic & Maintenance"
            number="+966 55 594 1897"
            href={callNumbers.mechanic}
            color="red"
          />
          <ContactCard
            title="Painting & Denting"
            number="+966 50 222 6865"
            href={callNumbers.painting}
            color="red"
          />
          <ContactCard
            title="Electrical Works"
            number="+966 50 222 6865"
            href={callNumbers.electrical}
            color="red"
          />
          <ContactCard
            title="24x7 Emergency Towing Service"
            number="+966 55 594 1897"
            href={callNumbers.towing}
            color="yellow"
          />
        </div>

        {/* 📍 Address + Hours */}
        <div className="max-w-3xl mx-auto mt-10 bg-[#1a1a1a] border border-red-800 rounded-xl p-8 shadow-lg shadow-red-900/20 text-left space-y-6">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-500">Workshop Address</h3>
              <p className="text-gray-300 mt-1 leading-relaxed">
                PV84+238, Jakarta, As Saadah, Riyadh 14257, Saudi Arabia
              </p>
            </div>
          </div>

          {/* 🕒 Working Hours (Enhanced Button Style) */}
          <div className="flex items-start gap-3 mt-8">
            <Clock className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-3">Working Hours</h3>
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 justify-items-center mt-6">
                {[
                  { day: "Saturday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Sunday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Monday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Tuesday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Wednesday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Thursday", time: "7:30 AM – 8:00 PM", open: true },
                  { day: "Friday", time: "Closed", open: false },
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-xl p-6 transition-all duration-300 text-sm sm:text-base font-semibold border ${
                      item.open
                        ? "bg-green-600/20 border-green-500/40 text-green-400 hover:bg-green-600/30"
                        : "bg-red-600/20 border-red-500/40 text-red-400 hover:bg-red-600/30"
                    }`}
                  >
                    <span className="text-white">{item.day}</span>
                    <span className="text-xs text-gray-300 mt-1">{item.time}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Helper Components ----------------

function ContactCard({
  title,
  number,
  href,
  color = "red",
}: {
  title: string;
  number: string;
  href: string;
  color?: "red" | "yellow";
}) {
  const colorClasses =
    color === "yellow"
      ? {
          border: "border-yellow-400",
          icon: "text-yellow-400",
          number: "text-yellow-300",
          hoverBg: "hover:bg-yellow-500/10",
          hoverShadow: "hover:shadow-yellow-400/30",
        }
      : {
          border: "border-red-800",
          icon: "text-red-500",
          number: "text-red-400",
          hoverBg: "hover:bg-red-700/10",
          hoverShadow: "hover:shadow-red-500/30",
        };

  return (
    <a
      href={href}
      className={`group flex flex-col items-center justify-center p-6 bg-[#1a1a1a] rounded-xl border ${colorClasses.border} ${colorClasses.hoverBg} transition-all duration-300 shadow-md ${colorClasses.hoverShadow}`}
    >
      <Phone
        className={`h-8 w-8 ${colorClasses.icon} mb-3 group-hover:scale-110 transition-transform duration-300`}
      />
      <h3 className="text-lg font-bold text-white mb-1 text-center">{title}</h3>
      <p className={`${colorClasses.number} font-semibold`}>{number}</p>
    </a>
  );
}

function WorkHour({
  day,
  time,
  status,
}: {
  day: string;
  time: string;
  status: "open" | "closed";
}) {
  const statusColors =
    status === "open"
      ? "border-green-500/30 text-green-400 bg-green-500/5"
      : "border-red-500/30 text-red-400 bg-red-500/5";

  return (
    <div
      className={`rounded-lg px-4 py-3 border ${statusColors} transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:shadow-red-700/20`}
    >
      <div className="flex flex-col items-center">
        <span className="font-semibold text-white text-sm">{day}</span>
        <span className="text-xs text-gray-400">{time}</span>
        <span
          className={`mt-1 text-[11px] uppercase font-semibold ${
            status === "open" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status === "open" ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
}
