import React from "react";
import SearchIcon from "../../assets/search.svg";
import FriendList from "../../components/ui/introduction/FriendList";

class Friend extends React.Component {
  state = {
    allfriend: false,
    recently: false,
    birthday: false,
    university: false,
    follower: false,
  };
  handleShowAllFriend = (event) => {
    console.log(">>> Handle Show All Friend");
    event.preventDefault();
    this.setState({
      allfriend: true,
      recently: false,
      birthday: false,
      university: false,
      follower: false,
    });
  };

  handleShowAddingRecently = (event) => {
    console.log(">>> Handle Show Adding Recently");
    event.preventDefault();
    this.setState({
      allfriend: false,
      recently: true,
      birthday: false,
      university: false,
      follower: false,
    });
  };

  handleShowBirthday = (event) => {
    console.log(">>> Handle Show Birthday");
    event.preventDefault();
    this.setState({
      allfriend: false,
      recently: false,
      birthday: true,
      university: false,
      follower: false,
    });
  };

  handleShowUniversity = (event) => {
    console.log(">>> Handle Show University");
    event.preventDefault();
    this.setState({
      allfriend: false,
      recently: false,
      birthday: false,
      university: true,
      follower: false,
    });
  };

  handleShowFollower = (event) => {
    console.log(">>> Handle Show Follower");
    event.preventDefault();
    this.setState({
      allfriend: false,
      recently: false,
      birthday: false,
      university: false,
      follower: true,
    });
  };

  render() {
    return (
      <>
        <div className="mb-5 flex items-center w-full">
          <h2 className="text-start text-2xl font-bold">Friend</h2>
          <div className="flex ml-auto">
            <img src={SearchIcon} alt="lookup image" className="w-6 h-6 " />
            <input
              type="text"
              placeholder="Searching..."
              className="border border-solid border-gray-400 rounded-full ml-2 py-1 px-3"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-6  border-gray-400 p-4 border-t-2 text-sm">
          <button onClick={(event) => this.handleShowAllFriend(event)}>
            All Friend
          </button>
          <button onClick={(event) => this.handleShowAddingRecently(event)}>
            Adding recently
          </button>
          <button onClick={(event) => this.handleShowBirthday(event)}>
            Birthday
          </button>
          <button onClick={(event) => this.handleShowUniversity(event)}>
            University
          </button>
          <button onClick={(event) => this.handleShowFollower(event)}>
            Follower
          </button>
        </div>

        <FriendList
          showAllFriend={this.state.allfriend}
          showAddingRecently={this.state.recently}
          showBirthday={this.state.birthday}
          showUniversity={this.state.university}
          showFollower={this.state.follower}
        />
      </>
    );
  }
}

export default Friend;
