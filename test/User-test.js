import { expect } from "chai";
import mockUserData from "../src/data/mockUserData";
import User from "../src/User";

describe("User", () => {
  let user1, user2;

  beforeEach(() => {
    user1 = new User(mockUserData[0]);
    user2 = new User(mockUserData[1]);
  });

  it("should instantiate a new instance of User", () => {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
  });

  it("should have userIds", () => {
    expect(user1.userId).to.equal(1);
    expect(user2.userId).to.equal(2);
  });

  it("should have user names", () => {
    expect(user1.name).to.equal("Luisa Hane");
    expect(user2.name).to.equal("Jarvis Considine");
  });

  it("should have user addresses", () => {
    expect(user1.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
  });

  it("should have user emails", () => {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
  });

  it("should have user stride lengths", () => {
    expect(user1.strideLength).to.equal(4.3);
    expect(user2.strideLength).to.equal(4.5);
  });

  it("should have user dail step goals", () => {
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(5000);
  });

  it("should have an array of user friend's id numbers", () => {
    expect(user1.friends).to.deep.equal([1, 4, 5]);
    expect(user1.friends).to.be.an("array");
    expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
    expect(user2.friends).to.be.an("array");
  });

  it("Should be able to return the user's fisrt name", () => {
    expect(user1.getFirstName()).to.equal("Luisa");
    expect(user2.getFirstName()).to.equal("Jarvis");
  });
});
