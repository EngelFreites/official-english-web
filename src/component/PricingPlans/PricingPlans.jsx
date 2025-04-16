
import { useState, useEffect } from 'react';
import get_plans from '../../lib/get_plans';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function PricingPlans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_plans().then((res) => {
      setData(res);
    });
  }, []);
    
  if  (data.length === 0) return null
  return (
    <div className="flex flex-col items-center py-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black text-gray-800 mb-2">Simple, affordable plans</h1>
      <p className="text-lg text-gray-500 mb-16">Choose the plan that fits your needs</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">

        {data.map((item, index) => {
          const isPremium = item.title.toLowerCase() === 'premium';

          if (isPremium) {
            return (
              <div
                key={index}
                className="relative flex flex-col w-full max-w-xs bg-indigo-50 border-2 border-indigo-500 rounded-3xl shadow-xl p-8 scale-105 transition-all hover:shadow-2xl hover:-translate-y-2 z-10"
              >
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
                <p className="text-indigo-700 font-semibold mb-2">{item.title}</p>
                <h2 className="text-3xl font-extrabold text-indigo-900 mb-1">{item.price}</h2>
                <p className="text-gray-600 mb-4">{item.billing_period}</p>
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors mb-6 shadow-lg">
                  Start free trial
                </button>
                {item.include && <BlocksRenderer content={item.include} />}
              </div>
            )
          }

          return (
            <div
              key={index}
              className="flex flex-col w-full max-w-xs bg-white border border-indigo-200 rounded-3xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-indigo-600 font-semibold mb-2">{item.title}</p>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">{item.price}</h2>
              <p className="text-gray-400 mb-4">{item.billing_period}</p>
              <button className="px-6 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-100 transition-colors mb-6">
                Start free trial
              </button>
              {item.include && <BlocksRenderer content={item.include} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

