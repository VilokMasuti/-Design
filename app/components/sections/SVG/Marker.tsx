"use client";
import { motion } from "motion/react";

const Underline = ({
  children,
  className = "",
  strokeWidth = 1,
}: {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: number;
}) => {
  return (
    <motion.span
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`relative cursor-pointer  ${className}`}
    >
      {children}
      <svg
        viewBox="0 0 286 73"
        fill="none"
        className="absolute -left-6 -right-6 -top-11 bottom-0 translate-y-6 overflow-visible pointer-events-none"
      >
        <motion.path
          variants={{
            rest: { pathLength: 0 },
            hover: { pathLength: 1 },
          }}
          transition={{
            duration: 2.25,
            ease: "easeInOut",
          }}
          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 92.9384 1"
          stroke="#0000FF"
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.span>
  );
};

const Marker = () => {
  return (
    <main className="grid place-content-center px-4 py-24">
      <h1 className="tracking-tighter  font-light font-satoshi flex gap-1 text-6xl antialiased uppercase leading-snug">
        <Underline className="font-satoshi text-black" strokeWidth={3}>
          Govindaaaa
        </Underline>
      </h1>
    </main>
  );
};

export default Marker;
