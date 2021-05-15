const sql = require("./db.js");

var notification=function(list){
    this.userid=list.userid;
    this.message=list.message;

}

notification.find_notify=(result)=>{
    sql.query(`select * from notification_tab`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)

        }
        result(null,res)
    })
}

notification.insert_notify=(getnotify,result)=>{
    sql.query(`insert into notification_tab(userid,message) values('${getnotify['userid']}','${getnotify['userid']}joined on udhyam ')`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
    })
}

module.exports=notification