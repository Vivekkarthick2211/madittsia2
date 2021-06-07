var sql=require('./db')

exports.credits_uyyegp=(id,result)=>{
    sql.query(`select dateofbirth,qualification from user_register where user_id='${id}' `,(err,res)=>{
        if(res['dateofbirth']){
            var tot=new Date()-res['dateofbirth']
            console.log(tot)
        }
        
        // if(res['qualification']){
        //     var qualification=res['qualification']

        // }

    })
}
exports.get_creditEligiblity=(result)=>{
    sql.query(`select * from creditfacilitiy_eligiblities`,(err,res)=>{
        if(err){
            result(null,err)
        }
        
        result(null,res)
    })
}