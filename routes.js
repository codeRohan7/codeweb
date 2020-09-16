const path=require('path');
 const mongoose = require('mongoose');
//  const feedbackModel =require('./mdata');
//  var router=express.Router();
//  var feedback=feedbackModel.find({});
// // data={
// //     name:"rohan kumar",
// //     age:"22"
// // }

// // mongoose.connect('./config/keys.js')
// module.exports=(app)=>{

// // app.get('/home',(req,res)=>{
// //     res.send('hello this is homepage');     //hmne kuch routes bnae h jo app use krra h ab hum inkio export kremge index.js pr  
    
// // }),

// //     app.get('/views/feedback',(req,res)=>{

// //     res.render("feedback")
// // }),

// // app.get('/',(req,res)=>{
// //     res.render('home',{status:data})
// // }),
// // app.get('/profile/:id',(req,res)=>{               //for dynamic parameter
// //     res.send("you requested dynamic profile no." + req.params.id)
// // })}``

// router.post("/",function(req,res,next){

    
// })
// module.exports=router;

var express=require('express');
var feedModel=require('./modules/feedback');
var router=express.Router();
var feed=feedModel.find({}); //to fetch data we use find



router.post('/', (req,res) => {
	console.log("Form submitted here !!!");
	console.log("DB me save kra lio idhar");
	feedbackdetails=new feedModel({
		name: req.body.name,
	   email:req.body.email,
		Message: req.body.Message, 
		number:req.body.number
	   }).save(function(err,doc){
		   if (err)res.json(err)
		   else res.send('success')
	   
	   });
	
	return res.render('feedback');
});

module.exports = router;

/*
module.exports=(app)=>{
    app.get('/',function(req,res,next){
    feed.exec(function(err,data){
        if(err) throw err;
        res.render('home',{title:'Express'});
    })
        
     })
     
    };

     

module.exports=(app)=>{
 app.post('/views/feedback.ejs',function(req,res,next){

	feedbackdetails=new feedModel({
	 name: req.body.name,
	email:req.body.email,
	 Message: req.body.Message, 
	 number:req.body.number
	}).save(function(err,doc){
		if (err)res.json(err)
		else res.send('success')
	
	});
 
	feedback.exec(function(err,data){
		if(err) throw err;
		res.render('home',{title:'Express'});
	});
})};
*/