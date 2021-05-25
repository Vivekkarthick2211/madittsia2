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
    })
}

module.exports=gmp;



