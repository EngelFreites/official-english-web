import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MenuResponsive({ openMenu, setOpenMenu }) {
  const handleScroll = (id) => {
    setOpenMenu(!openMenu);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 70; // altura del header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  };

  return (
    <motion.div
      className="bg-white z-80 fixed pt-18 inset-0"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <FaArrowRight
        className="absolute right-6 top-6 cursor-pointer"
        size={25}
        onClick={() => setOpenMenu(!openMenu)}
      />
      <div className="flex justify-center flex-col items-center gap-12">
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("inicio")}
        >
          Inicio
        </a>
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("aboutUs")}
        >
          Sobre Nosotros
        </a>
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("about")}
        >
          Nuestro Enfoque
        </a>
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("Plns")}
        >
          Metodología
        </a>
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("StudentReviews")}
        >
          Comentario
        </a>
        <a
          className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-600"
          onClick={() => handleScroll("contact")}
        >
          Contacto
        </a>
      </div>
    </motion.div>
  );
}
