module.exports = app => {
    const madittsia_register= require("../controller/register-controller-madttisia.js");
    const madittsia_login= require("../controller/user-login-controller");
    const Madittsia_primary= require("../controller/primary-info-controller.js");
    const roles_get=require("../controller/roles-controller-madittsia.js");
    const services = require("../controller/service-controller.js");
    const Menu=require("../controller/Menu-controller.js");
    const subservices = require("../controller/subservice-controller.js");
    const business = require("../controller/business-controller.js");
    const subbusiness = require("../controller/business-sub-controller.js");
    const mentorregister=require("../controller/mentor-controller.js");
    const eventsregister=require("../controller/events-controller.js");
    const example=require("../controller/example")
    const notify=require("../controller/notification_controller")
    const reg_docments=require('../controller/user_doc_reg.controller')
    const uday_register=require('../controller/udyam-register-controller')
    const admin_register=require('../controller/admin-controller')
    // Create a new Customer
    app.post("/register",madittsia_register.register); //for registering people
    app.get("/registeredpeople", madittsia_register.register_people); //getting registered people
    app.get("/registeredpeople/:email", madittsia_register.serviceOne); //getting particular user 
    app.get('/reg_mail',madittsia_register.findmail) 
//    app.post("/service", services.createservice);
   app.get("/login/:customerId",madittsia_login.findOne); //login with email
/////////
    app.post("/primary_info",Madittsia_primary.primary); // for registration of services
    
    
    app.get("/menu", Menu.findall); //menu admin panel 
    app.get("/mainservices", Menu.findalll); //list out main services
    
    app.get("/menu/:menuId", Menu.findOne); //getting menu for rolesplay

    app.get("/roles",roles_get.findall); //all roles(admin,councellor,mentor)
    app.get("/roles/:rolesname", roles_get.findOne); //getting particular roles
      
    app.get("/services/all",services.servicesget) //listing all subservices
    app.get("/services",Menu.findalll); //listing all main services
    app.get("/services/:servicename", services.serviceOne); //getting mainservice with subservice

    app.get("/services1/:service", services.service);//getting subservice with mainservice
    app.get("/services/:servicename/:subs", subservices.serviceOne);//getting details for gem udyam etc
    
    /*app.put("/customers/:customerId", customers.update); */
    app.get("/business", business.findall);  //getting registerd services info
    app.get("/business/:businesstype", business.serviceOne);  //getting register services category(food&beverages,gem)
    app.get("/business/:email", business.serviceOne);//getting register services wih particular user(nive@gmail.com)
    app.get("/subbusiness/:maincategory", subbusiness.serviceOne);
    //HI VIVEK
   // app.delete("/wishlist/:productid&:userid", explora.delete);
   app.post("/mentorreg",mentorregister.mentorregister); //for mentor register
   app.get("/mentors",mentorregister.registered_people); //mentor registered details
   app.get("/mentors/:email", mentorregister.findOne); //mentor register details by particular user
    // Create a new Customer
    //event
    app.post("/eventsreg",eventsregister.eventsregister); //for events register
    app.get("/events",eventsregister.getallevents); //gett all events 
    app.get("/eventss/:email",eventsregister.eventregister_bymentor); //getting all registered events by particular mentor
   app.get("/events/:email",eventsregister.eventregister_peopledisabled);  //getting only active registered events by particular mentor
  /*  app.get("/example/:subs",example.serviceOne);    Not Needed its just for work*/
 

   //////  JEEVAN ////////////////////
   app.post('/ins_services',subservices.insert_subserv)
  // app.put('/update_service/:id',subservices.updating_serv)
app.post('/inserting_doc/:main_name',subservices.insert_serv_doc)
   app.put('/update_service/:id',subservices.updating_serv)

   app.put('/upd_doc/:doc_name/:id',subservices.updating_documnet)
   app.post('/regdoc',reg_docments.regdoc)

   app.get('/get_notify',notify.getnotify)
   app.post('/post_notify',notify.notify)
   //// jeeeee
   app.post('/reg_uday',uday_register.udyamregister)
   app.put('/admin/:id',admin_register.admin_update)

   app.get('/admin_login/:admin_id',admin_register.admin_login)
   app.put('/update_notify/:id',notify.updnotify)
  };
     