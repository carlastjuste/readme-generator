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
        name:'questions',
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


