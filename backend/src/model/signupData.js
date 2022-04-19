//mongoose.connect('mongodb://localhost:27017/mediastreamapp');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/media?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
//mongoose.connect('mongodb+srv://userone:userone@sarathfiles.1yent.mongodb.net/TECHBLOG?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});

//mongoose.connect('mongodb+srv://userone:userone@sarathfiles.1yent.mongodb.net/TECHBLOG?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});


const Schema = mongoose.Schema;
const SignupSchema=new Schema({
    name:String,
    id:String,
    qualification:String,
    email:String,
    password:String
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
