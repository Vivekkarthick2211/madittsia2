
const sql = require("./db.js");

// constructor
const MentorMadittsia = function(mentorregisterdetails) {
    //this.id = mentorregisterdetails.first_name,
    this.user_id=mentorregisterdetails.user_id,
    this.fname = mentorregisterdetails.first_name,
    this.lname = mentorregisterdetails.last_name,
    this.email = mentorregisterdetails.email,
    this.ccode= mentorregisterdetails.ccode,   
    this.phone= mentorregisterdetails.phone,
    this.location= mentorregisterdetails.location,   
    this.sectors= mentorregisterdetails.sectors,
    this.genre = mentorregisterdetails.genre,
    this.current_job= mentorregisterdetails.current_job,
    this.current_emp = mentorregisterdetails.current_emp,
    this.interest_mentor = mentorregisterdetails.interest_mentor,
    this.listof_interest= mentorregisterdetails.listof_interest,
    this.prof_skills = mentorregisterdetails.prof_skills,
    this.interested_maditssia = mentorregisterdetails.interested_maditssia 
 /*    this.company_name = mentorregisterdetails.company_name,
    this.service_category= mentorregisterdetails.service_category,
    this.service_type= mentorregisterdetails.service_type,  
    this.fcm_token = mentorregisterdetails.fcm_token*/
}
MentorMadittsia.create = (mentorregisterdetails, result) => {
            sql.query("INSERT INTO mentors SET ?", mentorregisterdetails, (err, res) => {
                       if (err) {
                           console.log("error: ", err);
                          result(err, null);
                           return;
                        }
                         console.log("created wishlist ", { id: res.insertId, ...mentorregisterdetails });
                       // console.log(res)
                        result(null, { id: res.insertId, ...mentorregisterdetails });
                      //   sql.query(`insert into notification_tab(user_id,mail,message,read_mode) values('1','${mentorregisterdetails['mailid']}','${mentorregisterdetails['mailid']} joined on NEEDS',${read_mode})`,(err,res)=>{
                      //     if(err){
                      //         console.log(err)
                      //         result(null,err)
                      //     }
                      //     // result(null,res)
                      // })
                      });
            // result(null ,{ id: res.insertId, ...wishlistdetails }); 
             //
           //  result({ kind: "not_found" }, null);
          //*//
         // result({ kind: "not_found" }, null);
/*  }) */
};

//jsjdjdaj

MentorMadittsia.getAll = result => {
  sql.query("SELECT * FROM mentors", (err, res) => {
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

MentorMadittsia.findById = (email, result) => {
  sql.query(`SELECT * FROM mentors WHERE email= '${email}'`, (err, res) => {
    if (err) {
      console.log("error:", err);
      console.log(err.code,err.sqlMessage)
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null,res[0] );
      return;
    }
   result({ kind: "not_found" }, null);
  });
}; 

module.exports=MentorMadittsia;