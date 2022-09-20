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
    return this.findUserByID(userID).reverse().splice(0, 1)[0];
  }

  getMostRecentWeekData(userID, date) {
    const specificUser = this.findUserByID(userID);
    const getDayByIndex = specificUser.findIndex((day) => day.date === date);
    const backToDate = specificUser.slice(0, getDayByIndex + 1);
    return backToDate.slice(-7).map((dates) => dates);
  }

  getDaysForWeekData(userId, date) {
    let thisDate, dayOfWeek;
    const weekInfo = this.getMostRecentWeekData(userId, date);
    const literalDays = weekInfo.reduce((acc, data) => {
      thisDate = new Date(data.date);
      dayOfWeek = thisDate.toLocaleDateString(undefined, { weekday: "long" });
      acc.push({
        day: dayOfWeek,
        numSteps: data.numSteps,
        minutesActive: data.minutesActive,
        flightsOfStairs: data.flightsOfStairs,
      });
      return acc;
    }, []);
    return literalDays;
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

  getUserMinActiveAvgForWeek(userId, date) {
    const thisSpecifiedWeek = this.getMostRecentWeekData(userId, date);
    const avg =
      thisSpecifiedWeek.reduce((acc, day) => {
        return (acc += day.minutesActive);
      }, 0) / thisSpecifiedWeek.length;

    return parseFloat(avg.toFixed(2));
  }

  didUserMeetStepGoalForDay(user, date) {
    const thisSpecifiedUser = this.findUserByID(user.userId);
    const getSpecifiedDay = thisSpecifiedUser.find((day) => day.date === date);
    const compareStepGoals = getSpecifiedDay.numSteps >= user.dailyStepGoal;
    let difference;

    if (compareStepGoals) {
      difference = getSpecifiedDay.numSteps - user.dailyStepGoal;
      return `CRUSHING IT! You went over your daily step goal of ${user.dailyStepGoal} by ${difference} steps!`;
    } else {
      difference = user.dailyStepGoal - getSpecifiedDay.numSteps;
      return `You're doing great: you missed your daily step goal of ${user.dailyStepGoal} by ${difference} steps.`;
    }
  }

  filterDaysExceededUserStepGoal(user) {
    const stepFilter = [];
    this.findUserByID(user.userId).filter((day) => {
      if (day.numSteps >= user.dailyStepGoal) {
        stepFilter.push(day.date);
      }
    });

    return stepFilter;
  }

  findUserStairClimbingRecord(userId) {
    const stairRecord = this.findUserByID(userId).reduce((prev, curr) => {
      return prev.flightsOfStairs > curr.flightsOfStairs ? prev : curr;
    });

    return stairRecord.flightsOfStairs;
  }

  getUsersStairsClimbedAvg(date) {
    const thatDay = this.activitiesData.filter((day) => day.date === date);
    const totalStairs = thatDay.reduce(
      (prev, curr) => prev + curr.flightsOfStairs,
      0
    );

    return parseFloat((totalStairs / thatDay.length).toFixed(2));
  }

  getAllUsersStepsAvgForADay(date) {
    const allUsersForDay = this.activitiesData.filter(
      (user) => user.date === date
    );
    const avgSteps =
      allUsersForDay.reduce((acc, user) => {
        return acc + user.numSteps;
      }, 0) / allUsersForDay.length;

    return parseFloat(avgSteps.toFixed(2));
  }

  getUsersAvgMinutesActiveForDay(date) {
    const dateChosen = this.activitiesData.filter((day) => day.date === date);
    const totalMins = dateChosen.reduce(
      (prev, curr) => prev + curr.minutesActive,
      0
    );

    return parseFloat((totalMins / dateChosen.length).toFixed(2));
  }
}

export default Activities;
