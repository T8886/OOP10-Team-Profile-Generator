const inquirer = require('inquirer');
const fs = require('fs');
var people = [];
var html = ""
const Engineer = require("./lib/Engineer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateWebPage = require('./generateWebPage');

// Manager's input
const managerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your name",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter your ID",
            name: "ID",
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "Email",
        },
        {
            type: "input",
            message: "Enter your office number",
            name: "Office",
        },

    ])
        .then((answers) => {
            const manager = new Manager[answers.Name, answers.ID, answers.Email, answers.Office];
            people.push(manager);
            chooseEmployee();
        })
}

// Options if add more emp or finish
const chooseEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Select one of the following options ",
            name: "Adding",
            choices: [
                'Add Engineer',
                'Add Intern',
                'Finish building team'
            ]
        }
    ])
        .then(pickedOption => {
            switch (pickedOption.key) {
                case "Add Engineer":
                    engineerInfo();
                    break;
                case "Add Intern":
                    internInfo();
                    break;
                default:
                    buildTeam();
            }
        });
};

// Engineer's input
const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer's name",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter engineer's employee ID",
            name: "ID",
        },
        {
            type: "input",
            message: "Enter Engineer's email address",
            name: "Email",
        },
        {
            type: "input",
            message: "Enter Engineer's Github",
            name: "Github",
        },
    ])
        .then((answers) => {
            const engineer = new Engineer[answers.Name, answers.ID, answers.Email, answers.Github];
            people.push(engineer);
            chooseEmployee();
        })
};

// Intern's Input
const internInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's name",
            name: "Name",
        },
        {
            type: "input",
            message: "Enter intern's employee ID",
            name: "ID",
        },
        {
            type: "input",
            message: "Enter inter's email address",
            name: "Email",
        },
        {
            type: "input",
            message: "Enter inter's school",
            name: "School",
        },
    ])
        .then((answers) => {
            const intern = new Intern[answers.Name, answers.ID, answers.Email, answers.School];
            people.push(intern);
            chooseEmployee();
        })
};

// Building webpage
const buildTeam = ()=>{
    fs.writeFileSync(outputPath, generateWebPage(people), "utf-8")
}

managerInfo()