import { useState, useEffect } from "react";
import get_plans from "../../lib/get_plans";
import { FourSquare } from "react-loading-indicators";

export default function PricingPlans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_plans().then((res) => {
      setData(res.data);
    });
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FourSquare color="#818cf8" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div className="flex relative flex-col items-center py-32 px-6 max-w-7xl mx-auto">
      <div className="w-60 h-60 absolute blur-3xl left-16 top-40 rounded-full bg-indigo-200"></div>
      <div className="w-40 h-40 absolute blur-3xl right-16 bottom-20 rounded-full bg-yellow-200"></div>
      <div className="w-40 h-40 absolute blur-3xl bottom-14 left-96 rounded-full bg-green-200"></div>
      <div className="w-40 h-40 absolute blur-3xl right-80 top-20 rounded-full bg-orange-200"></div>
      <h1 className="text-4xl font-black text-gray-800 mb-2 z-9">
        Simple, affordable plans
      </h1>
      <p className="text-lg text-gray-500 mb-16 z-10">
        Choose the plan that fits your needs
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {data.map((item, index) => {
          const isPremium = item.attributes.title.toLowerCase() === "premium";

          if (isPremium) {
            return (
              <div
                key={index}
                className="relative flex flex-col  w-68 bg-indigo-50 border-2 border-indigo-500 rounded-3xl shadow-xl p-8 scale-105 transition-all hover:shadow-2xl hover:-translate-y-2 z-10"
              >
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
                <p className="text-indigo-700 font-semibold mb-2">
                  {item.attributes.title}
                </p>
                <h2 className="text-3xl font-extrabold text-indigo-900 mb-1">
                  {item.attributes.price}
                </h2>
                <p className="text-gray-600 mb-4">
                  {item.attributes.billing_period}
                </p>
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors mb-6 shadow-lg">
                  Start free trial
                </button>
                <p className="whitespace-pre-line leading-none">
                  {item.attributes.Include}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col w-68  bg-white border border-indigo-200 rounded-3xl shadow-md z-9 p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-indigo-600 font-semibold mb-2">
                {item.attributes.title}
              </p>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
                {item.attributes.price}
              </h2>
              <p className="text-gray-400 mb-4">
                {item.attributes.billing_period}
              </p>
              <button className="px-6 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-100 transition-colors mb-6">
                Start free trial
              </button>
              <p className="whitespace-pre-line leading-none">
                {item.attributes.Include}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
