import { MdPlayArrow } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type InputsTypes = {
  task: string;
  duration: number;
};

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsTypes>();
  const onSubmit: SubmitHandler<InputsTypes> = (data) => console.log(data);

  return (
    <div className="flex-1 flex-wrap">
      <form
        className=" m-1 flex flex-wrap flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2 ">
          <Input
            {...register("task")}
            placeholder="Dê o nome para sua tarefa..."
            list="task-suggestions"
            className="bg-transparent outline-2 border-b  border-gray-500 outline-none flex flex-grow"
          />
          <datalist id="task-suggestions" className="w-full">
            <option value="Estudar NodeJs" />
            <option value="Estudar React" />
            <option value="Estudar Flutter" />
            <option value="Estudar Python" />
            <option value="Estudar Go" />
            <option value="Estudar Rust" />
          </datalist>
          <Input
            type="number"
            {...register("duration", { required: true })}
            step={5}
            min={5}
            max={60}
            placeholder="00"
            className="bg-transparent outline-2 border-b border-gray-500 outline-none w-32"
          />
          {errors.duration && <span>Este campo é obrigatório</span>}
        </div>

        <div className="flex justify-center mb-2 gap-2 items-center mt-16">
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="text-8xl text-yellow-400 font-extrabold">:</span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            0
          </span>
        </div>
        <Button
          variant="outline"
          type="submit"
          className=" bg-yellow-400 text-xl text-black font-extrabold cursor-pointer outline-none border-none  mt-24 hover:bg-yellow-300 font-mono tracking-wide"
        >
          {" "}
          <MdPlayArrow size={30} /> Começar
        </Button>
      </form>
    </div>
  );
}
