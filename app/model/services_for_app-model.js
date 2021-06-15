const sql = require("./db.js");


var messages
var msg
var message1
exports.findById_qualification = (servicename,user_id,studies,result) => {
    console.log(servicename)
    console.log(studies)
    sql.query(`update maditssia_sub_service set app_service = 0`,(err,tot)=>{
      if(err){
        console.log(err)
        result(null,err)
      }
      console.log(tot)
    })
    sql.query(`Select service_id from  maditssia_sub_service where service_id=(SELECT service_id FROM maditssia_main_service WHERE service_name= '${servicename}')`, (err, res) => {

      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res);
        // result(null,res);
        console.log("sdfdsfdsfdsk=kiruba",res)
        console.log(res[0])
        
      }
      
    //  result({ kind: "not_found" }, null);
    
    sql.query(`select dateofbirth,qualification from user_register where user_id='${user_id}'`,(err,resu)=>{
        if(err){
            console.log(err)
            result(null,err)
        }
        console.log(resu[0]['qualification'])

        var data=resu[0]['dateofbirth']
        var tot=JSON.parse(data[0]+data[1]+data[2]+data[3])
        console.log("sadfdsfsdf",tot)
        var yr=new Date().getFullYear()
        console.log(yr)
        var get_age=yr-tot;
        console.log(get_age)


    
    sql.query(`select qualify_id,qualifications,level from qualifications where qualifications='${studies}' `,(err,rus)=>{
      if(err){
          console.log(err)
          result(null,err)
      }
      console.log("asdfdsfdsfdsf",rus[0]['level'])
      console.log(get_age)

      if(1==rus[0]['level']){
        messages="you are under graduate"
        if(35<=get_age){
          messages="your age is above 35"
          if(get_age<=18){
            messages="your age is below 18"
            
      }
    }
  }else{
    messages="you are eligible"
    if(35<=get_age){
      messages="your age is above 35"
    }
    if(get_age<18){
      messages="your age is below 18"
    }
  }
  console.log(messages) 
      if(rus[0]['level']==1){
      sql.query(`update maditssia_sub_service set app_service = 1 where level<=${rus[0]['level']} and service_id = ${res[0]['service_id']} and start_age <= ${get_age} and end_age >= ${get_age}`,(err,upd)=>{
        
        if(err){
          console.log(err)
          result(null,err)
        }
        console.log(rus[0]['level'])

      
      sql.query(`select name,level,start_age,end_age,subservice_img,app_service from maditssia_sub_service where service_id = ${res[0]['service_id']}`,(err,resp)=>{
        if(err){
            console.log(err)
            result(null,err)
        }

        console.log("sdfdsfdf",resp)
        console.log(messages)
        var datas={"jee":"jee","message":messages,"resp":resp}
        console.log(datas)
        result(null,datas)
      })
    })
    }

      if(rus[0]['level']==5){
        sql.query(`update maditssia_sub_service set app_service = 1 where level<=${rus[0]['level']} and service_id = ${res[0]['service_id']} and start_age <= ${get_age} and end_age >= ${get_age}`,(err,upd)=>{
          if(err){
            console.log(err)
            result(null,err)
          }
          console.log(upd)

      sql.query(`select name,level,start_age,end_age,subservice_img,app_service from maditssia_sub_service where service_id = ${res[0]['service_id']}`,(err,resp)=>{
          if(err){
              console.log(err)
              result(null,err)
          }
          console.log("sdfdsfdf",resp)
          var datas={"jee":"jee","message":messages,"resp":resp}
        console.log(datas)
        result(null,datas)
          // result(null,resp)
      })
    })
    }
    })
    
  })
});
}; 

