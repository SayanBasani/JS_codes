import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodoInput from "./components/AddTodoInput";
import TodoItems from "./components/TodoItems";
import CallTheitemsforprint from "./components/Printforcall";
import "./App.css";
function App() {
  let listTodo = [
    {
      Name: "Buy milk",
      Date: "4/10/2023",
    },
    {
      Name: "it read",
      Date: "21/5/2024",
    },
    {
      Name: "it read",
      Date: "21/5/2024",
    },
  ];
  let display = listTodo.map((item) => (<TodoItems key="" todoName = {item.Name} todoDate = {item.Date} />))
  return (
    <center className="Todo-center">
      <AppName />
      <AddTodoInput />
      <CallTheitemsforprint listData = {listTodo}/>
    </center>
  );
}

export default App;
