import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
  

export default function Title({ children, margin }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${margin}px` });
    }
  }, [inView, controls, margin]);

  return (
    <h1 ref={ref} className="text-4xl font-black text-gray-800 relative inline-block mb-8">
      {children}
      <motion.span
        className="absolute left-0 bottom-1 h-2 bg-yellow-300 opacity-60 rounded-md"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </h1>
  );
}