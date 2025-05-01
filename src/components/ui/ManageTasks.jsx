import React from "react";
import TaskList from "../../components/ui/TaskList";

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
      <div>
        <button onClick={this.togglePanel}>
          {this.state.isPanelVisible ? "Hide Tasks" : "Show All Tasks"}
        </button>
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
