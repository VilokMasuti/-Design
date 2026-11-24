import { cn } from "cn";

const Properties = () => {
  return (
    <section
      className={cn(
        " bg-neutral-100 shadow-2xl rounded-sm overflow-hidden  flex flex-col items-center justify-center p-8  gap-4 group min-h-100 w-full max-w-5xl ",
        "bg-[radial-gradient(var(--color-neutral-700)_1px,_transparent_1px)]",
        "[background-size:10px_10px] ",
      )}
    >
      <h1
        className={cn(
          " text-2xl text-shadow-neutral-200 font-inter  capitalize text-mist-950 text-shadow-sm tracking-tight   ",
        )}
      >
        Easily modify scale with Tailwind
      </h1>

      <div
        className={cn(
          " size-60  relative perspective-distant rounded-2xl bg-neutral-300 border border-neutral-50 transition-all duration-900  group:shadow-2xl group-hover:bg-neutral-100 group-hover:border-neutral-100 ",
          "bg-[radial-gradient(var(--color-neutral-900)_1px,_transparent_1px)]",
          "[background-size:10px_10px] ",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          className={cn(
            "transition-transform duration-400 [transition-timing-function:cubic-bezier(.2,0,.2,1)]",
            "object-cover  transform rotate-x-30 rotate-z-20  translate-z-20 -rotate-y-30 rounded-2xl h-full w-full  group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85",
          )}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Properties;
