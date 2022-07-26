// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?",
        default: "Node Programming",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?",
        default: "Professional Generator",

    },
    {
        type: "list",
        name: "license",
        message: "What is the license?",
        choices: [
            "MIT",
            "Mozilla"

        ]
    }, 

    {
        type: "input",
        name: "github",
        message: "what's your Github?",
        default: "EDEN-10"
    },
    {
        type: "input",
        name: "email",
        message: "what's your email?",
        default: "yigll002@umn.edu"
        
    },

    {
        type: "input",
        name: "installation",
        message: "How do you install the program?",
        default: "npm i"
    },

    {
        type: "input",
        name: "usage",
        message: "how do you plan on using the installation?",
        default: "download and install"
    },

    {
        type: "input",
        name: "test",
        message: "how do you test the program?",
        default: "npm test"
    },

    {
        type: "input",
        name: "contribution",
        message: "what's the contribution of this program?",
        default: "pull makeup request",
        
    },

]

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);

    var badge = "";

    if(answers.license == "MIT") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (answers.license == "Mozilla") {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }

    const markdown = `# ${answers.title}
${badge} 
## Table of Contents
- [Description](#description)
- [Installation](#installation) 
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Test
${answers.test}

## Contributions
${answers.contribution}

## Questions
 [Github](https://github.com/${answers.github}) 
 [Email](mailto:${answers.email})


`
    console.log(markdown);

    fs.writeFile("./Results.md", markdown , function() {
        console.log("README generatred succssfully!")
    })
    
  })
