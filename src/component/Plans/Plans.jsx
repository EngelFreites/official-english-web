import { useState } from "react";
import {
  FcNext,
  FcFactory,
  FcGlobe,
  FcCollaboration,
  FcCalendar,
} from "react-icons/fc";
import { plans, plansList } from "../../data/plans.js";
import Title from "../Title/Title.jsx";
import PlansResponsive from "../Plans-responsive/Plans-responsive.jsx";

export default function Plans() {
  const [plan, setPlan] = useState("corporate");

  const iconPlans = {
    corporate: <FcFactory size={40} />,
    intensive: <FcCalendar size={40} />,
    certifications: <FcGlobe size={40} />,
    conversation: <FcCollaboration size={40} />,
  };

  return (
    <section id="Plans" className="flex flex-col py-32 px-6 max-w-7xl mx-auto">
      <Title margin={285}>Nuestros Planes</Title>
      <p className="text-lg text-gray-600">
        Te ofrecemos opciones diseñadas para cada necesidad y objetivo:
      </p>
      <PlansResponsive />
      <div className="lg:flex lg:flex-row hidden  gap-16 mt-8">
        <div className="flex flex-col gap-6 w-full">
          {plansList.map(([key, { icon, title, text, backgroundColor }]) => (
            <div
              key={key}
              className={`${
                plan === key ? " bg-indigo-400" : "bg-white"
              } rounded-lg p-[2px]`}
            >
              <button
                onClick={() => setPlan(key)}
                className={`flex items-center gap-4 p-4 rounded-lg shadow-md cursor-pointer active:scale-99 transition transform ${
                  plan === key ? "bg-blue-50" : "bg-white"
                }`}
              >
                <div
                  className={`p-2 ${backgroundColor} rounded-full flex items-center justify-center`}
                >
                  {iconPlans[icon]}
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
                <FcNext size={40} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center max-w-full relative">
          {plans.map(
            ([key, { title, text }]) =>
              plan === key && (
                <div className="text-left px-8 max-w-7xl" key={title}>
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
    </section>
  );
}
