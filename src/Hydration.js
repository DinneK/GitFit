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
}

export default Hydration;
