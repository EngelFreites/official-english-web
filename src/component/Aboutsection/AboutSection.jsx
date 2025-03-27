import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaBookOpen, FaGlobeAmericas } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="flex  relative flex-col max-w-7xl mx-auto pt-24 gap-20  justify-center items-center text-gray-800 ">
      <div className=" absolute top-8 w-96 h-96 rounded-full bg-blue-200 opacity-30 blur-2xl"></div>
      <div className="flex flex-wrap gap-6">
        {[
          {
            text: "Te ayudamos a integrar el idioma en tu vida de forma natural, ágil e intuitiva. Todo esto con entusiasmo y paciencia.",
            icon: <FaGlobeAmericas className="text-blue-500 group-hover:rotate-12 transition-transform duration-300" />,
          },
          {
            text: "Trabajamos con material actualizado y te guiamos para que puedas aprender dentro y fuera de la clase, logrando tus metas rápidamente.",
            icon: <FaBookOpen className="text-green-500 group-hover:rotate-12 transition-transform duration-300" />,
          },
          {
            text: "Ofrecemos clases dinámicas y adaptadas a cada estudiante, ajustando los contenidos y ritmos según tus necesidades.",
            icon: <FaChalkboardTeacher className="text-red-500 group-hover:rotate-12 transition-transform duration-300" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="animate-scroll bg-white flex p-6 gap-6  rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out group flex-1 min-w-[280px] max-w-[350px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 + index * 0.2 }}
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-lg text-gray-700">{item.text}</p>
          </motion.div>
        ))}

      </div>

      
        <section className=" relative max-w-7xl mx-auto py-16 px-6 md:px-16">
      
      
        <div className="absolute top-20 right-0 w-40 h-40 bg-blue-200 rounded-full z-[-1]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          <motion.div
            className=" animate-scroll flex flex-col  border-1 border-indigo-300 items-center p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <FaChalkboardTeacher className="text-indigo-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">Profesores Certificados</h3>
            <p className="text-gray-600 text-center mt-2">Aprende con profesionales cualificados.</p>
          </motion.div>

          <motion.div
            className=" animate-scroll flex flex-col items-center border-1  border-indigo-300 p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <FaBookOpen className="text-pink-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">Material Actualizado</h3>
            <p className="text-gray-600 text-center mt-2">Acceso a recursos de aprendizaje modernos y relevantes.</p>
          </motion.div>

          <motion.div
            className=" animate-scroll flex flex-col items-center border-1  border-indigo-300 p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <FaUsers className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">Coaches Expertos</h3>
            <p className="text-gray-600 text-center mt-2">Recibe guía y apoyo de coaches experimentados.</p>
          </motion.div>

          <motion.div
            className=" animate-scroll flex flex-col items-center border-1 border-indigo-300 p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <FaGlobeAmericas className="text-yellow-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">Inmersión Cultural</h3>
            <p className="text-gray-600 text-center mt-2">Sumérgete en la cultura para un aprendizaje más profundo.</p>
          </motion.div>
        </div>
      </section>                 
    </section>
  );
}