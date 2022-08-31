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
        const userData = this.sleepData.reduce((data, user) => {
            if(user.userId === userId){
                data.push(user);
            }
        })
        console.log(user)
    }
    
}

export default Sleep;