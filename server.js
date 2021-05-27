const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const app = express();
const {v4 : uuidv4} = require('uuid')

app.use(cors());
var fileupload = require("express-fileupload");
app.use(fileupload());

app.use(express.static('image'))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jeevan & Vivek's application." });
});
const userId = uuidv4()
console.log(userId)

require("./app/routes/routes.js")(app);
app.use('/img',express.static('D:\\madittsia_images'))
// set port, listen for requests
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  process.setMaxListeners(0);
  console.log(`Server is running on port ${PORT}.`);
});


console.log("host",PORT)

