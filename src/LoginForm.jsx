import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleOnClick = (event) => {
    event.preventDefault();

    // check validation
    if (this.state.username && this.state.password) {
      console.log(">>> click submit button");
      const username = this.state.username;
      const password = this.state.password;

      // save to localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // this.props.navigate("/generalinfo");
      window.location.href = "/todolist";
    }
  };

  handleOnChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome {this.state.username} to my React Project</h1>
        <form>
          <label>Username: {this.state.username}</label>
          <div>
            <input
              type="text"
              placeholder="username: "
              value={this.state.username}
              onChange={(event) => this.handleOnChangeUserName(event)}
              // required
            />
          </div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="password: "
              value={this.state.password}
              onChange={(event) => this.handleOnChangePassword(event)}
              // required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              onClick={(event) => this.handleOnClick(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
