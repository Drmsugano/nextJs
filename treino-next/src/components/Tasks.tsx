import { ChevronRightIcon } from "lucide-react";

function Tasks(props: { tasks: any[] }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button onClick={task.onTaskClick(task.id)} 
          className="bg-slate-400 text-left text-white p-2 rounded-md w-full">
            {task.title}
            {task.isCompleted ? "COMPLETE" : "INCOMPLETE"}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;