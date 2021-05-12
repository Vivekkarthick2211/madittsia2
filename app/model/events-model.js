const sql = require("./db.js");

// constructor
const EventsMadittsia = function(eventregisterdetails) {
    this.eventname = eventregisterdetails.event_name ,
    this.eventplace =eventregisterdetails.event_place ,
    this.Address=eventregisterdetails.Address , 
    this.fromdate=eventregisterdetails.fromdate,
    this.todate=  eventregisterdetails.todate,
    this.starttime= eventregisterdetails.starttime,
    this.endtime=eventregisterdetails.endtime,
    this.conductedby= eventregisterdetails.conducted_by ,  
    this.organisername= eventregisterdetails.organisername ,
    this.phone_no=  eventregisterdetails.phone_no ,
    this.image_url=eventregisterdetails.image_url


}
EventsMadittsia.create = (eventregisterdetails, result) => {
            sql.query("INSERT INTO events SET ?", eventregisterdetails, (err, res) => {
                       if (err) {
                           console.log("error: ", err);
                          result(err, null);
                           return;
                        }
                         console.log("created wishlist ", { id: res.insertId, ...eventregisterdetails });
                       // console.log(res)
                        result(null, { id: res.insertId, ...eventregisterdetails });
                      });
            // result(null ,{ id: res.insertId, ...wishlistdetails }); 
             //
           //  result({ kind: "not_found" }, null);
          //*//
         // result({ kind: "not_found" }, null);
/*  }) */
};
EventsMadittsia.getAlleventsbymentor = (email,result) => {
  sql.query(`SELECT eventname,eventplace, Address,fromdate,todate,starttime,endtime,conductedby,organisername,phone_no,image_url FROM events where conductedby ='${email}';`, (err, res) => {
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
//jsjdjdaj

EventsMadittsia.getAllwithdisabled = (email,result) => {
  sql.query(`SELECT eventname,eventplace, Address,fromdate,todate,starttime,endtime,conductedby,organisername,phone_no,image_url FROM events where todate >= (select CURRENT_DATE()) and conductedby ='${email}';`, (err, res) => {
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
/* 
EventsMadittsia.findById = (email, result) => {

 sql.query(`SELECT  FROM user_register where email='${email}'`, (err, res) => {

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
};  */
module.exports=EventsMadittsia;