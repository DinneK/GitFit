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
    












    getDataFromDate(userId, date) {

        const userInfo = this.sleepData.reduce((userData, curr) => {
            if(curr.userID === userId){
                userData.push(curr);
            }

            return userData;
        }, []);

        const dateIndex = userInfo.map(user => user.date).indexOf(date);
        const weekOf = userInfo.splice
        console.log(dateIndex);

    }

}

export default Sleep;