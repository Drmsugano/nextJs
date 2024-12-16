import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const[tasks,setTasks] = useState([{
      id: 1,
      title: "Estudar",
      description: "Odiar Java",
      isCompleted: true,
  },{
    id: 1,
    title: "Tomar Agua",
    description: "Odiar Java",
    isCompleted: true,
  }])

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map( task =>
      {
        if(task.id == taskId){
          return {task, isCompleted: !task.isCompleted};
        }
        return task;
      });
    setTasks(newTasks);
  }
  return(
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500]">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}
export default App;