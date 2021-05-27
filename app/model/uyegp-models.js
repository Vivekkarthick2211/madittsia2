const sql = require("./db.js"); 
// const {v4 : uuidv4} = require('uuid')
// const userId = uuidv4()
var uyegp=function(txt){
    this.user_id = txt.user_id
    this.name_of_entrepreneur=txt.name_of_entrepreneur;
    this.socialcategory=txt.socialcategory;
    this.gender=txt.gender;
    this.name_of_enterprise=txt.name_of_enterprise;
    this.typeoforganisation=txt.typeoforganisation;
    this.address=txt.address;
    this.mailid=txt.mailid;
    this.aadharcard=txt.aadharcard;
    this.pancard=txt.pancard;
    this.passport_size_photo=txt.passport_size_photo;
    this.community_certificate=txt.community_certificate;
    this.education_qualification=txt.education_qualification;
    this.project_report=txt.project_report;
    this.valid_quotation_with_gst=txt.valid_quotation_with_gst;
    this.ex_serviceman=txt.ex_serviceman;
    this.differently_abled=txt.differently_abled;
    this.transgender_certificate=txt.transgender_certificate;
}

uyegp.inserting_uyegp=(reg_uygep,result)=>{
    // console.log(user_id)
    sql.query(`insert into uyegp_register set ?`,reg_uygep,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
        var read_mode=false;
        sql.query(`insert into notification_tab(user_id,mail,message,read_mode) values('1','${reg_uygep['mailid']}','${reg_uygep['mailid']} joined on UYEGP',${read_mode})`,(err,res)=>{
            if(err){
                console.log(err)
                result(null,err)
            }
            // result(null,res)
        })
    })
}


module.exports=uyegp;