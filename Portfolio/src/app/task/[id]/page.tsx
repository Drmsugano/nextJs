"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskDetails() {
  const router = useRouter();
  const { id: taskId } = useParams(); 
  const [task, setTask] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    if (taskId) {
      const task = JSON.parse(localStorage.getItem("tasks") || "[]").find(
        (task: { id: number }) => task.id === parseInt(taskId as string)
      );
      if (task) {
        setTask(task);
      }
    }
  }, [taskId]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => router.back()}
            className="bg-slate-400 p-2 rounded-md  absolute left-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-slate-100 text-3xl font-bold text-center mb-6">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          {task && (
            <>
              <h2 className="text-xl font-bold text-slate-600">{task.title}</h2>
              <p className="text-slate-600">{task.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
