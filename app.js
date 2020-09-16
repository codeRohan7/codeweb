// // const getsum =require("./test");
// // // console.log(getsum(2,3))
// // console.log(getsum.sum(2,3))
// // console.log(getsum.mul(2,3)) 

// var express = require("express")
// var path = require("path")
// var bodyparser = require("body-parser")
// var mongodb = require("mongodb")
// const app=express()             //using express as app

// app.use(bodyparser.urlencoded({extended:false}));
// app.post('/post-feedback',function(req,res){

//     const feedbackSchema = new feedback({
//          name:String
// })});
// feedback.save()


// const http=require('http');

// // http.createServer((req,res)=>{
// //     res.write("hello world")
// // res.end()
// // }).listen(3000)

// //serving static files
// app.use(express.static("public"))
// const port =3000

// //importing routes
// const routes =require("./routes")(app);
// app.listen(port,()=>{

// console.log("server is running")    
// })
//  app.set('view engine','ejs')
  
// const mongoose = require('mongoose'); 
// mongoose.connect('mongodb://localhost:27017/gfg'); 
// var db=mongoose.connection; 
// db.on('error', console.log.bind(console, "connection error")); 
// db.once('open', function(callback){ 
//     console.log("connection succeeded"); 
// }) 



// app.post('/sign_up', function(req,res){ 
//     var name = req.body.name; 
//     var email =req.body.email; 
//     var Message = req.body.Message; 
//     var number =req.body.number; 
  
//     var data = { 
//         "name": name, 
//         "email":email, 
//         "number":number ,
//         "Message":Message
//     } 
// db.collection('details').insertOne(data,function(err, collection){ 
//         if (err) throw err; 
//         console.log("Record inserted Successfully"); 
              
//     }); 
          
//     return res.send(json({
//         message:"feedback sent Successfully"
//     })); 
// }) 

var ejs = require('ejs');
var path = require('path');
var express=require("express"); 
var bodyParser=require("body-parser"); 
var cookieparser=require("cookie-parser"); 
var logger=require("morgan"); 
var routes= require('./routes');
var app=express();
  
  

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');  

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use('/feedback', routes);
  

app.get('/',function(req,res){ 
	res.set({ 
		'Access-control-Allow-Origin': '*'
    }); 
	return res.render('home'); 
});

const server = app.listen(3000, () => {
	console.log("server listening at port 3000"); 
});
