import DemoBar from "./modules/demo-bar.js";
import disableScreen from "./modules/disableScreen.js";
import gameLauncher from "./modules/game-launcher.js";
import gameReview from "./modules/gameReview.js";
import screensSizer from "./modules/screens-sizer";

screensSizer();
gameLauncher();
new DemoBar();
gameReview().init();
// disableScreen({ title: "test", message: "test"})

window.disableScreen = disableScreen;