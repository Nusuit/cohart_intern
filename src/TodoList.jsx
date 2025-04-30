import React from "react";

class TodoList extends React.Component {
  state = {
    tasks: [],
    newTask: "",
  };

  handleOnChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleOnClick = (event) => {
    event.preventDefault();
    console.log(">>> clicked");
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: "",
    });
  };

  handleRemove = (task) => {
    let currentTask = this.state.tasks; //use let because const cannot change value
    currentTask = currentTask.filter((item) => item.id !== task.id);
    this.setState({
      tasks: currentTask,
    });
  };
  render() {
    const username = localStorage.getItem("username") || "Guest";
    return (
      <>
        <h2>Good morning {username} </h2>
        <h3>What do your main goal for today</h3>
        <input
          type="text"
          value={this.state.newTask}
          onChange={(event) => this.handleOnChange(event)}
        />
        <div>
          <ol>
            {this.state.tasks.map((task, index) => (
              <li key={index}>
                {task}
                <span onClick={(task) => this.handleRemove(task)}> x</span>
              </li>
            ))}
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
