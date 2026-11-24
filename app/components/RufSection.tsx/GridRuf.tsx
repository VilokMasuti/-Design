import { cn } from "cn";
interface Types {
  children: React.ReactNode;
  className?: string;
}
const GridRuf = () => {
  return (
    <article className=" md:max-w-5xl w-full mx-auto relative  my-10  text-black ">
      {/* === LEFT COLUMN === */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 h-180">
        <div className="lg:col-span-1 flex flex-col gap-4 h-full">
          <Card className="lg:h-[240px]">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>

          <Card className="flex-1">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>
        </div>

        {/* === MIDDLE COLUMN (lg:col-span-2 makes it twice as wide) === */}

        <div className=" lg:col-span-2 flex flex-col gap-4">
          <Card className="">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>

          <Card className="h-[100px] ">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-4">
          <Card className=" h-[240px]">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>

          <Card className=" flex-1 ">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>
        </div>
      </div>
    </article>
  );
};

export default GridRuf;

export const Card = ({ children, className }: Types) => {
  return (
    <div
      className={cn(
        "  shadow-2xl   bg-gray-400  p-5 w-full h-full flex flex-col justify-between overflow-hidden",

        "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px] ",

        "mask-radial-from-10%",

        className,
      )}
    >
      {children}
    </div>
  );
};

const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{}}
      className={cn(
        "flex-1  w-full mt-3  overflow-hidden  rounded-lg ",

        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }: Types) => {
  return (
    <div
      className={cn(
        "font-medium font-satoshi text-lg tracking-tight antialiased",
        className,
      )}
    >
      {children}
    </div>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};
