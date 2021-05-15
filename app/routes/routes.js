module.exports = app => {
    const madittsia_register= require("../controller/register-controller-madttisia.js");
    const madittsia_login= require("../controller/user-login-controller");
    const Madittsia_primary= require("../controller/primary-info-controller.js");
    const roles_get=require("../controller/roles-controller-madittsia.js");
    const services = require("../controller/service-controller.js");
    const Menu=require("../controller/Menu-controller.js");
    const subservices = require("../controller/subservice-controller.js");
    const business = require("../controller/business-controller.js");
    const mentorregister=require("../controller/mentor-controller.js");
    const eventsregister=require("../controller/events-controller.js");
    const example=require("../controller/example")
    const notify=require("../controller/notification_controller")
    const reg_docments=require('../controller/user_doc_reg.controller')
    const uday_register=require('../controller/udyam-register-controller')
    const admin_register=require('../controller/admin-controller')
    // Create a new Customer
    app.post("/register",madittsia_register.register); 
    app.get("/registeredpeople", madittsia_register.register_people);
    app.get("/registeredpeople/:email", madittsia_register.serviceOne);
    app.get('/reg_mail',madittsia_register.findmail) 
//    app.post("/service", services.createservice);
   app.get("/login/:customerId",madittsia_login.findOne);
/////////
    app.post("/primary_info",Madittsia_primary.primary); 
    
    // app.get("/service", services.findAll);
    app.get("/menu", Menu.findall);
    app.get("/mainservices", Menu.findalll);
    // Retrieve a single Customer with customerId
    app.get("/menu/:menuId", Menu.findOne);

    app.get("/roles",roles_get.findall);
    app.get("/roles/:rolesname", roles_get.findOne);
      
    app.get("/services/all",services.servicesget)
    app.get("/services",Menu.findalll);
    app.get("/services/:servicename", services.serviceOne);
//subservice
    app.get("/services1/:service", services.service);
    app.get("/services/:servicename/:subs", subservices.serviceOne);
    // Update a Customer with customerId
    /*app.put("/customers/:customerId", customers.update); */
    app.get("/business", business.findall);
    app.get("/business/:businesstype", business.serviceOne);
    app.get("/business/:email", business.serviceOne);
    // Delete a Customer with customerId
    //HI VIVEK
   // app.delete("/wishlist/:productid&:userid", explora.delete);
   app.post("/mentorreg",mentorregister.mentorregister);
   app.get("/mentors",mentorregister.registered_people);
   app.get("/mentors/:email", mentorregister.findOne);
    // Create a new Customer
    //event
    app.post("/eventsreg",eventsregister.eventsregister);
    // app.get("/events",eventsregister.getallevents);
    // app.get("/eventss/:email",eventsregister.eventregister_bymentor);
//    app.get("/events/:email",eventsregister.eventregister_peopledisabled);
  /*  app.get("/example/:subs",example.serviceOne);    Not Needed its just for work*/
   // app.delete("/customers", customers.deleteAll);
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
     