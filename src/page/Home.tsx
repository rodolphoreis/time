import { MdPlayArrow } from "react-icons/md";

export function Home() {
  return (
    <div className="flex-1 flex-wrap">
      <form className=" m-1 flex flex-wrap flex-col ">
        <div className="flex justify-center mb-5 gap-2 items-center flex-wrap sm:flex-nowrap">
          <label htmlFor="task" className="text-sm  sm:text-3xl ">
            Vou trabalhar em
          </label>
          <input
            type="text"
          <datalist id="task-suggestions" className="w-full">
            <option value="Estudar NodeJs" />
            <option value="Estudar React" />
            <option value="Estudar Flutter" />
            <option value="Estudar Python" />
            <option value="Estudar Go" />
            <option value="Estudar Rust" />
          </datalist>
          <input
            type="number"
            id="minutesAmount"
            className="border-b border-gray-500 w-24 text-sm sm:text-3xl bg-transparent outline-2 focus:border-b-2 focus:border-blue-500 placeholder:text-zinc-500 placeholder:pl-2"
          />

          <span className="text-sm sm:text-3xl">minutos.</span>
        </div>

        <div className="flex justify-center mb-2 gap-2 items-center mt-16">
          <span className="bg-zinc-800 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="bg-zinc-800 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="text-8xl text-yellow-400 font-extrabold">:</span>
          <span className="bg-zinc-800 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="bg-zinc-800 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
        </div>

        <button
          type="submit"
          className="flex gap-2 text-zinc-800 justify-center bg-yellow-400  mx-2 xl:mx-32 mt-16 p-2 rounded-md cursor-pointer hover:bg-yellow-300 "
        >
          <span>
            <MdPlayArrow size={30} />
          </span>
          <span className=" text-2xl">Começar</span>
        </button>
      </form>
    </div>
  );
}
