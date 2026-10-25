"use client";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { MoonIcon, SunIcon } from "./Icons";
const ModelToggle = () => {
  const [playOpen] = useSound("/click.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });
  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH_THEME = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
    }
  };
  return (
    <motion.section
      onPointerDown={() => playOpen()}
      className=" relative hidden lg:block"
    >
      <motion.button
        onClick={SWITCH_THEME}
        className="  absolute size-8  rounded-md flex items-center justify-center  bottom-2 right-4 cursor-pointer"
      >
        <SunIcon className="absolute inset-0  size-4 shrink-0  text-neutral-500 dark:scale-0 scale-100 dark:rote45 transition-all duration-300 m-auto" />
        <MoonIcon className=" absolute inset-0 size-4   dark:text-neutral-200 shrink-0 dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300 m-auto " />
      </motion.button>
    </motion.section>
  );
};

export default ModelToggle;
