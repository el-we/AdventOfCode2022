// Advent of Code 2022 - Day 1
const fs = require("fs");

// read text file

const elves = fs
    .readFileSync("Day_01_input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n\n') // separate each elf package

const calorieCalculator = (elf) =>
    elf
        .split('\n')
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const elfCalories = elves.map(calorieCalculator);

console.log(Math.max(...elfCalories));
