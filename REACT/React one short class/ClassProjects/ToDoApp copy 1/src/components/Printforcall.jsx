import TodoItem from "./TodoItems";
function CallTheitemsforprint({ listData }) {
  return (
    <>
      {listData.map((item) => (
        <TodoItem key="" todoName={item.Name} todoDate={item.Date} />
      ))}
    </>
  );
}
export default CallTheitemsforprint;
