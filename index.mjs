// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.mjs';
import questPkg from './utils/userQuestions.mjs';
import fsPkg from 'fs';

const questions = questPkg;
const fs = fsPkg

// const generateMarkdown = import("./utils/generateMarkdown.mjs")
// const {questions} = require('./utils/userQuestions.js')

console.log(questions);
console.log(generateMarkdown);

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then(answers=> {
        //console.log(answers)
        let template = generateMarkdown(answers)
        fs.writeFileSync("sample.md", template)
    })

}

// Function call to initialize app
init();