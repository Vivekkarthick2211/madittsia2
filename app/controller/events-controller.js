const EventMadittsia = require("../model/events-model.js");
// Create and Save a new Customer
exports.eventsregister= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Customer
  const eventregisterdetails = new EventMadittsia({
    event_name: req.body.eventname ,
    event_place: req.body.eventplace ,
    Address:  req.body.address , 
    fromdate:  req.body.fromdate,
    todate:  req.body.todate,
    starttime:  req.body.starttime,
    endtime:  req.body.endtime,
    conducted_by:  req.body.conducted_by ,  
    organisername:  req.body.organisername ,
    phone_no:  req.body.phone,
     image_url: req.body.imageurl
  });
  // Save Customer in the database
  EventMadittsia.create(eventregisterdetails, (err, data) => {
    //console.log("email")
    if (err)
      res.status(500).send({
        //message:
        //  err.message==
        status:500,
        msg:"duplicate"
          // ||
          // "Some error occurred while creating the Customer."
      });
    else res.send({
      status:200,
      msg:"Okk ",
      data
    });
  });
};
exports.getallevents = (req, res) => {
  EventMadittsia.getAll ((err, data) => {
  if (err)
    res.status(500).send({
      /* message:
        err.message || "Some error occurred while retrieving customers."  */
        status:500,
         msg:"error "
    });
   
  else res.send({
    status:200,
    msg:"Okk ",
    data:data
  });
});
};
exports.eventregister_bymentor = (req, res) => {
  EventMadittsia.getAlleventsbymentor (req.params.email,(err, data) => {
  if (err)
    res.status(500).send({
      status:500,
      msg:"error"
     /*  message:
        err.message || "Some error occurred while retrieving customers."  */
    });
   
  else res.send({
    status:200,
    msg:"Okk ",
    data:data
  });
});
};
// Retrieve all Customers from the database.
 exports.eventregister_peopledisabled = (req, res) => {
    EventMadittsia.getAllwithdisabled (req.params.email,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers." 
      });
     
    else res.send({
      status:200,
      msg:"Okk ",
      data:data
    });
  });
};
