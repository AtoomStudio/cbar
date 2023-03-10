// import dataLayer from "./modules/dataLayer";
import stepManager from "./modules/register/stepManager";
import validateRegister from "./modules/register/validateRegister";
import showPassword from "./modules/showPassword";

// dataLayer.push({
//     "event":"register",
//     "status":"Inicio", 
//     "error": ""
// });

stepManager();
validateRegister().start();
showPassword('#pwdField', '#re_password');