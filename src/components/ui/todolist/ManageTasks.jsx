import React from "react";
import TaskList from "./TaskList";

class ManageTasks extends React.Component {
  state = {
    isPanelVisible: true,
  };

  togglePanel = () => {
    this.setState((prevState) => ({
      isPanelVisible: !prevState.isPanelVisible,
    }));
  };

  removeTask = (taskId) => {
    this.props.onRemoveTask(taskId);
  };

  render() {
    return (
      <div className="mb-5 relative">
        <button onClick={this.togglePanel} className="absolute right-0 mb-5">
          {this.state.isPanelVisible ? "Hide Tasks" : "Show All Tasks"}
        </button>
        <h3 className="font-medium text-2xl text-center w-full">Today</h3>
        {this.state.isPanelVisible && (
          <TaskList
            tasks={this.props.tasks}
            onRemoveTask={this.props.removeTask}
          />
        )}
      </div>
    );
  }
}

export default ManageTasks;
