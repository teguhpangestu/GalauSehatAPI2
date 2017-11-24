var express = require('express');
var router = express.Router();
var Task = require('../models/task');
/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  //res.send('respond with a resource');
  if (req.params.id) {  
    Task.getUserById(req.params.id, function(err, rows) {  
        if (err) {  
            res.status(500).send(err);  
        } else {  
            if (Object.keys(rows).length == 0){
                res.status(404).send("User not found");
            } else {
                res.status(200).send(rows);
            }
              
        }  
    });  
} else {  
    Task.getAllUsers(function(err, rows) {  
        if (err) {  
            res.status(500).send(err); 
        } else {  
            if (Object.keys(rows).length == 0){
                res.status(404).send("User list not found");
            } else {
                res.status(200).send(rows);
            }
              
        }  
    });  
}  
}); 

router.get('/login', function(req, res, next){
    Task.userLogin(re)
});

router.post('/', function(req, res, next){
    if (Object.keys(req.body).length !== 0){      

        Task.checkUserExists(req.body, function(err, data){
            if (err){
                res.status(500).send(err);
            } else {                      
                if (data[0].result == '0'){ //user not exists
                    
                    // encrypt password
                    var bcrypt = require('bcrypt');
                    bcrypt.genSalt(10, function(err, salt){
                        bcrypt.hash(req.body.password, salt, function(err, hash){
                            req.body.password = hash;
                            //res.status(200).send(hash);
                            Task.addUser(req.body, function(err, count){
                                if (err){
                                    res.status(500).send(err);                        
                                } else {
                                    res.status(200).send("User inserted")                                                  
                                }
                            });
                        })
                    });
                } else {
                    res.status(409).send("User exists") //409 - for conflict/exists                    
                }
            }     
        });
    } else {
        res.status(500).send("req.body is empty");
    }
    
    
});

router.delete('/:id', function(req, res, next){
    Task.deleteUser(req.params.id, function(err, data){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

router.put('/:id', function(req, res, next){
    Task.updateUser(req.params.id, req.body, function(err, data){
        if (err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});




module.exports = router;
