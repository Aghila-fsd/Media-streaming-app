const express=require('express');
var mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const router = express.Router()
const cors =require('cors');
const bodyparser=require('body-parser');
const app=express();
const jwt=require('jsonwebtoken');

const Signupdata=require('./src/model/signupData');
const Vediodata = require('./src/model/VedioData');
const port =process.env.PORT || 3000;

app.use(express.static('./Frontend'))
app.use(cors());
app.use(bodyparser.json());


//verify super admin
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

//verify admin
  function adminverifyToken(req, res, next) {
    
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'adminKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//verify user
function userverifyToken(req, res, next) {
    
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'userKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }


app.post('/signup',async (req,res)=>{

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");
   
       try{
           
           const user=req.body.user.email;
           
           const username= await Signupdata.findOne({email:user});
           
           if(username){
              return res.send({mesg:false})
           }else{
            //    const pwd=req.body.user.password;
            //    const paswd= await Signupdata.findOne({password:pwd});
            //    if(paswd){
            //     return res.send({mesg:false})
            //    }
               
                   var item={
                       name:req.body.user.name,
                       id:req.body.user.id,
                       qualification:req.body.user.qualification,
                       email:req.body.user.email,
                       password:req.body.user.password
                   }
                   var sign= Signupdata(item);
                   sign.save();
                   return res.send({mesg:true});
               
           }
           
       }catch(error){
        return res.send({mesg:false})
       }
   
   })
//login handling

app.post('/login',async (req,res)=>{
    user="sadmin";
    password="1234";
    try {
       
    let userData=req.body;
    
    const use=userData.uname;
    const pas=userData.password;
    if(userData.uname=="sadmin"&&userData.password=="1234"){
       
       let payload={subject:user+password}
        let token=jwt.sign(payload,'secretKey');
        
        return res.send({mesg:token,role:'sadmin'});
    }
    const username= await Signupdata.findOne({email:use});
    if(username.id=="user"){
        if(username.password==pas){
            let payload={subject:user+password}
            let usertoken=jwt.sign(payload,'userKey');
            let name=username.name;
            return res.send({mesg:usertoken,role:'user',nam:name});
            
        }
    }
    if(username.id=="admin"){
        if(username.password==pas){
            let payload={subject:user+password}
            let usertoken=jwt.sign(payload,'adminKey');
            let name=username.name;
            return res.send({mesg:usertoken,role:'admin',nam:name});
        }
    }
    
    else{
       return res.send({mesg:"notfound"});
    }
    
}
catch(error){
    return res.send({mesg:"notfound"});
   }
})
//getting vedios
app.get('/newvedio',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");

  Vediodata.find()
  .then((vedios)=>{
      res.send(vedios);
  })
})
//getting single vedio
app.get('/newvedios/:id',(req,res)=>{
  const id=req.params.id;
  
  Vediodata.findOne({"_id":id})
  .then((vedio)=>{
      res.send(vedio);
  })
})
//Adding new vedio
const videoStorage = multer.diskStorage({
  destination: 'videos', // Destination to store video 
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
      fileSize: 10000000   // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
          return cb(new Error('Please upload a Video'))
      }
      cb(undefined, true)
  }
})

app.post('/newvedio', videoUpload.single('video'), verifyToken,(req, res) => {
  res.send(req.file)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })


    
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");


  var post={
      user:req.body.user,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      post:req.body.post,
      vedio:req.body.vedio
  }
  
  var vedios=new Vediodata(post)
  vedios.save()
  res.send();
})
//adding new post by admin
app.post('/adminvedio',adminverifyToken,(req,res)=>{
  
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");


  var post={
      user:req.body.user,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      post:req.body.post,
      vedio:req.body.vedio
  }
  
  var vedios=new Vediodata(post)
  vedios.save()
  res.send();
})
//deleting vedio
app.delete('/delete/:id',(req,res)=>{
  id=req.params.id;
  Vediodata.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false})
  .then(()=>{
      res.send();
  })
})



// adding user vedios to db
app.post('/uservedio',userverifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");


  var post={
      user:req.body.user,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
     
      vedio:req.body.vedio
  }
  
  var vedios=new Uservediodata(post)
  vedios.save()
  res.send();
})
//getting vedio for editing
app.get('/edit/:id',(req,res)=>{
  const id=req.params.id;
  
  Vediodata.findOne({"_id":id})
  .then((vedio)=>{
      res.send(vedio);
  })
})
//updating vedios
app.put('/updatevedio',(req,res)=>{
  id=req.body._id;
  Vediodata.findByIdAndUpdate({_id:id},{$set:{
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      post:req.body.post,
      vedio:req.body.vedio
  }},{new:true, useFindAndModify:false})
  .then(()=>{
      res.send();
  })
})


// getting user vedios for approval

app.get('/uservedios',function(req,res){
  
  Uservediodata.find()
              .then(function(posts){
                  res.send(posts);})
              });

//adding new category

app.post('/categoty',verifyToken,async (req,res)=>{

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");
     try{
         
         const newcat=req.body.category;
         
         const category= await Category.findOne({category:newcat});
         
         if(category){
            return res.send({mesg:false})
         }else{

          var cat={
              category:req.body.category
              
          }
          
          var cats=new Category(cat)
          cats.save()
          return res.send({mesg:true});    
         }
         
     }catch(error){
      return res.send({mesg:false});
     }
 
  
})
//deleting category
app.delete('/deletecat/:id',verifyToken,(req,res)=>{
  id=req.params.id;
  Category.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false})
  .then(()=>{
      res.send();
  })
})
//getting category

app.get('/cat',(req,res)=>{
  Category.find()
  .then((cats)=>{
      res.send(cats);
  })
})
// deleting user vedio after approve/reject


app.delete('/deleteUserVedio/:id',(req,res)=>{
  id=req.params.id;
  Uservediodata.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false})
  .then(()=>{
      res.send();
  })
})


//deleting vedio
app.delete('/delete/:id',(req,res)=>{
  id=req.params.id;
  vediodata.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false})
  .then(()=>{
      res.send();
  })
})
 
//contactus

app.post('/api/contactus',function(req,res){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET, POST, PUT,DELETE");
    
        
             
                 var user={
                     name:req.body.name,
                   
                     email:req.body.email,
                     message:req.body.message
                 }
                 var mesg= new Contactdata(user);
                 mesg.save();
                 res.send({mesg:true});
             });


app.listen(port,()=>{console.log("server ready at"+port)});