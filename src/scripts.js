// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

// import userData from "./data/users";
import User from "./User";
import {
  getUsersApiData,
  getSleepApiData,
  getHydrationApiData,
} from "./apiCalls";
import UserRepository from "./UserRepository";

//GLOBAL VARIABLES
let currentUser;
let usersData;
let newUserRepo;
let sleepData;
let hydrationData;

//FETCH CALLS
function instatiateAllData() {
  Promise.all([getUsersApiData, getSleepApiData, getHydrationApiData]).then(
    (data) => {
      usersData = data[0].userData;
      sleepData = data[1].sleepData;
      hydrationData = data[2].hydrationData;

      // console.log('OUR USERS', usersData);
      // console.log('OUR SLEEP!', sleepData);
      // console.log('OUR HYDRATION! ', hydrationData);

      newUserRepo = new UserRepository(usersData);
      currentUser = new User(
        usersData[Math.floor(Math.random() * usersData.length)]
      );
      // console.log('ALL USER******', newUserRepo);
      // console.log('CURRENT USER******', currentUser);

      loadUser();
    }
  );
}

//SELECTORS
//USER SELECTORS
const userWidget = document.querySelector(".user-info-widget");
const userWelcome = document.querySelector(".welcome-message");
const userInfo = document.querySelector(".user-info-card"); //Has not been used yet

//HYDRATION SELECTORS
const hydrationWidget = document.querySelector(".user-hydration-widget");
const singleDayHydration = document.querySelector(".single-day-ounces");
const weeklyHydration = document.querySelector(".week-ounces");
//SLEEP SELECTORS

//FRIEND SELECTORS
const friendWidget = document.querySelector(".user-friends-widget");
const friendInfo = document.querySelector(".user-friend-info-card");

//EVENT LISTENERS
window.addEventListener("load", instatiateAllData);

//HELPER FUNCTIONS
function loadUser() {
  renderWelcomeMessage();
  renderUserInfo();
  renderFriendInfo();
  renderOuncesDrankPerDay();
}

//FUNCTIONS
function renderWelcomeMessage() {
  userWelcome.innerHTML = `<section class="welcome-message">Welcome Back ${currentUser.getFirstName()}</section>`;
}

function renderUserInfo() {
  userWidget.innerHTML = `<section class="user-info-card">
    <h3 class="user-info-label">
      User Information
    </h3>
    <p class="user-info">
      Email: ${currentUser.email}<br>
      Addres: ${currentUser.address}<br>
      Stride Length: ${currentUser.strideLength}<br>
    </p>
    <h3 class="user-step-goal-label">
      Step Goal
    </h3>
    <p class="user-step-goals">
      ${returnStepGoalComparision()}
    </p>
  </section>`;
}

function returnStepGoalComparision() {
  if (currentUser.dailyStepGoal > newUserRepo.returnAllAvgStepGoals()) {
    return `Great job! Your daily step goal of ${
      currentUser.dailyStepGoal
    } is higher than the average step goal of ${newUserRepo.returnAllAvgStepGoals()}. Keep Up The Great Work!`;
  } else {
    return `Let's Step It Up. Your daily step goal of ${
      currentUser.dailyStepGoal
    } is lower than the average step goal of ${newUserRepo.returnAllAvgStepGoals()}. You Can Do It!`;
  }
}

function renderFriendInfo() {
  friendWidget.innerHTML = `<section class="user-friend-info-card">
    <h3 class="friend-label">
      Friends
    </h3>
    <div class="friend-list">
      ${splitFriendsIntoList()}
    </div>
  </section>`;
}

function splitFriendsIntoList() {
  let currentUserID = currentUser.userId;
  let friendList;
  newUserRepo.returnUserFriendsNames(currentUserID).forEach((friend) => {
    friendList =
      friendInfo.innerHTML += `<div class="indiv-friend">${friend}</div>`;
  });
  return friendList;
}

function renderOuncesDrankPerDay() {
  const currentUserID = currentUser.userId;
  console.log(currentUserID);
  //console.log(hydrationData.getFluidOuncesPerDay(currentUserID, DATE));
}
