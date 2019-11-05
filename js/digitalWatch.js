import Device from "./device";

export default class DigitalWatch extends Device {
  constructor(name) {
    super(name);
    this.__colors = ["White", "Green", "Red"];
    this.__currentColor = null;
    this.__brightness = 0;
    this.__clock = null;
  }

  on() {
    super.on();
    this.__clockStart();
  }

  off() {
    super.off();
    this.__clockStop();
  }

  changeColor(value) {
    if (this.__state === true && this.__colors.includes(value)) {
      this.__currentColor = value;
    } else {
      console.error("Wrong color or device is disabled");
    }
  }

  get color() {
    return this.__currentColor;
  }

  increaseBrightness() {
    if (this.__state === true && this.__brightness < 10) {
      this.__brightness++;
    }
  }

  decreaseBrightness() {
    if (this.__state === true && this.__brightness > 0) {
      this.__brightness--;
    }
  }

  get brightness() {
    return this.__brightness;
  }

  __setUpClock() {
    const dateStr = String(new Date());
    const regExp = /(\w{3}\s){2}\d{2}\s\d{4}\s(\d{2}:){2}\d{2}/;
    const currentDate = dateStr.match(regExp)[0];
    document.getElementById("root").innerText = `Date&Time: ${currentDate}`;
  }

  __clockStart() {
    this.__clock = setInterval(this.__setUpClock, 1000);
  }

  __clockStop() {
    clearInterval(this.__clock);
    this.__clock = null;
    document.getElementById("root").innerText = "";
  }
}
