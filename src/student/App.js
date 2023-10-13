import EditBar from "./components/EditBar";
import SearchBox from "./components/SearchBox";
import SearchStatus from "./components/SearchStatus";
import ShowAmount from "./components/ShowAmount";
import ShowItem from "./components/ShowItem";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
function App() {
  return (
    <div className="container mt-5 mb-3">
      <EditBar />
      <div className="d-flex gap-3 my-4">
        <SearchBox />
        <SearchStatus />
      </div>
      <ShowItem />
      <TodoList />
      <div className="d-flex justify-content-between align-items-center">
        <ShowAmount />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
