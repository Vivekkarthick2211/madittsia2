const sql = require("./db.js");

var table=function(lst){
    this.email=lst.email,
    this.adhar_card=lst.adhar_card,
    this.bankpassbook=lst.bankpassbook

}

table.findone=(ins_documents,result)=>{
    sql.query(`insert into gmp_register(email,adhar_card,bankpassbook) values('${ins_documents['email']}','${ins_documents['adhar_card']}','${ins_documents['bankpassbook']}')`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)

    })
}

module.exports=table;

