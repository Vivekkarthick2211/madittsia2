const sql = require("./db.js");

var gmp=function(txt){
    this.user_id = txt.user_id
    this.name_of_entrepreneur=txt.name_of_entrepreneur;
    this.socialcategory=txt.socialcategory;
    this.gender=txt.gender;
    this.name_of_enterprise=txt.name_of_enterprise;
    this.typeoforganisation=txt.typeoforganisation;
    this.address=txt.address;
    this.mailid=txt.mailid;
    this.aadharcard=txt.aadharcard;
}
gmp.insert=(insgmp,result)=>{
    sql.query(`insert into gmp_registered set?`,insgmp,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,{...insgmp})

        var read_mode=false;
        sql.query(`insert into notification_tab(user_id,mail,message,read_mode) values('1','${insgmp['mailid']}','${insgmp['mailid']} joined on GMP',${read_mode})`,(err,res)=>{
            if(err){
                console.log(err)
                result(null,err)
            }
            // result(null,res)
        })
    })
}

module.exports=gmp;



