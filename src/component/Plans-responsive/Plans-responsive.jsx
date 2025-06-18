import {
  FcNext,
  FcFactory,
  FcGlobe,
  FcCollaboration,
  FcCalendar,
} from "react-icons/fc";
import { plans, plansList } from "../../data/plans.js";
import { useState } from "react";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver.jsx";

export default function PlansResponsive() {
  const [plan, setPlan] = useState(null);
  const { itemRefs, visibleItems } = useVisibilityObserver();

  const iconPlans = {
    corporate: <FcFactory size={40} />,
    intensive: <FcCalendar size={40} />,
    certifications: <FcGlobe size={40} />,
    conversation: <FcCollaboration size={40} />,
  };

  const handleChangeState = (key) => {
    setPlan((lastState) => (lastState === key ? null : key));
  };

  return (
    <div className="flex flex-row lg:hidden gap-16 mt-8">
      <div className="flex flex-col gap-6 w-full">
        {plansList.map(
          ([key, { icon, title, text, backgroundColor }], index) => (
            <div
              key={key}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <button
                onClick={() => handleChangeState(key)}
                className={`
                flex items-center gap-4 p-4 rounded-lg shadow-md w-full
                transition-all cursor-pointer duration-700 transform
                ${plan === key ? "border-shadow bg-blue-50" : "bg-white"}
                ${
                  visibleItems.includes(index.toString())
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                lg:opacity-100 lg:translate-y-0 lg:transition-none lg:transform-none
              `}
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
                <FcNext
                  size={40}
                  className={`transition-transform duration-500 ${
                    key === plan ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  plan === key
                    ? "max-h-[500px] opacity-100 mt-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center text-center max-w-full relative">
                  <div className="text-left px-8 max-w-7xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 whitespace-pre-line text-center">
                      {plans[index][1].title}
                    </h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line">
                      {plans[index][1].text}
                    </p>
                  </div>

                  <img
                    src="/circulo.png"
                    className="hidden sm:block left-24 absolute w-6"
                    alt=""
                  />
                  <img
                    src="/cuadrado.png"
                    className="left-32 top-5 hidden sm:block absolute w-6"
                    alt=""
                  />
                  <img
                    src="/triangulo.png"
                    className="left-14 hidden sm:block top-5 absolute w-6"
                    alt=""
                  />
                  <img
                    src="/estrella.png"
                    className="right-36 top-4 hidden sm:block absolute w-6"
                    alt=""
                  />
                  <img
                    src="/puntos.png"
                    className="right-20 hidden sm:block absolute w-6 rotate-45"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
