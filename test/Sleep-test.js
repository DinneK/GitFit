import { expect } from "chai";
import mockSleepData from "../src/data/mockSleepData";
import mockUserData from "../src/data/mockUserData";
import Sleep from "../src/Sleep";
import User from "../src/User";

describe('Sleep', () => {
    let sleep, user1, user2;

    beforeEach(() => {
        sleep = new Sleep(mockSleepData);
        user1 = new User(mockUserData[0]);
        user2 = new User(mockUserData[1]);
    });

    it('Should read the sleep data', () => {
        expect(sleep.sleepData[0]).to.deep.equal({
            userID: 1, date: "2019/06/15", hoursSlept: 6.1, sleepQuality: 2.2,
        });

        expect(sleep.sleepData[1]).to.deep.equal({
            userID: 2, date: "2019/06/15", hoursSlept: 7, sleepQuality: 4.7,
        });
    });

    // Find user sleep data
    it('Should return a specific user\'s sleep data', () => {
        const userSleepData = sleep.findUserSleepData(2);
        
        expect(userSleepData[0]).to.deep.equal({
            userID: 2, date: "2019/06/15", hoursSlept: 7, sleepQuality: 4.7,
        });
    });

    // Find user avg hours slept per day
    it('Should return a user\'s average hours slept per day', () => {
        const userAvgSleepData1 = sleep.avgSleepHoursPerDay(1);
        const userAvgSleepData2 = sleep.avgSleepHoursPerDay(2);

        expect(userAvgSleepData1).to.equal(6.34);
        expect(userAvgSleepData2).to.equal(6.5);
    })

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Find use avg hours slept per week
    it('Should return a total of the users weekly hours slept', () => {
        const userWeeklyHours1 = sleep.findWeeklyData(1);
        const userWeeklyHours2 = sleep.findWeeklyData(2);

        expect(userWeeklyHours1).to.equal(50.7);
        expect(userWeeklyHours2).to.equal(52);

    })
});