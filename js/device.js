export default class Device {
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

  timer(str, toggler) {
    const regExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
    this.__userTime = this.__isValidStr(regExp, str, "incorrect format of time use -> hh:mm");
    this.__currentTime = this.__takeCurrentTime();

    if (toggler === true) {
      setTimeout(() => console.log("Time to cook"), this.__timeConverter(this.__currentTime, this.__userTime));
    } else if(toggler === false) {
      setTimeout(() => console.log("Wake up, time to work hard!"), this.__timeConverter(this.__currentTime, this.__userTime));
    } else {
      console.error("Pls, put boolean data");
    }
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
    let currentMilliseconds =
      currentTimeArray[0] * 60 * 60 * 1000 + currentTimeArray[1] * 60 * 1000;
    let userMilliseconds =
      userTimeArray[0] * 60 * 60 * 1000 + userTimeArray[1] * 60 * 1000;
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
