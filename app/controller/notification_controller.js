var notify=require('../model/notification_models')

exports.notify=(req,res)=>{
    var notify_table=new notify({
        userid:req.body.userid,
        message:req.body.message
    })
    notify.insert_notify(notify_table,(err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        res.send(data)
    })
}

exports.getnotify=(req,res)=>{
    notify.find_notify((err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        res.send(data)

    })
}