import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import mockUserData from '../src/data/mockUserData';

describe('UserRepository', () => {

  let users1;
  
  beforeEach(() => {
    users1 = new UserRepository(mockUserData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate UserRepository', function() {
    expect(users1).to.be.an.instanceOf(UserRepository);
  });

  it('Should be able to take in an array as an argument', function() {
    expect(users1.userData).to.be.an('array');
  });

  it('Should initially store an empty array for users', function() {
    expect(users1.users).to.deep.equal([]);
  });

});