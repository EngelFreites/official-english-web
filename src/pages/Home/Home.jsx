import { GraduationCap, Globe2, Menu, Users, Trophy } from "lucide-react";
import Plans from "../../component/Plans/Plans";
import Email from "../../component/Email/Email";
import AboutSection from "../../component/Aboutsection/AboutSection";
import { Link } from "react-router";
import ClientesLogos from "../../component/ClientsLogos/ClientesLogos";
import StudentReviews from "../../component/StudentReviews/StudentReviews";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import PricingPlans from "../../component/PricingPlans/PricingPlans";
import { useEffect } from "react";
import TypewriterParagraph from "../../component/TypewriterParagraph/TypewriterParagraph";
import HeroFeatureSection from "../../component/HeroFeatureSection/HeroFeatureSection";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import WhatsappButton from "../../component/WhatsappButton/WhatsappButton";

function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 5000, { duration: 5 });
    return animation.stop;
  }, [count]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section
          className="py-20 bg-gradient-to-b from-indigo-50 to-white"
          id="inicio"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6">
                  <Globe2 className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">
                    Aprende inglés de forma natural
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-title">
                  Dominá el inglés a través de la acción⚡
                </h1>

                <TypewriterParagraph>
                  {`No son sólo clases. Son sesiones de inmersión en materiales 
                  y conversaciones reales. Nuestro método te ayuda a pensar y
                  hablar en inglés de forma natural.
                  ¿Nuestra motivación? Que tus ideas no conozcan fronteras.
                  Tu mensaje podrá ser comprendido por todos.`}
                </TypewriterParagraph>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-8">
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

        <ClientesLogos />

        <AboutSection />

        <Plans />
        <PricingPlans />
        <StudentReviews />
        <Email />
        <WhatsappButton />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
