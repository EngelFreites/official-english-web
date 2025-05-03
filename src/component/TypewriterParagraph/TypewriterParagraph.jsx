import { useEffect, useState } from 'react';

export default function TypewriterParagraph({children}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + children.charAt(index));
      index++;
      if (index >= children.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-[125px]'>
      <p
      className="text-xl text-gray-600 mb-8 whitespace-pre-line"

      >
        {displayedText}
        <span className="inline-block animate-pulse">|</span>
      </p>
    </div>
    
  );
}