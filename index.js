const inquirer = require("inquirer");
const dbConnect = require("./db/connection");
require("console.table");

//first connecting to the database, and then starting the question prompts


//question prompts
function startEmployeeTracker() {
    inquirer.prompt({
        type: "list",
        name: "action",
        mesage: "Select which action you would like to perform today: ",
        choices: [
            "View All Employess",
            "View All Employees By Manager",
            "View All Employees By Department",
            "Add An Employee",
            "Update An Employee Role",
            "View All Departments",
            "Add A Department",
            "View All Roles",
            "Add A Role",
            "Delete A Department",
            "Delete A Role", 
            "Delete An Employee",
            "View Department Budget"
        ]
    })
}