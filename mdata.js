const mongoose = require('mongoose');
mongoose.connect('mongourl:"mongodb+srv://Rohankumar:1234@cluster0-mcovw.mongodb.net/test?retryWrites=true&w=majority"'),{useNewUrlParser:true}
var feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String
})

var feedbackModel =mongoose.model('Feedback',feedbackSchema)
module.exports(feedbackModel);
var feedback =new feedbackModel({
    name:'rohan',
    email:'singhrohan@gmial.com',
    phone:672816
    
});

    console.log(feedback)