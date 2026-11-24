import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex  items-center justify-center gap-4  ">
      {" "}
      <button className=" inline-block bg-zinc-900 px-2.5 rounded-sm text-center   text-pretty">
        <Link
          className="  text-white underline  text-sm font-satoshi font-semibold  "
          href="/practice"
        >
          Practices
        </Link>{" "}
      </button>
      <button className=" inline-block  bg-orange-500 px-2.5 rounded-sm text-center   text-pretty">
        <Link
          className="  text-white underline  text-sm font-satoshi font-semibold  "
          href="/rufPra"
        >
          RufPractice
        </Link>{" "}
      </button>
      <button className=" inline-block bg-zinc-900 px-2.5 rounded-sm text-center   text-pretty">
        <Link
          className="  text-white underline  text-sm font-satoshi font-semibold  "
          href="/Motion"
        >
          Motion
        </Link>{" "}
      </button>
    </div>
  );
}
