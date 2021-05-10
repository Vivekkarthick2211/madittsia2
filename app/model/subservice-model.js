const sql = require("./db.js");
const subservices=function(ins){
  this.mainservice=ins.mainservice
  this.description=ins.description,
  this.name=ins.name,
  this.document=ins.document,
  this.subs_name_document=ins.subs_name_document
  // this.service_id=ins.service_id
}

//maditssia_main_service WHERE service_name= 

  subservices.findById = (subs, result) => {
    sql.query(`SELECT * FROM ${subs}`, (err, res) => {

      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res);
        result(null,res);
        console.log(res)
        console.log(res[0])
        return;
      }
     result({ kind: "not_found" }, null);
    });

  };

  subservices.insert_services_tables=(main_name,insert_services,result)=>{
    console.log(insert_services['document'])
    console.log(insert_services['document'].length)
    console.log("kiiii",insert_services['document'][1])
   for (var i=0;i<insert_services['document'].length;i++){
    sql.query(`insert into ${main_name}(document) values('${insert_services['document'][i]['document']}')`,(err,res)=>{
      console.log(insert_services)
      if(err){
        console.log(err)
        result(err)

      }
      console.log({id:res.insertedID,...insert_services})
      result(null,{id:res.insertedID,...insert_services})
    })
  }
  
 } 



  subservices.insert=(inserting,result)=>{
    sql.query(`select service_id from maditssia_main_service where service_name='${inserting["mainservice"]}'`,(err,resu)=>{
      if(err){
       // console.log(res)
        console.log(err)
        
      }
     
        console.log(resu)
        // console.log(resu[0]['service_id'])
        // result(resu,null)
    

    sql.query(`insert into maditssia_sub_service(description,name,service_id)  values('${inserting['description']}','${inserting['name']}',${resu[0]['service_id']})`,(err,res)=>{
      if (err) { 
        console.log("error: ", err);
        console.log(err)
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found customer: ", res);
        result(res);

        return;
      }
      console.log({id:res.insertedID,...inserting})
      console.log(inserting['name'])

      result(null,{id:res.insertedID,...inserting})
        // console.log(res[0]['name'])
        // result(res)
        // result({...res}, null);
    })
  })
  sql.query(`create table if not exists ${inserting['name']}(id int primary key auto_increment,document varchar(350))`,(err,res)=>{
    if(err){
      console.log("created err",err)
      result(null,err)

    }
    var table=[]
    console.log(`table created ${inserting['name']}`)
    table.push(`${inserting['name']}`)
    // result(res)
    

  // sql.query(`insert into ${inserting['name']}(document) values('${inserting['document']}')`,(err,res)=>{
  //   if(err){
  //     console.log(err)
  //     result(null,err)
      
  //   }
  //   console.log({id:res.insertedID, ...inserting})
  // })


   })
}


subservices.update=(id,updserv,result)=>{

sql.query(`select service_id from maditssia_main_service where service_name='${updserv["mainservice"]}'`,(err,resu)=>{


  sql.query(`select service_id from maditssia_main_service where service_name='${updserv["mainservice"]}'`,(err,resu)=>{



    if(err){
      console.log(err)
      
      // result(null,err) 
    }
    console.log("selected service_id",resu)
    console.log(resu[0]['service_id'])
  })

})
}


/*     sql.query(`update maditssia_sub_service set description=${updserv['description']} where id=${id};`,(err,res)=>{

 
} */


subservices.update=(id,updserv,result)=>{
  sql.query(`select service_id from maditssia_main_service where service_name='${updserv["mainservice"]}'`,(err,resu)=>{
    if(err){
      console.log(err)
      
      // result(null,err)

    }
    console.log("selected service_id",resu)
    console.log(resu[0]['service_id'])


    sql.query(`update maditssia_sub_service set service_id=${resu[0]['service_id']} where id=${id};`,(err,res)=>{

      if(err){
        console.log("update err",err)
        result(null,err)

      }
      console.log("updated",res)
      result(null,{id:id.insertedID,...res})
    })



   })
 }





  



  

  module.exports=subservices;