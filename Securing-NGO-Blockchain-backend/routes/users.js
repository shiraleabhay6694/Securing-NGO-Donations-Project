var express = require('express');
var router = express.Router();
const User = require('../models/user');
const User_Trans = require('../models/user_transactions');

/* GET users listing. */
router.get('/', (req,res,next)=>{
  User.find({})
        .then((users)=>{
            res.statusCode=200,
            res.setHeader('Content-Type','application/json');
            res.json(users);
        },(err)=>next(err))
            .catch((err)=>next(err));
});

router.post('/signUp',(req,res,next)=>{
  User.create(req.body)
    .then((result)=>{
      res.statusCode = 200,
      res.json({'result':'success'});
    },(err)=>next(err))
      .catch((err)=>next(err));
});

router.post('/login',(req,res,next)=>{
  User.findOne(req.body)
    .then((result)=>{
      //console.log(result);
      if(result){
        res.statusCode = 200;
        res.json(result);
      }else{
        res.statusCode = 400;
        res.json({"result":"Invalid credentials"})
      }
    },(err)=>next(err))
      .catch((err)=>next(err));
});

router.get('/logout',(req,res,next)=>{
  res.statusCode = 200;
  res.json({'result':'Successfully logged out'});
});

router.get('/transaction',(req,res,next)=>{
  User_Trans.find({user:req.query.user})
        .then((trans)=>{
            res.statusCode=200,
            res.setHeader('Content-Type','application/json');
            res.json(trans);
        },(err)=>next(err))
            .catch((err)=>next(err));
})


router.post('/transaction',(req,res,next)=>{
  User_Trans.create(req.body)
    .then((result)=>{
      res.statusCode = 200,
      res.json({'result':'success'});
    },(err)=>next(err))
      .catch((err)=>next(err));
});


module.exports = router;

