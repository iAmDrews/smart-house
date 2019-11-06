import { DigitalWatch } from "./digitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./smartHouse";

const digitalWatch1 = new DigitalWatch("samsung");
const digitalWatch3 = new DigitalWatch("samsung");
const digitalWatch2 = new DigitalWatch("panasonic");
const multiCooker1 = new Multicooker("redmond");
const multiCooker2 = new Multicooker("polaris");


const sh = new SmartHouse("Smart-House");

sh.addDevice(digitalWatch1);
sh.addDevice(digitalWatch3);
sh.addDevice(digitalWatch2);
sh.addDevice(multiCooker1);
sh.addDevice(multiCooker2);

sh.deleteDevice("samsung");
sh.everythingOn();
sh.everythingOff();

sh.getDeviceByName("redmond").on();
sh.getDeviceByName("redmond").setUpTaskWithTimer("16:23");
sh.getDeviceByName("redmond").nextTask();
console.log(sh.getDeviceByName("redmond").task);
console.log(sh.allDevices);
