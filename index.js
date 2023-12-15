const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
'What is your project title?',
'What is your project description?',
'What are your installation instructions?',
'What is the usage information for the user?',
'What is the contribution guidelines for users?',
'Please describe your test instructions.',
'Please choose an appropriate licence',
'What is your GitHub name?',
'What is your email address?',
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
