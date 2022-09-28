const inquirer = require('inquirer');
const fs = require('fs'); 
var people = []           
var html = ""
// const employee = require('./Employee');
// const engineer = require("./engineer");
// const manager = require('./manager');
// const intern = require('./intern');

async function engineerQuestions() {
   return await inquirer.prompt([
        {
            type: "list",
            message: "Select title",
            name: "Title",
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ]
        },
        {
            type: "input",
            message: "Enter your name",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter your employee ID",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "Name",
        },

    ])
        .then((answers) =>
            fs.writeFile('index.html', generateMarkdown(answers), (err) =>
                err ? console.log(err) : console.log("Sucess!")
            )
        );
}


inquirer.prompt([
    {
        type: "input",
        message: "Enter manager's name",
        name: "Name",
    },
    {
        type: "input",
        message: "Enter manager's employee ID",
        name: "ID",
    },
    {
        type: "input",
        message: "Enter manager's email address",
        name: "Email",
    },
    {
        type: "input",
        message: "Enter manager's office number",
        name: "Office",
    },
    {
        type: "list",
        message: "Select title",
        name: "Adding",
        choices: [
            'Add Engineer',
            'Add Intern',
            'Finish building team'
        ]
    },
])
    .then((answers) => {
        if (answers.Adding == "Add Engineer") {

        } else if (answers.Adding == "Add Intern") {

        } else {

            fs.writeFile('index.html', html, (err) =>
                err ? console.log(err) : console.log("Sucess!")
            )
        }



    }); 
