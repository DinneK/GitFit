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

    getUserAvgSleepHoursPerDay(userId) {
        const userData = this.getUserSleepData(userId);
        const hrsSlept = userData.map(user => user.hoursSlept);
        const avgHours = hrsSlept.reduce((acc, hrs) => acc + hrs, 0);

        return parseFloat((avgHours / hrsSlept.length).toFixed(2));
    }

    
    getAllOfUserAvgSleepQual(userId) {
        const userData = this.getUserSleepData(userId);
        const sleepQual = userData.map(user => user.sleepQuality);
        const avgSleepQual = sleepQual.reduce((acc, curr) => 
        acc + curr, 0) / sleepQual.length;
        
        return avgSleepQual;

    }

    getUserSleepHrsForDay(userId, date) {
        const userData = this.getUserSleepData(userId);
        const hrsSlpDay = userData.filter((userInfo) => userInfo.date === date);
        return hrsSlpDay[0].hoursSlept;
    }

    getUserSleepQualForDay(userId, date) {
        const userData = this.getUserSleepData(userId);
        const sleepQual = userData.filter(user => user.date === date);

        return sleepQual[0].sleepQuality;
    }

    getUserHoursSleptForWeek(userId, date) {
        const userDataForWeek = this.getDataForAWeek(userId, date);
        const hoursSlept = userDataForWeek.map(user => user.hoursSlept);

        return hoursSlept;
    }

    getSleepQualForWeek(userId, date) {
        const userDataForWeek = this.getDataForAWeek(userId, date);
        const sleepQual = userDataForWeek.map(user => user.sleepQuality);

        return sleepQual;
    }

    getAllUsersAvgSleepQual() {
        const sleepQualData = this.sleepData.map(user => user.sleepQuality);
        const totalAvgQual = sleepQualData.reduce((acc, upd) => 
            acc + upd, 0);

        const avgSQ = parseFloat((totalAvgQual / sleepQualData.length).toFixed(2));
        return avgSQ;
    }

}

export default Sleep;