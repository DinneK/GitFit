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
import Hydration from "./Hydration";

//GLOBAL VARIABLES
let currentUser;
let usersData;
let newUserRepo;
let sleepData;
let hydrationData;
let hydration;

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
      //console.log(currentUser.userId);
      hydration = new Hydration(hydrationData);
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
const ounceInfo = document.querySelector(".indiv-ounce");
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
  renderOuncesDrankPerWeek();
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
  singleDayHydration.innerHTML = `<div class="single-day-card">
    <h3 class="day-drink-label">
      Drinks Per Day
    </h3>
    <div class="day-ounces">
      ${getTheHydrationPerDate()} oz
    </div>
    <p class="user-drink-goals">
      ${returnDrinkComparison()}
    </p>
  </div>`;
}

function getTheHydrationPerDate() {
  const currentUserID = currentUser.userId;
  const lastHydrationDate = hydration.findTheLastDayForData(currentUserID);
  return hydration.getFluidOuncesPerDay(currentUserID, lastHydrationDate);
}

function returnDrinkComparison() {
  if (getTheHydrationPerDate() < 90) {
    return `Drink more water!`;
  } else {
    return `Awesome! Your drinking is on point`;
  }
}

function renderOuncesDrankPerWeek() {
  // weeklyHydration.innerHTML = `<div class="week-ounces">
  //   <h3 class="week-drink-label">
  //     Drinks Per Week
  //   </h3>
  //   <div class="week-days">
  //      ${getOuncesDrankPerWeek()}
  //   </div>
  // </div>`;
  console.log("ounces", getOuncesDrankPerWeek());
}
//console.log(getDaysDrankPerWeek());

function getOuncesDrankPerWeek() {
  const currentUserID = currentUser.userId;
  console.log({ currentUserID });
  const lastHydrationDate = hydration.findTheLastDayForData(currentUserID);
  let ounceList;
  const ouncePerWeek = hydration
    .returnAWeekOfOunces(currentUserID, lastHydrationDate)
    .forEach((ounce) => {
      ounceList =
        ounceInfo.innerHTML += `<div class="indiv-ounce">${ounce}</div>`;
    });
  console.log({ ounceList });
  console.log({ ouncePerWeek });
  return ouncePerWeek;
}

// function getDaysDrankPerWeek() {
//   const currentUserID = currentUser.userId;
//   const lastHydrationDate = hydration.findTheLastDayForData(currentUserID);
//   return hydration.returnAWeekOfDates(currentUserID, lastHydrationDate);
// }
