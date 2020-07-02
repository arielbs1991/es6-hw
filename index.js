const inquirer = require("inquirer");
require('dotenv').config();

inquirer.prompt({
    type:"input",
    name:"username",
    message:"what should I call you?"
}).then(function(answers){
    console.log()
})