function employee(data){
    return
}

const inquirer = ('requirer');


inquirer.prompt([
    {
        type: "list",
        message: "Select title",
        name:"Title",
        choices:[
            'Manager',
            'Engineer',
            'Intern',
        ]
    },
    {
        type: "input",
        message: "Enter your name",
        name:"Name",
    },
    {
        type: "input",
        message: "Enter your employee ID",
        name:"Name",
    },
    {
        type: "input",
        message: "Enter your email address",
        name:"Name",
    },

])
.then((answers) =>
        fs.writeFile('Sindex.html', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log("Sucess!")
        )
    );

 module.export = employee;