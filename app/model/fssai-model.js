const sql = require("./db.js"); 

var fssaireg=function(fr){
    this.name_of_entrepreneur=fr.name_of_entrepreneur;
    this.socialcategory=fr.socialcategory;
    this.gender=fr.gender;
    this.name_of_enterprise=fr.name_of_enterprise;
    this.typeoforganisation=fr.typeoforganisation;
    this.address=fr.address;
    this.mailid=fr.mailid;
    this.aadhar_no=fr.aadhar_no;
    this.pancard=fr.pancard;
    this.udyam=fr.udyam;
}

fssaireg.insert_fassi=(insfssai,result)=>{
    sql.query(`insert into fssai_register set ?`,insfssai,(err,res)=>{
        if(err){
            result(null,err)
        }
        result(null,{...insfssai})
    })
}
fssaireg.getAll = result => {
    sql.query("SELECT * FROM fssai_register", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  }
module.exports=fssaireg