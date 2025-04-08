import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FeaturesSection() {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);


  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className="text-4xl font-black text-gray-800 relative inline-block mb-2">
        Ventajas Clave
        <span className="absolute left-0 bottom-1 w-64 h-2 bg-yellow-200 opacity-60 rounded-md"></span>
      </h1>
      
      <section className=" relative flex  justify-center items-center s mx-auto py-16 px-6 md:px-16">
        <div className="absolute top-20 right-0 w-40 h-40 bg-blue-200 rounded-full z-[-1]"></div>
        <div className="flex gap-8">
        <motion.div
          ref={ref}
          initial={{ y: -80, opacity: 0 }}
          animate={controls}
          transition={{
            y: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.3, delay: 0.5 }, 
          }}
          className="flex items-center bg-indigo-50 gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
        >
            <div className="bg-indigo-50  rounded-full ">
              <FaChalkboardTeacher className="text-indigo-600 text-xl" />
            </div>
            <p className="text-indigo-600 text-sm">Profesores Certificados</p>
    
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: -60, opacity: 0 }}
            animate={controls}
            transition={{
              y: { duration: 0.4, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.5 }, 
            }}
            className="flex items-center bg-pink-50 gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="bg-pink-50  rounded-full">
              <FaBookOpen className="text-pink-600 text-xl" />
            </div>
          
            <p className="text-pink-600  text-center text-sm ">Material Actualizado</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: -40, opacity: 0 }}
            animate={controls}
            transition={{
              y: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.5 }, 
            }}
            className="flex items-center bg-green-50 gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="bg-green-50  rounded-full ">
              <FaUsers className="text-green-600 text-xl" />
            </div>
          
            <p className="text-green-600 text-sm">Coaches Expertos</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: -35, opacity: 0 }}
            animate={controls}
            transition={{
              y: { duration: 0.2, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.5 }, // aparece cuando ya casi llega
            }}
            className="flex items-center bg-yellow-50 gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="bg-yellow-50 rounded-full ">
              <FaGlobeAmericas className="text-yellow-600 text-xl" />
            </div>
        
            <p className="text-center text-yellow-600 text-sm">Inmersión Cultural</p>
          </motion.div>
        </div>
      </section> 
    </div>
     
  )
}