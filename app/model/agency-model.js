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

/* udyam_reg.insert_udy=(udayReg,result)=>{
    sql.query(`insert into udyam_register set ?`,udayReg,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
    var read_mode=false;
    sql.query(`insert into notification_tab(userid,message,read_mode) values('${udayReg['mailid']}','${udayReg['mailid']} joined on udyam',${read_mode})`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        // result(null,res)
    })
} */
agency.update=(id,upd,result)=>{
    sql.query(`update agency set providingservices='${upd['providingservices']}',address='${upd['address']}',phonenumber='${upd['phonenumber']}' where agencyId='${id}';`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
    })
}

agency.create=(agencydetails,result)=>{
    sql.query(`select agencyname from agency where agencyname ='${agencydetails['agencyname']}' AND providingservices='${agencydetails['providingservices']}' AND mailid='${agencydetails['mailid']}' AND address='${agencydetails['address']}' AND phonenumber='${agencydetails['phonenumber']}'`,(err,res)=>{
        if (err){
            console.log(err)
            result(null,err) 
        }
       const mm=res
        console.log("fgdfgf",mm)
        var lenofmm=mm.length
        console.log(lenofmm)
        if (lenofmm==0){
            console.log("kiiiiii")
            sql.query(`insert into agency SET ?`,agencydetails,(err,res)=>{
                if(err){
                   console.log(err)
                    result(null,err) 
                }   
                console.log("created agency ", { id: res.insertId, ...agencydetails });
                // console.log(res)
                 result(null, { id: res.insertId, ...agencydetails });
               }); 
        }
        else{
            result(null,res)
        } 
      //  result(null,res)
        
    })
       /* 
    /* 
    sql.query(`insert into agency SET ?`,agencydetails,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }    
          console.log("created wishlist ", { id: res.insertId, ...agencydetails });
        // console.log(res)
         result(null, { id: res.insertId, ...agencydetails });
       });*/
        
   
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