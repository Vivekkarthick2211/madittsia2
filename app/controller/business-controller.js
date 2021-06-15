const Business = require("../model/business-model");
var admin = require('firebase-admin');
var serviceAccount = require("../adminnotification-f6a2c-firebase-adminsdk-byusv-859f0a5732.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });
  /* app.post('/token',(req,res)=>{
    registrationTokens=[];
   var registrationTokens=req.body.token;
  console.log(registrationTokens)
  currentTeam=req.body.topic;
    console.log(currentTeam)
    admin.messaging().subscribeToTopic(registrationTokens, '/topics/'+currentTeam)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log("connected");
      console.log('Successfully subscribed to topic:',response);
      // return admin.messaging().sendToTopic("/topics/"+topic,payload,options)
      // return admin.messaging().sendToTopic("/topics/{topic}");
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });
  
    //  JSON.stringify(topic1)
    //  res.send(topic1)
    }) */
  
  
exports.findall = (req, res) => {
    Business.getAll((err, data) => {
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

  exports.serviceOne = (req, res) => {
    Business.findById(req.params.businesstype,req.params.email, (err, data) => {
      var businesstype=req.params.businesstype;
      //var businesstype=req.params.email
      if (err) {
        // var resco=208
        if (err.kind === "not_found") {
           console.log(err)
          res.status(404).send({
             status:404,
             error:'Not found'
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.businesstype +res.statusCode
          });
        }
      } 
     else return res.send({
     status:200,
      messsage:'retrive successfully',
      service:businesstype,
       data:data, 
     
   }); 
   console.log(businesstype)
  // console.log(email)
   var token=[]
   var token1=[]
  //  console.log(data.length)
   for(var i=0;i<data.length;i++){
    console.log("kirubaa",data[i]['fcm_token'])
  
    token.push(data[i]['fcm_token'])
    token1.push(token)
      console.log(token)
      console.log("token1",token1) 
   admin.messaging().subscribeToTopic(token 
 
  ,'/topics/'+businesstype)
   .then(function(response) {
    console.log("jeeva",token)
     console.log("connected");
     console.log('Successfully subscribed to topic:',response);
   
   }).catch(function(error) {
    console.log('Error subscribing to topic:', error);
  });
/*  */
   }

    })
}