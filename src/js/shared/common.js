import ZenDesk from "../modules/zenDesk";
import marginHeader from "../modules/marginHeader";
import menuHeaderMobile from "../modules/menuHeaderMobile";
import Mpu from "../modules/mpu";
import userMenuMobile from "../modules/userMenuMobile";
import jsonpFetch from "../modules/jsonpFetch";
import Alert from "../modules/alert";
import itemListEvents from "../modules/itemListEvents";
import menuEvents from "../modules/menuEvents";

menuHeaderMobile();
userMenuMobile();

Mpu().mpuDataTriggers();
ZenDesk().start();
itemListEvents();
menuEvents();

window.Mpu = Mpu;
window.mpu = Mpu().mpu;
window.closeMpu = Mpu().closeMpu;
window.jsonpFetch = jsonpFetch;
window.Alert = Alert;

window.addEventListener("load", () => {
    marginHeader();
});