// Advent of Code 2022 - Day 1
// needed to read text file
const fs = require("fs");

// read text file
const elves = fs
    .readFileSync("Day_01_input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n\n') // separate each elf package

const calorieCalculator = (elf) =>
    elf
        .split('\n') // separates each calorie value
        .map(Number) // reads input as numeric values
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sums up calories of one elf

const elfCalories = elves.map(calorieCalculator); // sums up calories of all elves packages

// Task 1 - Return those elfs calories with most calories in his backpack
// console.log(Math.max(...elfCalories));

// Task 2 - Return the calorie sum of the top 3 elves
const topOne = Math.max(...elfCalories);
const topTwo = Math.max(...elfCalories.filter(elf => elf !== topOne));
const topThree = Math.max(...elfCalories.filter(elf => elf !== topOne && elf !== topTwo));
const calorieSum = topOne + topTwo + topThree;

console.log(calorieSum);