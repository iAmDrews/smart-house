class Device {
  constructor(name) {
    this.__name = name;
    this.__state = false;
    this.__userTime = null;
    this.__currentTime = null;
  }

  set name(str) {
    const regExp = /^\w{4,10}/i;
    this.__name = this.__isValidStr(regExp, str, "inccorect name");
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

  set timer(str) {
    const regExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
    this.__userTime = this.__isValidStr(regExp, str, "incorrect format of time use -> hh:mm");
    this.__currentTime = this.__takeCurrentTime();
    setTimeout(() => console.log("WAKE UP, TIME TO WORK HARD"), this.__timeConverter(this.__currentTime, this.__userTime));
  }

  __takeCurrentTime() {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const result = `${hours}:${minutes}`;
    return result;
  }

  __timeConverter(currentTime, userTime) {
    let currentTimeArray = currentTime.split(":");
    let userTimeArray = userTime.split(":");
    let currentMilliseconds = (currentTimeArray[0] * 60 * 60 * 1000) + (currentTimeArray[1] * 60 * 1000);
    let userMilliseconds = (userTimeArray[0] * 60 * 60 * 1000) + (userTimeArray[1] * 60  * 1000);
    return Math.abs(userMilliseconds - currentMilliseconds);
  }

  __isValidStr(regularExp, str, reason) {
    const result = str.match(regularExp);
    let findValue;
    if (result !== null) {
      findValue = result[0];
      return findValue;
    } else console.error(reason);
  }
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
