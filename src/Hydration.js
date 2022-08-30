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

  findFluidOuncesPerDay(userDay, date) {
    //console.log(this.findUserByID(userDay));
    const specificDayOunces = this.findUserByID(userDay).find(
      (day) => day.date === date
    );
    return specificDayOunces.numOunces;
    //find the specific user
    //check the specific day in that user's array
    //if a specific day matches the requested day
    //return the day
    //check the ounces for that day
    //return the ounces for that day
  }
}

export default Hydration;
