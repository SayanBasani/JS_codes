import { createContext , useState } from "react";

export const TodoContext = createContext();

export default function TodoContextProvider({children}) {
  const [TodoStore , setTodoStore] = useState([
    {task: 'task 1', time: 'time 1'},
    {task: 'task 2', time: 'time 2'},
    {task: 'task 3', time: 'time 3'},
  ])
  return (
    <TodoContext.Provider value={{ TodoStore , setTodoStore }}>
      {children}
    </TodoContext.Provider>
  );
}
