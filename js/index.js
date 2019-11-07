import { DigitalWatch } from "./digitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./smartHouse";

const digitalWatch1 = new DigitalWatch("samsung");
const digitalWatch2 = new DigitalWatch("panasonic");
const digitalWatch3 = new DigitalWatch("samsung");
const multiCooker1 = new Multicooker("redmond");
const multiCooker2 = new Multicooker("polaris");
const multiCooker3 = new Multicooker("polaris");

const sh = new SmartHouse("Smart-House");

window.sh = sh;
window.dw1 = digitalWatch1;
window.dw2 = digitalWatch2;
window.dw3 = digitalWatch3;
window.mc1 = multiCooker1;
window.mc2 = multiCooker2;
window.mc3 = multiCooker3;



/*sh.addDevice(multiCooker1);*/
/*sh.getDeviceByName("redmond").nextTask()*/
/*sh.getDeviceByName("redmond").setUpTaskWithTimer("time")*/
/*sg.getAllDevices*/
/*sg.deleteAllDevices*/
/*sg.deleteDevice(name)*/

