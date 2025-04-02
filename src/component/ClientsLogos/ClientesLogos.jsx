import React from 'react';

const logos = [
  {
    name: 'Company 1',
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=80&fit=crop&q=80',
  },
  {
    name: 'Company 2',
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=80&fit=crop&q=80',
  },
  {
    name: 'Company 3',
    url: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=80&fit=crop&q=80',
  },
  {
    name: 'Company 4',
    url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=80&fit=crop&q=80',
  },
  {
    name: 'Company 5',
    url: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=200&h=80&fit=crop&q=80',
  },
  {
    name: 'Company 6',
    url: 'https://images.unsplash.com/photo-1611162616677-5497d88c79f0?w=200&h=80&fit=crop&q=80',
  },
];
const ClientesLogos = () => {
  return (
    <div className="bg-white py-16">
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
                  className="logo-slide flex items-center justify-center mx-4"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientesLogos;