import { DigitalWatch } from "./digitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./smartHouse";

const digitalWatch1 = new DigitalWatch("samsung");
const digitalWatch3 = new DigitalWatch("samsung");
const digitalWatch2 = new DigitalWatch("panasonic");
const multiCooker1 = new Multicooker("redmond");
const multiCooker2 = new Multicooker("polaris");

const sh = new SmartHouse("Smart-House");

window.sh = sh;
window.dw1 = digitalWatch1;
window.dw2 = digitalWatch2;
window.mc1 = multiCooker1;
window.mc2 = multiCooker2;
