const { request } = require('gaxios')
var notify=require('../model/notification_models')

exports.notify=(req,res)=>{
    var notify_table=new notify({
        user_id:req.body.user_id,
        mail:req.body.mail,
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
exports.updnotify=(req,res)=>{
    notify.update_notify(req.params.id,(err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status:400,
                msg:errr
            })
        }
        res.send({
            status:200,
            data
        })
    })
}