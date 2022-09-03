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

  it("Should read the sleep data", () => {
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

  it("Should return a specific user's sleep data", () => {
    const userSleepData = sleep.getUserSleepData(2);

    expect(userSleepData[0]).to.deep.equal({
      userID: 2,
      date: "2019/06/15",
      hoursSlept: 7,
      sleepQuality: 4.7,
    });
  });

  it("Should return a user's average hours slept per day", () => {
    const userAvgSleepData1 = sleep.getUserAvgSleepHoursPerDay(1);
    const userAvgSleepData2 = sleep.getUserAvgSleepHoursPerDay(2);

    expect(userAvgSleepData1).to.equal(6.3);
    expect(userAvgSleepData2).to.equal(6.5);
  });

  it("Should return a user's avg sleep quality per day over all time", () => {
    const avgSleepQual1 = sleep.getAllOfUserAvgSleepQual(1);
    const avgSleepQual2 = sleep.getAllOfUserAvgSleepQual(2);

    expect(avgSleepQual1).to.equal(2.5);
    expect(avgSleepQual2).to.equal(4.2);
  });

  it("Should return user's hours slept by date", () => {
    const userDayHrsSlept1 = sleep.getUserSleepHrsForDay(1, "2019/06/22");
    const userDayHrsSlept2 = sleep.getUserSleepHrsForDay(2, "2019/06/18");

    expect(userDayHrsSlept1).to.equal(6.9);
    expect(userDayHrsSlept2).to.equal(5.8);
  });

  it("Should return a user's sleep quality for a specific day", () => {
    const usersleepQual1 = sleep.getUserSleepQualForDay(1, "2019/06/22");
    const usersleepQual2 = sleep.getUserSleepQualForDay(2, "2019/06/17");

    expect(usersleepQual1).to.equal(4.9);
    expect(usersleepQual2).to.equal(3.7);
  });

  it("Should return user sleep data from the given date", () => {
    const user1Week = sleep.getUserHoursSleptForWeek(1, "2019/06/22");
    const user2Week = sleep.getUserHoursSleptForWeek(2, "2019/06/20");

    expect(user1Week).to.deep.equal([3.5, 5.3, 14.2, 7.2, 3.9, 3.6, 6.9]);
    expect(user2Week).to.deep.equal([7, 5.7, 5.7, 5.8, 6.5, 7.5]);
  });

  it("Should return a total of hours the users slept in a weekl", () => {
    const userWeeklyHours1 = sleep.getSleepQualForWeek(1, "2019/06/22");
    const userWeeklyHours2 = sleep.getSleepQualForWeek(2, "2019/06/22");

    expect(userWeeklyHours1).to.deep.equal([2.1, 4.1, 1.2, 3.4, 1.2, 1.3, 4.9]);
    expect(userWeeklyHours2).to.deep.equal([4.2, 3.7, 4.3, 3.5, 5, 3.7, 4.1]);
  });

  it("should get the total average sleep quality of all users", () => {
    const totAvgSQ = sleep.getAllUsersAvgSleepQual();

    expect(totAvgSQ).to.equal(3.3);
  });
});
