var otpupd=require('../model/otp-update-model')
var otpGenerator = require('otp-generator')
var nodemailer = require('nodemailer');
const crypto=require('crypto');
const key="a1b5c8d0e4f2g3h7i5j0k1l4m6n9f0b3";
const iv="a4b8c6d2e0f5g7f5";
function encrypt(text) {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }
exports.register_opt=(req,res)=>{
    
    // console.log(otpnum)
    var opt=otpGenerator.generate(6, { upperCase: false, specialChars: false })
    
    console.log("otppppp",opt)
    otpupd.updateotp(req.params.mail,opt,(err,data)=>{
      console.log(req.params.mail)
        // console.log(otpnum)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ddinu1100@gmail.com',
              pass: 'jeevankumar@123'
            }
          });
        
          var mailOptions = {
            from: 'ddinu1100@gmail.com',
            to: req.params.mail,
            subject: 'OTP REFERENCE',
            text:'if you change your password type the OTP on your app',
            html: '<h1>'+data+'</h1>'

          };
          console.log(mailOptions.to)
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
        
        
        if(err){
            console.log(err)
            res.send({
                status:400,
                msg:err
            })
        }
        res.send({
            status:200,
            msg:data
        })
    })
}

exports.get_otp=(req,res)=>{
    otpupd.get_otp(req.params.mail,(err,data)=>{
        console.log(req.params.mail)
        if(err){
            res.send({
                status:400,
                message:"check your OTP"
            })
        }
        res.send({
            status:200,
            message:data
        
    })
})
}

exports.update_password=(req,res)=>{
  var pass=new otpupd({
    password:encrypt(req.body.password)
  })

  otpupd.update_pass(req.params.email,pass,(err,data)=>{
    if(err){
      console.log(err)
      res.send({
        status:400,
        msg:err
      })
    }
    res.send({
      status:200,
      msg:data
    })
  })
}

