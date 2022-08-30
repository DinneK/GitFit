import {expect} from 'chai';
import mockUserData from '../src/data/mockUserData';

import User from '../src/User';

describe ('User', function() {
    let user1, user2, mockUserData0, mockUserData1

    beforeEach(() => {
        user1 = new User(mockUserData[0]);
        user2 = new User(mockUserData[1]);
    })

    it('should instantiate a new instance of User', function() {
        console.log(user1)
        expect(user1).to.be.an.instanceof(User);
    })

    it('should instantiate a second new instance of User', function() {
        console.log(user2)
        expect(user2).to.be.an.instanceof(User);
    })

    it('should have userIds', function() {
        console.log('User 1 ID: ' + user1.userId);
        expect(user1.userId).to.equal(1);
        console.log('User 2 ID: ' + user2.userId);
        expect(user2.userId).to.equal(2);
    })

    it('should have user names', function() {
        console.log('User 1 name: ' + user1.name);
        expect(user1.name).to.equal('Luisa Hane');
        console.log('User 2 name: ' + user2.name);
        expect(user2.name).to.equal('Jarvis Considine');
    })

    it('should have user addresses', function() {
        console.log('User 1 address: ' + user1.address);
        expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
        console.log('User 2 address: ' + user2.address);
        expect(user2.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
    })
    
    it('should have user emails', function() {
        console.log('User 1 email: ' + user1.email);
        expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
        console.log('User 2 email: ' + user2.email);
        expect(user2.email).to.equal('Dimitri.Bechtelar11@gmail.com');
    })

    it('should have user stride lengths', function() {
        console.log('User 1 stride length: ' + user1.strideLength);
        expect(user1.strideLength).to.equal(4.3);
        console.log('User 2 stride length: ' + user2.strideLength);
        expect(user2.strideLength).to.equal(4.5);
    })

    it('should have user dail step goals', function() {
        console.log('User 1 daily step goal: ' + user1.dailyStepGoal);
        expect(user1.dailyStepGoal).to.equal(10000);
        console.log('User 2 daily step goal: ' + user2.dailyStepGoal);
        expect(user2.dailyStepGoal).to.equal(5000);
    })

    it('should have an array of user friend\'s id numbers', function() {
        console.log('User 1 friends: ' + user1.friends);
        expect(user1.friends).to.deep.equal([16, 4, 8]);
        expect(user1.friends).to.be.an('array');
        console.log('User 2 friends: ' + user2.friends);
        expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
        expect(user2.friends).to.be.an('array');
        
    })

})