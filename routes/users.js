var express = require('express');
var router = express.Router();
var Task = require('../models/task');
/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  //res.send('respond with a resource');
  if (req.params.id) {  
    Task.getUserById(req.params.id, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
} else {  
    Task.getAllUsers(function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
}  
}); 

router.post('/', function(req, res, next){
    if (Object.keys(req.body).length !== 0){
        Task.checkUserExists(req.body, function(err, data){
            if (err){
                res.json(err);
            } else {                      
                if (data[0].result == '0'){ //user not exists
                    //res.json("Ok");
                    Task.addUser(req.body, function(err, count){
                        if (err){
                            res.json(err);                        
                        } else {
                            res.status(200).send("User inserted")
                            //res.json("User inserted");                        
                        }
                    });
                } else {
                    res.status(500).send("User exists")
                    //res.json("User already exists");
                }
            }     
        });
    } else {
        res.json("req.body is empty");
    }
    
    
});

router.delete('/:id', function(req, res, next){
    Task.deleteUser(req.params.id, function(err, data){
        if (err){
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

router.put('/:id', function(req, res, next){
    Task.updateUser(req.params.id, req.body, function(err, data){
        if (err){
            res.json(err);
        } else {
            res.json(data);
        }
    });
});




module.exports = router;
