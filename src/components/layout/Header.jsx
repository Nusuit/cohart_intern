import React from "react";
import { Link, useNavigate } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link>TodoList</Link>
          <Link>Your Information</Link>
          <Link>Login</Link>
          <Link>Logout</Link>
        </nav>
      </header>
    );
  }
}
export default Header;
