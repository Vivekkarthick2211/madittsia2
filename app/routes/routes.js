
// module.exports = router;

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
    const subbusiness=require('../controller/business-sub-controller')
    const imageupload=require('../controller/image-upload-controller')
    const gem_register=require('../controller/gem-controller')
    const experts=require("../controller/expert-controller")
    const agency=require("../controller/agency-controller")
    // Create a new Customer
    const fssai_register=require('../controller/fssai-controller')
    const uyegp=require('../controller/uyegp-contoller')
    const gmp=require('../controller/gmp-controller')
    const needs=require('../controller/needs-controller')
    const pmegp=require('../controller/pmegp-controller')

    const update_register=require('../controller/update_register-controller')

    const update_otp=require('../controller/upd-otp-controller')
const qualifications=require('../controller/qualification-controller')
const serv=require('../controller/service_for_app-controller')

    //app_users
    app.post("/register",madittsia_register.register); 
    app.get("/registeredpeople", madittsia_register.register_people);
    app.get("/registeredpeople/:email", madittsia_register.serviceOne);
    app.get('/reg_mail',madittsia_register.findmail) 
    app.put("/upd_prof/:email",update_register.update_prof)
    app.get('/filterreg_data/:filter',madittsia_register.filterdatas)
    app.get('/pagenate/:filter1/:filter2',madittsia_register.findgb)
    app.get('/filtering_datas/:age/:gender/:business',madittsia_register.find3_datas_filtering)
    app.put('/upd_otp/:mail',update_otp.register_opt)
    app.get('/get_otp/:mail',update_otp.get_otp)
    app.put('/upd_pass/:email',update_otp.update_password)

    //app_user_login
    app.get("/login/:customerId",madittsia_login.findOne);
    app.post("/primary_info",Madittsia_primary.primary); 

    //menu with roles
    app.get("/menu", Menu.findall);
    app.get("/mainservices", Menu.findalll);
    app.get("/menu/:menuId", Menu.findOne);
    app.get("/roles",roles_get.findall);
    app.get("/roles/:rolesname", roles_get.findOne);
      
    //services
    app.get("/services/all",services.servicesget)
    app.get("/services",Menu.findalll);
    app.get("/services/:servicename", services.serviceOne);
    app.get("/serv/:serv/:user_id/:studies",serv.services_qualification);

    //subservice
    app.post('/ins_services',subservices.insert_subserv)
    app.get("/services1/:service", services.service);
    app.get("/services/:servicename/:subs", subservices.serviceOne);
    app.post('/inserting_doc/:main_name',subservices.insert_serv_doc)
    app.put('/update_service/:id',subservices.updating_serv)
    app.put('/upd_doc/:doc_name/:id',subservices.updating_documnet)
    app.post('/regdoc',reg_docments.regdoc)

    //business_types
    app.get("/business", business.findall);
    app.get("/business/:businesstype", business.serviceOne);
    app.get("/business/:email", business.serviceOne);

    //mentors
   app.post("/mentorreg",mentorregister.mentorregister);
   app.get("/mentors",mentorregister.registered_people);
   app.get("/mentors/:email", mentorregister.findOne);

    //event
    app.post("/eventsreg",eventsregister.eventsregister);
    app.get("/events",eventsregister.getallevents);
    app.get("/eventss/:email",eventsregister.eventregister_bymentor);
   app.get("/events/:email",eventsregister.eventregister_peopledisabled);

    //expert
   app.post("/expert",experts.expertregister);
   app.get("/expertsall",experts.expertregister_people);
   app.get("/expertiselist",experts.expertlist);

    //agency
    app.post("/agencyreg",agency.agencyregister);
    app.get("/agencymembers",agency.getagencymembers);
    app.put("/updagency/:id",agency.update_agency);
    app.get("/subbusiness/:maincategory", subbusiness.serviceOne);

    //reg_subservices
   app.get('/get_udy',uday_register.getudyamregister)
   app.post('/reg_uday',uday_register.udyamregister)

   app.post('/gem_insert',gem_register.gemregister)
   app.get('/gem_peoples',gem_register.findall)

   app.post('/fssai_insert',fssai_register.insert_fssai)
   app.get('/fssai_peoples',fssai_register.findall_fssai)

   app.post('/uyegp_insert',uyegp.postuyegp)

   app.post('/gmp_insert',gmp.postgmp)

   app.post('/needs_insert',needs.postneeds)

   app.post('/pmegp_insert',pmegp.postpmegp)


   //adminLogin
   app.put('/admin/:id',admin_register.admin_update)
   app.get('/admin_login/:admin_id',admin_register.admin_login)

   //notifications
   app.get('/get_notify',notify.getnotify)
   app.post('/post_notify',notify.notify)
   app.put('/update_notify/:id',notify.updnotify)

   //upload_images
   app.post('/img/:email/:sub',imageupload.images)
  

   //qualifications
   app.get('/qualifications',qualifications.quali)
   app.get('/qualify/:studies',qualifications.qualicatio_for_studies)
   app.get('/qualifications/:grade',qualifications.qualification_grade)
   app.get('/qualifications/:grade/:dge',qualifications.qualification_dge)
   app.get('/sub',qualifications.quasub)
  };
     