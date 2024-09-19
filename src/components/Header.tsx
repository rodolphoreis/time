import { BiDownArrowAlt } from "react-icons/bi";
import { MdTimer } from "react-icons/md";

export function Header() {
  return (
    <header className="w-full h-24 bg-zinc-800 items-center border-b-2 p-5">
      <div className=" flex  max-w-screen-xl h-full mx-auto my-0  justify-between ">
        <h1 className="text-yellow-400 font-mono text-3xl font-bold items-center self-center cursor-pointer ">
          Time
        </h1>
        <div className="flex gap-10">
          <a
            href="/"
            className="self-center text-yellow-400 hover:text-zinc-400 cursor-pointer"
          >
            <MdTimer size={24} />
          </a>
          <a
            href="/history"
            className="self-center text-yellow-400 hover:text-zinc-400 cursor-pointer"
          >
            <BiDownArrowAlt size={32} />
          </a>
        </div>
      </div>
    </header>
  );
}
