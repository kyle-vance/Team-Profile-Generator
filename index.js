const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML.js");
const team = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager's employee ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office phone number?",
      name: "officeNo",
    },
  ])
  .then((data) => {
    const newManager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNo
    );
    team.push(newManager);
    menuOptions();
  });

const menuOptions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "newTeamMember",
        choices: ["Add an engineer", "Add an intern", "I'm done adding team members for now."],
      },
    ])
    .then((data) => {
      switch (data.newTeamMember) {
        case "Add an engineer":
          engineerQuestions();
          break;
        case "Add an intern":
          internQuestions();
          break;
        default:
          createTeam();
      }
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
    ])
    .then((data) => {
      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      team.push(newEngineer);
      menuOptions();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Where did the intern attend school?",
        name: "school",
      },
    ])
    .then((data) => {
      const newIntern = new Intern(
        data.name,
        data.id,
        data.email,
        data.school
      );
      team.push(newIntern);
      menuOptions();
    });
};

const createTeam = () => {
  const html = generateHTML(team);
  fs.writeFileSync("dist/index.html", html);
};


