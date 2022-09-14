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
    })

    it.only("should be a function", () => {
        console.log("USER 1: ", user1);
        console.log("USER 2: ", user2);
        console.log("USER 3: ", user3);

        expect(Activities).to.be.a("function");
    });

    it.only("Should be an instance of Activities", () => {
        expect(activities).to.be.instanceOf(Activities);
    });

    it.only("Should instantiate a user", () => {
        expect(user1).to.be.an.instanceOf(User);
        expect(user2).to.be.an.instanceOf(User);
    });
});