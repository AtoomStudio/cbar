import dataModify from "./modules/dataModify.js";
import dataBlur from "./modules/dataBlur.js";
import showPassword from "./modules/showPassword.js";

dataModify();
dataBlur();
showPassword('#pwdField');
showPassword('#re_password', '#newPassword' );
