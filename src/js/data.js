import dataModify from "./modules/dataModify.js";
import dataBlur from "./modules/dataBlur.js";
import showPassword from "./modules/showPassword.js";

dataModify();
dataBlur();
showPassword('#password-current');
showPassword('#password-new-confirm', '#password-new' );
