
const Customer = require("../model/user_login-model");
const crypto = require('crypto');
const key="a1b5c8d0e4f2g3h7i5j0k1l4m6n9f0b3";
var iv="a4b8c6d2e0f5g7f5";

 function decrypt(text) {
  // console.log("ji",text);
  let iv = "a4b8c6d2e0f5g7f5";/* Buffer.from(text.iv, 'hex'); */
  let encryptedText = Buffer.from(text.password, 'hex');
  console.log(iv);
//console.log(encryptedText);
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 // console.log(key);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  console.log(decrypted);
  return decrypted.toString();
 }


exports.findOne = (req, res) => {
    //console.log("response",res)
    //console.log("req",req)
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        // var resco=208
        if (err.kind === "not_found") {
           console.log(err)
          res.status(404).send({
           // message: `Not found Customer with id ${req.params.customerId}  ${res.statusCode} .`
             status:404,
             error:'Not found'
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId +res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
       data:
           decrypt(data)});
          
          
           console.log("before encryption",data);
      console.log("before encryption",data);
      console.log("after encryption",decrypt(data));
   }); 
  };