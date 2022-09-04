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
    const friendNames = this.findUserFriendsIDs(id).reduce((acc, curr) => {
      this.users.forEach((user) => {
        if (curr === user.userId) {
          acc.push(user.name);
        }
      });
      return acc;
    }, []);

    return friendNames;
  }
}

export default UserRepository;
