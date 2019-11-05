import DigitalWatch from "./digitalWatch";
import Multicooker from "./Multicooker";

const digitalWatch = new DigitalWatch("samsung");
const multiCooker = new Multicooker("samsung");

digitalWatch.on();
console.log(digitalWatch.name);
digitalWatch.name = "clock1";
digitalWatch.changeColor("");
console.log(digitalWatch.name);
multiCooker.on();
digitalWatch.timer("02:14", 5);
