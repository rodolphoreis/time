import { useContext } from "react";
import { Cycle, CyclesContext } from "./Home";

export function History() {
  const { cycles, activeCycle, activeCycleId } = useContext(CyclesContext);

  return (
    <div className="flex-1 overflow-auto mt-2">
      {cycles && cycles.length > 0 ? (
        <table className="w-full border-collapse min-w-96">
          <thead>
            <tr>
              <th className="rounded-tl-md pl-3">Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th className="rounded-tr-md">Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle: Cycle) => (
              <tr key={cycle.id}>
                <td className="w-1/2">{cycle.task}</td>
                <td>{cycle.duration} min</td>
                <td>{cycle.startDate.toLocaleString()}</td>
                <td>
                  {cycle.interruptedDate ? "Interrompido" : "Em andamento"}
                </td>
              </tr>
            ))}
    </div>
  );
}
