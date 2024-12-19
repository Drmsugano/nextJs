import { useState } from "react";

interface AddTasksProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

function AddTasks({ onAddTaskSubmit }: AddTasksProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddTask = () => {
    if (!title || !description) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 text-left mb-3 flex flex-col rounded-md w-full">
      <input
        id="task-title"
        type="text"
        placeholder="Digite o título da Tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Título da tarefa"
      />
      <input
        id="task-description"
        type="text"
        placeholder="Digite a Descrição da Tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Descrição da tarefa"
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={handleAddTask}
      >
        Adicionar
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Tarefa adicionada com sucesso!</p>}
    </div>
  );
}

export default AddTasks;
