// Advent of Code 2022 - Day 2
// needed to read text file
const fs = require("fs");

// read text file
let rucksack = fs
    .readFileSync("Day_03_Input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n') // separate each rucksack

console.log(rucksack[0]);

// find the wrong item
const findWrongItem = (rucksack) => {
    const divider = rucksack.length / 2;
    const [compartmentOne, compartmentTwo] = [
        // 1st half
        rucksack.slice(0, divider),
        // 2nd half
        rucksack.slice(divider), ];

    // convert to set for faster execution
    const compartmentTwoSet = new Set(compartmentTwo);

    // determine the double item
    const wrongItem = [...compartmentOne].find((item) => compartmentTwoSet.has(item));

    return wrongItem;
}

// calculate item priorities (small letters start at 96, big letters at 38)
const getPriority = (item) => item.charCodeAt() - (/[a-z]/.test(item) ? 96 : 38);

const wrongItems = rucksack.map(findWrongItem);
const priorities = wrongItems.map(getPriority);

const totalPriorityCalculator = (scores) => scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const totalPriority = totalPriorityCalculator(priorities);

//
console.log(totalPriority);

