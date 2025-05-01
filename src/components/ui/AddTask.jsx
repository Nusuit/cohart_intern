import React from "react";

class AddTask extends React.Component {
  state = {
    id: "",
    taskName: "",
    startDate: "",
    endDate: "",
  };

  addTask = () => {
    const newTask = {
      id: Date.now(),
      taskName: this.state.taskName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.onAddTask(newTask);

    //reset
    this.setState({
      id: "",
      taskName: "",
      startDate: "",
      endDate: "",
    });
  };

  // handleKeyDownTask = (event) => {
  //   if (event.key === "Enter") {
  //     this.addTask();
  //   }
  // };

  handleOnClickSubmit = (event) => {
    event.preventDefault();
    console.log(">>>click");
    this.addTask();
  };

  handleOnchangeTaskName = (event) => {
    this.setState({
      taskName: event.target.value,
    });
  };

  handleOnChangeStartDate = (event) => {
    this.setState({
      startDate: event.target.value,
    });
    console.log("Has been changed start date");
  };

  handleOnChangeEndDate = (event) => {
    this.setState({
      endDate: event.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <h2>What is your main goal today?</h2>
        </div>
        <form onSubmit={(event) => this.handleOnClickSubmit(event)}>
          <div>
            <div>
              <input
                type="text"
                value={this.state.taskName}
                onChange={(event) => this.handleOnchangeTaskName(event)}
                placeholder="___________________"
              />
            </div>

            <div>
              <input
                type="date"
                value={this.state.startDate}
                id="start-date"
                onChange={(event) => this.handleOnChangeStartDate(event)}
              />
            </div>

            <div>
              <input
                type="date"
                value={this.state.endDate}
                id="end-date"
                onChange={(event) => this.handleOnChangeEndDate(event)}
              />
            </div>
            <div>
              <input type="submit" value="Add task" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
