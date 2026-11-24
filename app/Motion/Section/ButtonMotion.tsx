"use client";
import Container from "@/app/components/Container";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";
import "../style.css";

interface Button {
  idle: string;
  loading: ReactNode;
  success: string;
}
const buttonCopy: Button = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

const ButtonMotion = () => {
  const [buttonState, setButtonState] = useState<keyof Button>("idle");
  return (
    <Container>
      <section className=" py-10 flex items-center  justify-center">
        <div className="outer-wrapper">
          <button
            className="blue-button cursor-pointer"
            disabled={buttonState !== "idle"}
            onClick={() => {
              // This code is just a placeholder
              setButtonState("loading");

              setTimeout(() => {
                setButtonState("success");
              }, 1750);

              setTimeout(() => {
                setButtonState("idle");
              }, 3500);
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                initial={{
                  y: -25,
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 25,
                }}
                key={buttonState}
                transition={{
                  duration: 0.4,
                  bounce: 0,
                  type: "spring",
                }}
              >
                {buttonCopy[buttonState]}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </section>
    </Container>
  );
};

export default ButtonMotion;

const bars = Array(12).fill(0);

export function Spinner({
  color,
  size = 20,
}: {
  color: string;
  size?: number;
}) {
  return (
    <div
      className="wrapper"
      style={
        {
          ["--spinner-size"]: `${size}px`,
          ["--spinner-color"]: color,
        } as React.CSSProperties &
          Record<"--spinner-size" | "--spinner-color", string>
      }
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div className="bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
