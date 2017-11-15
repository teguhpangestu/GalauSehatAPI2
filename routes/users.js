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
    //res.render(req.body);
    Task.addUser(req.body, function(err, count){
        if (err){
            res.json(err);
            //console.log(err);
            //res.render('index', { title: err });
        } else {
            res.json(req.body);
            //console.log(err);
            //res.render('index', { title: 'Success' });
        }
    });
});




module.exports = router;
