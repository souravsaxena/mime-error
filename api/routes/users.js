const express = require('express');

const mongoose = require('mongoose');
const app = express();
require('../model/testquery2');
require('../model/testquery');
const router = express.Router();

const Contact = mongoose.model('contact');
const User = mongoose.model('users');

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
    const subject=req.body.subject
    const fname=req.body.fname
    const lname=req.body.lname
    
    
    new Contact({
        subject:subject,
        lname:lname,
        fname:fname
        
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

//Adds

router.post('/adds',function(req,res){
    const subject=req.body.subject
    const fname=req.body.fname
    const lname=req.body.lname
    
    
    new User({
        subject:subject,
        lname:lname,
        fname:fname
        
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
        _id :id,
        fname : req.body.fname,
        lname : req.body.lname,
        subject : req.body.subject
        
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
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})



/////////////////////////////////////////////////////signin//////////////////////////////////////////////////////
router.post('/signin',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    UserRegister.findOne({
        email:email
    },(err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log(user);
            if(user == null ){
              res.json({message:"Check your Credentials"});
            }
            else if (user.password != password){
                res.json({message:"Check your password"});
            }
            else{
                res.json(user);
            }
        }
    })
})
/////////////////////getdatabyid/////////////////////////////////////
router.get('/getbyid/:id',(req,res)=>{
    let id = req.params.id;
    UserRegister.findOne({
        _id:id
    },(err,user)=>
    {
        if(err){
            console.log(err);
        }
        else{
            if(user==null)
            {
                res.json({message:"Does not exist"});
            }
            else{
                res.json(user);
            }
        }
    })
})
module.exports = router;