import userData from "./data/users";

class User {
  constructor({ name, address, email, strideLength, dailyStepGoal, friends }) {
    this.id = userData[userData.length - 1].id + 1; //Get the last registered user's ID and add 1 to it to make the ID sequential and unique
    this.name = name;
    (this.address = address), (this.email = email);
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
  }
}

export default User;
