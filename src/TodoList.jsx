import React from "react";

class TodoList extends React.Component {
  state = {
    tasks: "",
  };

  handleOnChange = (event) => {
    this.setState({
      tasks: event.target.value,
    });
  };

  handleOnClick = (event) => {
    event.preventDefault();
    console.log(">>> clicked");
  };
  render() {
    const username = localStorage.getItem("username") || "Guest";
    return (
      <>
        <h2>Good morning {username} </h2>
        <h3>What do your main goal for today</h3>
        <input type="text" onChange={(event) => this.handleOnChange(event)} />
        <div>
          <ol>
            <li>your tasks: {this.state.tasks}</li>
          </ol>
        </div>
        <input
          type="submit"
          value="Add task"
          onClick={(event) => this.handleOnClick(event)}
        />
      </>
    );
  }
}

export default TodoList;
