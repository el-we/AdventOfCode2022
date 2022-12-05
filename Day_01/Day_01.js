// Advent of Code 2022 - Day 1
const fs = require("fs");

// read text file

const elves = fs
    .readFileSync("Day_01_input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n\n') // separate each elf package

const calorie_max = () => {
    const calories = elves.map((elf) => {
        const calories = elf.split('\n').map(Number);
        return calories.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    });
    console.log(Math.max(...calories));
}

const calorieCalculator = (elf) =>
    elf
        .split('\n')
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const elfCalories = elves.map(calorieCalculator);

console.log(Math.max(...elfCalories));

calorie_max();
