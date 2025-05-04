import React from "react";

class TaskList extends React.Component {
  render() {
    return (
      <>
        <div className="flex justify-center">
          {/* dropdown */}

          {/* list using mapping */}
          <ul className="">
            {this.props.tasks.map((task) => (
              <li key={task.id} className="mx-2">
                {task.taskName} -- {task.startDate} -- {task.endDate}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TaskList;
