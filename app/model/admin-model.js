var sql=require('../model/db')
var admin=function(admin){
    this.admin_username=admin.adminusername;
    this.admin_password=admin.admin_password;

}


admin.insert=(newadmin,result)=>{
    console.log(newadmin)
    sql.query(`insert into adminlogin set ?`,newadmin,(err,res)=>{
        if(err){
            console.log(err)
            result(err,null)
        }
        else{
            result(res,null)
        }

    })
}
admin.update=(id,admin,result)=>{
    console.log(admin)
    sql.query("update adminlogin set admin_password=?, date=CURRENT_TIMESTAMP where id=?",[admin.admin_password,id],(err,res)=>{
        console.log("sql")
        if(err){

            console.log("err")
            result(null,err)
            return;
        }

        if(res.affectedRows==0){
            
            result({kind:'notfound'},null);
            return;
        }
        console.log("hiiiiiiiiiiii")
        // console.log(upddate)
        
        console.log("updated customer: ", { id: id, ...admin });

        console.log(res)
        result(null, { id: id, ...admin });
    })
    // respond.send("update")
    // console.log(res)
    
}

admin.findById = (admin_id, result) => {
    console.log(admin_id);
    sql.query(`SELECT admin_username,admin_password FROM adminlogin WHERE username = '${admin_id}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found customer: ", res[0]);
        // var iv="a4b8c6d2e0f5g7f5";
        //  var password=res[0]['password']
        result(null,res);
        return;
      }
      // not found Customer with the id
      //result(err, null);
     result({ kind: "not_found" }, null);
    });
  };


module.exports=admin;
