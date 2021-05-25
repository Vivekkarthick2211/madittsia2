const sql = require("./db.js");

var needs=function(txt){
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
    this.differentlyabled=txt.differentlyabled
    this.transgendersshouldapplywithvalidcertificate=txt.Transgendersshouldapplywithvalidcertificate
    this.gst_certificate=txt.gst_certificate;
}

needs.inserting=(reg_needs,result)=>{
    // console.log(user_id)
    sql.query(`insert into needs_registered set ?`,reg_needs,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
    })
}


module.exports=needs