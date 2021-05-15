var admin=require('../model/admin-model')

exports.insertadmin=(req,res)=>{
    var adtab=new admin({
        adminusername:req.body.adminusername,
        admin_password:req.body.admin_password
    })

    admin.insert(adtab,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}

exports.admin_update=(req,res)=>{
    admin.update(req.params.id,new admin(req.body),(err,data)=>{
    //    console.log(data)
        if(err){
            console.log(err)
            res.send(err)
        }
        
        console.log("update",data)
        res.send(data)
    
    })
}


exports.admin_login=(req,res)=>{
    admin.findById(req.params.admin_id,(err,data)=>{
    //    console.log(data)
        if(err){
            console.log(err)
            res.send(err)
        }
        
        console.log("update",data)
        res.send(data)
    
    })
}

