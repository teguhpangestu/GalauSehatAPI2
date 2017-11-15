var db = require('../dbconnection');
var Task = {
    getAllUsers: function(callback){
        return db.query("select * from users", callback);
    },
    getUserById: function(id, callback){
        return db.query("select * from users where id=?",[id], callback);
    },
    addUser: function(user, callback){
        return db.query("insert into users (FirstName, LastName) values (?,?)", [user.FirstName, user.LastName], callback );        
    },
    checkUserExists: function(user, callback){
        return db.query("select count(*) as result from users where FirstName=? and LastName=?",[user.FirstName, user.LastName], callback);
    }
};




module.exports = Task;