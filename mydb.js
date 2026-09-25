var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'iop', // Replace with your database username
    password: 'iop2020', // Replace with your database password
    database: 'iopstaff' // // Replace with your database Name
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO facebook";
});
module.exports = conn;