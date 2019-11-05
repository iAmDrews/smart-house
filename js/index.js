import DigitalWatch from "./digitalWatch";
import Multicooker from "./Multicooker";

const digitalWatch = new DigitalWatch("samsung");
const multiCooker = new Multicooker("samsung");

digitalWatch.on();
console.log(digitalWatch.name);
digitalWatch.name = "clock2";
digitalWatch.changeColor("");
console.log(digitalWatch.name);
multiCooker.on();
digitalWatch.timer("20:05", false);
