const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

require('dotenv').config();

const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "please describe your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "please enter installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "please enrer your usage information:"
    },
    {
        //notice must be added that explains which license the application is covered under
        type: "list",
        name: "license",
        choices: [
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
            "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        ],
        message: "which license are you using?"
    },
    {
        type: "input",
        name: "contributors",
        message: "what contributors would you like to mention?"
    },
    {
        type: "input",
        name: "tests",
        message: "how do you test your application?"
    },
    {
        type: "input",
        name: "questions",
        message: "what questions would you like to include?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "what is your gitHub username?"
    },
    {
        //put this is questions section with instructions on how to reach me with additional questions
        type: "input",
        name: "email",
        message: "what is your email address?"
    }
];
inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
})

//| Syntax | Description |
// | ----------- | ----------- |
// | Header | Title |
// | Paragraph | Text |
