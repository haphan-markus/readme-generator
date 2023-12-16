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

inquirer
.prompt ([
    {
        type: 'Input',
        name: 'Project title',
        message: questions[0]
    },
    {
        type: 'Input',
        name: 'Project description',
        message: questions[1]
    },
    {
        type: 'Input',
        name: 'Installation instructions',
        message: questions[2]
    }
]).then((response) => {
    fs.writeFile('READMEtest.md', JSON.stringify(response, null, '\t'), (err) => { // This will return a file with an object containing the answers - perhaps put the prompt into the init()
        console.log('There is a mistake');
    })

});

// function to write README file - after getting the data from the prompt, it will pass it into 
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
// init();
