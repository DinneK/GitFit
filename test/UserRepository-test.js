import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import mockUserData from '../src/data/mockUserData';

describe('UserRepository', () => {

  let users1;
  
  beforeEach(() => {
    users1 = new UserRepository(mockUserData);
  });

  it.only('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it.only('should instantiate UserRepository', function() {
    expect(users1).to.be.an.instanceOf(UserRepository);
  });

  it.only('Should be able to take in an array as an argument', function() {
    expect(users1.userData).to.be.an('array');
  });

  it.only('Should initially store an empty array for users', function() {
    expect(users1.users).to.be.an('array');
  });

  // returnUserData()
  it.only('Should be able to return user data based on Id', function() {
    const user1Data = users1.returnUserData(2);
    expect(user1Data[0]).to.be.deep.equal({
      userId: 2,
      name: 'Jarvis Considine',
      address: '30086 Kathryn Port, Ciceroland NE 07273',
      email: 'Dimitri.Bechtelar11@gmail.com',
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [ 9, 18, 24, 19 ],
      firstName: ''
    });
  });

  // returnAllAvgStepGoals()
  it.only('Should be able to return the average step goals of all users', function() {
    const totalStepAvgs = users1.returnAllAvgStepGoals();
    expect(totalStepAvgs).to.be.equal(6400);
  });

});