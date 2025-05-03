import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const underlineVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: `${custom}px`,
    transition: { duration: 0.6, ease: "easeOut" },
  }),
};

export default function Title({ children, margin }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <h1 ref={ref} className="text-4xl font-black text-gray-800 relative inline-block mb-8">
      {children}
      <motion.span
        className="absolute left-0 bottom-1 h-2 bg-yellow-300 opacity-60 rounded-md"
        variants={underlineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={margin}
      />
    </h1>
  );
}