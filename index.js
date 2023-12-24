const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js") ;

// array of questions for user
const questions = [
'What is your project`s title?',
'Please write a short description of your project.',
'What command should be run to install dependencies?',
'What does the user need to know about using the repo?',
'What does the user need to know about contributing to the repo?',
'What command should be run to run tests?',
'What kind of licence should your project have',
'What is your GitHub username?',
'What is your email address?',
'Please write the user story for your project.',
];

// function to write README file - after getting the data from the prompt, it will pass it into 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`Generating REAME file ...`);
        }
    })
}

// function to initialize program
function init() {
    //  https://www.npmjs.com/package/inquirer
 inquirer
 .prompt ([
     {
         type: 'Input',
         name: 'title',
         message: questions[0]
     },
     {
         type: 'Input',
         name: 'description',
         message: questions[1]
     },
     {
         type: 'Input',
         name: 'installationInstructions',
         default: 'npm i', // add default value for suggestion
         message: questions[2]
     },
     {
        type: 'Input',
        name: 'usage',
        message: questions[3]
     },
     {
        type: 'Input',
        name: 'contributing',
        message: questions[4]
     },
     {
        type: 'Input',
        name: 'tests',
        default: 'npm test', // default value for testing
        message: questions[5]
     },
     {
        type: 'list',
        name: 'licence',
        default: 'Use arrow keys', // Use default function to suggest or give some instructions to users
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        message: questions[6]
     },
     {
        type: 'Input',
        name: 'github',
        message: questions[7]
     },
     {
        type: 'Input',
        name: 'email',
        message: questions[8]
     },
     {
         type: 'Input',
         name: 'userstory',
         message: questions[9]
     }
 ]).then((response) => {
    console.log('Response inside init', response);
    writeToFile('READMEtest.md',response);
 });
}

// function call to initialize program
init();