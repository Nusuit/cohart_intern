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
        <h1 className="text-3xl mb-12 tracking-tight">
          Welcome {this.state.username} to my React Project
        </h1>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Username: {this.state.username}
              </label>

              <div className="mt-2">
                <input
                  className="block rounded-lg border-2 border-solid w-full px-3 py-1.5"
                  type="text"
                  placeholder="What is your name "
                  value={this.state.username}
                  onChange={(event) => this.handleOnChangeUserName(event)}
                  // required
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password:
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-2">
              <input
                className="block rounded-lg text-base border-2 border-solid w-full px-3 py-1.5"
                type="password"
                placeholder=" ********"
                value={this.state.password}
                onChange={(event) => this.handleOnChangePassword(event)}
                // required
              />
            </div>
            <div>
              <button
                className="bg-[#4299E1] hover:bg-[#2b6cb0] text-white font-bold py-2 rounded-full mt-4"
                type="submit"
                onClick={(event) => this.handleOnClick(event)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
