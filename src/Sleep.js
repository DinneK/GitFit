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
    
}

export default Sleep;