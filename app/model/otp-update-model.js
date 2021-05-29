const Mail = require("nodemailer/lib/mailer");
const sql = require("./db.js");

var upd_otp=function(otp){

    this.password= otp.password['encryptedData']
}

upd_otp.updateotp=(mail,otp,result)=>{

    console.log("odels",otp)
    console.log(mail)
    sql.query(`update user_register set otp='${otp}' where email='${mail}'`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,otp)
    })
}
upd_otp.get_otp=(mail,result)=>{
    console.log(mail)
    
    sql.query(`select otp from user_register where email='${mail}';`,(err,res)=>{
        
        if(err){
            console.log(err)
            result(null,err)
        }
        // if(res['otp']==otp){
        //     result(null,res) 
        // }
        result(null,res)
        
    })
}

upd_otp.update_pass=(email,chg_pass,result)=>{
    sql.query(`update user_register set password='${chg_pass['password']}' where email='${email}'`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)

    })
}





module.exports=upd_otp;