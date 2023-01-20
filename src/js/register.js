import stepManager from "./modules/register/stepManager";
import validateRegister from "./modules/register/validateRegister";
import showPassword from "./modules/showPassword";

stepManager();
validateRegister().start();
showPassword('#pwdField', '#re_password');