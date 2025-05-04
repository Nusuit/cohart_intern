import React from "react";
import SearchIcon from "../../../assets/search.svg";
import User from "../../../assets/user.svg";

class FriendList extends React.Component {
  render() {
    return (
      <>
        {this.props.showAllFriend && (
          <div className="ml-12 mt-12 [&>div>img]:w-6 [&>div>img]:h-6 [&>div]:gap-6 grid grid-cols-2 [&>div]:flex [&>div]:p-4">
            <div>
              <img src={User} alt="user" />
              <h3>Nguyen Thi Thanh Tam</h3>
            </div>
            <div>
              <img src={User} alt="user" /> <h3>Phan Huy Kien</h3>
            </div>
            <div>
              <img src={User} alt="user" /> <h3>Nguyen Dinh Kien</h3>
            </div>
            <div>
              <img src={User} alt="user" />
              <h3>Tran Thi Kim Ngan</h3>
            </div>
            <div>
              <img src={User} alt="user" /> <h3>Nguyen Van A</h3>
            </div>
            <div>
              <img src={User} alt="user" />
              <h3>Nguyen Van B</h3>
            </div>
            <div>
              <img src={User} alt="user" />
              <h3>Nguyen Thi C</h3>
            </div>
          </div>
        )}
        {this.props.showAddingRecently && (
          <div className="ml-12 mt-12 [&>div>img]:w-6 [&>div>img]:h-6 [&>div]:gap-6 grid grid-cols-2 [&>div]:flex [&>div]:p-4">
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Dinh Tri Lam</h3>
            </div>
          </div>
        )}
        {this.props.showBirthday && (
          <div className="ml-12 mt-12 [&>div>img]:w-6 [&>div>img]:h-6 [&>div]:gap-6 grid grid-cols-2 [&>div]:flex [&>div]:p-4">
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Nguyen Vinh Dat</h3>
            </div>
          </div>
        )}
        {this.props.showUniversity && (
          <div className="ml-12 mt-12 [&>div>img]:w-6 [&>div>img]:h-6 [&>div]:gap-6 grid grid-cols-2 [&>div]:flex [&>div]:p-4">
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Nguyen Anh Duy</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Pham Phuc</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Nguyen Huy Hoang</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Khanh Linh</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Van Thinh</h3>
            </div>
          </div>
        )}
        {this.props.showFollower && (
          <div className="ml-12 mt-12 [&>div>img]:w-6 [&>div>img]:h-6 [&>div]:gap-6 grid grid-cols-2 [&>div]:flex [&>div]:p-4">
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Tuyen Dung Samsung Viet Nam</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Divine Shop</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>IVolunteer Vietnam</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>WeCode</h3>
            </div>
            <div>
              <img src={User} alt="user" className="w-6 h-6" />
              <h3>Samsung</h3>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default FriendList;
