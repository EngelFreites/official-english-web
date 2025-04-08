import {
  GraduationCap,
  Globe2,
  Menu,
  Users,
  MessageSquare,
  BookOpen,
  Trophy,
} from "lucide-react";
import Plans from "../../component/Plans/Plans";
import Email from "../../component/Email/Email";
import AboutSection from "../../component/Aboutsection/AboutSection";
import { Link } from "react-router";

import ClientesLogos from "../../component/ClientsLogos/ClientesLogos";
import StudentReviews from "../../component/StudentReviews/StudentReviews";
import FeaturesSection from "../../component/FeaturesSection/FeaturesSection";

function Home2() {
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

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Domina el inglés con profesores nativos certificados 🎓
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Nuestro método único te ayuda a pensar y hablar en inglés de
                  forma natural. Aprenderás el idioma como lo hacen los nativos,
                  con ejercicios prácticos y conversación real.
                </p>

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
                    <span>+5000 estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-indigo-600" />
                    <span>98% tasa de éxito</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-white p-8 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>

                <div className="absolute -left-8 top-1/2 bg-white rounded-lg shadow-xl p-4 w-64">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Conversación Real
                      </div>
                      <div className="text-sm text-gray-600">
                        Práctica con nativos
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-12 bg-white rounded-lg shadow-xl p-4 w-64">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Método Efectivo
                      </div>
                      <div className="text-sm text-gray-600">
                        Aprende más rápido
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientesLogos/>

        <AboutSection />
       
        <Plans />
        <FeaturesSection />
        <StudentReviews />
        <Email />
      </main>
    </div>
  );
}

export default Home2;
