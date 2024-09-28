import { ReactNode, useState, createContext, useEffect } from "react";

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

const savedCycles = JSON.parse(localStorage.getItem("cycles") || "[]");

export function CycleContextProvider({ children }: { children: ReactNode }) {
  const [cycles, setCycles] = useState<Cycle[]>(savedCycles);

  useEffect(() => {
    localStorage.setItem("cycles", JSON.stringify(cycles));
  }, [cycles]);

  return (
    <CyclesContext.Provider value={{ cycles, setCycles }}>
      {children}
    </CyclesContext.Provider>
  );
}
