import {
  GraduationCap,
  Globe2,
  Menu,
  Users,
  Trophy,
} from "lucide-react";
import Plans from "../../component/Plans/Plans";
import Email from "../../component/Email/Email";
import AboutSection from "../../component/Aboutsection/AboutSection";
import { Link } from "react-router";
import ClientesLogos from "../../component/ClientsLogos/ClientesLogos";
import StudentReviews from "../../component/StudentReviews/StudentReviews";
import Footer from "../../component/Footer/Footer";
import { useEffect, useState } from 'react';
import TypewriterParagraph from "../../component/TypewriterParagraph/TypewriterParagraph";
import HeroFeatureSection from "../../component/HeroFeatureSection/HeroFeatureSection";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Home2() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 5000, { duration: 5 });
    return animation.stop;
  }, []);




  return (
    <div className="min-h-screen bg-white">
     
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                GlobalEnglish
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link to="/"
              
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Inicio
              </Link>
              <Link to="/Home2"
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Metodología
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Profesores
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Precios
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Contacto
              </Link>
            </nav>

            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-indigo-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6">
                  <Globe2 className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">
                    Aprende inglés de forma natural
                  </span>
                </div>

                <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-title'>
                  Domina el inglés con profesores nativos certificados 🎓
                </h1>

                <TypewriterParagraph />

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Empieza tu viaje
                  </button>
                  <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                    Clase de prueba gratis
                  </button>
                </div>

                <div className="flex items-center gap-8 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <motion.h1>{rounded}</motion.h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-indigo-600" />
                    <span>98% tasa de éxito</span>
                  </div>
                </div>
              </div>
              <HeroFeatureSection />
            </div>
          </div>
        </section>

        <ClientesLogos/>

        <AboutSection />
       
        <Plans />
        <StudentReviews />
        <Email />
      </main>
      <Footer />
    </div>
  );
}

export default Home2;
