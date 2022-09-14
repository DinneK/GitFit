class Activities {
    constructor(data) {
        this.activitiesData = data;
    }

    findUserInData(userId) {}

    getRecentDate() {}

    getMostRecentWeekData() {}

    getUserMiles(date) {}
    // For a specific day (specified by a date), return the miles a user has 
    // walked based on their number of steps (use their strideLength to help calculate this)

    getUserMinutesFromDay(userId) {}
    // For a user, (identified by their userId) how many minutes were 
    // they active for a given day (specified by a date)?

    getUserActiveAvgForWeek(userId) {}
    // For a user, how many minutes active did they average for a given week (7 days)?

    compareUserStepGoals(userId) {}
    // For a user, did they reach their step goal for a given day (specified by a date)?

    filterDaysExceededUserStepGoal(userId) {}
    // For a user, find all the days where they exceeded their step goal

    findUserStairClimbingRecord(userId) {}
    // For a user, find their all-time stair climbing record

    getUsersStairsClimbedAvg() {}
    // For all users, what is the average number of stairs climbed for a specified date

    getUsersStepsForADay() {}
    // For all users, what is the average number of steps taken for a specific date

    getUsersAvgMinutesActiveForDay() {}
    // For all users, what is the average number of minutes active for a specific date

}

export default Activities;