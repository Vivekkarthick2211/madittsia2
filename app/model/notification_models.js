const sql = require("./db.js");

var notification=function(list){
    this.userid=list.userid;
    this.message=list.message;

}

notification.find_notify=(result)=>{
    sql.query(`select * from notification_tab ORDER BY id DESC;`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)

        }
        result(null,res)
    })
}

notification.insert_notify=(getnotify,result)=>{
    sql.query(`insert into notification_tab(userid,message) values('${getnotify['userid']}','${getnotify['userid']}joined on udhyam')`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        result(null,res)
    })
}

notification.update_notify=(id,result)=>{
    var read_mode=true;
    sql.query(`update notification_tab set read_mode=${read_mode} where id=${id};`,(err,res)=>{
        if(err){
            console.log(err)
            result(null, err)
        }
        if(res.affectedRows==0){
            
            result({kind:'notfound'},null);
            return;
        }
        console.log("hiiiiiiiiiiii")
        console.log("updated customer: ", { id: id, ...read_mode });

        console.log(res) 
        result(null, { id: id,...read_mode });
    })
}



module.exports=notification