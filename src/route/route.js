const express = require('express')
const router = express.Router()
const chainController = require('../controller/chainController');
// const chainModel = require('../model/chainModel')

router.get("/test-me",(req,res)=>{
    res.send("my first ever api!")
});

router.get("/assets",chainController.getBlockChain)

router.all('/*', (req, res) => {
    res.status(400).send({ status: false, message: 'Invalid HTTP Request' });
});

module.exports=router;