// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter your title'
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter description'
},
{
    type: 'input',
    name: 'instructions',
    message: 'Please enter instructions'
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidlines'
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter Testing instructions'
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose the lincese',
    choices:['Apache License 2.0','BSD 3-Clause "New" or "Revised"','MIT license','Mozilla Public License 2.0']
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,error =>{
        if(error){
            console.log(error)
        }else{
            console.log("Success! Your README.md file has been generated")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        const markDown = generateMarkdown(answers);
        writeToFile("./readme.md",markDown)
    })
}

// Function call to initialize app
init();
