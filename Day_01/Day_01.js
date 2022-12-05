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

console.log(Math.max(...elfCalories)); // returns calories of best elf
