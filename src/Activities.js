class Activities {
  constructor(data) {
    this.activitiesData = data;
  }

  findUserByID(userID) {
    return this.activitiesData.reduce((acc, curr) => {
      if (userID === curr.userID) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  getMostRecentDate(userID) {
    return this.findUserByID(userID)
      .reverse()
      .splice(0, 1)
      .map((lastDay) => lastDay.date)[0];
  }

  getMostRecentWeekData(userID, date) {
    const specificUser = this.findUserByID(userID);
    const getDayByIndex = specificUser.findIndex((day) => day.date === date);
    const backToDate = specificUser.slice(0, getDayByIndex + 1);
    return backToDate.slice(-7).map((dates) => dates);
  }

  getUserMilesPerDay(user, date) {
    const strideLength = user.strideLength;
    const dailyUserSteps = this.findUserByID(user.userId).find(
      (day) => day.date === date
    ).numSteps;
    return parseFloat(((dailyUserSteps * strideLength) / 5280).toFixed(1));
  }

  getUserMinutesFromDay(userId, date) {
    const dayData = this.findUserByID(userId).find((day) => day.date === date);

    return dayData.minutesActive;
  }
  // For a user, (identified by their userId) how many minutes were
  // they active for a given day (specified by a date)?

  getUserMinActiveAvgForWeek(userId, date) {
    const thisSpecifiedWeek = this.getMostRecentWeekData(userId, date);
    const avg =
      thisSpecifiedWeek.reduce((acc, day) => {
        return (acc += day.minutesActive);
      }, 0) / thisSpecifiedWeek.length;

    return parseFloat(avg.toFixed(2));
  }
  // For a user, how many minutes active did they average for a given week (7 days)?

  didUserMeetStepGoalForDay(user, date) {
    const thisSpecifiedUser = this.findUserByID(user.userId);
    const getSpecifiedDay = thisSpecifiedUser.find(day => day.date === date);
    const compareStepGoals = getSpecifiedDay.numSteps >= user.dailyStepGoal;
    let difference;

    if(compareStepGoals) {
        difference = getSpecifiedDay.numSteps - user.dailyStepGoal;
        return `CRUSHING IT! You went over your daily step goal of ${user.dailyStepGoal} by ${difference} steps!`
    } else {
        difference = user.dailyStepGoal - getSpecifiedDay.numSteps;
        return `You're doing great: you missed your daily step goal of ${user.dailyStepGoal} by ${difference} steps.`
    }
  }
  // For a user, did they reach their step goal for a given day (specified by a date)?

  filterDaysExceededUserStepGoal(user) {
    const stepFilter = [];
    this.findUserByID(user.userId).filter(day => {
      if (day.numSteps >= user.dailyStepGoal) {
        stepFilter.push(day.date)
      }
    })

    return stepFilter
  }

  // For a user, find all the days where they exceeded their step goal

  findUserStairClimbingRecord(userId) {
    const stairRecord = this.findUserByID(userId).reduce((prev, curr) => {
      return prev.flightsOfStairs > curr.flightsOfStairs ? prev : curr;
    });

    return stairRecord.flightsOfStairs;
  }
  // For a user, find their all-time stair climbing record

  getUsersStairsClimbedAvg(date) {
    const thatDay = this.activitiesData.filter((day) => day.date === date);
    const totalStairs = thatDay.reduce(
      (prev, curr) => prev + curr.flightsOfStairs,
      0
    );

    return totalStairs / thatDay.length
  }
  // For all users, what is the average number of stairs climbed for a specified date

  getAllUsersStepsAvgForADay(date) {
    const allUsersForDay = this.activitiesData.filter(user => user.date === date);
    const avgSteps = allUsersForDay.reduce((acc, user) => {
      return acc + user.numSteps;
    }, 0) / allUsersForDay.length;

    return parseFloat(avgSteps.toFixed(2));
  }
  // For all users, what is the average number of steps taken for a specific date

  getUsersAvgMinutesActiveForDay(date) {
    const dateChosen = this.activitiesData.filter((day) => day.date === date);
    const totalMins = dateChosen.reduce((prev, curr) => prev + curr.minutesActive, 0);

    return totalMins / dateChosen.length
  }
  // For all users, what is the average number of minutes active for a specific date
}

export default Activities;
