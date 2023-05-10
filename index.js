// npm install --save inquirer@^8.0.0
// variables for dependancies
let inquirer = require('inquirer');
let fs = require('fs');
let readmeGenerator = require('./readmeGenerator') ;


// questions
let questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'list',
    message: 'What license would you like to use?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Do you have a logo?',
    name: 'logo',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What are the usage information?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What did you learn building this project?',
    name: 'learn'
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What additional resources did you use?',
    name: 'resources',
  }
];


// function to write readme 
inquirer.prompt(questions).then(function(response) {
  console.log(response);
  
   let content = readmeGenerator(response);
   console.log(content);
    fs.writeFile("./ReadMe.md", content, function(err){
        if (err) throw err
        console.log("Success Job Done!");
    });
} ); 