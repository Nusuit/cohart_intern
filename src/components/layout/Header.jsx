import React from "react";
import { Link, useNavigate } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto py-4 flex justify-end items-center">
          <div className="mr-auto text-xl font-bold text-blue-600">
            <Link to="/">MyApp</Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link
              to="/todolist"
              className=" hover:text-blue-700 transition-colors"
            >
              TodoList
            </Link>

            <Link
              to="/friend"
              className="hover:text-blue-700 transition-colors"
            >
              Friend
            </Link>

            <Link
              to="/login"
              className=" hover:text-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-blue-700 hover:text-white bg-blue-500 text-white p-3 rounded-full transition-colors "
            >
              Create Account
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
