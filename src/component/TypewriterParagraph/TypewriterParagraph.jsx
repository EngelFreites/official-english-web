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
    <div>
      <p className="text-xl text-gray-600 whitespace-pre-line h-[250px] sm:h-[175px]">
        {children.slice(0, index)}
        <span className="inline-block animate-pulse">|</span>
      </p>
    </div>
  );
}
