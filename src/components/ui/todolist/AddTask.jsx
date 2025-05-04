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
          <h2 className="font-bold text-4xl mb-10">
            What is your main goal today?
          </h2>
        </div>
        <form onSubmit={(event) => this.handleOnClickSubmit(event)}>
          <div>
            <div>
              <input
                type="text"
                value={this.state.taskName}
                onChange={(event) => this.handleOnchangeTaskName(event)}
                placeholder="________________________________________________________________________________"
                className="w-full pt-3 py-1.5 px-3 text-xl font-bold mb-5"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <input
                type="date"
                value={this.state.startDate}
                id="start-date"
                onChange={(event) => this.handleOnChangeStartDate(event)}
                className="border border-gray-500 rounded-full py-2 px-3"
              />

              <input
                type="date"
                value={this.state.endDate}
                id="end-date"
                onChange={(event) => this.handleOnChangeEndDate(event)}
                className="border border-gray-500 rounded-full py-2 px-3"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-400 text-white rounded-full hover:bg-blue-500 mb-8"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
