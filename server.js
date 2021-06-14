const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const app = express();
const {v4 : uuidv4} = require('uuid')
var otpGenerator = require('otp-generator')
// const multer = require('multer');

app.use(cors());
var fileupload = require("express-fileupload");

var fs = require('fs');

app.use(fileupload());

app.use(express.static('image'))

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jeevan & Vivek's application." });
});


require("./app/routes/routes.js")(app);

app.use('/img',express.static('D:\\madittsia_images'))
app.use('/img',express.static('D:\\madittsia_images\\service_logo\\logo'))
// set port, listen for requests
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  process.setMaxListeners(0);
  console.log(`Server is running on port ${PORT}.`);
});



console.log("host",PORT)

