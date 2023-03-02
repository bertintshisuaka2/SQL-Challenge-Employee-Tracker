const mysql2 = require("mysql2");
const express = require('express');

//port where server will start running
const PORT = process.env.PORT || 3001;
const app = express();

//starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

//mysql connection
const dbConnect = mysql2.createConnection({
    host: 'localhost',

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'employeeTracker'
},
console.log("-----!!Now Connected To 'employeeTracker' Database!!-----")
);

module.exports = dbConnect;