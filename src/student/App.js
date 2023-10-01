import { v4 as uuidv4 } from "uuid";

import usestate from "react";
import EditBar from "./components/EditBar";
import SearchBox from "./components/SearchBox";
import SearchStatus from "./components/SearchStatus";
import ShowAmount from "./components/ShowAmount";
import ShowItem from "./components/ShowItem";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";

const initialTodos = [
  { id: uuidv4(), title: "Shopping", completed: true },
  { id: uuidv4(), title: "Dinner", completed: false },
  { id: uuidv4(), title: "Swimming", completed: false }
];
function App() {
  const [todos, setTodos] = usestate(initialTodos);
  return (
    <div className="container mt-5 mb-3">
      <EditBar />
      <div className="d-flex gap-3 my-4">
        <SearchBox />
        <SearchStatus />
      </div>
      <ShowItem />
      <TodoList todos={todos} />
      <div className="d-flex justify-content-between align-items-center">
        <ShowAmount />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
