
import accordionDeposit from "../modules/accordionDeposit";
import eventDispatch from "../modules/eventDispatch";
import popUpSaldo from "../modules/popUpBalance";
import Session, { bindLogoutButtons } from "../modules/session";
import updateBalance from "../modules/updateBalance";

popUpSaldo();
bindLogoutButtons();

// Start updateBalance functionality and update it every 60 seconds
updateBalance();
setTimeout(() => {
    eventDispatch('updateBalance');
}, 60000);

window.Session = Session;
window.accordionDeposit = accordionDeposit;