import { cn } from "cn";
import useSound from "use-sound";

const Form = () => {
  const [playOpen] = useSound("/tap.mp3", {
    volume: 0.25,
    playbackRate: 1.2,
  });
  return (
    <section className=" mx-auto items-center  px-8 py-14  flex  shadow-2xl max-w-5xl border border-neutral-200 min-h-screen flex-col my-16 w-full">
      <form className=" w-full  h-full  items-center text-white flex flex-col justify-center">
        <h1
          className={cn(
            " text-4xl font-inter tracking-tighter font-bold  bg-clip-text text-transparent bg-linear-to-b from-neutral-950 to-neutral-400  uppercase selection:bg-black selection:text-white",
          )}
        >
          {" "}
          This is a{" "}
          <span
            className={cn(
              " inline-block z-10 relative text-white",
              "after:contain-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:skew-9",
            )}
          >
            {" "}
            crazy
          </span>{" "}
          good form..!
        </h1>
        <div className="my-13 flex flex-col gap-7 w-full  mx-auto max-w-sm">
          <Group className="b">
            <Label
              aria-label="FirstName"
              htmlFor="FirstName"
              className="font-inter"
            >
              First Name
            </Label>
            <Input
              id="FirstName"
              type="text"
              placeholder="Enter your name"
              className=" text-black font-satoshi"
            />
          </Group>
          <Group className="">
            <Label
              aria-label="EMAIL"
              htmlFor="EMAIL"
              className="font-inter     after:content-['*'] after:text-red-500 "
            >
              EMAIL
            </Label>
            <Input
              id="FirstName"
              type="email"
              placeholder="Enter your name"
              className=" text-black font-satoshi invalid:border-red-500"
            />
          </Group>

          <Group className="">
            <Label
              aria-label="Text"
              htmlFor="text"
              className="font-inter     after:content-['*'] after:text-red-500 "
            >
              Company
            </Label>
            <Input
              id="FirstName"
              type="text"
              placeholder="Company "
              className=" text-black font-satoshi"
            />
          </Group>
          <button
            onPointerDown={() => playOpen()}
            type="submit"
            disabled
            className=" bg-zinc-950 text-white px-4 py-2 rounded-md cursor-pointer  transition-all duration-500 hover:-translate-y-0.5 active:scale-98 after:content-[''] after:w-1/2 after:h-[400px] after:absolute after:bg-white/60 relative overflow-hidden after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop-blur-[0.3px] after:transition-all after:duration-500
          "
          >
            SUBMIT THE LIST
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "focus:outline-none       border-transparent px-4 py-2 rounded-sm  shadow-input border ",
        className,
      )}
    />
  );
};

const Label = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} className={cn("text-neutral-700 font-medium", className)}>
      {children}
    </label>
  );
};

const Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 has-invalid:bg-red-50 rounded-md  border p-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
