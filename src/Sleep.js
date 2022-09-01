class Sleep {
    constructor(data) {
        this.sleepData = data;
    }

    findUserSleepData(userId) {
        const userData = this.sleepData.reduce((data, user) => {
            if(user.userID === userId){
                data.push(user);
            }
            
            return data
        }, []);
        
        return userData;
    }

    avgSleepHoursPerDay(userId) {
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
  
    findWeeklyData(userId) {
        const hrsSlept = this.sleepData.reduce((acc, user) => {
            if(user.userID === userId){
                acc.push(user.hoursSlept);
            };
            return acc
        }, []);
        const iV = 0
        const weeklyHoursSlept = hrsSlept.reduce((tot, sum) => tot + sum, iV
        );
        return parseFloat((weeklyHoursSlept).toFixed(1));

    }

    getDataFromDate(userId, date) {

        const userInfo = this.sleepData.filter( curr => curr.userID === userId);
        const dateIndex = userInfo.findIndex( data => data.date === date);
        const startIndex = dateIndex - 6 < 0 ? 0 : dateIndex - 6;
        const weekOf = userInfo.slice(startIndex, dateIndex + 1);

        return weekOf;

    }

}

export default Sleep;