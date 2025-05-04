import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./pages/account/LoginForm";
import TodoList from "./pages/todolist/TodoList";
import Introduction from "./pages/introduction/Introduction";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
