const sql = require("./db.js"); 

var pmegp=function(txt){
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
    this.project_report=txt.project_report;
    this.valid_quotation_with_gst=txt.valid_quotation_with_gst;
    this.ex_serviceman=txt.ex_serviceman;
    this.differentlyabled=txt.differentlyabled
    this.transgendersshouldapplywithvalidcertificate=txt.Transgendersshouldapplywithvalidcertificate
}

pmegp.insert_pmeg=(ins,result)=>{
    sql.query(`insert into pmegp_register set ?`,ins,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
    
    })
}

module.exports=pmegp;