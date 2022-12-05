// Advent of Code 2022 - Day 2
// needed to read text file
const fs = require("fs");

// read text file
let rounds = fs
    .readFileSync("Day_02_input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove \r characters to avoid problems on windows
    .trim() // remove starting & ending whitespace
    .split('\n') // separate each round

const inputSplitter = (round) => round.split(' '); // separates each players pick
rounds = rounds.map(inputSplitter);

/* Logic & Rules
Add result of match and your choice
A for Rock, B for Paper, and C for Scissors
X for Rock, Y for Paper, and Z for Scissors
1 for Rock, 2 for Paper, and 3 for Scissors
lose = 0
draw = 3
win  = 6
*/

const pointsCalculator = (rds) => {
    switch(rds[0]) {
        // elf takes rock
        case 'A':
            // we take rock - draw + rock
            if (rds[1] === 'X') {
                return 4;
                // we take paper - win + paper
            } else if (rds[1] === 'Y') {
                return 8;
                // we take scissors - lose + scissors
            } else {
                return 3;
            }
        // elf takes paper
        case 'B':
            // we take rock - lose + rock
            if (rds[1] === 'X') {
                return 1;
                // we take paper - draw + paper
            } else if (rds[1] === 'Y') {
                return 5;
                // we take scissors - win + scissors
            } else {
                return 9;
            }
        // elf takes scissors
        case 'C':
            // we take rock - win + rock
            if (rds[1] === 'X') {
                return 7;
                // we take paper - lose + paper
            } else if (rds[1] === 'Y') {
                return 2;
                // we take scissors - draw + scissors
            } else {
                return 6;
            }
    }
};
const scoreCalculator = (rounds) => rounds.map(pointsCalculator);
const scores = scoreCalculator(rounds);
const totalScoreCalculator = (scores) => scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const totalScore = totalScoreCalculator(scores);
//console.log(totalScore);


// Part 2 - changed rules
/* Logic & Rules
Add result of match and your choice
A for Rock, B for Paper, and C for Scissors
X for lose, Y for draw, and Z for win
1 for Rock, 2 for Paper, and 3 for Scissors
lose = 0
draw = 3
win  = 6
*/

const pointsCalculatorPart2 = (rds) => {
    switch(rds[0]) {
        // elf takes rock
        case 'A':
            // we lose + take scissors
            if (rds[1] === 'X') {
                return 3;
                // draw + we take rock
            } else if (rds[1] === 'Y') {
                return 4;
                // we win + take paper
            } else {
                return 8;
            }
        // elf takes paper
        case 'B':
            // we lose + take rock
            if (rds[1] === 'X') {
                return 1;
                // draw + we take paper
            } else if (rds[1] === 'Y') {
                return 5;
                // we win + take scissors
            } else {
                return 9;
            }
        // elf takes scissors
        case 'C':
            // we lose + take paper
            if (rds[1] === 'X') {
                return 2;
                // draw + we take scissors
            } else if (rds[1] === 'Y') {
                return 6;
                // we win + take rock
            } else {
                return 7;
            }
    }
};

const scoreCalculatorPart2 = (rounds) => rounds.map(pointsCalculatorPart2);

const scoresPart2 = scoreCalculatorPart2(rounds);
const totalScorePart2 = totalScoreCalculator(scoresPart2);

console.log(totalScorePart2);