// Advent of Code 2022 - Day 2
// needed to read text file
const fs = require("fs");

// read text file
const elves = fs
    .readFileSync("Day_01_input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n\n') // separate each elf package
