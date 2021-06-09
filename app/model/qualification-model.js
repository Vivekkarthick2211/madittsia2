const sql = require("./db.js");

exports.qualify=(result)=>{
    sql.query(`select qualifications,level from qualifications `,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res)
        result(null,res)
    })
}

exports.qualification=(studies,result)=>{
    sql.query(`select qualifications,level from qualifications where qualifications='${studies}'`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(res[0]['level'])
        
        result(null,res)

        sql.query(`select * from maditssia_sub_service where level=${res[0]['level']}`,(err,res)=>{
            if(err){
                console.log(err)
                result(null,err)
            }
            console.log(res)
            // result(null,res)
        })
    })
}

var ji
// exports.qualification_grd=(grade,result)=>{
//     sql.query(`select degrees,course_id from qualification_courses where qualify_id=(select qualify_id from qualifications where qualifications='${grade}')`,(err,res)=>{
    
//         if(err){
//             console.log(err)
//             result(null,err)
//         }
//         console.log(res.length)
//         temp=[]
//         result(null,res)
//         for(let i=0;i<res.length;i++){
//             console.log(res[i]['course_id'])
        //  sql.query(`select * from qualification_subjects where course_id='${res[0]['course_id']}'`,(err,rs)=>{
        // if(err){
        //     console.log(err)
        //     result(null,err)
        // }

//         for(let j=0;j<rs.length;j++){
//         temp.push(res[i]['degrees']+'-'+rs[j]['subjects'])
//         }
//       console.log(temp)

//         ji=temp
    // })
      
//     console.log("hi",ji)
// }  

    // result(null,ji)    
// })
// }

exports.qualification_grd=(grade,result)=>{
    sql.query(`select degrees,course_id from qualification_courses where qualify_id=(select qualify_id from qualifications where qualifications='${grade}')`,(err,res)=>{
       
            if(err){
                console.log(err)
                result(null,err)
             }
            console.log(res.length)
            result(null,res)
            })


}
exports.qualication_sub=(deg,result)=>{
    sql.query(`select * from qualification_department where course_id=(select course_id from qualification_courses where degrees='${deg}')`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        // console.log()
        
        result(null,res)
    })
}

exports.qualication_subjects=(result)=>{
    sql.query(`select * from qualification_subjects`,(err,res)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        // console.log()
        
        result(null,res)
    })
}

