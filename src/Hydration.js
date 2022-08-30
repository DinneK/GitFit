class Hydration {
  constructor(data) {
    this.hydrationData = data;
    //console.log(this.hydrationData);
    //this.hydrationUserID = data.userID;
  }

  findUserByID(userID) {
    // REPLACE A STATIC PROPERTY WITH A METHOD
    let userHydrationInfo = this.hydrationData.reduce((acc, curr) => {
      if (userID === curr.userID) {
        acc.push(curr);
      }
      return acc;
    }, []);
    return userHydrationInfo;
  }

  getAverageAllTimeFluidOunces(user) {
    //console.log(this.findUserByID(user).length);
    const averageOunces = this.findUserByID(user).reduce((acc, curr) => {
      return (acc += curr.numOunces);
    }, 0);
    //console.log(averageOunces / this.findUserByID(user).length);
    return parseInt(
      (averageOunces / this.findUserByID(user).length).toFixed(0)
    );
    //return the individual user array
    //look at the numOunces on each object in the array
    //add all the ounces on the array
    //divide the ounces by the length of the array
    //return the average ounces
  }
}

export default Hydration;
