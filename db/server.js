const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3300,

    // Your username
    user: 'root',

    // Your password
    password: 'PlacePassWordHere',
    database: 'employeeTracker'
},
console.log("-----!!Now Connected To 'employeeTracker' Database!!-----")
);