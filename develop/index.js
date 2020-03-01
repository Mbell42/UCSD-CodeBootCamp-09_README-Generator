// Grabbing dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

// Setting constant for asynchronously writing to file
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user for Github username and project details
function promptUser() {
    return inquirer.prompt([
        {
            // Prompt user for Github username
            type: "input",
            name: "GitHub Username",
            message: "What is your GitHub username?"
        },
        {
            // Prompt user for Project Title
            type: "input",
            name: "Project Title",
            message: "Enter a title for your project"
        },
        {
            // Prompt user for Description
            type: "input",
            name: "Description",
            message: "Enter a description for your project"
        },
        // {
        //     // Prompt user for Table of Contents
        //     type: "input",
        //     name: "Table of Contents",
        //     message: "Enter a title for your project"
        // },
        {
            // Prompt user for Installation
            type: "input",
            name: "Installation",
            message: "Enter required installations/dependencies for your project"
        },
        {
            // Prompt user for Usage Details/rights
            type: "input",
            name: "Usage",
            message: "Enter Usage details/rights for your project"
        },
        {
            // Prompt user for applicable Licenses
            type: "input",
            name: "License",
            message: "Enter applicable licenses for your project"
        },
        {
            // Prompt user for Contributing entities
            type: "input",
            name: "Contributing",
            message: "Enter contributing entities"
        },
        {
            // Prompt user for related Tests
            type: "input",
            name: "Tests",
            message: "Enter related tests for your project"
        },
        {
            // Prompt user for questions
            type: "input",
            name: "Questions",
            message: "Enter additional questions"
        },

    ])
}

// Using data from user's answers, create readme.pdf














// --initial code starting point below--
// const questions = [
// ];
// function writeToFile(fileName, data) {
// }
// function init() {
// }
// init();
