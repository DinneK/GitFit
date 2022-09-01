import User from "./User";

class UserRepository {
  constructor(userData) {
    this.userData = userData;
    this.users = userData.map((data) => new User(data));
  }

  returnUserData(id) {
    const userObj = this.users.filter((user) => {
      return user.userId === id;
    });
    return userObj;
  }

  returnAllAvgStepGoals() {
    const allAvg =
      this.users.reduce((stepAvg, user) => {
        return stepAvg + user.dailyStepGoal;
      }, 0) / this.users.length;

    return allAvg;
  }

  findUserFriendsIDs(id) {
    const userForFriend = [];
    this.users.forEach((user) => {
      if (user.userId === id) {
        user.friends.forEach((friend) => {
          userForFriend.push(friend);
        });
      }
    });
    return userForFriend;
  }

  returnUserFriendsNames(id) {
    // console.log("1", this.findUserFriendsIDs(id));
    // console.log("this.users.Id", this.users);
    const friendNames = this.findUserFriendsIDs(id).reduce((acc, curr) => {
      console.log({ acc });
      console.log({ curr });
      return acc;
    }, []);
  }
}

export default UserRepository;
