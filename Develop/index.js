const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');


console.log("------READ ME GENERATOR------");
console.log("Please answer the following questions to build your readme file."); 


// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the name of the project?'
       
    },
    {
        type: 'input',
        name:'description',
        message: 'Give a description of the project:'
    },
    {
        type: 'input',
        name:'installation',
        message: 'Provide the steps to install your project:'
    },
    {
        type: 'input',
        name:'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name:'contributing',
        message: 'Provide guideline for contributions:'
    },
    {
        type: 'input',
        name:'tests',
        message: 'Provide instructions for testing:'
    },
    {
        type: 'list',
        name:'license',
        message: 'Choose a license:',
        choices: ['MIT License', 'GNU GPLv3', 'APACHE 2.0', 'BDS 3', 'NONE']
    },
    {
        type: 'input',
        name:'github',
        message: 'Enter github usename:'
    },
    {
        type: 'input',
        name:'email',
        message: 'Enter your email address:'
    }
    
];

init();

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), function(err) {
       if (err) return console.log(err);
    })


}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log('GENERATE README...');

        writeToFile('readme.md', answers);
    });

};


