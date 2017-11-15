//[code language = "javascript"]  
var mysql = require('mysql');  
var connection = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    password: 'Password1',  
    database: 'galausehatapi2'  
});  
module.exports = connection;  
//[/code] 