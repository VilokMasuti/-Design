"use client";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import useSound from "use-sound";
const Links = [
  { label: "Home", href: "/practice" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
const Responsivesidebar = () => {
  const [open, setOpen] = useState(false);
  const [playOpen] = useSound("/click.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });

  return (
    <aside className=" relative">
      <nav
        className=" flex  rounded-sm justify-between items-center  max-w-4xl mt-4 text-black border border-neutral-100
      mx-auto shadow-input  px-2 py-2 relative "
      >
        <div className="relative size-7  rounded-full ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1725795168147-e9cb7d3b7920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="A journal arranged neatly"
            fill
            sizes="28px"
            className="object-cover rounded-full"
          />
        </div>
        <div className="md:flex items-center gap-5  hidden text-sm font-semibold mr-12 font-satoshi  text-neutral-500">
          {Links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className=" hover:text-neutral-900 duration-500 ease-in-out hover:underline "
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.button
          onPointerDown={() => playOpen()}
          whileTap={{
            scale: 0.9,
          }}
          type="button"
          aria-label="Open Navigetion menu"
          aria-expanded={open}
          className="  md:hidden "
          onClick={() => setOpen((pev) => !pev)}
        >
          <Menu />
        </motion.button>

        {/* phone */}

        {open && (
          <motion.div aria-hidden="true" className=" md:hidden">
            <motion.div
              aria-hidden="true"
              className=" fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
              onClick={() => setOpen(false)}
            ></motion.div>

            {/* LAYER 2: Left Sidebar Drawer (Sharp, sits above the blur) */}
            <motion.section
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
           
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              aria-label="Mobile Navigation"
              className="fixed inset-y-0  left-0 z-50 w-64 bg-white shadow-input  flex flex-col  p-6"
            >
              <div className="flex flex-col gap-6">
                {/* Drawer Header with Close Button */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <span className="text-sm font-semibold font-satoshi text-neutral-900">
                    Navigation
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.9, rotate: -90 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setOpen(false)}
                    className="p-1 text-neutral-500 hover:text-neutral-900 cursor-pointer"
                    onPointerDown={() => playOpen()}
                  >
                    <X className="size-5" />
                  </motion.button>
                </div>
                <div className="flex flex-col items-start gap-4 text-sm font-semibold font-satoshi text-neutral-500">
                  {Links.map((link) => (
                    <motion.a
                      whileHover={{ y: 4 }}
                      whileTap={{ scale: 0.9, x: 2 }}
                      transition={{
                        type: "spring",

                        stiffness: 400,
                        damping: 20,
                      }}
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="w-full py-1 hover:text-neutral-900 duration-200 ease-in-out"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </nav>
    </aside>
  );
};

export default Responsivesidebar;
