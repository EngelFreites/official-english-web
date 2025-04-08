import { motion } from "framer-motion";
import { FaChalkboardTeacher,FaBookOpen, FaGlobeAmericas } from "react-icons/fa";


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

               
    </section>
  );
}