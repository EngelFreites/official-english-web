import { Menu } from "lucide-react";
import { scrollToSection } from "../../utils/scrollToSection";
export default function Header({ setOpenMenu, openMenu }) {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="eh-logo.png" alt="logo english over here" width={60} />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("aboutUs")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Nuestro Enfoque
            </button>
            <button
              onClick={() => scrollToSection("Plans")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection("StudentReviews")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Comentarios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Contacto
            </button>
          </nav>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
