const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/media?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
//mongoose.connect('mongodb+srv://userone:userone@sarathfiles.1yent.mongodb.net/TECHBLOG?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});

const Schema = mongoose.Schema;
const VedioSchema=new Schema({
    user:String,
    title:String,
    author:String,
    post:String,
    category:String,
    Vedio:String, 
});
var Vediodata=mongoose.model('vediodata',VedioSchema);
module.exports=Vediodata;