const sql = require("./db.js");

// constructor
const Madittsia = function(registerdetails) {
    //this.id = registerdetails.first_name,
    this.first_name = registerdetails.first_name,
    this.last_name = registerdetails.last_name,
    this.email = registerdetails.email,
    this.password= registerdetails.password,
    this.age = registerdetails.age,
    this.gender = registerdetails.gender,
    this.phone_no= registerdetails.phone_no,
    this.landline_no= registerdetails.landline_no,
    this.qualification = registerdetails.qualification,
    this.Address= registerdetails.Address,
    this.landmark = registerdetails.landmark,
    this.city = registerdetails.city,
    this.state = registerdetails.state,
    this.aadhar_no = registerdetails.aadhar_no,
    this.business_type = registerdetails.business_type,
    this.company_name = registerdetails.company_name,
    this.service_category= registerdetails.service_category,
    this.service_type= registerdetails.service_type,
    this.fcm_token = registerdetails.fcm_token
}
Madittsia.create = (registerdetails, result) => {
            sql.query("INSERT INTO user_primary_info SET ?", registerdetails, (err, res) => {
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

Madittsia.getAlll = result => {
  sql.query("SELECT * FROM user_primary_info", (err, res) => {
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
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};
*/
/* Madittsia.remove = (id, idx,result) => {
  sql.query(`DELETE FROM wishlist WHERE product_id = '${id}' and user_id='${idx}'`,  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
}; */
/*
Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
}; */

module.exports =Madittsia;

