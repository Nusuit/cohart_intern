import React from "react";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {/* dropdown */}
        <h3>Today</h3>
        {/* list using mapping */}
        <ul>
          {this.props.tasks.map((task) => (
            <li key={task.id}>
              {task.taskName} -- {task.startDate} -- {task.endDate}
            </li>
          ))}
        </ul>
        <h3>Yesterday</h3>
      </div>
    );
  }
}

export default TaskList;
