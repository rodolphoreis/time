import { ReactNode, useState } from "react";
import { createContext } from "react";
export interface Cycle {
  id: string;
  task: string;
  duration: number;
  startDate: Date;
  interruptedDate?: Date;
}

export interface CycleContextType {
  cycles: Cycle[];
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>;
}

export const CyclesContext = createContext({} as CycleContextType);

export function CycleContextProvider({ children }: { children: ReactNode }) {
  const [cycles, setCycles] = useState<Cycle[]>([
    {
      id: "1",
      task: "Estudar TypeScript",
      duration: 30,
      startDate: new Date(),
    },
  ]);
  return (
    <CyclesContext.Provider value={{ cycles, setCycles }}>
      {children}
    </CyclesContext.Provider>
  );
}
