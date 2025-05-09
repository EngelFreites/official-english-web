import React from "react";

const logos = [
  { name: "Company 2", url: "/CLAVECREDITOS.jpeg" },
  {
    name: "Company 3",
    url: "/EPIDATA.png",
  },
  {
    name: "Company 4",
    url: "/FLEXIBILITY.png",
  },
  {
    name: "Company 5",
    url: "/KULKAN.png",
  },
  {
    name: "Company 6",
    url: "/Pharmware.png",
  },
  {
    name: "Company 7",
    url: "/Simplestate.png",
  },
  {
    name: "Company 8",
    url: "/Staffrock.png",
  },
  {
    name: "Company 9",
    url: "/Talently.jpeg",
  },
  {
    name: "Company 10",
    url: "/MURAL.svg",
  },
];
const ClientesLogos = () => {
  return (
    <section className="bg-white py-16" id="clientes">
      <div className="max-w-4xl mx-auto flex flex-col justify-center gap-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-black text-gray-800 relative inline-block mb-2">
          Empresas que confían en nosotros
        </h2>
        <div className="relative overflow-hidden">
          <div className="logo-slider">
            <div className="logo-slide-track">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className={`logo-slide flex items-center justify-center mx-4 `}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className={`h-14 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 ${
                      logo.name == "Company 6" || logo.name == "Company 8"
                        ? "drop-shadow-[0_0_2px_black]"
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesLogos;
