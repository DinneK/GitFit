import { expect } from "chai";
import mockActivitiesData from "../src/data/mockActivitiesData";
import mockUserData from "../src/data/mockUserData";
import Activities from "../src/Activities";
import User from "../src/User";

describe("Activities", () => {
  let activities, user1, user2, user3;

  beforeEach(() => {
    activities = new Activities(mockActivitiesData);
    user1 = new User(mockUserData[0]);
    user2 = new User(mockUserData[1]);
  });

  it("Should be a function", () => {
    expect(Activities).to.be.a("function");
  });

  it("Should be an instance of Activities", () => {
    expect(activities).to.be.instanceOf(Activities);
  });

  //Possibly not needed, since we instantiate a new user in User?
  it("Should instantiate a user", () => {
    expect(user1).to.be.an.instanceOf(User);
    expect(user2).to.be.an.instanceOf(User);
  });

  //Tests that all activities data is available.
  it("Should return an array of activity objects", () => {
    expect(activities.activitiesData).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  //This also finds the user by ID and return that users data for activity
  it("Should return the activity data for a single user", () => {
    expect(activities.findUserByID(user1.userId)).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
    ]);

    expect(activities.findUserByID(user2.userId)).to.deep.equal([
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  //Return the last days data, we can change this once or if we decide to use a date picker.
  it("Should return the last day of user input", () => {
    expect(activities.getMostRecentDate(user1.userId)).to.deep.equal({
      userID: 1,
      date: '2019/06/22',
      numSteps: 10289,
      minutesActive: 119,
      flightsOfStairs: 6
    });
    expect(activities.getMostRecentDate(user2.userId)).to.deep.equal({
      userID: 2,
      date: '2019/06/22',
      numSteps: 3605,
      minutesActive: 124,
      flightsOfStairs: 31
    });
  });

  it("Should return a weeks worth of data", () => {
    expect(
      activities.getMostRecentWeekData(user1.userId, "2019/06/22")
    ).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
    ]);

    expect(
      activities.getMostRecentWeekData(user2.userId, "2019/06/22")
    ).to.deep.equal([
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  it("should return the last day of user input", () => {
    expect(activities.getUserMilesPerDay(user1, "2019/06/22")).to.equal(8.4);
    expect(activities.getUserMilesPerDay(user2, "2019/06/16")).to.equal(3.5);
  });

  it("should return users active minutes for a specific date", () => {
    expect(
      activities.getUserMinutesFromDay(user1.userId, "2019/06/20")
    ).to.equal(140);
    expect(
      activities.getUserMinutesFromDay(user2.userId, "2019/06/18")
    ).to.equal(181);
  });

  it("Should calculate a users minutes active avg for a given week", () => {
    expect(
      activities.getUserMinActiveAvgForWeek(user1.userId, "2019/06/22")
    ).to.equal(168.14);
    expect(
      activities.getUserMinActiveAvgForWeek(user2.userId, "2019/06/22")
    ).to.equal(154.43);
  });

  it("Should check if user met their daily step goal for a given day", () => {
    expect(activities.didUserMeetStepGoalForDay(user1, "2019/06/18")).to.equal(
      "You're doing great: you missed your daily step goal of 10000 by 5581 steps."
    );
    expect(activities.didUserMeetStepGoalForDay(user2, "2019/06/19")).to.equal(
      "CRUSHING IT! You went over your daily step goal of 5000 by 4858 steps!"
    );
  });

  it("Should collect all the days a user has met their step goal", () => {

    expect(activities.filterDaysExceededUserStepGoal(user1)).to.deep.equal([
      "2019/06/17",
      "2019/06/20",
      "2019/06/22",
    ]);
    expect(activities.filterDaysExceededUserStepGoal(user2)).to.deep.equal([
      "2019/06/17",
      "2019/06/19",
      "2019/06/20",
      "2019/06/21",
    ]);
  });

  it("Should be able to get a users highest record of stairs climbed over all of that user's data", () => {
    expect(activities.findUserStairClimbingRecord(user1.userId)).to.equal(36);
    expect(activities.findUserStairClimbingRecord(user2.userId)).to.equal(44);
  });

  it("Should be able to get an average of all stairs climbed by users by a specific date", () => {
    expect(activities.getUsersStairsClimbedAvg("2019/06/17")).to.equal(11);
    expect(activities.getUsersStairsClimbedAvg("2019/06/22")).to.equal(18.5);
  });

  it("Should find avg number of steps taken for a specific day for all users", () => {
    expect(activities.getAllUsersStepsAvgForADay("2019/06/17")).to.equal(
      14039.5
    );
    expect(activities.getAllUsersStepsAvgForADay("2019/06/19")).to.equal(
      9143.5
    );
  });

  it("Should be able to get an average of all users active minutes on a specific date", () => {
    expect(activities.getUsersAvgMinutesActiveForDay("2019/06/17")).to.equal(
      116.5
    );
    expect(activities.getUsersAvgMinutesActiveForDay("2019/06/22")).to.equal(
      121.5
    );
  });
});
