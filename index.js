const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js") ; // Use this variable to call the generateMarkdown.js file inside the utils folder. When this file is call, it will call the function generateMarkdown through the module.exports.
// Currently, it will return the # ${data.title} when passing a value as "data"

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

// function to write README file - after getting the data from the prompt, it will pass it into 
function writeToFile(fileName, data) {
    console.log('data inside writetofile', data);
    // const { ProjectTitle , ProjectDescription, InstallationInstructions } = data;
    console.log('Data retrieve: ',data);
    
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => {
        console.log(data);
        // generateMarkdown.generateMarkdown(JSON.parse(data));
        console.log(JSON.parse(data));
        err ? console.err : console.log('Error committed');
    })
    // fs.writeFile(fileName, JSON.stringify(data, null, '\t'),(err) => {
        
    //     for (const value of data) {
    //         generateMarkdown(JSON.stringify(value, null, '\t'));
    //     }
    //     err ? console.err : console.log('Error committed');
    // })
}

// function to initialize program
function init() {
 // Put the inquirer prompt into here
 // In the .then(response): allow it to get the answer and then pass it into the file
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
        message: questions[5]
     },
     {
        type: 'Input',
        name: 'licence',
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
     }
 ]).then((response) => {
    console.log('Response inside init', response);
    
    writeToFile('READMEtest.md',response);
     // fs.writeFile('READMEtest.md', JSON.stringify(response, null, '\t'), (err) => { // This will return a file with an object containing the answers - perhaps put the prompt into the init()
     //     console.log('There is a mistake');
     // })
 
 });
}

// function call to initialize program
init();