import { FourSquare } from "react-loading-indicators";
import useFirebase from "../../hooks/useFirebase";

export default function PricingPlans() {
  const { documents, loading } = useFirebase();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FourSquare color="#818cf8" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <section
      id="PricingPlans"
      className="flex relative flex-col items-center pt-42 px-6 max-w-7xl mx-auto"
    >
      <div className="w-96 h-96 absolute blur-[120px] left-10 top-24 rounded-full bg-violet-200 opacity-80"></div>
      <div className="w-72 h-72 absolute blur-[100px] right-10 top-56 rounded-full bg-blue-200 opacity-80"></div>
      <div className="w-64 h-64 absolute blur-[100px] left-1/3 bottom-20 rounded-full bg-indigo-100 opacity-80"></div>
      <div className="w-48 h-48 absolute blur-[80px] right-1/4 top-10 rounded-full bg-cyan-200 opacity-80"></div>

      <h1 className="text-4xl font-black text-gray-800 mb-2 z-10">
        Simple, affordable plans
      </h1>
      <p className="text-lg text-gray-500 mb-16 z-10">
        Choose the plan that fits your needs
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 z-10">
        {documents.map((item, index) => {
          const isPremium = item.title.toLowerCase() === "premium";

          if (isPremium) {
            return (
              <div
                key={index}
                className="relative flex flex-col w-68 bg-indigo-50 border-2 border-indigo-500 rounded-3xl shadow-xl p-8 scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
              >
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
                <p className="text-indigo-700 font-semibold mb-2">
                  {item.title}
                </p>
                <h2 className="text-3xl font-extrabold text-indigo-900 mb-1">
                  {item.price}
                </h2>
                <p className="text-gray-600 mb-4">{item.billing_period}</p>
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-indigo-700 transition-colors mb-6 shadow-lg">
                  Start free trial
                </button>
                <p className="whitespace-pre-line leading-relaxed">
                  {item.include}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col w-68 bg-white border border-indigo-200 rounded-3xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1  duration-300 ease-in-out "
            >
              <p className="text-indigo-600 font-semibold mb-2">{item.title}</p>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
                {item.price}
              </h2>
              <p className="text-gray-400 mb-4">{item.billing_period}</p>
              <button className="px-6 py-2 bg-indigo-50 text-indigo-700 cursor-pointer font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-100 transition-colors mb-6">
                Start free trial
              </button>
              <p className="whitespace-pre-line leading-relaxed ">
                {item.include}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
