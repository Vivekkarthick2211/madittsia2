const sql = require("./db.js");

// constructor
const Madittsia = function(registerdetails) {
    //this.id = registerdetails.first_name,
    this.user_id=registerdetails.user_id
    this.first_name = registerdetails.first_name,
    this.last_name = registerdetails.last_name,
    this.dateofbirth = registerdetails.dateofbirth,
    this.gender = registerdetails.gender,
    this.business_type = registerdetails.business_type, 
    this.qualification = registerdetails.qualification,
    // this.annual_income=registerdetails.annual_income,
    this.social_category=registerdetails.social_category,
    this.aadharcard=registerdetails.aadharcard,
    this.pancard=registerdetails.pancard,
    this.phone_no= registerdetails.phone_no,
    this.alternative_phone_no=registerdetails.alternative_phone_no,
    this.email = registerdetails.email,
    this.current_address= registerdetails.current_address,
    this.business_address= registerdetails.business_address,
    this.pincode = registerdetails.pincode,
    this.password= registerdetails.password['encryptedData'],
    this.fcm_token = registerdetails.fcm_token
}




Madittsia.create = (registerdetails, result) => {
            sql.query("INSERT INTO user_register SET ?", registerdetails, (err, res) => {
                       if (err) {
                           console.log("error: ", err);
                          result(err, null);
                           return;
                        }
                         console.log("created wishlist ", { id: res.insertId, ...registerdetails });
                       // console.log(res)
                        result(null, { id: res.insertId, ...registerdetails });
                      });
            // result(null ,{ id: res.insertId, ...wishlistdetails }); 
             //
           //  result({ kind: "not_found" }, null);
          //*//
         // result({ kind: "not_found" }, null);
/*  }) */
};

//jsjdjdaj

Madittsia.getAlll = (result) => {
  sql.query("SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription,password FROM user_register", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    //console.log(res[0]['username'])
    console.log("customers: ", res);
    result(null, res);
    
  });
};

Madittsia.find_email=(result) =>{
  sql.query(`select email from user_register`,(err,res)=>{
    if(err){
      result(null,err)
    }
    result(null,res)

  })
}
Madittsia.check_mail=(mail,result)=>{
  sql.query(`select email from user_register where email='${mail}'`,(err,res)=>{
    if(err){
      console.log(err)
      result(null,result)
    }
  })
}

Madittsia.findById = (email, result) => {

 sql.query(`SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription FROM user_register where email='${email}' or first_name='${email}'`, (err, res) => {
  
   if (err) {
     console.log("error: ", err);
     console.log(err.code,err.sqlMessage)
     result(err, null);
     return;
   }
//jeeeevan
   if (res.length) {
     console.log("found customer: ", res);
     result(null,res);
     console.log(res)
     //jeevan
     return;
   }
  result({ kind: "not_found" }, null);
 });
}; 

const Madittsia_update = function(register) {
  this.first_name = register.fname,
  this.last_name = register.lname,
  this.phone_no= register.phone,
  this.gender = register.gender,

  this.Address= register.address,
  this.qualification = register.qualification,
  this.business_type = register.business_type
}
Madittsia_update.update_profile=(email,upd_prof,result)=>{
  console.log('update',upd_prof)
  sql.query(`update user_register set ? where email='${email}';`,upd_prof,(err,res)=>{
    if(err){
      console.log(err)
      result(null,err)
    }
    result(null,{id:res.email,...upd_prof})
  })

}



Madittsia.filter_data=(filter,result)=>{
  sql.query(`select dateofbirth from user_register`,(err,respond)=>{
    if(err){
      console.log(err)
      result(null,err)
    }
    var data=respond
    ages=[]
   var year=new Date().getFullYear()-filter
   console.log("kiruba",year)
    for(let i=0;i<data.length;i++){
      // for(let j=0;j<;j++){
        var split=data[i]['dateofbirth'].split('-')
      ages.push([data[i]['dateofbirth'],split[0]])
    }
    year1=[]
    for(let a=0;a<ages.length;a++){
      if(ages[a][1]==year){
        year1.push(ages[a][0])
        console.log("asdfsdfdsfsadf",year1) 
      }
    }
    if(year1==0){
      console.log('filters')
      year1=filter
    }
    // SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription FROM user_register where dateofbirth IN (?) OR gender='${filter} OR 'business_type='${filter}' OR (dateofbirth IN (?) AND gender='${filter}') OR (gender='${filter}' AND 'business_type='${filter}') OR (dateofbirth IN (?) AND 'business_type='${filter}') OR (dateofbirth IN (?) AND gender='${filter}' AND 'business_type='${filter}')
    console.log(year1)
  sql.query(`SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription FROM user_register where dateofbirth IN (?) OR gender='${filter} OR 'business_type='${filter}' `,[year1],(err, res) => {
     if (err) { 
       console.log("error: ", err);
       console.log(err.code,err.sqlMessage)
       result(err, null);
       return;
     }
     console.log("jeevan",res)
     result(null,res)
   });
  })
}


Madittsia.filter_type = (filter1,filter2,result) => {
  console.log(filter1,filter2)
  var test=filter2-filter1
  sql.query(`SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription FROM user_register limit ${test} offset ${filter1}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      console.log(err.code,err.sqlMessage)
      result(err, null);
      return;
    }
    
    if (res.length) {
      console.log("found customer: ", res);
      result(null,res);
      console.log(res.length)
      //jeevan
      return;
    }
   result({ kind: "not_found" }, null);
  });
 }; 

 Madittsia.filter_data_and=(age = null ,gender =null ,business=null,result)=>{

  sql.query(`select dateofbirth from user_register`,(err,respond)=>{
    if(err){
      console.log(err)
      result(null,err)
    }
    var data=respond
    ages=[]
   var year=new Date().getFullYear()-age
   console.log("kiruba",year)
    for(let i=0;i<data.length;i++){
        var split=data[i]['dateofbirth'].split('-')
      ages.push([data[i]['dateofbirth'],split[0]])
    }
    year1=[]
    for(let a=0;a<ages.length;a++){
      if(ages[a][1]==year){
        year1.push(ages[a][0])
        console.log("asdfsdfdsfsadf",year1) 
      }
    }
    if(year1==0){
      console.log('filters')
      year1=age
    }
    console.log(gender,business)
      if(gender != 't' && year1 != 't' && business != 't'){
      console.log("vivek jeevan")
    sql.query(`SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode,subscription FROM user_register where gender='${gender}' AND dateofbirth IN (?) AND business_type='${business}' `,[year1],(err, res) => {
      if (err) { 
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      console.log("jeevan",res)
      result(null,res)
    });
   }
   else if(year1 == 't' && gender != 't' && business != 't'){
    console.log("vivekk")
    sql.query(`select * from user_register where gender='${gender}' AND business_type='${business}' `,(err, res) => {
     if (err) { 
       console.log("error: ", err);
       console.log(err.code,err.sqlMessage)
       result(err, null);
       return;
     }
     console.log("jeevan",res)
     result(null,res)
   });
   }else if(business == 't' && gender != 't' && year1 != 't'){
    console.log("vivekk")
    sql.query(`select * from user_register where gender='${gender}' AND dateofbirth IN (?)`,[year1],(err, res) => {
     if (err) { 
       console.log("error: ", err);
       console.log(err.code,err.sqlMessage)
       result(err, null);
       return;
     }

     console.log("jeevan",res)
     result(null,res)
   });
   }else if(gender == 't' && business != 't'   && year1 != 't'){
    sql.query(`select * from user_register where business_type='${business}' AND dateofbirth IN (?) `,[year1],(err, res) => {
      if (err) { 
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      console.log("jeevan",res)
      result(null,res)
    });
   }else if(business == 't' && year1 == 't' && gender != 't'){
    sql.query(`select * from user_register where gender='${gender}'`,(err, res) => {
      if (err) { 
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      console.log("jeevan",res)
      result(null,res)
    });
   }else if(year1 != 't' && business == 't' &&  gender == 't'){
    sql.query(`select * from user_register where dateofbirth IN (?)`,[year1],(err, res) => {
      if (err) { 
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      console.log("jeevan",res)
      result(null,res)
    });
   }
   else if(year1 == 't' && business != 't' &&  gender == 't'){
    sql.query(`select * from user_register where business_type='${business}'`,(err, res) => {
      if (err) { 
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      console.log("jeevan",res)
      result(null,res)
    });
   }else{
     result(null,"poda dubakoor")
   }
})
 }


 

module.exports =Madittsia;
// module.exports=Madittsia_update;

