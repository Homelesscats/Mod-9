const inquirer = require("inquirer");
const fs = require("fs");

const questions = 

[
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project:',
  },

  { 
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project:',
  },

  {
    type:'input',
    name:'installation',
    message:'How do you install this app?',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions:',
  },

  {
  type: 'input',
  name: 'usage',
  message: 'Please enter usage information:',
  },
 
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contribution guidelines:',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions',
  },

  { 
    type: 'input',
    name: 'githubUsername',
    message: 'Please enter your Github username:',
  }, 

  {
   type: 'input',
   name: 'email',
   message: 'Enter your email address:',
  },

];


// TODO: Create a function to write README file
function writeToFile(README.md, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
