"use client";
import useSound from "use-sound";

export function useOpenSound() {
  const [playOpen] = useSound("/tap.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });

  return playOpen;
}
