"use client";
import { cn } from "cn";
import { motion } from "motion/react";
import useSound from "use-sound";

const SvgBell = () => {
  const [playOpen] = useSound("/ding.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });
  return (
    <motion.section
      whileHover={"animate"}
      onPointerEnter={() => playOpen()}
      className=" mx-auto items-center  px-8 py-14  gap-10 flex  shadow-2xl max-w-5xl border border-neutral-200 h-screen flex-col my-16 w-full"
    >
      <h1 className="text-3xl font-satoshi antialiased tracking-tight uppercase  font-semibold bg-clip-text text-transparent bg-linear-to-b from-zinc-950 to-neutral-50 ">
        This is a{" "}
        <span
          className={cn(
            " inline-block zoom-150 perspective-distant  relative text-white bg-zinc-950 ",
            "after:contain-[''] after:-z-10  after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:skew-y-10",
          )}
        >
          crazy
        </span>
      </h1>

      <motion.article className=" flex items-center justify-center mx-auto my-20  w-full      ">
        <Bell />
      </motion.article>
    </motion.section>
  );
};

export default SvgBell;

const Bell = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="200"
      viewBox="0 0  500 200"
      fill="none"
      className=" bg-black/20 rounded-md shadow-input"
    >
      <line
        x1="10"
        y1="30"
        y2="30"
        x2="300"
        stroke=" "
        strokeLinecap="round"
        className=" stroke-wire"
      />
      <line
        x1="300"
        y1="30"
        x2="300"
        y2="80"
        stroke=""
        className=" stroke-wire"
        strokeLinecap="round"
      />
      <line
        x1="300"
        y1="80"
        x2="360"
        y2="80"
        stroke=""
        strokeLinecap="round"
        className=" stroke-wire"
      />
      <defs>
        <linearGradient
          id="linePaint"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="312"
          y2="0"
        >
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="blue" />
        </linearGradient>
      </defs>
      <rect
        x="360"
        y="60"
        width="120"
        height="80"
        fill="none"
        stroke="var(--color-wire)"
      />
      <motion.rect
        x="360"
        y="60"
        width="120"
        height="80"
        fill="none"
        stroke="var(--color-signal)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] }}
        transition={{
          delay: 2.75,
          duration: 4,
          times: [0, 0.08, 0.16, 0.4, 0.48, 0.56, 0.8, 0.88, 0.96, 1],
          repeat: Infinity,
        }}
      />

      <motion.path
        d="M 30 100 H 360"
        className="stroke-wire"
        strokeLinecap="round"
      />

      <motion.path
        d="M 30 100 H 360"
        className="stroke-signal"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeDasharray="30 330"
        initial={{ strokeDashoffset: 30 }}
        animate={{ strokeDashoffset: -330 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <line
        x1="10"
        y1="170"
        y2="170"
        x2="300"
        stroke=""
        className=" stroke-wire"
        strokeLinecap="round"
      />
      <line
        x1="300"
        y1="170"
        x2="300"
        y2="120"
        stroke=""
        strokeLinecap="round"
        className=" stroke-wire"
      />
      <line
        x1="300"
        y1="120"
        x2="360"
        y2="120"
        stroke=""
        strokeLinecap="round"
        className=" stroke-wire"
      />
      <defs>
        <linearGradient
          id="linePaint"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="312"
          y2="0"
        >
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="blue" />
        </linearGradient>
      </defs>

      <motion.path
        d="M 30 30 H 300 V 80 H 360"
        className="stroke-signal"
        fill="none"
        strokeWidth={1}
        strokeDasharray="30 380"
        initial={{ strokeDashoffset: 30 }}
        animate={{ strokeDashoffset: -380 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1,
        }}
      />
      <motion.path
        d="M 30 170 H 300 V 120 H 360"
        className="stroke-signal"
        fill="none"
        strokeWidth={1}
        strokeDasharray="30 380"
        initial={{ strokeDashoffset: 30 }}
        animate={{ strokeDashoffset: -380 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 2,
        }}
      />
    </svg>
  );
};
