const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/media?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
//mongoose.connect('mongodb+srv://userone:userone@sarathfiles.1yent.mongodb.net/TECHBLOG?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});

const Schema = mongoose.Schema;
const UservedioSchema=new Schema({
    user:String,
    title:String,
    author:String,
    post:String,
    category:String,
    vedio:String,
   
});
var Uservediodata=mongoose.model('uservediodata',UservedioSchema);
module.exports=Uservediodata;