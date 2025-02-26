type TodoProps = {
  todo: { id: number; text: string; category: string; isCompleted: boolean };
  removeTodo: (id: number) => void;
  completeTodos: (id: number) => void;
};

const Todo = ({ todo, removeTodo, completeTodos }: TodoProps) => {
  return (
    <div
      className="todo flex gap-5 my-3 w-full justify-between items-center"
      key={todo.id}
      
    >
     <div className={`content ${todo.isCompleted ? "line-through text-green-700 " : ""}`}>
        <p className="text-gray-700 mt-4">{todo.text}</p>
        <p className="category text-gray-400">{todo.category}</p>
      </div>
      <div className="flex gap-5">
        <button onClick={() => completeTodos(todo.id)}>Completar</button>
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
