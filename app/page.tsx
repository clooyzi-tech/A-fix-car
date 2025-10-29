"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";




import PageLoader from "@/components/page-loader";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";

import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/whatsapp-button";


import Footer from "@/components/footer";




export default function Home() {







  return (

     <div className="flex min-h-screen flex-col">


        {/* loads software page for 3 sec */}
        <PageLoader />




        {/* navbar section*/}
        <Navbar />




         {/* Imp one Header with  */}

      {/* 🌈 Floating Gradient Background fixed importent one  */}
      <div className="fixed inset-0 -z-20 animate-gradient bg-[#000000] "></div>



    
      <main className="flex-1">


        {/* Hero Section */}
        <HeroSection /> 







        {/* Services Section */}
        <ServicesSection />
         {/* about us Section */}
        <AboutSection />


        {/*location sections */}
        <LocationSection />



        {/* Contact Section */}
        <ContactSection />

      </main>

     <Footer />
        {/* Fixed WhatsApp Button */}
        <WhatsAppButton phoneNumber="+966555941897" />
    </div>
  );
}