"use client";

const SvgLine = () => {
  return (
    <section className=" mx-auto   px-8 py-14 flex shadow-input bg-white max-w-5xl h-[30rem] flex-col my-16 w-full items-center justify-center  ">
      <div className="rounded-md flex  justify-between items-center  max-w-md w-full">
        <div className="flex flex-col gap-3 justify-between">
          <div className="relative text-[10px]">
            Meeting Summarizer
            <TopSVG className="absolute top-2 left-36" />
          </div>
          <div className="relative text-[10px]">
            Div Centerer
            <MiddleSVG className="absolute top-2 left-32" />
          </div>
          <div className="relative text-[10px]">
            Junior Intern
            <BottomSVG className="absolute -top-6 left-32" />
          </div>
        </div>
        <div className="size-20  rounded-sm bg-neutral-100 z-20 relative overflow-hidden translate-x-21 p-px">
          <div className="w-full h-full relative z-20 bg-white rounded-[3px] flex items-center justify-center"></div>
          <div className="absolute h-full w-full inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] animate-spin scale-[1.4] [animation-duration:4s]"></div>
          <div className="absolute h-full w-full inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] animate-spin scale-[1.4] [animation-delay:2s] [animation-duration:4s]"></div>
        </div>
      </div>
    </section>
  );
};

export default SvgLine;

const TopSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="312"
      height="33"
      viewBox="0 0 312 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="10"
        x2="311.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="311.5"
        y1="1"
        x2="311.5"
        y2="32"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />

      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="line-one-gradient">
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="#F17463" />
          <stop offset="0.66" stopColor="#F17463" />
          <stop offset="1" stopColor="var(--color-line)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const MiddleSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="323"
      height="2"
      viewBox="0 0 323 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="url(#line-two-gradient)"
        strokeLinecap="round"
      />
      <linearGradient gradientUnits="userSpaceOnUse" id="line-two-gradient">
        <stop stopColor="var(--color-line)" />
        <stop offset="0.33" stopColor="var(--color-blue-500)" />
        <stop offset="0.66" stopColor="var(--color-blue-500)" />
        <stop offset="1" stopColor="var(--color-line)" />
      </linearGradient>
    </svg>
  );
};

export const BottomSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="326"
      height="32"
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="31" x2="325" y2="31" stroke="var(--color-line)" />

      <line
        x1="325.5"
        y1="31"
        x2="325.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line y1="31" x2="325" y2="31" stroke="url(#line-three-gradient)" />

      <linearGradient gradientUnits="userSpaceOnUse" id="line-three-gradient">
        <stop stopColor="var(--color-line)" />
        <stop offset="0.33" stopColor="var(--color-yellow-500)" />
        <stop offset="0.66" stopColor="var(--color-yellow-500)" />
        <stop offset="1" stopColor="var(--color-line)" />
      </linearGradient>
    </svg>
  );
};
