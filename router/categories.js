const {Router} = require('express');
const {Videos, Categories} = require('../models');

const router = new Router();


router.post('/create', function(req, res) {
    let entity = req.body;
    Categories.insertMany(entity, function(err, result) {
        if(err) {
            res.json({success: false, err: err, data: null, message: err.message})
        }
        else {
            res.json({success: true, err: null, data: result, message: null})
        }
    })
})


router.get('/list', function(req, res) {
    Categories.find({}, function(err, result) {
        if(err) {
            res.json({success: false, err: err, data: null, message: err.message})
        }
        else {
            res.json({success: true, err: null, data: result, message: null})
        }
    })
})
module.exports = router;
