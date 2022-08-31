import User from "./User";

class UserRepository {
    constructor(userData) {
        this.userData = userData;
        this.users = userData.map(data => new User(data));
    }

    returnUserData(id) {
        const sample = this.users.filter(user => {
            return user.userId === id;
        })
        return sample;
    }

}

export default UserRepository;