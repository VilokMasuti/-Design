"use client";
import Container from "@/app/components/Container";
import { motion } from "motion/react";

const ButtonMotionHover = () => {
  return (
    <Container>
      <div className=" mx-auto items-center  flex justify-center">
        <motion.button
          whileHover={{
            rotateX: 25,
            rotateY: 10,
            y: -5,
            boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            bounce: 2,
          }}
          whileTap={{
            y: 0,
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
            backgroundRepeat: "repeat",
          }}
          className=" px-12  group  rounded-sm relative
         cursor-pointer py-4 font-satoshi  tracking-tight shadow-input font-semibold "
        >
          ButtonMotionHover
          <span
            className=" opacity-0  group-hover:opacity-100  transition-opacity duration-1000 ease-in-out absolute inset-x-0  bottom-0 h-[0.1rem] b bg-linear-to-r from-transparent   via-cyan-800   to-transparent  mx-auto w-3/4
           "
          ></span>
        </motion.button>
      </div>
      ;
    </Container>
  );
};

export default ButtonMotionHover;
