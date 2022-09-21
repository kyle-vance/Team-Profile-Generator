// Blank array to push created team entries.
const teamArray = [];
// Function that takes the inputted data and forms into readable HTML to display TODO
const createTeam = (data) => {
    // Manger
    const createManager = data => {
        let managerCard = `<div class="card">
              <ul class="list-group">
              <li class="list-group-item name">${data.name}</li>
                <li class="list-group-item role">Role: Manager</li>
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${data.email}">${data.email}</a></span></li>
                <li class="list-group-item">Office Phone Number: ${data.officeNo}</li>
              </ul>
            </div>`;
        teamArray.push(managerCard);
    }
    // Engineer
    const createEngineer = data => {
        let engineerCard = `<div class="card">
              <ul class="list-group">
                <li class="list-group-item name">${data.name}</li>
                <li class="list-group-item">Role: Engineer</li>
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${data.email}">${data.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${data.github}">${data.github}</a></li>
              </ul>
            </div>`;
        teamArray.push(engineerCard);
    }
    // Intern
    const createIntern = data => {
        let internCard = `<div class="card">
              <ul class="list-group">
                <li class="list-group-item name">${data.name}</li>
                <li class="list-group-item">Role: Intern</li>
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <span><a href="mailto:${data.email}">${data.email}</a></span></li>
                <li class="list-group-item">School: ${data.school}</li>
              </ul>
            </div>`;
        teamArray.push(internCard);
    }
    // Assigns the correct role based on the getRole() from the constructor
    for (role of data) {
        if (role.getRole() === "Manager") {
            createManager(role);
        }
        if (role.getRole() === "Engineer") {
            createEngineer(role);
        }
        if (role.getRole() === "Intern") {
            createIntern(role);
        }
    }
    return teamArray.join('');
};
// Creates the HTML document template
function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css"/> 
    <title>Team Generator</title>   
</head>


<body>
    <div class="jumbotron custom-jumbotron">
        <h1 class="display-3 text-center">The Dream Team</h1>
    </div>
    
    <div class="container">
        <div class="row justify-content-around">${createTeam(data)}</div>
    </div>
     
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;