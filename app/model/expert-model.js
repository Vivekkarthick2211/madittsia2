const sql = require("./db.js");
var experts=function(expertregister){
    this.Firstname = expertregister.firstname ,
    this.Lastname = expertregister.lastname ,
    this.BasicQualification= expertregister.qualification ,
    this.mailid = expertregister.email ,
    this.Positionheld = expertregister.positionheld , 
    this.Yearofexperience=expertregister.yearofexp ,
    this.Expertisearea = expertregister.expertisearea ,
    this.Contactdetail=  expertregister.contactdetail 
}


experts.create=(expertdetails,result)=>{
    sql.query(`insert into expert SET ?`,expertdetails,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }   
          console.log("created wishlist ", { id: res.insertId, ...expertdetails });
        // console.log(res)
         result(null, { id: res.insertId, ...expertdetails });
       });
}
experts.getexperts=(result)=>{
    sql.query(`select * from expert`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
} 
experts.getexpertslist=(result)=>{
    sql.query(`select * from expertisearea`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
} 

module.exports=experts;