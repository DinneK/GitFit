import "./css/styles.css";
import "./images/walking1.png";
import User from "./User";
import {
  getUsersApiData,
  getSleepApiData,
  getHydrationApiData,
  getActivitiesData,
} from "./apiCalls";
import UserRepository from "./UserRepository";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import Activities from "./Activities";

let currentUser;
let usersData;
let newUserRepo;
let sleepData;
let sleepInfo;
let hydrationData;
let hydration;
let activitiesData;
let activity;

function instantiateAllData() {
  Promise.all([getUsersApiData, getSleepApiData, getHydrationApiData, getActivitiesData]).then(
    (data) => {
      usersData = data[0].userData;
      sleepData = data[1].sleepData;
      hydrationData = data[2].hydrationData;
      activitiesData = data[3].activityData;
      newUserRepo = new UserRepository(usersData);
      currentUser = new User(
        usersData[Math.floor(Math.random() * usersData.length)]
      );
      hydration = new Hydration(hydrationData);
      sleepInfo = new Sleep(sleepData);
      activity = new Activities(activitiesData);
      loadUser();
    }
  );
}

// POSTS
const addSleep = (newSleepData) => {
  fetch('http://localhost:3001/api/v1/sleep', {
      method: 'POST',
      body: JSON.stringify(newSleepData),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => /*do.sumpin.w/json*/)
    .catch(err => /*do.sumpin.w/err*/);
}

const addHydration = (newHydrationData) => {
   fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    body: JSON.stringify(newHydrationData),
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => /*do.sumpin.w/json*/)
  .catch(err => /*do.sumpin.w/err*/);
}

const addActivity = (newActivitiesData) => {
  fetch('http://localhost:3001/api/v1/activity', {
    method: 'POST',
    body: JSON.stringify(newActivitiesData),
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => /*do.sumpin.w/json*/)
  .catch(err => /*do.sumpin.w/err*/);
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
const dailySteps = document.querySelector("#steps-per-day");
const dailyMins = document.querySelector("#minutes-per-day");
const dailyMiles = document.querySelector("#miles-per-day");
const topActivity = document.querySelector("#topActivity");
const latestActivityDayVsAll = document.querySelector("#activity-vs-all");
const activityWeekDays = document.querySelector("#activityWeekDays");
const addDataButton = document.querySelector("#addData");
const form = document.querySelector("#form")


window.addEventListener("load", instantiateAllData);
addDataButton.addEventListener("click", showForm);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newSleepData = {
    userId: currentUser.userId,
    date: formData.get('form-date'),
    hoursSlept: formData.get('hours-slept'),
    sleepQuality: formData.get('sleep-quality'),
  };
  const newHydrationData = {
    userId: currentUser.userId,
    date: formData.get('form-date'),
    numOunces: formData.get('ounces-drank'),
  };
  const newActivitiesData = {
    userId: currentUser.userId,
    date: formData.get('form-date'),
    numSteps: formData.get('number-steps'),
    minutesActive: formData.get('minutes-active'),
    flightsOfStairs: formData.get('flights-of-stairs'),
  };
  addSleep(newData);
  addHydration(newData);
  addActivity(newData);
  e.target.reset();
})
  
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
  renderRecentActivitiesDay();
  renderUserActivityComparison();
  renderWeekActivityData()
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
    sleepWeekDays.innerHTML += 
    `<div class="calendar-day">
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

function renderRecentActivitiesDay() {
  const dayData = activity.getMostRecentDate(currentUser.userId);
  const milesByDate = activity.getUserMilesPerDay(currentUser, dayData.date);

  topActivity.innerHTML = 
  `<div class=" sub-widget activity-card">
  <div class="label activity-card-label">Steps Today</div>
  <div class="activity-text">${dayData.numSteps}</div>
  </div>
  <div class=" sub-widget activity-card">
  <div class="label activity-card-label">Time Active</div>
  <div class="activity-text">${dayData.minutesActive} Minutes</div>
  </div>
  <div class=" sub-widget activity-card">
  <div class="label activity-card-label">Distance</div>
  <div class="activity-text">${milesByDate} Miles</div>
  </div>`;
}

function compareUserStepsToAll() {
  const dayData = activity.getMostRecentDate(currentUser.userId);
  const stepsAvgForDay = activity.getAllUsersStepsAvgForADay(dayData.date);

  if(dayData.numSteps >= stepsAvgForDay) {
    return `Awesome, your <span>${dayData.numSteps}</span> steps today are above the average of <span>${stepsAvgForDay}</span>, compared to everyone else.`;
  } else {
    return `You're almost there, at <span>${dayData.numSteps}</span> steps you are below the average of <span>${stepsAvgForDay}</span>.`;
  }
}

function compareUserClimbingToAll() {
  const dayData = activity.getMostRecentDate(currentUser.userId);
  const climbingAvg = activity.getUsersStairsClimbedAvg(dayData.date);

  if(dayData.flightsOfStairs >= climbingAvg) {
    return `Your climbing record of <span>${dayData.flightsOfStairs}</span> flights of stairs is above the avg of <span>${climbingAvg}</span> stairs.`;
  } else {
    return `Your climbing record of <span>${dayData.flightsOfStairs}</span> flights of stairs is below the avg of <span>${climbingAvg}</span> stairs.`;
  }
}

function compareUserMinsActiveToAll() {
  const dayData = activity.getMostRecentDate(currentUser.userId);
  const minsActiveAvg = activity.getUsersAvgMinutesActiveForDay(dayData.date);

  if(dayData.minutesActive >= minsActiveAvg) {
    return `But keep up the great work! You were active for <span>${dayData.minutesActive}</span> minutes, compared to the average <span>${minsActiveAvg}</span> minutes.`;
  } else {
    return `And no sweat, you spent <span>${dayData.minutesActive}</span> minutes active today, compared to the average <span>${minsActiveAvg}</span> minutes.`;
  }
}

function renderUserActivityComparison() {

  latestActivityDayVsAll.innerHTML = 
  `<div class="label activity-label">Your Activity Averages</div> 
  <div class="avg-card">${compareUserStepsToAll()}</div>
  <div class="avg-card"> ${compareUserClimbingToAll()}</div>
  <div class="avg-card"> ${compareUserMinsActiveToAll()}</div>`;
}

function renderWeekActivityData() {
  const dayData = activity.getMostRecentDate(currentUser.userId);
  const weekOf = activity.getDaysForWeekData(currentUser.userId, dayData.date);
  console.log(weekOf);
  weekOf.forEach((data) => {
    activityWeekDays.innerHTML += 
    `<div class="calendar-day">
      <div class="sleep-font">${data.day}</div>
      <div class="sleep-font">Steps: ${data.numSteps}</div>
      <div class="sleep-font">Minutes Active: ${data.minutesActive}</div>
      <div class="sleep-font">Stair Count: ${data.flightsOfStairs}</div>
    </div>`;
  });
}

function showForm() {
  addDataButton.classList.add("hidden");
  form.classList.remove("hidden");
}

function submitForm() {
  
}

