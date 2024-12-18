import { useState } from "react";

interface AddTasksProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

function AddTasks({onAddTaskSubmit }: AddTasksProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title && description) {
      onAddTaskSubmit(title, description);
      setTitle("");
      setDescription(""); 
    }
  };
  return (
    <div className="space-y-4 p-6 bg-slate-200 text-left mb-3 flex flex-col rounded-md w-full">
      <input
        type="text"
        placeholder="Digite o titulo da Tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a Descrição da Tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={handleAddTask}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
