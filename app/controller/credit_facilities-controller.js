var credit=require('../model/credit_facilities-model')


exports.credit_eligiblity=(req,res)=>{
    credit.get_creditEligiblity((err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status:400,
                msg:err
            })
        }
        res.send({
                status
            })
    })
}