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
    };
    
};

export default Sleep;