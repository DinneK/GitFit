class Hydration {
  constructor(data) {
    this.hydrationData = data;
  }

  findUserByID(userID) {
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

    return parseInt(
      (averageOunces / this.findUserByID(user).length).toFixed(0)
    );
  }

  getFluidOuncesPerDay(userDay, date) {
    const specificDayOunces = this.findUserByID(userDay).find(
      (day) => day.date === date
    );

    return specificDayOunces.numOunces;
  }

  findAWeekOfDateData(userWeek, date) {
    const specificUser = this.findUserByID(userWeek);
    const getDayByIndex = specificUser.findIndex((day) => day.date === date);
    const backToDate = specificUser.slice(0, getDayByIndex + 1);
    const weekData = backToDate.slice(-7).map((dates) => dates);

    return weekData;
  }

  returnAWeekOfDates(userWeek, date) {
    const weekDays = [];

    this.findAWeekOfDateData(userWeek, date).forEach((day) =>
      weekDays.push(day.date)
    );

    return weekDays;
  }

  returnAWeekOfOunces(userWeek, date) {
    const weekOunces = [];

    this.findAWeekOfDateData(userWeek, date).forEach((day) =>
      weekOunces.push(day.numOunces)
    );

    return weekOunces;
  }
}

export default Hydration;
