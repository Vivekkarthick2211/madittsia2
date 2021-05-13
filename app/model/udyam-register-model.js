const sql = require("./db.js");
var udyam_reg=function(udy){
    this.aadhar_no=udy.aadhar_no;
    this.name_of_entrepreneur=udy.name_of_entrepreneur;
    this.socialcategory=udy.socialcategory;
    this.gender=udy.gender;
    this.name_of_enterprise=udy.name_of_enterprise;
    this.typeoforganisation=udy.typeoforganisation;
    this.address=udy.address;
    this.mailid=udy.mailid;
    this.pancard=udy.pancard;
    this.dateofcommencement=udy.dateofcommencement;
    this.bankdetails=udy.bankdetails
    this.accountnumber=udy.accountnumber;
    this.ifsc_code=udy.ifsc_code;
    this.majoractivity=udy.majoractivity;
    this.gst_number=udy.gst_number;
    this.itreturn=udy.itreturn;
    this.turnover=udy.turnover
}

udyam_reg.insert_udy=(udayReg,result)=>{
    sql.query(`insert into udyam_register set ?`,udayReg,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,{id:res.insertId,...res})
    })

    sql.query(`insert into notification_tab(userid,message) values('${udayReg['mailid']}','${udayReg['mailid']} joined on udyam')`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        // result(null,res)
    })
}
module.exports=udyam_reg;