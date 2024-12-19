"use client";

import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useRouter } from "next/navigation"; 

// Definição do tipo para uma Tarefa
interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

// Props
interface TasksProps {
  tasks: Task[];
  onTaskClick: (taskId: number) => void;
  deleteTasks: (taskId: number) => void;
}

function Tasks({ tasks, onTaskClick, deleteTasks }: TasksProps) {
  const router = useRouter();

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => router.push(`/task/${task.id}`)}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTasks(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
