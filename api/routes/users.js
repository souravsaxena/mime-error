const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/add',function(req,res){
    const email=req.body.email
    const password=req.body.password
    const repeatpassword=req.body.repeatpassword
    new User({
        email:email,
        password:password,
        repeatpassword:repeatpassword
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        email : req.body.email,
        password : req.body.password,
        repeatpassword:req.body.repeatpassword
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:email',(req,res)=>{
    let email = req.params.email;
    User.findById(email, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:email',(req,res)=>{
    let email=req.params.email
    User.findOneAndRemove(email,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;