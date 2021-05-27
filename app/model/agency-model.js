const sql = require("./db.js");
var agency=function(agencyregister){
    this.agencyname = agencyregister.agencyname ,
    this.ownerofagency = agencyregister.ownerofagency ,
    this.providingservices= agencyregister.providingservices ,
    this.mailid = agencyregister.mailid ,
    this.address = agencyregister.address , 
    this.phonenumber =agencyregister.phonenumber 
    /* this.Expertisearea = agencyregister.expertisearea ,
    this.Contactdetail=  agencyregister.contactdetail  */
}
agency.create=(agencydetails,result)=>{
    sql.query(`insert into agency SET ?`,agencydetails,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }   
          console.log("created wishlist ", { id: res.insertId, ...agencydetails });
        // console.log(res)
         result(null, { id: res.insertId, ...agencydetails });
       });
}
agency.getagency=(result)=>{
    sql.query(`select * from agency`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
} 
/* experts.getexpertslist=(result)=>{
    sql.query(`select * from expertisearea`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
}  */

module.exports=agency;