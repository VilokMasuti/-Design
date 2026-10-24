"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

import {
  IconBrightnessDown,
  IconBrightnessUpFilled,
  IconCaretDownFilled,
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconCommand,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconWorld,
} from "@tabler/icons-react";
import useSound from "use-sound";
export const Keyboard = ({ className }: { className?: string }) => {
  return (
    <main
      className={cn(
        "mx-auto w-fit zoom-[0.8] sm:[zoom:1.25] md:[zoom:1.5] lg:[zoom:2] xl:[zoom:2]",
        className,
      )}
    >
      {/* The grey case that holds all the keys */}
      <section className="h-full w-fit rounded-xl   shadow-input   ring-1  ring-black/5">
        {/* Function Row */}

        <Row>
          <Key
            containerClassName="rounded-tl-xl"
            className="w-10 rounded-tl-lg"
            labelClassName="items-start justify-end pb-[2px] pl-[4px]"
          >
            <span>esc</span>
          </Key>
          <Key>
            <IconBrightnessDown className="h-[6px] w-[6px]" />
            <span className="mt-1">F1</span>
          </Key>
          <Key>
            <IconBrightnessUpFilled className="h-[6px] w-[6px]" />
            <span className="mt-1">F2</span>
          </Key>
          <Key>
            <IconTable className="h-[6px] w-[6px]" />
            <span className="mt-1">F3</span>
          </Key>
          <Key>
            <IconSearch className="h-[6px] w-[6px]" />
            <span className="mt-1">F4</span>
          </Key>
          <Key>
            <IconMicrophone className="h-[6px] w-[6px]" />
            <span className="mt-1">F5</span>
          </Key>
          <Key>
            <IconMoon className="h-[6px] w-[6px]" />
            <span className="mt-1">F6</span>
          </Key>
          <Key>
            <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
            <span className="mt-1">F7</span>
          </Key>
          <Key>
            <IconPlayerSkipForward className="h-[6px] w-[6px]" />
            <span className="mt-1">F8</span>
          </Key>
          <Key>
            <IconPlayerTrackNext className="h-[6px] w-[6px]" />
            <span className="mt-1">F9</span>
          </Key>
          <Key>
            <IconVolume3 className="h-[6px] w-[6px]" />
            <span className="mt-1">F10</span>
          </Key>
          <Key>
            <IconVolume2 className="h-[6px] w-[6px]" />
            <span className="mt-1">F11</span>
          </Key>
          <Key>
            <IconVolume className="h-[6px] w-[6px]" />
            <span className="mt-1">F12</span>
          </Key>
          {/* Touch ID circle */}
          <Key containerClassName="rounded-tr-xl" className="rounded-tr-lg">
            <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 p-px">
              <div className="h-full w-full rounded-full bg-neutral-100" />
            </div>
          </Key>
        </Row>
        {/* Number Row */}
        <Row>
          <Key>
            <span>~</span>
            <span>`</span>
          </Key>
          <Key>
            <span>!</span>
            <span>1</span>
          </Key>
          <Key>
            <span>@</span>
            <span>2</span>
          </Key>
          <Key>
            <span>#</span>
            <span>3</span>
          </Key>
          <Key>
            <span>$</span>
            <span>4</span>
          </Key>
          <Key>
            <span>%</span>
            <span>5</span>
          </Key>
          <Key>
            <span>^</span>
            <span>6</span>
          </Key>
          <Key>
            <span>&</span>
            <span>7</span>
          </Key>
          <Key>
            <span>*</span>
            <span>8</span>
          </Key>
          <Key>
            <span>(</span>
            <span>9</span>
          </Key>
          <Key>
            <span>)</span>
            <span>0</span>
          </Key>
          <Key>
            <span>—</span>
            <span>_</span>
          </Key>
          <Key>
            <span>+</span>
            <span>=</span>
          </Key>
          <Key
            className="w-10"
            labelClassName="items-end justify-end pr-[4px] pb-[2px]"
          >
            <span>delete</span>
          </Key>
        </Row>
        {/* QWERTY Row */}
        <Row>
          <Key
            className="w-10"
            labelClassName="items-start justify-end pb-[2px] pl-[4px]"
          >
            <span>tab</span>
          </Key>
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
          <Key>
            <span>{`{`}</span>
            <span>{`[`}</span>
          </Key>
          <Key>
            <span>{`}`}</span>
            <span>{`]`}</span>
          </Key>
          <Key>
            <span>{`|`}</span>
            <span>{`\\`}</span>
          </Key>
        </Row>

        {/* Home Row */}
        <Row>
          <Key
            className="w-[2.8rem]"
            labelClassName="items-start justify-end pb-[2px] pl-[4px]"
          >
            <span>caps lock</span>
          </Key>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
          <Key>
            <span>:</span>
            <span>;</span>
          </Key>
          <Key>
            <span>{`"`}</span>
            <span>{`'`}</span>
          </Key>
          <Key
            className="w-[2.85rem]"
            labelClassName="items-end justify-end pr-[4px] pb-[2px]"
          >
            <span>return</span>
          </Key>
        </Row>

        {/* Bottom Letter Row */}
        <Row>
          <Key
            className="w-[3.65rem]"
            labelClassName="items-start justify-end pb-[2px] pl-[4px]"
          >
            <span>shift</span>
          </Key>
          {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
            <Key key={letter}>{letter}</Key>
          ))}
          <Key>
            <span>{`<`}</span>
            <span>,</span>
          </Key>
          <Key>
            <span>{`>`}</span>
            <span>.</span>
          </Key>
          <Key>
            <span>?</span>
            <span>/</span>
          </Key>
          <Key
            className="w-[3.65rem]"
            labelClassName="items-end justify-end pr-[4px] pb-[2px]"
          >
            <span>shift</span>
          </Key>
        </Row>
        {/* Bottom Row */}
        <Row>
          <Key
            modifier
            containerClassName="rounded-bl-xl"
            className="rounded-bl-lg"
          >
            <span>fn</span>
            <IconWorld className="h-[6px] w-[6px]" />
          </Key>
          <Key modifier>
            <IconChevronUp className="h-[6px] w-[6px]" />
            <span>control</span>
          </Key>
          <Key modifier>
            <OptionIcon className="h-[6px] w-[6px]" />
            <span>option</span>
          </Key>
          <Key modifier className="w-8">
            <IconCommand className="h-[6px] w-[6px]" />
            <span>command</span>
          </Key>
          <Key className="w-[8.2rem]" />
          <Key modifier className="w-8">
            <IconCommand className="h-[6px] w-[6px]" />
            <span>command</span>
          </Key>
          <Key modifier>
            <OptionIcon className="h-[6px] w-[6px]" />
            <span>option</span>
          </Key>
          {/* Arrow keys: ← (↑ over ↓) → */}
          <div className="flex h-6 w-[4.9rem] items-center justify-end rounded-[4px] p-[0.5px]">
            <Key className="h-6 w-6">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </Key>
            <div className="flex flex-col">
              <Key className="h-3 w-6">
                <IconCaretUpFilled className="h-[6px] w-[6px]" />
              </Key>
              <Key className="h-3 w-6">
                <IconCaretDownFilled className="h-[6px] w-[6px]" />
              </Key>
            </div>
            <Key
              containerClassName="rounded-br-xl"
              className="h-6 w-6 rounded-br-lg"
            >
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </Key>
          </div>
        </Row>
      </section>
    </main>
  );
};

// THE SHELF: holds keys side by side in one line.

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-[1px]   flex w-full  shrink-0 gap-[0.96]">{children}</div>
);

// THE BRICK: one single key.
// It has no state. The "pressed" feel comes from Motion's `whileTap`, which handles press AND release by itself.
const Key = ({
  className, // changes the key itself (e.g. make it wider)
  labelClassName, // changes where the text sits inside the key
  containerClassName, // changes the thin frame around the key
  modifier = false, // true = use the "icon on top, word at bottom" layout
  children,
}: {
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  modifier?: boolean;
  children?: React.ReactNode;
}) => {
  const [playOpen] = useSound("/tap.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });

  return (
    <div className={cn("rounded-[4px] p-[0.5px]", containerClassName)}>
      {/* The key you press */}

      <motion.button
        type="button"
        aria-braillelabel="button"
        whileTap={{
          scale: 0.94,
          y: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.9,
        }}
        className={cn(
          "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3.5px] bg-gray-100",
          "shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,1)_inset]",
          className,
        )}
        onPointerDown={() => playOpen()}
      >
        {/* The text/icon inside the key */}
        <div
          className={cn(
            "flex h-full w-full flex-col text-[5px] text-neutral-900",
            modifier
              ? "items-start justify-between p-1"
              : "items-center justify-center",
            labelClassName,
          )}
        >
          {children}
        </div>
      </motion.button>
    </div>
  );
};

// The ⌥ symbol drawn by hand because the icon library doesn't have it.
const OptionIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
  >
    <rect
      stroke="currentColor"
      strokeWidth={2}
      x="18"
      y="5"
      width="10"
      height="2"
    />
    <polygon
      stroke="currentColor"
      strokeWidth={2}
      points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25"
    />
  </svg>
);
