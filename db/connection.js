const mysql2 = require("mysql2");

//mysql connection
const dbConnect = mysql2.createConnection({
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

module.exports = dbConnect;