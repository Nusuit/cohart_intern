import React from "react";
import ManageTasks from "../../components/ui/ManageTasks";
import AddTask from "../../components/ui/AddTask";

class TodoList extends React.Component {
  state = {
    tasks: [],
  };

  addnewTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  removeTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((item) => item.id !== id),
    }));
  };
  render() {
    return (
      <>
        <AddTask tasks={this.state.tasks} onAddTask={this.addnewTask} />
        <ManageTasks tasks={this.state.tasks} onRemoveTask={this.removeTask} />
      </>
    );
  }
}
export default TodoList;
