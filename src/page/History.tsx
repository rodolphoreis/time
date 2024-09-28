import { useContext } from "react";
import { Cycle, CyclesContext } from "@/context/CycleContextProvider";
import ptBR from "date-fns/locale/pt-BR";

export function History() {
  const { cycles } = useContext(CyclesContext);

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
                <td>{new Date(cycle.startDate).toLocaleDateString("pt-BR")}</td>
                <td className="flex items-center gap-2">
                  {cycle.interruptedDate ? (
                    <div className="rounded-full bg-red-600 w-2 h-2"></div>
                  ) : (
                    <div className="rounded-full bg-green-600 w-2 h-2"></div>
                  )}
                  {cycle.interruptedDate ? "Interrompido" : "Concluido"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum ciclo foi registrado ainda.</p>
      )}
    </div>
  );
}
