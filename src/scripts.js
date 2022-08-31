// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData, "<>>>>userData");
// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

import userData from "./data/users";
import User from "./User";

import UserRepository from "./UserRepository";

//SELECTORS
//USER SELECTORS
const userWidget = document.querySelector(".user-info-widget");
const userWelcome = document.querySelector(".welcome-message");
const userInfo = document.querySelector(".user-info-card");

//HYDRATION SELECTORS
//SLEEP SELECTORS

//EVENT LISTENERS
window.addEventListener("load", () => {
  renderWelcomeMessage();
  renderUserInfo();
});

//GLOBAL VARIABLES
let currentUser;

//FETCH CALLS

//RANDOM USER FUNCTION TO BE PUT IN THE FETCH CALL
currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
console.log({ currentUser });

//HELPER FUNCTIONS

//FUNCTIONS
function renderWelcomeMessage() {
  userWelcome.innerHTML = `<section class="welcome-message">Welcome Back ${currentUser.getFirstName()}</section>`;
}

function renderUserInfo() {
  userWidget.innerHTML = `<section class="user-info-card">
    <p class="user-info">
      Email: ${currentUser.email}<br>
      Addres: ${currentUser.address}<br>
      Stride Length: ${currentUser.strideLength}<br>
      Daily Step Goal: ${currentUser.dailyStepGoal}<br>
    </p>
  </section>`;
}
