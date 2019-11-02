class DigitalWatch {
  constructor(name) {
    this.__name = name;
    this.__state = false;
    this.__colors = ["White", "Green", "Red"];
    this.__currentColor = null;
    this.__brightness = 0;
    this.__clock = null;
  }

  set name(value) {
    const regExp = /^\w{4,10}/i;
    const result = value.match(regExp);
    if (result !== null) {
      this.__name = result[0];
    } else throw new Error("incorrect name");
  }

  get name() {
    return this.__name;
  }

  on() {
    this.__state = true;
    this.__clockStart();
  }

  off() {
    this.__state = false;
    this.__clockStop();
  }

  get state() {
    return this.__state;
  }

  changeColor(value) {
    if (this.__colors.includes(value)) {
      this.__currentColor = value;
    } else {
      console.error("Wrong type of data or wrong color");
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
    console.log(`Date&Time: ${currentDate}`);
  }

  __clockStart() {
    this.__clock = setInterval(this.__setUpClock, 1000);
  }

  __clockStop() {
    clearInterval(this.__clock);
    this.__clock = null;
  }
}

const digitalWatch = new DigitalWatch("samsung");

digitalWatch.increaseBrightness();
digitalWatch.increaseBrightness();
digitalWatch.increaseBrightness();
digitalWatch.brightness;
