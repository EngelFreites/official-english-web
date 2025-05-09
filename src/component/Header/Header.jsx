import { GraduationCap, Menu } from "lucide-react";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70; // altura del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
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
            <button
              onClick={() => scrollToSection("inicio")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("Plans")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection("PricingPlans")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Contacto
            </button>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-indigo-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
