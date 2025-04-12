import { div } from 'framer-motion/client';
import { useEffect, useState } from 'react';

export default function TypewriterParagraph() {
  const text = "Nuestro método único te ayuda a pensar y hablar en inglés de forma natural. Aprenderás el idioma como lo hacen los nativos, con ejercicios prácticos y conversación real.";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
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