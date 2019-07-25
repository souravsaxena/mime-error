const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const UserRegister=require('../model/userModel');
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
    const psw=req.body.psw
    const email=req.body.email
    const pswrepeat=req.body.pswrepeat
    
    new User({
        psw:psw,
        email:email,
        pswrepeat:pswrepeat
        
        
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
        psw : req.body.psw,
        email : req.body.email,
        pswrepeat : req.body.pswrepeat,
        
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
router.post('/signIn',(req,res)=>{
    const email = req.body.email;
    const psw = req.body.psw;
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
            else if (user.psw != psw){
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


router.post('/addRegister',function(req,res){
    const psw=req.body.psw
    const email=req.body.email
    const pswrepeat=req.body.pswrepeat
   
    new UserRegister({
        psw:psw,
        
        email:email,
        pswrepeat:pswrepeat
        
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



/////////////////////////////////////////////////////signin//////////////////////////////////////////////////////

module.exports = router;