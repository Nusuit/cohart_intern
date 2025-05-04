import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/account/LoginForm";
import TodoList from "./pages/todolist/TodoList";
import Header from "./components/layout/Header";
import Friend from "./pages/introduction/Friend";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/todolist" element={<TodoList />} />
        {/* <Route path="/introduction" element={<Introduction />} /> */}
        <Route path="/friend" element={<Friend />} />
      </Routes>
    </Router>
  );
}

export default App;
