import User from "./User";

class UserRepository {
    constructor(userData) {
        this.userData = userData;
        this.users = userData.map(data => new User(data));
    }

    returnUserData(id) {
        const userObj = this.users.filter(user => {
            return user.userId === id;
        })
        return userObj;
    }

    returnAllAvgStepGoals() {
        const allAvg = this.users.reduce((stepAvg, user) => {
            return stepAvg + user.dailyStepGoal;
        }, 0) / this.users.length;

        console.log(allAvg);
        return allAvg;
    }

}

export default UserRepository;