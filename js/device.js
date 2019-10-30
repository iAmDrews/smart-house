class Device {
  constructor(name) {
    this.__name = name;
    this.__state = false;
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
  }

  off() {
    this.__state = false;
  }

  get state() {
    return this.__state;
  }
  /*set timer(val) {}*/
}

class DigitalWatch extends Device {
  constructor(name) {
    super(name);
    this.__color = ["White", "Green", "Red"];
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
    switch (value) {
      case this.__color[0]:
        this.__currentColor = value;
        break;
      case this.__color[1]:
        this.__currentColor = value;
        break;
      case this.__color[2]:
        this.__currentColor = value;
        break;
      default:
        throw new Error("incorrect color");
    }
  }

  get color() {
    return this.__currentColor;
  }

  increaseBrightness() {
    if (this.__state === true && this.__brightness < 10) this.__brightness++;
  }

  decreaseBrightness() {
    if (this.__state === true && this.__brightness > 0) this.__brightness--;
  }

  get brightness() {
    return this.__brightness;
  }

  __setUpClock() {
    const currentTime = new Date();
    const hours =
      currentTime.getHours() < 10
        ? "0" + currentTime.getHours()
        : currentTime.getHours();
    const minutes =
      currentTime.getMinutes() < 10
        ? "0" + currentTime.getMinutes()
        : currentTime.getMinutes();
    const seconds =
      currentTime.getSeconds() < 10
        ? "0" + currentTime.getSeconds()
        : currentTime.getSeconds();
    const dateStr = String(currentTime);
    const regExp = /(\w{3}\s){2}\d{2}\s\d{4}/;
    const currentDate = dateStr.match(regExp)[0];

    console.log(`Date: ${currentDate}\nTime: ${hours}:${minutes}:${seconds}`);
  }

  __clockStart() {
    this.__clock = setInterval(this.__setUpClock, 1000);
  }

  __clockStop() {
    clearInterval(this.__clock);
    this.__clock = null;
  }
}

class Multicooker extends Device {
  constructor(name) {
    super(name);
    this.__tasklist = ["task1", "task2", "task3", "task4"];
    this.__task = null; //a task for device
    this.__currentTask = 0; //a task that is currently viewed in task list
    this.__temperature = 100;
  }

  tasklist() {
    for (const item of this.__tasklist) {
      console.log(item);
    }
  }

  get task() {
    if (this.__task != null) {
      return this.__task;
    } else {
      return console.log("There's no set task!!");
    }
  }

  setUpTask() {
    this.__task = this.__tasklist[this.__currentTask];
  }

  get currentTask() {
    return this.__tasklist[this.__currentTask];
  }

  nextTask() {
    if (this.__currentTask < this.__tasklist.length - 1)
      return this.__currentTask++;
  }
  previousTask() {
    if (this.__currentTask > this.__tasklist.length - 1)
      return this.__currentTask--;
  }

  get temperature() {
    return this.__temperature;
  }

  increaseTemperature() {
    if (this.__temperature < 100 && this.__temperature > 0)
      this.__temperature++;
  }
  decreaseTemperature() {
    if (this.__temperature < 100 && this.__temperature > 0)
      this.__temperature--;
  }
}

const digitalWatch = new DigitalWatch("xiomi");
const multicooker = new Multicooker("redmond");
digitalWatch.on();
multicooker.on();
