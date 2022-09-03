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
import Sleep from "./Sleep";

//GLOBAL VARIABLES
let currentUser;
let usersData;
let newUserRepo;
let sleepData;
let sleepInfo;
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
      console.log('OUR SLEEP!', sleepData);
      // console.log('OUR HYDRATION! ', hydrationData);

      newUserRepo = new UserRepository(usersData);
      currentUser = new User(
        usersData[Math.floor(Math.random() * usersData.length)]
      );
      hydration = new Hydration(hydrationData);
      sleepInfo = new Sleep(sleepData);

      loadUser();
    }
  );
}

//SELECTORS
//USER SELECTORS
const userWidget = document.querySelector("#user-info-widget");
const userWelcome = document.querySelector("#welcome-message");

//HYDRATION SELECTORS
const singleDayHydration = document.querySelector("#single-day-ounces");
const weeklyHydration = document.querySelector("#week-ounces");
//const ounceInfo = document.querySelector(".indiv-ounce");

//SLEEP SELECTORS
const sleepWidget = document.querySelector(".user-sleep-widget");
const singleSleep = document.querySelector("#singleSleepData");
const weeklySleep = document.querySelector(".week-sleep-data");
const allTimeAvgs = document.querySelector(".all-time-sleep-avgs");

//FRIEND SELECTORS
const friendWidget = document.querySelector("#user-friends-widget");
const friendInfo = document.querySelector("#user-friend-info-card");

//EVENT LISTENERS
window.addEventListener("load", instatiateAllData);

//HELPER FUNCTIONS
function loadUser() {
  renderWelcomeMessage();
  renderUserInfo();
  renderFriendInfo();
  renderMostRecentUserSleepData();
  renderOuncesDrankPerDay();
  renderOuncesDrankPerWeek();
  getOuncesDrankPerWeek();
}

//FUNCTIONS
function renderWelcomeMessage() {
  userWelcome.innerHTML = `<section class="welcome">Welcome Back ${currentUser.getFirstName()}</section>`;
}

function renderUserInfo() {
  userWidget.innerHTML = `<section class="user-info-card">
    <h3 class="label">
      User Information
    </h3>
    <div class="user-info">
      <h5><b>Email:</b> ${currentUser.email}</h5>
      <h5><b>Addres:</b> ${currentUser.address}</h5>
      <h5><b>Stride Length:</b> ${currentUser.strideLength}</h5>
    </div>
    <h3 class="label">
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
    <h3 class="label friend" id="friend-label">
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

// For a user, their sleep data for the latest day (hours slept and quality of sleep)
function getMostRecentUserSleepHrs() {
  const date = sleepInfo.getLatestDayForUser(currentUser.userId);
  const latestSleepHrs = sleepInfo.getUserSleepHrsForDay(currentUser.userId, date);

  return latestSleepHrs;
}

function getMostRecentUserSleepQual() {
  const date = sleepInfo.getLatestDayForUser(currentUser.userId);
  const latestSleepQual = sleepInfo.getUserSleepQualForDay(currentUser.userId, date);
  
  return latestSleepQual;
}

function renderMostRecentUserSleepData() {
  singleSleep.innerHTML = 
  `<h2 class="label"> Last Night's Sleep
  <h4>Hours Slept: ${getMostRecentUserSleepHrs()}</h4>
  <h4>Sleep Quality: ${getMostRecentUserSleepQual()}</h4>
  </h2>`
}



// For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
// For a user, their all-time average sleep quality and all-time average number of hours slept

function renderOuncesDrankPerDay() {
  singleDayHydration.innerHTML = `<div class="card">
    <h3 class="label">
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
  weeklyHydration.innerHTML = `<div class="week">
    <h3 class="label">
      Drinks Per Week
    </h3>
    <div id="week-days">
    </div>
  </div>`;
}

function getOuncesDrankPerWeek() {
  const currentUserID = currentUser.userId;
  const lastHydrationDate = hydration.findTheLastDayForData(currentUserID);
  let ounceList;
  const ounceInfo = document.querySelector("#week-days");
  let x = 1;
  hydration
    .returnAWeekOfOunces(currentUserID, lastHydrationDate)
    .forEach((ounce) => {
      ounceList =
        ounceInfo.innerHTML += `<div class="indiv-ounce"> Day ${x++}: ${ounce} oz</div>`;
    });
}
