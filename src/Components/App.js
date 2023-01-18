/** @format */
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoList from "./TodoList";
function App() {
  return (
    <div className=" w-3/5 mx-auto my-20 bg-slate-100 p-8">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
