// required packages for application 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")
const markdownGen = require('./utils/generateMarkdown');

// fs.writefile will use promises to create files
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions to be run in inquirer to gather the user's inputs
const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "username"
    }
    {
        type: "input"
        message: "What's your e-mail address?",
        name: "email"
    }
    {
        type: "input"
        message: "Please enter your project's title.",
        name: "title"
    }
    {
        type: "input",
        message: "Please enter a brief description of your project.",
        name: "description"
    }
    {
        type: "list",
        message: "Please choose a license for your project.",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "Unlicense",
            "GNU GPL v3",
            "GNU GPL v2",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "Mozilla Public License"
        ]
    }
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        default: "npm i"
    }
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    }
    {
        type: "input"
        message: "What should the user know about using this repository?"
        name: "usage"
    }
    {
        type: "input"
        message: "What should the user know about contributing to this repository?"
        name: "contributions"
    }

];

// function will run the above prompts with inquirer 
const inquirerPrompts = () => {
    return inquirer
        .prompt(questions);
}

// function will write the README file using the data gathered from the inquirer prompts
const writeToFile(fileName, data) => {
    return writeFileAsync(fileName, data);
}

const init = async () => {
    try {
        console.log("Thank you for using the Professional README generator.\nAnswer these questions and a quality README will be created for you.")

        const answers = await inquirerPrompts();

        const readmeContent = generateMarkdown(answers);
        
        await writeToFile(".output/README.md", readmeContent);

        console.log("A quality README.md has been created for you in the output folder.");
    } catch (err) {
        console.error("Error creating README. Please try running the program again to create a new README file.");
        console.log(err);
    }
}

init();
