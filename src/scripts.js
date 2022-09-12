import "./css/styles.css";
import "./images/walking1.png";
import User from "./User";
import {
  getUsersApiData,
  getSleepApiData,
  getHydrationApiData,
} from "./apiCalls";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";

let currentUser;
let usersData;
let newUserRepo;
let sleepData;
let sleepInfo;
let hydrationData;
let hydration;

function instantiateAllData() {
  Promise.all([getUsersApiData, getSleepApiData, getHydrationApiData]).then(
    (data) => {
      usersData = data[0].userData;
      sleepData = data[1].sleepData;
      hydrationData = data[2].hydrationData;
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

const userWidget = document.querySelector("#user-info-widget");
const userWelcome = document.querySelector("#welcome-message");
const singleDayHydration = document.querySelector("#single-day-ounces");
const weeklyHydration = document.querySelector("#week-ounces");
const sleepWidget = document.querySelector(".user-sleep-widget");
const singleSleep = document.querySelector("#singleSleepData");
const weeklySleep = document.querySelector("#weekSleepData");
const sleepWeekDays = document.querySelector("#sleepWeekDays");
const sleepAvgs = document.querySelector("#sleepAvgs");
const allTimeAvgs = document.querySelector(".all-time-sleep-avgs");
const friendWidget = document.querySelector("#user-friends-widget");
const friendInfo = document.querySelector("#user-friend-info-card");

window.addEventListener("load", instantiateAllData);

function loadUser() {
  renderWelcomeMessage();
  renderUserInfo();
  renderFriendInfo();
  renderMostRecentUserSleepData();
  renderSleepWeek();
  renderUserAvgs();
  renderOuncesDrankPerDay();
  renderOuncesDrankPerWeek();
  getOuncesDrankPerWeek();
}

function renderWelcomeMessage() {
  userWelcome.innerHTML = `<section class="welcome">Welcome Back ${currentUser.getFirstName()}</section>`;
}

function renderUserInfo() {
  userWidget.innerHTML = `<section class="user-info-card">
    <div class="label">
      User Information
    </div>
    <div class="user-info">
      <h2><b>Email:</b> ${currentUser.email}</h2>
      <h2><b>Address:</b> ${currentUser.address}</h2>
      <h2><b>Stride Length:</b> ${currentUser.strideLength}</h2>
    </div>
    <div class="label">
      Step Goal
    </div>
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

function getMostRecentUserSleepHrs() {
  const date = sleepInfo.getLatestDayForUser(currentUser.userId);
  const latestSleepHrs = sleepInfo.getUserSleepHrsForDay(
    currentUser.userId,
    date
  );

  return latestSleepHrs;
}

function getMostRecentUserSleepQual() {
  const date = sleepInfo.getLatestDayForUser(currentUser.userId);
  const latestSleepQual = sleepInfo.getUserSleepQualForDay(
    currentUser.userId,
    date
  );

  return latestSleepQual;
}

function renderMostRecentUserSleepData() {
  singleSleep.innerHTML = `<div class="label"> Last Night's Sleep</div>
  <div class="label sleep-label">
  <div class="sleep">Hours Slept: ${getMostRecentUserSleepHrs()}</div>
  <div class="sleep">Sleep Quality: ${getMostRecentUserSleepQual()}</div>
  </div>`;
}

function getDaysOfSleepWeek() {
  const date = sleepInfo.getLatestDayForUser(currentUser.userId);
  const weekOf = sleepInfo.getLiteralDaysOfWeek(currentUser.userId, date);

  return weekOf;
}

function renderSleepWeek() {
  const weekOf = getDaysOfSleepWeek();
  weekOf.forEach((data) => {
    sleepWeekDays.innerHTML += `<div class="calendar-day">
      <div class="sleep-font">${data.day}</div> 
      <div class="sleep-font">Hours: ${data.hoursSlept}</div>
      <div class="sleep-font">Quality: ${data.sleepQuality}</div>
    </div>`;
  });
}

function renderUserAvgs() {
  sleepAvgs.innerHTML = `<div class="label"> Your Sleep Average</div>
  <div class="label sleep-label">
  <div class="sleep">Hours Slept: ${sleepInfo.getUserAvgSleepHoursPerDay(currentUser.userId)}</div>
  <div class="sleep">Sleep Quality: ${sleepInfo.getAllOfUserAvgSleepQual(currentUser.userId)}</div>
  </div>`;
}

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
