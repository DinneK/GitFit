import { expect } from "chai";
import mockHydrationData from "../src/data/mockHydrationData";
import mockUserData from "../src/data/mockUserData";
import Hydration from "../src/Hydration";
import User from "../src/User";
//src/data/mockHydrationData.js

describe("Hydration", () => {
  let hydration, user1, user2;

  beforeEach(() => {
    hydration = new Hydration(mockHydrationData);
    //console.log(hydration.hydrationData);
    user1 = new User(mockUserData[0]);
    user2 = new User(mockUserData[1]);
    //console.log(user2);
  });

  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should have hydration data", () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it("should an array of objects", () => {
    expect(hydration.hydrationData).to.deep.equal([
      { userID: 1, date: "2019/06/15", numOunces: 37 },
      { userID: 2, date: "2019/06/15", numOunces: 75 },
      { userID: 1, date: "2019/06/16", numOunces: 48 },
      { userID: 2, date: "2019/06/16", numOunces: 82 },
      { userID: 1, date: "2019/06/17", numOunces: 91 },
      { userID: 2, date: "2019/06/17", numOunces: 27 },
      { userID: 1, date: "2019/06/18", numOunces: 62 },
      { userID: 2, date: "2019/06/18", numOunces: 127 },
      { userID: 1, date: "2019/06/19", numOunces: 48 },
      { userID: 2, date: "2019/06/19", numOunces: 62 },
      { userID: 1, date: "2019/06/20", numOunces: 38 },
      { userID: 2, date: "2019/06/20", numOunces: 72 },
      { userID: 1, date: "2019/06/21", numOunces: 55 },
      { userID: 2, date: "2019/06/21", numOunces: 36 },
    ]);
  });

  // it.skip("should have an ID", () => {
  //   //console.log("hydration", hydration.hydrationData);
  //   hydration.hydrationData.forEach((hyd) => console.log(hyd.userID));
  //   expect(hydration.hydrationUserID).to.equal(1);
  // });

  it("should return the hydration data for a particular user", () => {
    expect(hydration.findUserByID(user1.userId)).to.deep.equal([
      { userID: 1, date: "2019/06/15", numOunces: 37 },
      { userID: 1, date: "2019/06/16", numOunces: 48 },
      { userID: 1, date: "2019/06/17", numOunces: 91 },
      { userID: 1, date: "2019/06/18", numOunces: 62 },
      { userID: 1, date: "2019/06/19", numOunces: 48 },
      { userID: 1, date: "2019/06/20", numOunces: 38 },
      { userID: 1, date: "2019/06/21", numOunces: 55 },
    ]);

    expect(hydration.findUserByID(user2.userId)).to.deep.equal([
      { userID: 2, date: "2019/06/15", numOunces: 75 },
      { userID: 2, date: "2019/06/16", numOunces: 82 },
      { userID: 2, date: "2019/06/17", numOunces: 27 },
      { userID: 2, date: "2019/06/18", numOunces: 127 },
      { userID: 2, date: "2019/06/19", numOunces: 62 },
      { userID: 2, date: "2019/06/20", numOunces: 72 },
      { userID: 2, date: "2019/06/21", numOunces: 36 },
    ]);
  });

  it("should return the all time fluid ounces a person has drank", () => {
    expect(hydration.getAverageAllTimeFluidOunces(user1.userId)).to.equal(54);
    expect(hydration.getAverageAllTimeFluidOunces(user2.userId)).to.equal(69);
  });
});
