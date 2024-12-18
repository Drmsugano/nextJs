import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Odiar Java",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Tomar Água",
      description: "Odiar Java",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Praticar exercícios",
      description: "Basquete",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
      // Atualiza apenas a tarefa com o ID correspondente
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks); // Atualiza o estado com as novas tarefas
  }

  function deleteTasks(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks,newTask]);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-100 text-3xl font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTasks={deleteTasks}
        />
      </div>
    </div>
  );
}

export default App;
