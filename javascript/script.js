/*
Name: Muhammad
Course: The Odin Project - Foundations
Date: 07/20/2023
  
Overview: This is version 1 of the Rock, Paper, and Scissors Project in 
The Odin Project Foundations course. 

For this project you're supposed to create a rock, paper, and scissors console game
where the player can play against the computer. 
*/

let computer = getComputerChoice();
let player = "paper";
let rounds = 10;

game(computer, player, rounds);

//Funciton to output "Rock" as a string to minimize the posibility of typos
function getRock() {
  return "Rock";
}

//Funciton to output "Paper" as a string to minimize the posibility of typos
function getPaper() {
  return "Paper";
}

//Funciton to output "Scissors" as a string to minimize the posibility of typos
function getScissors() {
  return "Scissors";
}

//Generates a random number from 1 to x
function generateRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1;
}

//Gets the computer choice by taking a number from 1 to 3 then outputs the correspodning rock, paper, or scissors
function getComputerChoice() {
  let number = generateRandomNumber(3);

  switch (number) {
    case 1:
      return getRock();
    case 2:
      return getPaper();
    case 3:
      return getScissors();
    default:
      return "Error number is out of bounds. Numbers can only be 1 to 3";
  }
}

//Contains the logicx to decide who wins based on rock, paper, scissors
function didYouWin(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getPaper().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getScissors().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

//Checks to see if there was a tie
function wasATie(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getPaper().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getScissors().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

//Outputs the winning choice. Ex: Rock beats Scissors
function winningChoice(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return `${getRock()} beats ${getScissors()}`;
  }

  if (
    player1 === getPaper().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return `${getPaper()} beats ${getRock()}`;
  }

  if (
    player1 === getScissors().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return `${getScissors()} beats ${getPaper()}`;
  }
}

//Plays a single round of rock, paper, scissors
function playRound(computerSelection, playerSelection) {
  let computer = computerSelection.toLowerCase();
  let player = playerSelection.toLowerCase();

  if (didYouWin(computer, player)) {
    return `You Lose! ${winningChoice(computer, player)}`;
  } else if (didYouWin(player, computer)) {
    return `You Win! ${winningChoice(player, computer)}`;
  } else if (wasATie(player, computer)) {
    return `You Tied!`;
  } else {
    return `Error: Incorrect input. Player input was: "${player}", Computer input was: "${computer}"`;
  }
}

function game(computerSelection, playerSelection, numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    console.log(playRound(computerSelection, playerSelection));
  }
}
