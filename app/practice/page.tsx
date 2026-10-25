"use client";
import { motion } from "motion/react";
import useSound from "use-sound";
import Container from "../components/Container";
import ModelToggle from "../components/ModelToggle";
import DarkMode from "../components/sections/DarkMode";
import Grid from "../components/sections/Grid";
import { Keyboard } from "../components/sections/Keyboardsimple";
import Responsivesidebar from "../components/sections/Responsivesidebar";
import Marker from "../components/sections/SVG/Marker";
const Par = () => {
  const [playOpen] = useSound("/click.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });

  return (
    <main className="  min-h-screen  relative ">
      <Responsivesidebar />
      <ModelToggle />
      <Container className=" flex flex-col items-center justify-center mt-2.5 gap-5 ">
        <h1 className=" font-satoshi capitalize mt-2.5">Button Design..</h1>
        <div className="flex items-center" onPointerDown={() => playOpen()}>
          {/* Tag 1: Starts in FRONT (z-20) */}

          <motion.span
            initial={{
              backgroundColor: "#ffffff",
              boxShadow:
                "0px 1px 0px 0px rgba(255,255,255,1) inset, 0px 1px 2px 0px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.08)",
            }}
            // 2. COME TO FRONT (Hover): Ambient shadow deepens underneath, no scale!
            whileHover={{
              backgroundColor: "#fafafa",
              boxShadow:
                "0px 1px 0px 0px rgba(255,255,255,1) inset, 0px 6px 14px -3px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(0,0,0,0.12)",
            }}
            // 3. GO BEHIND (Tap/Click): Outer shadow collapses to 0, top INSET shadow carves it into the page!
            whileTap={{
              backgroundColor: "#f4f4f5",
              boxShadow:
                "0px 2px 4px 0px rgba(0,0,0,0.12) inset, 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 1px rgba(0,0,0,0.08)",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="relative  z-20 px-4 py-1  rounded-sm  font-inter   text-xs   text-neutral-600    font-semibold capitalize shadow-input cursor-pointer"
          >
            Design
          </motion.span>
        </div>
        <div className=" my-10">
          <Keyboard className="" />
        </div>

        <div className=" my-10">
          <Marker />
        </div>
      </Container>
      <DarkMode />
      <Grid />
    </main>
  );
};

export default Par;
