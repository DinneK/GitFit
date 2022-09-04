class User {
  constructor(data) {
    this.userId = data.id;
    this.name = data.name;
    this.address = data.address;
    this.email = data.email;
    this.strideLength = data.strideLength;
    this.dailyStepGoal = data.dailyStepGoal;
    this.friends = data.friends;
  }
  getFirstName() {
    
    return this.name.split(" ")[0];
  }
}

export default User;
