let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let age = 15;

if (age >= 18 && isEarly === true) {
  raceNumber = raceNumber + 1000;
};

if (age >= 18 && isEarly === true) {
  console.log(`Your race will begin at 9:30am and your racing number is ${raceNumber}`);
} else if (age >= 18 && isEarly === false) {
  console.log(`Your race will begin at 11am and your racing number is ${raceNumber}.`);
};

if (age < 18) {
  console.log(`Your race will begin at 12:30pm and your racing number is ${raceNumber}.`)
};