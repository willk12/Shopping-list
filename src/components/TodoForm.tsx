import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const categorias = ["Trabalho", "Estudo", "Pessoal"];

type TodoFormProps = {
    addTodo: (text: string, category: string) => void;
  };

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !category){
        toast.remove();
        toast.error("Preencha todos os campos.");

        return;
    }
    addTodo(value,category);
    e.currentTarget.reset();
    setValue("");
    setCategory("");
  };
  return (
    <div className=" gap-5 bg-gray-200 p-5 rounded w-full">
      <h2 className="text-gray-700 pb-2">Criar tarefa:</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex justify-between ">
        <input
          type="text"
          placeholder="Digite aqui"
          className="bg-zinc-900 w-[48%]  rounded border border-none p-2 placeholder:text-gray-300"
          onChange={(e) => setValue(e.target.value)}
        />
        <select
        value={category}
          className="bg-zinc-900 w-[48%]  rounded border border-none text-gray-300 p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          {categorias.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
        <button type="submit">Criar Tarefa</button>
      </form>
      <div><Toaster/></div>
    </div>
  );
};

export default TodoForm;
