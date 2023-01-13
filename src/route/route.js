const express = require('express')
const router = express.Router()
const chainController = require('../controller/chainController');
const chainModel = require('../model/chainModel')

router.get("/test-me",function(req,res){
    res.send("my first ever api!")
});


module.exports=router;