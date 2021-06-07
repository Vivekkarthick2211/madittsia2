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
  console.log(typeof(filter))
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
      
 
    console.log(year1)
    ji=[]
    for(let y=0;y<year1.length;y++){
    console.log(year1[y])
    var jee
  sql.query(`SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,social_category,aadharcard,pancard,phone_no,alternative_phone_no,email,current_address,business_address,pincode FROM user_register where dateofbirth='${year1[y]}'`, (err, res) => {
     if (err) {
       console.log("error: ", err);
       console.log(err.code,err.sqlMessage)
       result(err, null);
       return;
     }
     ji.push(res)
     jee=ji
     console.log("kart",ji.length) 
   });

    }
    result(null,jee)
    

  })
}

module.exports =Madittsia;
// module.exports=Madittsia_update;

