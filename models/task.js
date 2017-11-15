var db = require('../dbconnection');
var Task = {
    getAllUsers: function(callback){
        return db.query("select * from users", callback);
    },
    getUserById: function(id, callback){
        return db.query("select * from users where id=?",[id], callback);
    }
};

module.exports = Task;