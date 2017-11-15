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



module.exports = router;
