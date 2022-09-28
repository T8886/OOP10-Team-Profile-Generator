const buildTeam = (team) => {
    const html = [];
    const managerInfo = manager => {
        let manager = `
            <div class="card" style="width: 18rem;">
                <div class="card-header"><b>$(manager.Name)<b /></div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$(manager.Name) </li>
                    <li class="list-group-item">$(manager.ID) </li>
                    <li class="list-group-item">$(manager.Email) </li>
                    <li class="list-group-item">$(manager.Office) </li>
                </ul>
            </div>`
            ;
    }
    html.push(manager);
}

const engineerInfo = engineer => {
    let engineer = `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><b>$(engineer.Name)<b /></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">$(engineer.Name) </li>
                <li class="list-group-item">$(engineer.ID) </li>
                <li class="list-group-item">$(engineer.Email) </li>
                <li class="list-group-item">$(engineer.Github) </li>
            </ul>
        </div>`
        ;
}
html.push(engineer);


const internInfo = intern => {
    let intern = `
        <div class="card" style="width: 18rem;">
            <div class="card-header"><b>$(intern.Name)<b /></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">$(intern.Name) </li>
                <li class="list-group-item">$(intern.ID) </li>
                <li class="list-group-item">$(intern.Email) </li>
                <li class="list-group-item">$(intern.School) </li>
            </ul>
        </div>`
        ;
}
html.push(intern);

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        managerInfo(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        engineerInfo(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        internInfo(team[i]);
    }
}


return html.join("");
module.export = team => {
    return `< !DOCTYPE html >
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                                    <link rel="stylesheet" href="css/style.css">
                                        <title>Profile Generator</title>
                                    </head>
                                    <body>
                                        <header>
                                            <h1>My Team</h1>
                                        </header>
                                        <main> ${buildTeam(team)} </main>
                                </body>`;
}