import { Route, Routes } from "react-router-dom";
import { TodosProvider } from "./contexts/todo.context";
import TodoDetail from "./pages/TodoDetail";
import TodoList from "./pages/TodoList";

const App = () => (
  <TodosProvider>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="todo">
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Route>
    </Routes>
  </TodosProvider>
);

export default App;