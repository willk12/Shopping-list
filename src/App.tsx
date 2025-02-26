import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import toast from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Exemplo de tarefa",
      category: "Trabalho",
      isCompleted: false,
    }
  ]);

  const addTodo = (text: string, category: string) => {
    const newTodo = [
      ...todos,
      {
        id: todos.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];
    toast.remove();
    toast.success("Tarefa adicionada com sucesso!");

    setTodos(newTodo);
  };

  const removeTodo = (id: number) => {
     const newTodos = [...todos];
     const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    toast.remove();
     toast.success("Tarefa removida com sucesso!");

    setTodos(filteredTodos);
  }

  const completeTodos = (id: number) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    toast.remove();

    const isCompleted = newTodos.find((todo) => todo.id === id)?.isCompleted;
    
    if (isCompleted) {
      toast.success("Tarefa completada com sucesso!");
      setTodos(newTodos);

      setTimeout(() => { removeTodo(id) }, 1000);
      return;
    }
  
    toast.error("Tarefa desmarcada com sucesso!");

   
    
    setTodos(newTodos);
  }

  return (
    <div className="flex justify-center flex-col items-center w-full h-screen">
      <h2 className="bg-gray-200 text-2xl font-bold text-black rounded p-3 my-10">
        Lista de Tarefas ✅📝
      </h2>

      <div className="todo-list flex flex-col justify-center items-center bg-gray-200 p-4 rounded w-[50%]">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodos={completeTodos}/>
        ))}
      </div>
    </div>
  );
}

export default App;
