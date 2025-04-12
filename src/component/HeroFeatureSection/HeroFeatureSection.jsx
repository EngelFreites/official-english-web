import { useEffect, useState } from "react";
import { MessageSquare, BookOpen } from "lucide-react";

export default function HeroFeatureSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`relative rounded-2xl overflow-hidden bg-white p-8 shadow-xl transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Students learning"
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      <div
        className={`absolute -left-8 top-1/2 bg-white rounded-lg shadow-xl p-4 w-64 transform transition-all duration-1000 ${
          show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Conversación Real</div>
            <div className="text-sm text-gray-600">Práctica con nativos</div>
          </div>
        </div>
      </div>

      <div
        className={`absolute -right-8 bottom-12 bg-white rounded-lg shadow-xl p-4 w-64 transform transition-all duration-1000 ${
          show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Método Efectivo</div>
            <div className="text-sm text-gray-600">Aprende más rápido</div>
          </div>
        </div>
      </div>
    </div>
  );
}