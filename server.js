const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const app = express();
const {v4 : uuidv4} = require('uuid')
var otpGenerator = require('otp-generator')
// const multer = require('multer');

app.use(cors());
var fileupload = require("express-fileupload");
var multer = require('multer');
const upload = multer({dest:'uploads/'});
var fs = require('fs');
app.use(fileupload());

app.use(express.static('image'))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
var otp=otpGenerator.generate(6, { upperCase: false, specialChars: false });
console.log(otp)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jeevan & Vivek's application." });
});
const userId = uuidv4()
console.log(userId)
//var upload = multer({ storage: storage }).single("demo_image");
// const upload = multer({
//   storage: storage,
//   limits : {fileSize : 1000000}
// });
// var storage = multer.diskStorage({   
//   destination: function(req, file, cb) { 
//      cb(null, './uploads');    
//   }, 
//   filename: function (req, file, cb) { 
//      cb(null , file.originalname);   
//   }
// });

app.post("/images",(req, res) =>{
  try {
    const file=req.files.file
    // file.push()
    // file.mv('./upload')
    var images=file
    console.log(__dirname)
    images.mv(__dirname,'\\upload',(err,resu)=>{
      if(err){
        console.log(err)
        
      }
      res.send(resu)
    })
    res.send(file);
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});




app.post("/image", (req, res) => {
  upload(req, res, (err) => {
   if(err) {
     res.status(400).send("Something went wrong!");
   }

   res.send(req.files.file);
 });
});

require('./app/routes/router_img.js')(app)


require("./app/routes/routes.js")(app);

app.use('/img',express.static('D:\\madittsia_images'))
// set port, listen for requests
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  process.setMaxListeners(0);
  console.log(`Server is running on port ${PORT}.`);
});
var imageRouter = require('./app/routes/image-routes.js');
const file = require("./app/model/imageupload-model.js");
app.use('/', imageRouter);

console.log("host",PORT)

