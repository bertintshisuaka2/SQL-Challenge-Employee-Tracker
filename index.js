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
            "View Department Budget",
            "All Done"
        ]
    })
    .then(function ({action}) {
        switch (action) {
            case "View All Employess":
                console.log("Now Viewing All Employess: \n");

                break;

            case "View All Employees By Manager":
                console.log("Now Viewing All Employees By Manager: \n");

                break;

            case "View All Employees By Department":
                console.log("Now Viewing All Employess By Department: \n");
                
                break;

            case "Add An Employee":
                console.log("Now Adding An Employee: \n");
                
                break;

            case "Update An Employee Role":
                console.log("Now Updating An Employee Role: \n");
                
                break;

            case "View All Departments":
                console.log("Now Viewing All Departments: \n");
                
                break;

            case "Add A Department":
                console.log("Now Adding A Department: \n");
                
                break;

            case "View All Roles":
                console.log("Now Viewing View All Roles: \n");

                break;    

            case "Add A Role":
                console.log("Now Adding A Role: \n");
            
                break;    
                
            case "Delete A Department":
                console.log("Now Deleting A Department: \n");
            
                break;    

            case "Delete A Role":
                console.log("Now Deleting A Role: \n");
            
                break;    

            case "Delete An Employee":
                console.log("Now Deleting An Employee: \n");
            
                break;    

            case "View Department Budget":
                console.log("Now Viewing Department Budget: \n");
            
                break;    

            case "All Done":
                console.log("-----Signing Off... Goodbye!!!-----: \n");
                dbConnect.end();
                break;   

            default:
                console.log("Please Enter A Valid Selection!!");
            
        }
    });
}

//all the functions for the different selections
