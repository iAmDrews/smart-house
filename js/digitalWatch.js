import { Device } from "./device";

export class DigitalWatch extends Device {
  constructor(name) {
    super(name);
    this._colors = ["White", "Green", "Red"];
    this._currentColor = null;
    this._brightness = 0;
    this._clock = null;
  }

  on() {
    super.on();
    this._clockStart();
  }

  off() {
    super.off();
    this._clockStop();
  }

  changeColor(value) {
    if (this._state === true && this._colors.includes(value)) {
      this._currentColor = value;
    } else {
      console.error("Wrong color or device is disabled");
    }
  }

  get color() {
    return this._currentColor;
  }

  increaseBrightness() {
    if (this._state === true && this._brightness < 10) {
      this._brightness++;
    }
  }

  decreaseBrightness() {
    if (this._state === true && this._brightness > 0) {
      this._brightness--;
    }
  }

  get brightness() {
    return this._brightness;
  }

  _setUpClock() {
    const dateStr = String(new Date());
    const regExp = /(\w{3}\s){2}\d{2}\s\d{4}\s(\d{2}:){2}\d{2}/;
    const currentDate = dateStr.match(regExp)[0];
    document.getElementById("root").innerText = `Date&Time: ${currentDate}`;
  }

  _clockStart() {
    this._clock = setInterval(this._setUpClock, 1000);
  }

  _clockStop() {
    clearInterval(this._clock);
    this._clock = null;
    document.getElementById("root").innerText = "";
  }
}
