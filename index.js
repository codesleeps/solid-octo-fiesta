// npm install --save inquirer@^8.0.0
// declare dependancies
let inquirer = require('inquirer');
let fs = require('fs');
let readmeGenerator = require('./assets/readmeGenerator') ;


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
    message: 'What did you learn building this project?',
    name: 'learn'
  },
  {
    type: 'input',
    message: 'Do you have screenshots for this project?',
    name: 'screenshots'
  },
  {
    type: 'input',
    message: 'What features does this project have?',
    name: 'features'
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
    message: 'What optimizations did you use?',
    name: 'optimizations'
  },
  {
    type: 'input',
    message: 'What is inquirer?',
    name: 'inquirer'
  },
  {
    type: 'input',
    message: 'What is node?',
    name: 'nodejs',
  },
  {
    type: 'input',
    message: 'what is package json?',
    name: 'packagejson'
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What is the API reference?',
    name: 'api',
  },
  {
    type: 'input',
    message: 'What are the environment variables ?',
    name: 'environment',
  },
  {
    type: 'input',
    message: 'What are the colors used in this project?',
    name: 'color',
  },
  {
    type: 'input',
    message: 'Is there any trademarks?',
    name: 'trademarks'
  },
  {
    type: 'input',
    message: 'What is your conculsion for this project?',
    name: 'conclusions',
  },
  {
    type: 'input',
    message: 'What technologies are used?',
    name: 'tech',
  },
  {
    type: 'list',
    message: 'What vs-code extensions did you use for this project?',
    name: 'vscode',
    choices: ['Quokka.js 🤖', ' ESLint 🔥', 'Prettier 🔥', 'Tabnine 🤖', 'RapidAPI Client', 'JavaScript (ES6)', 'ES7+React', 'Gitignore', 'Live Server', 'Markdownlint', 'npm intellisense']
  },
  {
    type: 'input',
    message: 'What are the authors?',
    name: 'authors',
  },
  {
    type: 'input',
    message: 'What will you do going forward?',
    name: 'goingforward',
  },
  {
    type: 'input',
    message: 'Frequently asked question?',
    name: 'faq',
  },
  {
    type: 'input',
    message: 'Is there any feedback?',
    name: 'feedback',
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
  },
  {
    type: 'input',
    message: 'What support do you have for this project?',
    name: 'support',
  },
];


// function to write readme 
inquirer.prompt(questions).then(function(response) {
  console.log(response);
  
   var content = readmeGenerator(response);
   console.log(content);
    fs.writeFile("./assets/ReadMe.md", content, function(err){
        if (err) throw err
        console.log("Success Job Done!");
    });
} ); 
