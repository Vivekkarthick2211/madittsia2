module.exports = app => {
    const madittsia_register= require("../controller/register-controller-madttisia.js");
    const roles_get=require("../controller/roles-controller-madittsia.js");
    const services = require("../controller/service-controller.js");
    const Menu=require("../controller/Menu-controller.js");
    const subservices = require("../controller/subservice-controller.js");
    const business = require("../controller/business-controller.js");
    // Create a new Customer
    app.post("/register",madittsia_register.register);
//    app.post("/service", services.createservice);
    // Retrieve all Customers
     app.get("/registeredpeople", madittsia_register.register_people);
    // app.get("/service", services.findAll);
     app.get("/menu", Menu.findall);
  app.get("/menuui", Menu.findalll);
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
    app.get("/business/:businesstype/:email", business.serviceOne);
    // Delete a Customer with customerId
   // app.delete("/wishlist/:productid&:userid", explora.delete);
  
    // Create a new Customer
   // app.delete("/customers", customers.deleteAll);
   

  };
  