'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
/*answer*/
for (const flight of flights.split('+')){
  const [type,from,to,time]=flight.split(';');
  const outPut=`${type.startsWith('_Delayed')?'🔴':''}/${type.replaceAll('_',' ')} ${from.slice(0,3)} ${to.slice(0,3)} ${time.replace(':','h')}`;
  console.log(outPut.padStart(36,' '));
}

/*MyCode
const dealWithName=function(str){
  const ans=str.replaceAll('_',' ').trim();
  // console.log(ans);
  return ans;
}
const dealWithPlace=function(str){
  const ans=[];
  for(let i=0;i<str.length;i++){
    if(str[i]>='0'&&str[i]<='9'){
      break;
    }
    ans[i]=str[i];
  }
  const temp=ans.join('');
  // console.log(temp);
  return temp.toUpperCase();
}
const dealWithTime=function(str){
  // console.log(str.replace(':','h'));
  return str.replace(':','h');
}

const first=flights.split('+');
console.log(first);
const second=[];
for(let i=0;i<first.length;i++){
  second[i]=first[i].split(';');
}
console.log(second);
const third=[];
for(let i=0;i<second.length;i++){
  third[i]=dealWithName(second[i][0])+' from '+dealWithPlace(second[i][1])+' to '+dealWithPlace(second[i][2])+' '+dealWithTime(second[i][3]);
}
console.log(third);
for(let i=0;i<third.length;i++){
  console.log(third[i].padStart(42,' '));
}
*/
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
/*
for(let i=0;i< game.scored.length;i++){
  console.log(`Goal ${i+1}: ${game.scored[i]}`);
}
*/
console.log(Object.entries(game.scored));
const newMap = new Map(Object.entries(game.scored));
// console.log(newMap);
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let team1, team2, x;
[team1, x, team2] = Object.values(game.odds);
// console.log(team1,team2,x);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
console.log(`Odd of victory ${game.team1}:${team1}`);

const scores = {};
for (let i = 0; i < game.scored.length; i++) {
  if (scores[game.scored[i]]) {
    scores[game.scored[i]]++;
  } else {
    scores[game.scored[i]] = 1;
  }
  // (scores[game.scored[i]]?.values++) ?? (scores[game.scored[i]]);
}
// console.log(scores);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

// const answer=Number(prompt(`${question.get('question')}`));
// console.log(answer);
// console.log(question.get(answer===question.get('correct')));

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...gameEvents];
console.log(events);
const list = new Set(gameEvents.values());
console.log(list);
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
let sum = 0,
  pre = 0;
for (const [time, event] of gameEvents) {
  sum += time - pre;
  pre = time;
}
console.log(sum / gameEvents.size);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL

const str = 'John is made isEmpty John';
console.log(str.lastIndexOf('is'));
console.log(str.slice(5, 7));
console.log(str);

const checkMiddleSeat = function (seat) {
  let posi = seat.slice(-1);
  console.log(posi);
};
checkMiddleSeat('12B');

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

const newStr = str.replace('John', 'Damon');
console.log(newStr, 1);
const new2str = str.replaceAll('John', 'Damon');
console.log(new2str);
console.log(str.startsWith('John'));
console.log(str.split(' ', 2));
const arr = [12, 'asda', 'fff'].join(' ');
console.log(arr);

const turnToUp = function (str) {
  const temp = str.split(' ');
  const ans = [];
  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    // ans[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
    ans[i] = temp[i].replace(temp[i][0], temp[i][0].toUpperCase());
  }
  return ans.join(' ');
};
console.log(turnToUp('ana john damon'));
console.log(str.padStart(30, '.'));

const padCredit = function (number) {
  const str = number + '';
  const leng = str.length;
  const last4 = str.slice(-4);
  console.log(last4);
  const ans = last4.padStart(leng, '*');
  console.log(ans);
};
padCredit('232323231312312');

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
*/
const convertStr = function (a) {
  const str = a.toLowerCase();
  const trimStr = str.trim();
  const splitStr = trimStr.split('_');
  splitStr[0] = splitStr[0][0].toLowerCase() + splitStr[0].slice(1);
  for (let i = 1; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
  }
  console.log(splitStr.join(''));
};
convertStr('underscore_case');
convertStr('calculate_AGE');
