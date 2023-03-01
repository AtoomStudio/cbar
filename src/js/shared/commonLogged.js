
import accordionDeposit from "../modules/accordionDeposit";
import popUpSaldo from "../modules/popUpBalance";
import Session, { bindLogoutButtons } from "../modules/session";
import updateBalance from "../modules/updateBalance";

popUpSaldo();
bindLogoutButtons();

// Start updateBalance functionality and update it every 60 seconds
updateBalance();

window.Session = Session;
window.accordionDeposit = accordionDeposit;