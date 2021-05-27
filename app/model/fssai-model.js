const sql = require("./db.js"); 

var fssaireg=function(fr){
    this.user_id=fr.user_id
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
        var read_mode=false;
        sql.query(`insert into notification_tab(user_id,mail,message,read_mode) values('1','${insfssai['mailid']}','${insfssai['mailid']} joined on FSSI',${read_mode})`,(err,res)=>{
            if(err){
                console.log(err)
                result(null,err)
            }
            // result(null,res)
        })
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