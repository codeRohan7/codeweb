const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/app').then(console.log('db connected')),{useNewUrlParser:true}
// mongoose.connect('mongourl:"mongodb+srv://Rohankumar:1234@cluster0-mcovw.mongodb.net/test?retryWrites=true&w=majority"'),{ useNewUrlParser:true}
var conn=mongoose.connection;
var feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    Message:String
})

var feedbackModel =mongoose.model('Feedback',feedbackSchema);
module.exports=feedbackModel;
