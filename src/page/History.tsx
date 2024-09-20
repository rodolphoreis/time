export function History() {
  return (
    <div className="flex-1 overflow-auto mt-2">
      <table className="w-full border-collapse min-w-96">
        <thead>
          <tr>
            <th className="rounded-tl-md pl-3">Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th className="rounded-tr-md">status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/2">Estudar NodeJs</td>
            <td>15 min</td>
            <td>10:00</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Estudar React</td>
            <td>20 min</td>
            <td>12:00</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Estudar Flutter</td>
            <td>10 min</td>
            <td>14:00</td>
            <td>Pendente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
