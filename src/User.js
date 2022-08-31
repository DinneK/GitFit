import mockUserData from "./data/mockUserData"

class User {
    constructor(data) {
        this.userId = data.id;
        this.name = data.name;
        this.address = data.address;
        this.email = data.email;
        this.strideLength = data.strideLength;
        this.dailyStepGoal = data.dailyStepGoal;
        this.friends = data.friends;
        this.firstName = '';
    }
    getFirstName() {
        const [first, last] = this.name.split(' ');
        this.firstName = first;
    }
}

export default User