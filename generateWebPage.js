const buildTeam = (team) => {
    let html = "";

    // loop thru the team array that is a parameter and if manager return managerhtml etc
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            html += managerInfo(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            html += engineerInfo(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            html += internInfo(team[i]);
        }
    }
    return html;
}

const managerInfo = manager => {
    let html = `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><b>Manager: ${manager.name}</b></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${manager.name} </li>
                <li class="list-group-item">ID: ${manager.id} </li>
                <li class="list-group-item">Email: ${manager.email} </li>
                <li class="list-group-item">Office: ${manager.office} </li>
            </ul>
        </div>`;

    return html;
}
const engineerInfo = engineer => {
    let html = `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><b>Engineer: ${engineer.name}</b></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${engineer.name} </li>
                <li class="list-group-item">ID: ${engineer.id} </li>
                <li class="list-group-item">Email: ${engineer.email} </li>
                <li class="list-group-item">Github: ${engineer.github} </li>
            </ul>
        </div>`;

    return html;
}

const internInfo = intern => {
    let html = `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><b>Intern: ${intern.name}</b></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${intern.name} </li>
                <li class="list-group-item">ID: ${intern.id} </li>
                <li class="list-group-item">Email: ${intern.email} </li>
                <li class="list-group-item">School:${intern.school} </li>
            </ul>
        </div>`;
    return html;
}
const generateWebPage = team => {
    return `
    <!DOCTYPE html >
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="css/style.css">
            <title>Profile Generator</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main> ${buildTeam(team)} </main>
        </body>
    </html>`;
}
module.exports = generateWebPage;