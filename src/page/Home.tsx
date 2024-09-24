import { MdPause, MdPlayArrow } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa!").max(100),
  duration: zod.number().min(2).max(60),
});

type InputsTypes = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  duration: number;
  startDate: Date;
  interruptedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputsTypes>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: "", duration: 0 },
  });
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    if (activeCycle) {
      const interval = setInterval(() => {
        const totalSeconds = activeCycle.duration * 60;
        const currentSeconds = totalSeconds - amountSecondsPassed;

        if (currentSeconds <= 0) {
          clearInterval(interval);
          setAmountSecondsPassed(totalSeconds);
          setActiveCycleId(null);
          return;
        }

        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [activeCycle, amountSecondsPassed]);

  const handleCreateNewCicle = (data: InputsTypes) => {
    const id = String(new Date().getTime());

    const newCicle: Cycle = {
      id,
      task: data.task,
      duration: data.duration,
      startDate: new Date(),
    };
    setCycles((state) => [...state, newCicle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  };

  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  const task = watch("task");
  const timer = watch("duration");
  const isSubmitDisabled = !task || !timer;

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  return (
    <div className="flex-1 flex-wrap">
      <form
        className=" m-1 flex flex-wrap flex-col "
        onSubmit={handleSubmit(handleCreateNewCicle)}
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
            {...register("duration", { required: true, valueAsNumber: true })}
            step={5}
            min={2}
            max={60}
            placeholder="00"
            className="bg-transparent outline-2 border-b border-gray-500 outline-none w-32"
          />
          {errors.duration && <span>Este campo é obrigatório</span>}
        </div>

        <div className="flex justify-center mb-2 gap-2 items-center mt-16">
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            {minutes[0]}
          </span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            {minutes[1]}
          </span>
          <span className="text-8xl text-yellow-400 font-extrabold">:</span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            {seconds[0]}
          </span>
          <span className="bg-zinc-600 p-3 text-6xl sm:p-6 sm:text-8xl  rounded-xl font-mono">
            {seconds[1]}
          </span>
        </div>
        {activeCycle ? (
          <Button
            variant="outline"
            onClick={handleInterruptCycle}
            type="button"
            className=" bg-red-700 text-xl text-white font-extrabold cursor-pointer outline-none border-none  mt-24 hover:bg-red-500 hover:text-white font-mono tracking-wide"
          >
            {" "}
            <MdPause size={30} />
            Interromper
          </Button>
        ) : (
          <Button
            variant="outline"
            disabled={isSubmitDisabled}
            type="submit"
            className=" bg-yellow-400 text-xl text-black font-extrabold cursor-pointer outline-none border-none  mt-24 hover:bg-yellow-300 font-mono tracking-wide"
          >
            {" "}
            <MdPlayArrow size={30} />
            Começar
          </Button>
        )}
      </form>
    </div>
  );
}
