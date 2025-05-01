import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./pages/account/LoginForm";
import TodoList from "./pages/TodoList/TodoList";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
