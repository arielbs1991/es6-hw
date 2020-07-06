
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

require('dotenv').config();

function promptUser() {
    return inquirer.prompt([
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
            message: "what are the steps required to install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "please provide instructions and examples for how to use your project:"
        },
        {
            type: "list",
            name: "license",
            choices: [
                "Apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                "Boost [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
                "BSD 3-Clause [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                "GNU GPL v3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                "IBM Public License v1.0 [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                "The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                "Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
                "DWTFYW Public License [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
            ],
            message: "which license are you using?"
        },
        {
            type: "input",
            name: "credits",
            message: "are there any collaborators you would like to mention? Any third-party assets that require attribution? Any tutorials you followed? Credit them here:"
        },
        {
            type: "input",
            name: "tests",
            message: "how do you test your application?"
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
    ]);
};

function generateReadme(answers) {
    return `
    # Your Project Title

    ${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents (Optional)

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)

    ## Installation

    ${answers.installation}

    ## Usage 

    ${answers.usage}

    ## Credits

    ${answers.credits}

    ## License and Badges

    ${answers.license}

    ## Contributing

    ${answers.credits}

    ## Tests

    ${answers.tests}

    ## Questions

    If you have any questions, please reach out to me at ${answers.email}, or find me at https://github.com/${answers.gitHub}
    `
};

promptUser()
  .then(function(answers) {
    const md = generateReadme(answers);

    return writeFileAsync("generatedReadMe.md", md);
    console.log(md);
  })
  .then(function() {
    
  })
  .catch(function(err) {
    console.log(err);
  });

