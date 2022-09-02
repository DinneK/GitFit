class Sleep {
    constructor(data) {
        this.sleepData = data;
    }

    //HELPER METHODS
    getUserSleepData(userId) {
        const userData = this.sleepData.reduce((data, user) => {
            if(user.userID === userId){
                data.push(user);
            }
            
            return data
        }, []);
        
        return userData;
    }

    getDataForAWeek(userId, date) {
        const userInfo = this.sleepData.filter( curr => curr.userID === userId);
        const dateIndex = userInfo.findIndex( data => data.date === date);
        const startIndex = dateIndex - 6 < 0 ? 0 : dateIndex - 6;
        const weekOf = userInfo.slice(startIndex, dateIndex + 1);

        return weekOf;

    }

    //For a user (identified by their userID), the average number of hours slept per day
    getUserAvgSleepHoursPerDay(userId) {
        const hrsSlept = this.sleepData.reduce((acc, user) => {
            if(user.userID === userId){
                acc.push(user.hoursSlept);
            };

            return acc
        }, []);

        const avgHours = hrsSlept.reduce((acc, hrs) => 
            acc + hrs, 0);

        return parseFloat((avgHours / hrsSlept.length).toFixed(2));
    }

    
    //For a user, their average sleep quality per day over all time
    getAllOfUserAvgSleepQual(){}

    // For a user, how many hours they slept for a specific day (identified by a date)
    getUserSleepHrsForDay(userId, date) {
        const userData = this.getUserSleepData(userId);
        const hrsSlpDay = userData.filter((userInfo) => {
            return userInfo.date === date;
        });
        console.log(hrsSlpDay[0].hoursSlept);
        return hrsSlpDay[0].hoursSlept;
    }

    // For a user, their sleep quality for a specific day (identified by a date)
    getUserSleepQualForDay(){}



    // For a user, how many hours slept each day over the course of a given week (7 days) - 
    // you should be able to calculate this for any week, not just the latest week
    getUserHoursSleptForWeek(userId, date) {
        const userDataForWeek = this.getDataForAWeek(userId, date);
        const hoursSlept = userDataForWeek.map(user => user.hoursSlept);

        return hoursSlept;
    }

    // For a user, their sleep quality each day over the course of a given week (7 days) - 
    // you should be able to calculate this for any week, not just the latest week
    getSleepQualForWeek(userId, date) {
        const userDataForWeek = this.getDataForAWeek(userId, date);
        const sleepQual = userDataForWeek.map(user => user.sleepQuality);

        return sleepQual;
    }

    //For all users, the average sleep quality
    getAllUsersAvgSleepQual(){
        const sleepQualData = this.sleepData.map(user => user.sleepQuality);
        const totalAvgQual = sleepQualData.reduce((acc, upd) => 
            acc + upd, 0);

        const avgSQ = parseFloat((totalAvgQual / sleepQualData.length).toFixed(2));
        return avgSQ;
    }

}

export default Sleep;