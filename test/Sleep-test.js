import { expect } from "chai";
import mockSleepData from "../src/data/mockSleepData";
import mockUserData from "../src/data/mockUserData";
import Sleep from "../src/Sleep";
import User from "../src/User";

describe("Sleep", () => {
    let sleep, user1, user2;

    beforeEach(() => {
        sleep = new Sleep(mockSleepData);
        user1 = new User(mockUserData[0]);
        user2 = new User(mockUserData[1]);
    });

    it.only("Should read the sleep data", () => {
        expect(sleep.sleepData[0]).to.deep.equal({
            userID: 1,
            date: "2019/06/15",
            hoursSlept: 6.1,
            sleepQuality: 2.2,
        });

        expect(sleep.sleepData[1]).to.deep.equal({
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 7,
            sleepQuality: 4.7,
        });
    });

    // Find user sleep data
    it.only("Should return a specific user's sleep data", () => {
        const userSleepData = sleep.getUserSleepData(2);

        expect(userSleepData[0]).to.deep.equal({
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 7,
            sleepQuality: 4.7,
        });
    });

    // For a user (identified by their userID), the average number of hours slept per day
    it.only("Should return a user's average hours slept per day", () => {
        const userAvgSleepData1 = sleep.getUserAvgSleepHoursPerDay(1);
        const userAvgSleepData2 = sleep.getUserAvgSleepHoursPerDay(2);
    
        expect(userAvgSleepData1).to.equal(6.34);
        expect(userAvgSleepData2).to.equal(6.5);
    });



    //For a user, their average sleep quality per day over all time

    // For a user, how many hours they slept for a specific day (identified by a date)

    // For a user, their sleep quality for a specific day (identified by a date)



    // For a user, how many hours slept each day over the course of a given week (7 days) - 
    // you should be able to calculate this for any week, not just the latest week
    it.only("Should return user sleep data from the given date", () => {
        const user1Week = sleep.getUserHoursSleptForWeek(1, "2019/06/22");
        const user2Week = sleep.getUserHoursSleptForWeek(2, "2019/06/20");

        expect(user1Week).to.deep.equal([
            3.5, 5.3, 14.2,
            7.2, 3.9,  3.6,
            6.9
          ]);
        expect(user2Week).to.deep.equal([ 7, 5.7, 5.7, 5.8, 6.5, 7.5 ]);
    });

    // For a user, their sleep quality each day over the course of a given week (7 days) - 
    // you should be able to calculate this for any week, not just the latest week
    it.only("Should return a total of hours the users slept in a weekl", () => {
        const userWeeklyHours1 = sleep.getSleepQualForWeek(1, "2019/06/22");
        const userWeeklyHours2 = sleep.getSleepQualForWeek(2, "2019/06/22");

        expect(userWeeklyHours1).to.deep.equal([
            2.1, 4.1, 1.2,
            3.4, 1.2, 1.3,
            4.9
          ]);
        expect(userWeeklyHours2).to.deep.equal([
            4.2, 3.7, 4.3,
            3.5,   5, 3.7,
            4.1
          ]);
    });

    //For all users, the average sleep quality
 
});
