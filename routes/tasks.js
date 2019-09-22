var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://hamza:hamza@cluster0-shard-00-00-hdmgm.mongodb.net:27017,cluster0-shard-00-01-hdmgm.mongodb.net:27017,cluster0-shard-00-02-hdmgm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',['tasks']);

router.get('/tasks',function(req, res, next){
    db.tasks.find(function(err,tasks){
        if(err){
           res.send(err);

        }
        res.json(tasks);
    });

});

router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;
