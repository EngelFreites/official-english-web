import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from "framer-motion";
export default function FeaturesSection() {
  return (
    <section className=" relative max-w-7xl flex  justify-center items-center mb-32 mx-auto py-16 px-6 md:px-16">
      
      
      <div className="absolute top-20 right-0 w-40 h-40 bg-blue-200 rounded-full z-[-1]"></div>
        <div className="flex gap-8">
      
          <motion.div
            className=" animate-scroll flex  gap-2 h-12 px-4 rounded-4xl bg-indigo-50  items-center  shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-indigo-50  rounded-full ">
              <FaChalkboardTeacher className="text-indigo-600 text-xl" />
            </div>
            <p className="text-indigo-600 text-sm">Profesores Certificados</p>
    
          </motion.div>

          <motion.div
            className=" animate-scroll flex  bg-pink-50 items-center gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-pink-50  rounded-full">
              <FaBookOpen className="text-pink-600 text-xl" />
            </div>
          
            <p className="text-pink-600  text-center text-sm ">Material Actualizado</p>
          </motion.div>

          <motion.div
            className=" animate-scroll flex items-center bg-green-50  gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-green-50  rounded-full ">
              <FaUsers className="text-green-600 text-xl" />
            </div>
          
            <p className="text-green-600 text-sm">Coaches Expertos</p>
          </motion.div>

          <motion.div
            className=" animate-scroll flex bg-yellow-50 items-center  gap-2 h-12 px-4 rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-yellow-50 rounded-full ">
              <FaGlobeAmericas className="text-yellow-600 text-xl" />
            </div>
        
            <p className="text-center text-yellow-600 text-sm">Inmersión Cultural</p>
          </motion.div>
        </div>
      </section>  
  )
}