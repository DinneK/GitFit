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
      console.log("1", userForFriend);
    });
    return userForFriend;
    console.log("2", userForFriend);
    //iterate through users
    //iterate check the user check the friends ids on the user
    //match the friends ids to users in the users repository
  }
}

export default UserRepository;
