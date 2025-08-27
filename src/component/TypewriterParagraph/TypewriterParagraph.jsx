import { useEffect, useState } from "react";

export default function TypewriterParagraph({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 5);
      return () => clearInterval(interval);
    }
  }, [index, children.length]);

  return (
    <div className="h-[125px]">
      <p className="text-xl text-gray-600 mb-8 whitespace-pre-line">
        {children.slice(0, index)}
        <span className="inline-block animate-pulse">|</span>
      </p>
    </div>
  );
}
