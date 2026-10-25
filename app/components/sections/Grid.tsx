import { cn } from "cn";

interface Types {
  children: React.ReactNode;
  className?: string;
}

const Grid = () => {
  return (
    <section className="max-w-5xl mx-auto p-4  ">
      {/*
        Only use Grid for the 3 VERTICAL COLUMNS:
        Left (1 col) | Middle (2 cols wide) | Right (1 col)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:h-180">
        {/* === LEFT COLUMN === */}
        <div className="lg:col-span-1 flex flex-col gap-4 h-full">
          {/* Card 1: Give it any exact height you want! */}
          <Card className="h-[240px]">
            <CardTitle>Space Grotesk</CardTitle>
            <CardSkeleton />
          </Card>

          {/* Card 2: flex-1 automatically fills the rest of the column! */}
          <Card className="flex-1 ">
            <CardTitle>Try Prism</CardTitle>
            <CardSkeleton />
          </Card>
        </div>

        {/* === MIDDLE COLUMN (lg:col-span-2 makes it twice as wide) === */}
        <div className="lg:col-span-2 flex flex-col gap-4 h-full">
          {/* Big Center Card: flex-1 takes up all space above the player */}
          <Card className="flex-1 ">
            <CardTitle>PRISM</CardTitle>
            <CardSkeleton />
          </Card>

          {/* Audio Player: Fixed short height (130px) */}
          <Card className="h-[130px]">
            <CardTitle>Los Angeles - The Midnight</CardTitle>
          </Card>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="lg:col-span-1 flex flex-col gap-4 h-full">
          {/* Top-Right Portrait: flex-1 stretches it */}
          <Card className="flex-1">
            <CardTitle>Portrait</CardTitle>
            <CardSkeleton />
          </Card>

          {/* Bottom-Right 25M: Fixed height (260px) */}
          <Card className="h-[260px]">
            <CardTitle>25 Million Songs</CardTitle>
            <CardSkeleton />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Grid;

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
