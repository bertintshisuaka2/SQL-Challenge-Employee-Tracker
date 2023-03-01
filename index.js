const inquirer = require("inquirer");
const dbConnect = require("./db/connection");
require("console.table");


//first connecting to the database, and then starting the question prompts
dbConnect.connect(err => {
    if (err) throw err;
    console.log("Employee Tracker Database Connected")

    console.log(`
    ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ 
  |___|___|___|___|___|___|___|___|___|___|___|___|
                                                    
     _____           _                             
    |   __|_____ ___| |___ _ _ ___ ___             
    |   __|     | . | | . | | | -_| -_|            
    |_____|_|_|_|  _|_|___|_  |___|___|            
                |_|       |___|                    
                                                   
     _____             _                           
    |_   _|___ ___ ___| |_ ___ ___                 
      | | |  _| .'|  _| '_| -_|  _|                
      |_| |_| |__,|___|_,_|___|_|                  
                                           
 ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___   
|___|___|___|___|___|___|___|___|___|___|___|___|
       `)

       startEmployeeTracker();
});

//question prompts
function startEmployeeTracker() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "Select which action you would like to perform today: ",
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
            "All Done \n" +
            "-----------------------------"
        ]
    }])
    .then(function ({action}) {
        switch (action) {
            case "View All Employess":
                console.log("Now Viewing All Employess: \n");
                viewingAllEmployees();
                break;

            case "View All Employees By Manager":
                console.log("Now Viewing All Employees By Manager: \n");
                employeesByManager();
                break;

            case "View All Employees By Department":
                console.log("Now Viewing All Employess By Department: \n");
                employeesByDepartment();
                break;

            case "Add An Employee":
                console.log("Now Adding An Employee: \n");
                addingEmployee();
                break;

            case "Update An Employee Role":
                console.log("Now Updating An Employee Role: \n");
                updateEmployeeRole();
                break;

            case "View All Departments":
                console.log("Now Viewing All Departments: \n");
                viewAllDepartments();
                break;

            case "Add A Department":
                console.log("Now Adding A Department: \n");
                addDepartment();
                break;

            case "View All Roles":
                console.log("Now Viewing View All Roles: \n");
                viewAllRoles();
                break;    

            case "Add A Role":
                console.log("Now Adding A Role: \n");
                addRole();
                break;    
                
            case "Delete A Department":
                console.log("Now Deleting A Department: \n");
                deleteDepartment();
                break;    

            case "Delete A Role":
                console.log("Now Deleting A Role: \n");
                deleteRole();
                break;    

            case "Delete An Employee":
                console.log("Now Deleting An Employee: \n");
                deleteEmployee();               
                break;    

            case "View Department Budget":
                console.log("Now Viewing Department Budget: \n");
                departmentBudget();
                break;    

            case "All Done":
                console.log("-----Signing Off... Goodbye!!!-----: \n");
                dbConnect.end();
                break;   

            default:
                console.log("Please Enter A Valid Selection!!");
                startEmployeeTracker();
        }
    });
}


/**
 * Functions for all the different selections from the user
 */

//viewing employees by their managers
function employeesByManager() {

}

//viewing employees by their department
function employeesByDepartment() {
    
}

//adding an employee
function addingEmployee() {
    
}

//updating an employee's role
function updateEmployeeRole() {
    
}

//viewing all departments
function viewAllDepartments() {
    
}

//adding a department
function addDepartment() {

}

function viewAllRoles() {
    
}

function addRole() {
    
}

function deleteDepartment() {
    
}

function deleteRole() {
    
}

function deleteEmployee() {
    
}

function departmentBudget() {
    
}
