# Daily Retros

## GITFIT pt. 1

### Saturday 08/27/22
- We created the `pull_request_template.md` file and added it to our `.github/ ` directory.

- PLANNING:
     - We went over the importance of breaking down a project down to it's features. 
     - Dinne also showed us the ways in which we will have to link our `Github Projects` organizer to our repository and structure it with the following in mind:
         - How to create a ticket system based on the iterations and its sub categories. We will need to be specific about what each feature/code implementation we will want to divide into its own ticket.
     - We are breaking down the JSON data information in order to figure out what data we need to work out

### Sunday 08/28/22

- Today we completed the `User.js' 'UserRepository.js` `Hydration.js`class designs for our issue tickets.
- We also started talking about data delegation as well as class-to-class communication.

- To Do's for Monday's deliverable:
     - We will need to finish our project board:
          - finish the sleep class
          - we will need to finish our iteration 2 - fetch calls
          - Think about everything that goes into our index.js (connecting our classes)
          - starting our html layout
          - explore Chat.js so that we can propose this feature use to Cass
          - We need to start creating our mock data sets.
          - include Matt in the discussion about delegating tasks - this mod will push more for 'divide and conquer' coding
          - Talk to our mentors about how we can best delegate class responsibilities, as well as assign data sets to an object class.

### Monday 08/29/22

- Today we created:
     - the `mockUserData.js`, `mockHydrationData.js`, `mockSleepData.js`
     - the `User.js`, `UserHydration.js` and the `UserRepository.js` class.
     - our constructors and our test files to accompany the classes.

- Challenges:
     - Dinne: Today is moving slower than I thought it would go. I'm Finding it challenging to actually type out the implementation that we talked out loud as a group during our preplanning.
     - Matt: Making my idea on my head match the idea on paper. Took a while to lean into the actual planning we created. It was a challenge to actually walk down the path we have set out for ourselves when created the map
     - Dani: On a personal level, my biggest challenge was dealing with the personal thoughts that held me from focus. On the technical end, the challenge is understanding how to handle big data sets. "We are handling big datasets for class, and will most definitely have to out in the real world, so how exactly do we delegate the data for optimal 'reach' and access?"
- Wins:
     - Dinne: Excited for how far we have gotten with actually understanding our road map, and how well we work together.
     - Matt: On the other side, the challenge is also the reward. We have an actual map that we can follow!
     - Dani: My biggest win is feeling excited to work with this team! We tried out dividing and conquering today and I think that it worked out well. We were all in the same breakout room and we were able to check in on each other.

- To Do Tomorrow:
     - We have to finish our `User.js`, `UserRepository.js` and `Hydration.js` classes
     - Start our `Sleep.js` class.
     - Finish our tentative wireframe
     

### Tuesday 08/30/22
- Today we created 

- Challenges:
     - Dinne: Sticking to the poms today.
     - Matt: I feel like I lost total scope on 'something', but everything worked out. we're still on the general path."
     - Dani: My challenge was not getting too ahead of myself with preplanning.
- Wins:
     - Dinne: I was able to build two methods without any outside help! First time I was able to write my own code in a group setting. I feel like I have been able to write down my own ideas and to implement my own code. It doesn't feel like I'm blindly throwing darts at a dartboard. My coding feels that much more intentional.
     - Matt: Just how quick I was able to build the function and build the user class! I never actually done the test driven dev on my own without looking at previous work I've done.
     - Dani: Being able to voice my concerns about our class-to-class communication and come to an understanding with my team. As I'm writing out the `UserRepository` class, I noticed that data sets would have to get passed through either the `User` class or the `UserRepository` class, but the wording on the project spec is not clear. this led me down a path of "what ifs', which I honestly would not have stepped out of if it wasn't for communicating this to my team. We were able to come to an understanding where we were all able to get an even clearer picture of the finished product.

- To do tomorrow:
     - Finish UserRRepository
     - Matt and Dani will start `Sleep.js` class
     - Dinne will work on the wireframe 


### Wednesday 08/31/22
- Today we created
     - `Sleep` Class
          - findUserSleepData
          - findWeeklyData method
          - getDataFromDate method
          - testing for these two methods.
     - `HTML`, `CSS`, `Script` files
          - scripts 
               - started our event listeners and our setup which includes our query selectors
               - renderWelcomeMessage method 
               - renderUserInfo method
               - render RandomUser 
               - returnStepGoalComparison() method
     - `UserRRepository` class
          - return user's friends ids method
          - return usersFriendsNames method

- Challenges:
     - Dinne: Challenge today was to connect our Data Model to the DOM. Another, getting the ids to match the friends names in display. One thing That I want to put into practice is something that I learned from last mod, and that is to know when to stop when I come across a problem -specifically when its coming close to the end of the day. My instructor from our last module here in Turing, Heather, suggested that it's okay to step away from a problem when I spend so much time on it. I just need to remember to write down where I left off and pick it up the next day.
     - Matt: Today's challenge was implementing the reduce iterator to the `Sleep` class.
     - Dani: Learning how to implement multiple iterators to work with each other - chaining iterations. 
- Wins:
     - Dinne: Beginning to feel just how much fun coding is! I got a lot done today.
     - Matt: I feel like I had a lot of small victories. It culminated in me creating such useful functionality, and it makes me feel like I got a lot accomplished. 
     - Dani: Biggest win is learning about Ternary operators! I was able to do research and reach out to my mentor about using this in my code, and it turned out to be a useful implementation.

### Thursday 09/01/22

- Today we Created 
     - A method and test to return an array of friends names in the user Repository
     - the section to hold the friend data to the HTML
     - query selectors for the friends
     - the functions for displaying the user's friends on the DOM
     - CSS styling to ensure the friends elements are displayed nicely
     - We hive minded our fetch calls in the apiCalls.js file as well as our promises in our Scripts.js file
     - reorganization to our whole `Sleep.js` class to annotate the methods we still need to create. This way we are wouldn't confuse ourselves.
     - the `getSleepQualForWeek()` and `getUserHoursSleptForWeek()` methods for the `Sleep.js` class
     - `getAllUsersAvgSleepQual` method to the `Sleep.js`

- Challenges:
     - Dinne: Being able to stop when I hit a code block. More importantly, being able to stop for a day and get some sleep.
     - Matt: This was my first real exposure to API and it was a whole lot, but I was able to keep up with it! This was a whole new foundation for me and it was awesome!
     - Dani: Double checking that I am following the organization we set from the very beginning. I felt Like I deviated from the project specs and did not make sure that I was implementing the right functionalities. We created the methods for the sleep class in the beginning, but the wording was so off from the project spec that I created the wrong method, which sparked a need to go back and reorganize.

- Wins:
     - Dinne: The fact that we worked as a team and figured out the fetch calls so quick. Being able to finish the fetch implementation and beginning to understand it 'that' much more.
     - Matt: Being able to map out how some of these cross-function interactions were going, and I can just see it now. I'm beginning to feel more aligned to the class-to-class implementation. Also, being able to re-implement iterators to new methods.
     - Dani: Hive Minding the fetch flow and being able to follow the logic for this implementation. I felt like we all actually worked out as a team in understanding the fetch/API implementation, and our thought processes were not stepping over anyone elses' toes. We all were able to voice our opinions and ideas, and acted on them, without stepping over anyone! That's a big win!


### Friday 09/02/22

- Today we created:
     - A method to get a user's total hours of sleep by a specific date in the `Sleep.js` class.
     - A method and a test to `Hydration.js` class to return the most recent date
     - Instantiated a new Hydration data in the `scripts.js` file
     - A function in the `script.js` file to display the ounces drank per day data to the DOM
     - A function in the `script.js` file to check the ounces per day against doctor recommended ounces
     - A function in the `script.js` file to display to the DOM the ounces drank every day for a week
     - CSS styling to the hydration displays
     - An HTML element for hydration   
     - The `getAllOfUserAvgSleepQual` method to the `Sleep.js` class.
     - The `getUserSleepQualForDay` method for the `Sleep.js` class.  

- Challenges:
     - Dinne: This was th first time I almost gave up on this project. It was a real moment where I told myself, "I'm not getting this, i'm done". But I caught myself and pushed the positive self talk to move away from those thoughts. The moment was when I was working with the `innerHTML` for the function `renderOuncesDrankPerWeek()`. This works similarly to the method `renderOuncesDrankPerDay()`, and that method was working. The problem why is wasn't working was because `renderOuncesDrankPerWeek()` was appending and manipulating the DOM and not necessarily returning a value like `renderOuncesDrankPerDay()` does. `renderOuncesDrankPerWeek()` is merely a side effect.
     - Matt:
     - Dani: Giving my branch creations/deletions an extra careful look. I created branches today that we no longer needed, but I had implemented changes that seemed necessary, and so I needed to make double check on their importance before I committed my changes. Some of these branches had major changes to methods, but ones that we no longer needed.
- Wins:
     - Dinne: My win was definitely overcoming and fighting the thoughts of giving up. I was also able to look to my partners as rubber duck to hear my thought processes out loud. 
     - Matt:
     - Dani: Being able to look at other people's code and follow the logic. Dinne, Matt and I, for many parts, worked independently (divide and conquer across classes), so being able to read Dinne's excellent Data Model to the DOM implementations was a big win for me.




### Saturday 09/02/22

- Today we created:
     - our first draft for README (Need to add deployment page, final illustration, milestones and challenges)
     - refactoring for ids and classes for css and html
     - the first branch of the Sleep Data widget
          - script.js
               - `getMostRecentUserSleepHrs()`
               - `getMostRecentUserSleepQual()`
               - `renderMostRecentUserSleepData()`
               - our base structure for the sleep data in the `index.html` (still a WIP)
                    - `#singleSleepData` div
                    - `#weeklySleep` div
                    - `#allTimeAvgs` div
               - our base styling for the sleep widgets (still a WIP)
     - refactoring to all classes to match ES6
     - changes on decimal places, in the `Sleep.js` class, to one place
     - spaces between returns in functions to match style guides
     - deleted comments and annotations
     - recreated our `getLatestDayForUser()` method in the `Sleep.js` class
     - We ran an accessibility audit
     - refactoring on our HTML/CSS for %100 accessibility
     - refactoring to our CSS design

- Challenges:
     - Dinne: Trying to make sure that my team members have the space to learn, because I have the tendency to want to control things.
     - Matt: Trying to do DOM manipulations in the script class. I was able to see how my team mates worked their DOM manipulations, but it was challenging for me. 
     - Dani: Measuring out my realistic goals. I felt like I overextended myself today for these ambitious goals with implementing code that was not part of our original plan, so I deviated away from what we had set out to complete today. I was tasked to finish rendering the sleep data to the DOM, but it took me longer to write this out because I actually restructured the way we got our data from the `Sleep.js` class. All of this, though, worked out well in the end. Along with this was also knowing when to stop! I ended up writing late into the night and it only proved how exhausted I was from rushing. 
- Wins:
     - Dinne: Having the CSS code come together so fast. It was the first time, technically, that I was able to just lay things out so easily. it's been a huge thing for me to look at other peoples code and see where things go. I'm partly grateful for this team for allowing the space for me to see the live process of implementing our code. I have this team to thank for giving me the patience to practice my learning. On the practical end I feel like I learned more in this project than any other event in Turing so far. 
     - Matt: knowing there's a deadline, being able to stick to our plan. Being able to reach to my teammates for help. This project has been so stress free for, and this is coming from an industry where it was so much anxiety. So, it's been rewarding to work with this team.
     - Dani: My biggest win is being afforded the space and time to practice my learning. I was ambitious, but I was able to see my whole code implementation to the end. I am thankful for Dinne's support in this as well! She was checking in on me throughout this day and asking if she can help and also told me not to stay up so late.


### Sunday 09/02/22

- Today we created:
     - shadow boxes to widgets
     - the `renderSleepWeek()` method to display a user's previous week data to the DOM 
     - the `renderUserAvgs()` method to display a user's sleep hrs and sleep quality averages to the DOM
     - refactoring to each team created files for syntax, naming conventions, removal of logs and comments, and to dry up code overall
     - our 2nd draft of README to add in the technologies we used
     - refactoring all of our files using prettier



- running questions:
     - What do the instructors think about Prettify? and is it allowed/accepted in the developer world?
- things to considers:
     - for Part Two
          - First, We will apply instructors' feedback with a refactor branch
          - Then we'll go into styling our widgets by implementing `Chart.js`, `Day.js`, `Draggable.js`
          - Possibly condensing our classes so that we are calculating our avgs in a separate class?
     - We will like to practice closing out our issues when we merge our pull requests

- Challenges:
     - Dinne: One of my challenges was to to stay present while having the finish line in sight; ending the project as strong as we started. The thing to this is feeling the rush of needing to just finish and get it out of the way. 
     - Matt: Leaving "well enough" alone. Not trying to start anything new on the last day and cramming things in. It was hard, but if we wanted to add anything new we would be up all night adding the changes to every other thing.
     - Dani: Putting my ego aside and communicating my mistakes from the day before to the team. I acknowledged, though, that doing this will allow my teammates to know 'where I am' and allow transparency.
- Wins:
     - Dinne: How well this project turned out in the end. The team dynamic has been so strong.
     - Matt: refactoring all of the code. I really enjoyed it! It was the first time it wasn't a chore; everything was nice. The whole experience was zen.
     - Dani: My biggest win today is feeling so good about this team. We really went down to refactoring our whole project down to something we feel super proud of. Our finish line was met strong and with still so much energy to desire more.



## GITFIT pt. 2

### Monday 09/12/22

- Today we created
     - issue tickets for the following:
          - create class for activity
          - create our new fetch and posts
          - create our extensions
          - create our code for local server (will these be a package dependency?) 
          - shopify - draggable.js
          - look into chart.js
          - add calendar also
          - day.js
     - Also

- Things we are considering
     - Dinne: 
     - Matt: I have a curiosity for chart.js. Does it matter when we decide to implement it? (Group response: I think this will be something that we can double-back on, once we are finish with our main objectives/functionalities we can go back and revisit). 
     - Dani: I'm curious about our Fetch calls. Figuring out what the standard/best practice is to implement our fetch calls.



### Tuesday 09/13/22

- Today we created:
     - Built our template for the `Activities.js` class including
          - Constructor
          - Annotating our methods we will be dividing and conquering.


- To Do:
     - Knock out the `Activities.js` class
          - Dinne will work on this class for the morning.
          - Matt and Dani will work the 10:30 work time
          - including finishing our tests
     - Work on Fetch calls 
     - Data Model to Dom manipulation once we get a hold of our Activities data from the API

- Challenges:
     - Dinne: Finding the time and committing to this project today was hard for me. I didn't feel like I was present for it. 
     - Matt: Coding in general, felt like coloring with my foot. Today was a rough day, coding felt frustrating.
     - Dani: realizing when I actually have more drive in me to do more for myself when I hit a point of having feel like I have done 'enough' work.

- Wins
     - Dinne: Getting two mock iterators test assessments down within the 30 minutes I set out to complete them in. Also, making the time to honor myself in desiring to test myself. 
     - Matt: After getting clarification from Beth, I was able to get a hold of working POST methods for FETCH calls.
     - Dani: Making the intentional time to go out and network.


### Wednesday 09/14/22

- Today we created:
     - Activities class
          - `findUserByID(userID)`
          - `getMostRecentDate(userID)`
          - `getMostRecentWeekData(userID, date)`
          - `getUserMilesPerDay(user, date)`
          - `getUserMinutesFromDay(userId, date)`
          - `getUserMinActiveAvgForWeek(userId, date)`
          - `didUserMeetStepGoalForDay(user, date)`
          - `filterDaysExceededUserStepGoal(user)`
          - `findUserStairClimbingRecord(userId)`
          - `getUsersStairsClimbedAvg(date)`
          - along with our TDD build for all of these methods found in our `Activities-test.js` file


- To Do:
     - Finish the last two methods in our `Activities.js` class
     - UPdate our FETCH methods to update the URL
     - Data Model to DOM manipulation
     - Complete Fetch calls after DOM manipulation so that we can actually incorporate user input to POST api calls

- Challenges:
     - Dinne: Trying to satay calm today, after juggle so much today; doing iterator practice this morning, completing my assigned methods for the `Activities.js` class, and not doing so well during mock assessment practices this evening. This whole day has been a mental challenge.
     - Matt: Properly accessing parts of objects during my practice with array iterators. 
     - Dani: A challenge for me today was not to compare myself to another person's code. I took some time to work on array iterators practice with a classmate and both he and I were working on the same problem set, except he got the answer a lot faster than I did. The challenge was getting myself to a place where I don't want to worry about "not getting" in the moment. My learning comes with patience and trust with my own abilities.

- Wins: 
     - Dinne: Being  able to say (I've been following the mantra of) you've done this before you can do it again, instead of being nervous or beating myself up. Really starting to believe in my abilities has been my biggest win. 
     - Matt: But, on the flip side, i'm getting further on my thought process, i.e. the ability to follow a logic flow, than getting stuck. I am seeing a strong growth.
     - Dani: My win was being able to take my time to show a group of people my thought process when I work through a problem. The important thing here is that I was able to speak in full sentences. It gives me the confidence to be able to speak in code, and therefore getting me closer to feel comfortable to speak to employers.