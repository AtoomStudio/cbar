
import popUpSaldo from "../modules/popUpBalance";
import Session, { bindLogoutButtons } from "../modules/session";

popUpSaldo();
bindLogoutButtons();

window.Session = Session;
