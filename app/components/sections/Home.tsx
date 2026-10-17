import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center gap-4  ">
      {" "}
      <button className=" inline-block bg-zinc-900 px-2.5 rounded-sm text-center   text-pretty">
        <Link
          className="  text-white underline  text-sm font-satoshi font-semibold  "
          href="/practice"
        >
          Practices
        </Link>{" "}
      </button>
    </div>
  );
}
