import { useState } from "react";
import {
  FcNext,
  FcFactory,
  FcGlobe,
  FcCollaboration,
  FcCalendar,
} from "react-icons/fc";
import { plans, plansList } from "../../data/plans.js";

export default function Plans() {
  const [plan, setPlan] = useState("corporate");

  const iconPlans = {
    corporate: <FcFactory size={40} />,
    intensive: <FcCalendar size={40} />,
    certifications: <FcGlobe size={40} />,
    conversation: <FcCollaboration size={40} />,
  };

  return (
    <div className="flex flex-col py-32 px-6 max-w-7xl mx-auto" id="Plans">
      <h1 className="text-4xl font-black text-gray-800 relative inline-block mb-2">
        Nuestros Planes
        <span className="absolute left-0 bottom-1 w-80 h-2 bg-yellow-200 opacity-60 rounded-md"></span>
      </h1>
      <p className="text-lg text-gray-600">
        Te ofrecemos opciones diseñadas para cada necesidad y objetivo:
      </p>
      <div className="flex flex-col lg:flex-row gap-16 mt-8">
        <div className="flex flex-col gap-6 w-full">
          {plansList.map(([key, { icon, title, text, backgroundColor }]) => (
            <a
              key={key}
              onClick={() => setPlan(key)}
              className={`flex items-center gap-4 p-4 rounded-lg shadow-md  transition-all cursor-pointer ${
                plan === key
                  ? "border-2 border-blue-300 bg-blue-50"
                  : "bg-white"
              }`}
              href={`#${key}`}
            >
              <div
                className={`p-2 ${backgroundColor} rounded-full flex items-center justify-center`}
              >
                {iconPlans[icon]}
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
              <FcNext size={40} />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center text-center max-w-full  max-w-2xl relative">
          {plans.map(
            ([key, { title, text }]) =>
              plan === key && (
                <div className="text-left px-8 max-w-7xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 whitespace-pre-line text-center">
                    {title}
                  </h2>
                  <p className="text-lg text-gray-700 whitespace-pre-line">
                    {text}
                  </p>
                </div>
              )
          )}
          <img
            src="/circulo.png"
            className=" hidden sm:block left-24 absolute w-6 "
            alt=""
          />
          <img
            src="/cuadrado.png"
            className=" left-32 top-5 hidden sm:block absolute w-6 "
            alt=""
          />
          <img
            src="/triangulo.png"
            className=" left-14 hidden sm:block top-5 absolute w-6"
            alt=""
          />
          <img
            src="/estrella.png"
            className=" right-36 top-4 hidden sm:block absolute w-6 "
            alt=""
          />
          <img
            src="/puntos.png"
            className=" right-20  hidden sm:block absolute w-6 rotate-45"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
