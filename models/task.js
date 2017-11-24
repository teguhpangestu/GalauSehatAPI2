var db = require('../dbconnection');
var Task = {
    getAllUsers: function(callback){
        return db.query("select * from users", callback);
    },
    getUserById: function(id, callback){
        return db.query("select * from users where id=?",[id], callback);
    },
    addUser: function(user, callback){
        return db.query("insert into users (firstname, lastname, email, username, password, address, photourl) values (?,?,?,?,?,?,?)", 
        [user.firstname, user.lastname, user.email, user.username, user.password, user.address, user.photourl], callback );        
    },
    checkUserExists: function(user, callback){
        return db.query("select count(*) as result from users where firstname=? and lastname=?",[user.firstname, user.lastname], callback);
    },
    deleteUser: function(id, callback){
        return db.query("delete from users where Id=?", [id], callback);
    },
    updateUser: function(id, user, callback){
        return db.query("update users set firstname=?, lastname=? where Id=?",[user.firstname, user.lastname, id],callback);
    },
    
};




module.exports = Task;