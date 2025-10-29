"use client";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-20 md:py-28 bg-black text-white text-center overflow-hidden"
    >
      {/* 🔴 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-900/10 via-black to-black" />

      <div className="container relative z-10 px-4 md:px-8">
        {/* 🗺️ Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-red-500 mb-6">
          Find Us on Google Maps
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-10">
          Visit <span className="text-red-500 font-semibold">A-Mix Car Maintenance</span> — your trusted car service center in <b>Riyadh, Nasim</b>.
        </p>

        {/* 📍 Google Maps Embed */}
        <div className="relative mx-auto max-w-5xl aspect-[16/9] rounded-xl overflow-hidden border border-red-800 shadow-lg shadow-red-800/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4025.4823192774275!2d46.852604711240765!3d24.714863150975955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa9006b3519fb%3A0xd4a0ba4dd1aa64e6!2sA-Mix%20car%20maintenance!5e1!3m2!1sen!2sin!4v1761659971532!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] rounded-xl border-0"
          ></iframe>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          📍 We’re located in Nasim, Riyadh — open 24x7 for your car emergencies.
        </p>
      </div>
    </section>
  );
}
